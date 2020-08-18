
cc.Class({
    extends: cc.Component,

    properties: {
        bulletPrefab: {
            default: null,
            type: cc.Prefab
        },
        player: {
            default: null,
            type: cc.Node
        },
        enemyPrefab:{
            default: null,
            type: cc.Prefab
        },
        enemyBulletPrefab:{
            default: null,
            type: cc.Prefab
        },
        score:{
            default:null,
            type:cc.Label
        },
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        },
        bullet_2Prefab: {
            default: null,
            type: cc.Prefab
        },
        boomPrefab:{
            default: null,
            type: cc.Prefab
        },
        enemy_2Prefab:{
            default: null,
            type: cc.Prefab
        },
        buff:{
            default: null,
            type: cc.Prefab
        }
    },
    onLoad() {
        this.tran=0;
        this.Score=0;
        //敌机生成的时间间隔
        this.bulletrDuration=2;
        //计时
        this.timer=0;
        //获取脚本
        this.player.getComponent('Player').game = this;
        
    },

    start () {
        
    },

    update (dt) {
        //敌机生成
        if (this.timer > this.bulletrDuration) {
            this.spawnNewEnemy();
            this.timer=0;
            return;
        }
        this.timer += dt; 
    },

    //生成子弹
    spawnNewBullet: function(X,Y) {
        switch(this.tran) {
            case 0:
                var newBullet = cc.instantiate(this.bulletPrefab);
                this.node.addChild(newBullet);
                newBullet.setPosition(cc.v2(X,Y));
                break;
            case 1:
                var newBullet = cc.instantiate(this.bullet_2Prefab);
                this.node.addChild(newBullet);
                newBullet.setPosition(cc.v2(X,Y));
                break;
        }
    },

    //随机生成敌机
    spawnNewEnemy: function() {
        if(Math.random()<0.5)
        {
            var newEnemy = cc.instantiate(this.enemy_2Prefab);
            this.node.addChild(newEnemy);
            newEnemy.setPosition(this.getNewEnemyPosition());
        }
        else{
            var newEnemy = cc.instantiate(this.enemyPrefab);
            this.node.addChild(newEnemy);
            newEnemy.setPosition(this.getNewEnemyPosition());
        }   
    },
    getNewEnemyPosition: function () {
        var randX = 0;
        // 根据屏幕宽度，随机得到一个敌机 x 坐标
        var maxX = this.node.width/2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        // 返回敌机坐标
        return cc.v2(randX, 480);
    },

    //敌机子弹生成
    spawnEnemyBullet: function(X,Y) {
        var newEnemyBullet = cc.instantiate(this.enemyBulletPrefab);
        this.node.addChild(newEnemyBullet);
        newEnemyBullet.setPosition(cc.v2(X,Y));
    },

    //分数计算
    addScore:function(){
        cc.audioEngine.playEffect(this.scoreAudio, false);
        this.Score++;
        this.score.string="分数："+this.Score;
    },
    //实例化爆炸效果
    addBoom:function(X,Y){
        var newBoom = cc.instantiate(this.boomPrefab);
        this.node.addChild(newBoom);
        newBoom.setPosition(cc.v2(X,Y));
    },
    //buff实例化
    addBuff:function(X,Y){
        var newBuff = cc.instantiate(this.buff);
        this.node.addChild(newBuff);
        newBuff.setPosition(cc.v2(X,Y));
    },
    tran_Bullet:function(X){
        this.tran=X;
    }
});
