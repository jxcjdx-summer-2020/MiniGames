// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        planePrefab:{
            default:null,
            type:cc.Prefab
        },
        mplane:{
            default:null,
            type:cc.Node
        },
        bossPrefab:{
            default:null,
            type:cc.Prefab
        },
        bulletPrefab:{
            default:null,
            type:cc.Prefab
        },
        bombPrefab:{
            default:null,
            type:cc.Prefab
        },
        scoreDisplay: {
            default: null,
            type: cc.Label
        }, 
        collisionAudio: {
            default: null,
            type: cc.AudioClip
        },
        bgAudio:{
            default: null,
            type: cc.AudioClip
        },
        highestScoreDisplay:{
            default: null,
            type: cc.Label
        }
    },
    onLoad:function(){
        this.planeGroup = [];
        this.bulletGroup = [];
        this.bossGroup = [];
        this.bossHp = 5;
        this.score = 0;
        this.count = 0;
        if(cc.sys.localStorage.getItem("highestscore")){
            this.highestScore = cc.sys.localStorage.getItem("highestscore");
        }else{
            this.highestScore = 0;
        }
        this.highestScoreDisplay.string = 'Highest: ' + this.highestScore;
        cc.audioEngine.playMusic(this.bgAudio,true);
        this.mplane.getComponent('mplane').game = this;
    },
    start:function(){
            this.createNewPlane();
            this.schedule(this.createNewPlane, 1);
            this.createNewBullet();
            this.schedule(this.createNewBullet,0.2);
    },
    //创建一个boss飞机
    createBoss:function(){
        var boss = cc.instantiate(this.bossPrefab);
        this.node.addChild(boss);
        var posy = Math.random()*this.node.height/4 + this.node.height*3/16;
        boss.setPosition(-this.node.width/2+ boss.width/2,posy);
        var action1 = cc.moveBy(2,cc.v2(this.node.width-boss.width,0));
        var action2 = cc.moveBy(2,cc.v2(-this.node.width+boss.width,0));
        boss.runAction(cc.repeatForever(cc.sequence(action1,action2)));
        this.bossGroup.push(boss);
    },
    //创建新的敌机
    createNewPlane: function(){
        var newPlane = cc.instantiate(this.planePrefab);
        this.node.addChild(newPlane);
        newPlane.setPosition(this.setNewPlanePosition(newPlane));
        this.planeGroup.push(newPlane);
        newPlane.getComponent("eplane").game = this;
    },
    //为敌机设置起始坐标
    setNewPlanePosition:function(newPlane){
        var randX =  Math.random() * (this.node.width-newPlane.width*1.5)- this.node.width/2 ;
        var randY =  this.node.height/2 + 50;
        return cc.v2(randX, randY);
    },
    //创建新的子弹
    createNewBullet:function(){
        var posx = this.mplane.x;
        var posy = this.mplane.y+80;
        var newBullet = cc.instantiate(this.bulletPrefab);
        this.node.addChild(newBullet);
        newBullet.setPosition(cc.v2(posx,posy));
        this.bulletGroup.push(newBullet);
        newBullet.getComponent("bullet").game = this;
    },
    update:function(){
        this.removeInvalidUI();
        this.judgebulletStatus();
        this.judgeBossStatus();
        this.isGameOver();
    },
    //删除无效组件
    removeInvalidUI:function(){
         //将离开游戏超出游戏界面的子弹和敌机删除
         for(let i=0;i<this.planeGroup.length;i++){
            if(this.planeGroup[i].y<=-this.node.height/2 -50){
                this.node.removeChild(this.planeGroup[i]);
                this.planeGroup.splice(i,1);
                i--;
            }
        }
        for(let j=0;j<this.bulletGroup.length;j++){
            if(this.bulletGroup[j].y>=this.node.height/2 + 50){
                this.node.removeChild(this.bulletGroup[j]);
                this.bulletGroup.splice(j,1);
                j--;
            }
        }
    },
    judgebulletStatus:function(){
            //判断子弹是否打到敌机
        for(let i=0;i<this.planeGroup.length;i++){
            var curplane=-1;
            for(let j=0;j<this.bulletGroup.length;j++){
                if(this.bulletGroup[j].y<=this.node.height/2-this.bulletGroup[j].height/4&&this.getDis(this.planeGroup[i].x,this.planeGroup[i].y,this.bulletGroup[j].x,this.bulletGroup[j].y)<=80){
                    this.node.removeChild(this.planeGroup[i]);
                    this.node.removeChild(this.bulletGroup[j]);
                    //更新当前分数和最高分
                    this.score += 1;
                    this.count += 1;
                    if(this.highestScore<=this.score){
                        this.highestScore = this.score;
                    }
                    cc.audioEngine.playEffect(this.collisionAudio, false);
                    this.scoreDisplay.string = 'Score: ' + this.score;
                    this.highestScoreDisplay.string = 'Highest: ' + this.highestScore;
                    //添加爆炸效果
                    var newBomb = cc.instantiate(this.bombPrefab);
                    this.node.addChild(newBomb);
                    newBomb.setPosition(cc.v2(this.planeGroup[i].x,this.planeGroup[i].y));
                    setTimeout(() => {
                        this.node.removeChild(newBomb);
                    }, 100);
                    curplane=i;
                    this.bulletGroup.splice(j,1);
                    j--;
                }
            }
            if(curplane!=-1){
            this.planeGroup.splice(curplane,1);
            i--;
        }
        }
    },
    //boss处理
    judgeBossStatus:function(){
         //分数每加十分出一个boss
         if(this.count == 5){
            this.count = 0;
            this.createBoss();
         }
            //判断boss状态
        for (let i = 0; i < this.bossGroup.length; i++) {
            var curboss=-1;
            for(let j=0;j<this.bulletGroup.length;j++){
                if(this.getDis(this.bossGroup[i].x,this.bossGroup[i].y,this.bulletGroup[j].x,this.bulletGroup[j].y)<=80){
                    cc.audioEngine.playEffect(this.collisionAudio, false);
                    this.node.removeChild(this.bulletGroup[j]);
                    this.bossHp -= 1;
                    if(this.bossHp<=0){
                        this.node.removeChild(this.bossGroup[i]);
                        var newBomb = cc.instantiate(this.bombPrefab);
                        this.node.addChild(newBomb);
                        newBomb.setPosition(cc.v2(this.bossGroup[i].x,this.bossGroup[i].y));
                        setTimeout(() => {
                            this.node.removeChild(newBomb);
                        }, 100);
                        this.bossHp = 3;
                        curboss = i;
                    }
                    this.bulletGroup.splice(j,1);
                    j--;
                }
            }
            if(curboss!=-1){
                this.bossGroup.splice(curboss,1);
                i--;
            }
        }
    },
    //判断两点间距
    getDis:function(x1,y1,x2,y2){
        return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
    },
    //判断飞机是否与敌机相撞
    isGameOver:function(){
        var posx = this.mplane.x;
        var posy = this.mplane.y;
        for (let i = 0; i < this.planeGroup.length; i++) {
            if(this.getDis(posx,posy,this.planeGroup[i].x,this.planeGroup[i].y)<=100){
                this.clearUI();
            }
        }
        for (let i = 0; i < this.bossGroup.length; i++) {
            if(this.getDis(posx,posy,this.bossGroup[i].x,this.bossGroup[i].y)<=100){
                this.clearUI();
            }
        }
    },
    clearUI:function(){
        cc.audioEngine.playEffect(this.collisionAudio, false);
        cc.sys.localStorage.setItem("highestscore",this.highestScore);
        this.node.destroy();
        cc.director.loadScene('gameOver');
    },
    onGamePauseButtonClick:function(){
        if(cc.game.isPaused()){
            cc.game.resume();
        }else{
            cc.game.pause();
        }
    },
});
