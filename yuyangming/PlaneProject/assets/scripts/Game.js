
cc.Class({
    extends: cc.Component,

    properties: {

        // 这个属性引用了enemyplane预制资源
        enemyplanePrefab: {
            default: null,
            type: cc.Prefab
        },

        // 引用buttle预制资源
        buttlePrefab: {
            default: null,
            type: cc.Prefab
        },
        Myplane:{
            default:null,
            type:cc.Node
        },

        //计算得分
        Score: {
            default: null,
            type: cc.Label
        },
        // 背景音效资源
        bgmusicAudio: {
            default: null,
            type: cc.AudioClip
        },
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.score= 0;
        //敌机出现时间间隔
        this.enemyDuration=1.2;
        //子弹射出时间间隔
        this.bulletDuration=0.5;
        this.timer=0;
        this.min=0;
        this.Myplane.getComponent('Myplane').game=this;
        // 播放背景音效
        cc.audioEngine.playEffect(this.bgmusicAudio, true);
        
             
    },

    start () {

    },

    update(dt){
        if(this.timer > this.enemyDuration){
            this.spawnNewEnemyplane();
            this.timer=0;
            return;
        } 
        this.timer+=dt;
    },

    spawnNewEnemyplane: function() {
        // 使用给定的模板在场景中生成一个新节点
        var newEnemyplane = cc.instantiate(this.enemyplanePrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newEnemyplane);
        // 为enemyplane设置一个随机位置
        newEnemyplane.setPosition(this.getNewEnemyplanePosition());
    },

    getNewEnemyplanePosition: function () {
        var randX = 0;
        // 根据屏幕高度，设置敌机 y 坐标
        var randY = this.node.height/2;
        // 根据屏幕宽度，随机得到一个敌机 x 坐标
        var maxX = this.node.width/2 -50;
        randX = (Math.random() - 0.5) * 2 * maxX;
        // 返回敌机坐标
        return cc.v2(randX, randY);
    },
    //生成子弹
    spawnNewBullet:function(X,Y){
        var newBullet = cc.instantiate(this.buttlePrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newBullet);
        // 子弹从Myplane顶部射出
        newBullet.setPosition(X,Y);
        
    },

    //计算得分
    gainScore: function () {
        this.score += 1;
        // 更新 score Label 的文字
        this.Score.string = "Score: " + this.score;
    },


    
});
