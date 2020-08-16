
//负责子弹和敌机的生成
cc.Class({
    extends: cc.Component,

    properties: {
        createTimer:2,
        bullet:{
            default:null,
            type:cc.Prefab
        },
        enemyplane:{
            default:null,
            type:cc.Prefab
        },
        // 得分音效资源
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        },
        myPlane:cc.Node,
        scoreUI:cc.Label,
    },

    bulletFire:function(){ //生成子弹
        this.newBullet1 = cc.instantiate(this.bullet);
        this.newBullet1.parent=this.node;
        //设置枪口位置
        let planePosX=this.myPlane.x;
        let planePosY=this.myPlane.y+55;
        this.newBullet1.setPosition(cc.v2(planePosX,planePosY));
    },

    EPosition:function(){ //敌机随机坐标
        let randx=0;
        //在屏幕外生成
        let randY = this.node.y+this.node.height/2+10;
        let maxX=this.node.x-74;
        randx=(Math.random()-0.5)*2* maxX;
        return cc.v2(randx, randY);
    },

    createEnemyPlane:function(){  //生成敌机
        let newEnemyPlane = cc.instantiate(this.enemyplane);
        newEnemyPlane.parent=this.node;
        newEnemyPlane.setPosition(this.EPosition());
        //方便其他脚本调用
        newEnemyPlane.getComponent('enemyPlane').dis = this;
    },
    gainScore: function () { //获取分数
        this.score += 1;
        this.scoreUI.string = '分数: ' + this.score;
        // 播放得分音效
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },
    onLoad:function () {
        this.score = 0;
    },

    start:function () {
        //创建敌机和子弹生成定时器
        this.schedule(this.createEnemyPlane.bind(this),this.createTimer);
        this.schedule(this.bulletFire.bind(this), 0.5);
        this.createEnemyPlane();
        this.bulletFire();
    },

    update:function (dt) {
    },
});
