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
        bulletPrefab:{
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
        }
    },
    onLoad:function(){
        this.planeGroup = [];
        this.bulletGroup = [];
        this.score = 0;
        cc.audioEngine.playMusic(this.bgAudio,true);
    },
    start:function(){
            this.createNewPlane();
            this.schedule(this.createNewPlane, 1);
            this.createNewBullet();
            this.schedule(this.createNewBullet,0.2);
    },
    //创建新的敌机
    createNewPlane: function(){
        var newPlane = cc.instantiate(this.planePrefab);
        this.node.addChild(newPlane);
        newPlane.setPosition(this.setNewPlanePosition());
        this.planeGroup.push(newPlane);
    },
    //为敌机设置起始坐标
    setNewPlanePosition:function(){
        var randX =  Math.random() * (960-this.mplane.width)- 480 ;
        var randY = 360;
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
    },
    update:function(){
        //将离开游戏超出游戏界面的子弹和敌机删除
        for(let i=0;i<this.planeGroup.length;i++){
            if(this.planeGroup[i].y<=-360){
                this.node.removeChild(this.planeGroup[i]);
                this.planeGroup.splice(i,1);
            }
        }
        for(let j=0;j<this.bulletGroup.length;j++){
            if(this.bulletGroup[j].y>=360){
                this.node.removeChild(this.bulletGroup[j]);
                this.bulletGroup.splice(j,1);
            }
        }
        //判断子弹是否打到敌机
        for(let i=0;i<this.planeGroup.length;i++){
            for(let j=0;j<this.bulletGroup.length;j++){
                if(this.getDis(this.planeGroup[i].x,this.planeGroup[i].y,this.bulletGroup[j].x,this.bulletGroup[j].y)<=80){
                    this.node.removeChild(this.planeGroup[i]);
                    this.node.removeChild(this.bulletGroup[j]);
                    this.score += 1;
                    cc.audioEngine.playEffect(this.collisionAudio, false);
                    this.scoreDisplay.string = 'Score: ' + this.score;
                    this.planeGroup.splice(i,1)
                    this.bulletGroup.splice(j,1)
                    i--,
                    j--;
                }
            }
        }
        //判断飞机是否与敌机相撞
        var posx = this.mplane.x;
        var posy = this.mplane.y;
        for (let i = 0; i < this.planeGroup.length; i++) {
            if(this.getDis(posx,posy,this.planeGroup[i].x,this.planeGroup[i].y)<=100){
                cc.audioEngine.playEffect(this.collisionAudio, false);
                this.node.destroy();
                cc.director.loadScene('startNewGame');
            }
        }
    },
    //判断两点间距
    getDis:function(x1,y1,x2,y2){
        return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
    },
});
