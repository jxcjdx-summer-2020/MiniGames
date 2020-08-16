// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var com = require("common");
cc.Class({
    extends: cc.Component,

    properties: {
        //敌机预制资源
        enemyPrefab: {
            default: null,
            type: cc.Prefab
        },
        //子弹预制资源
        bulletPrefab: {
            default: null,
            type: cc.Prefab
        },
        //Plane
        plane: {
            default: null,
            type: cc.Node
        },
        score: {
            default: 0,
            displayName: "Score (plane)",
            tooltip: "The score of plane"
        },
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        // 敌机产生后消失时间的随机范围
        maxStarDuration: 0,
        minStarDuration: 0,
        //boss敌机
        bossPrefab: {
            default: null,
            type: cc.Prefab,
        },
        
    },
    NewBossEnemy() {
        var newBossEnemy = cc.instantiate(this.bossPrefab);
        this.node.addChild(newBossEnemy);
        newBossEnemy.setPosition(this.getBossEnemyPositon());
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
        newBossEnemy.getComponent("boss").game = this;
    },
    getBossEnemyPositon() {
        var randX = 0;
        var maxY = 200;
        var randY =  Math.random() * maxY;
        var maxX = this.node.width/2 - 100;
        randX = (Math.random() - 0.5) * 2 * maxX;
        cc.log("x = " + randX,"y = " + randY);
        return cc.v2(randX,randY);
    },
    NewAnEnemy() {
        var newEnemy = cc.instantiate(this.enemyPrefab);
        this.node.addChild(newEnemy);
        newEnemy.setPosition(this.getNewEnemyPosition());
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
        newEnemy.getComponent("Enemy").game = this;
    },
    getNewEnemyPosition() {
        var randX = 0;
        var maxY = 150;
        var randY =  (Math.random() - 0.5) * 2 * maxY;
        if(randY > 150){
            randY = randY + Math.random() * 80;
        }
        var maxX = this.node.width/2 - 30;
        randX = (Math.random() - 0.5) * 2 * maxX;
        //cc.log("x = " + randX,"y = " + randY);
        return cc.v2(randX,randY);
    },
    NewBullet(){
        var newBullet = cc.instantiate(this.bulletPrefab);
        this.node.addChild(newBullet);
        newBullet.setPosition(this.getNewBulletPosition());
        newBullet.getComponent("Bullet").game = this;
    },
    getNewBulletPosition() {
        var pos = this.plane.getPosition();
        //cc.log(pos,pos.x,pos.y);
        var x = pos.x;
        var y = pos.y + 100;
        //cc.log("x = " + x,"y = " + y);
        return cc.v2(x,y);
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.score = 0;
        this.NewAnEnemy();
        com.EnemyIsExist = true;
        this.schedule(this.NewBullet.bind(this),0.5); 
        
       
    },
    start () {
        
    },
    gainScore: function(number) {
        this.score += number;
        this.scoreDisplay.string = "Score: " + this.score;
    },
    gameOver: function() {
        cc.director.loadScene("game");
    },
    update (dt) {
        if (this.timer > this.starDuration) {
            this.node.getChildByName("Enemy").destroy();
            com.EnemyIsExist = false;
            // cc.log("超时删除");
            this.NewAnEnemy();
            com.EnemyIsExist = true;
        }
        this.New();
        this.timer += dt;
    },
    New(){
         if(!com.bossIsExist){
            if(this.score != 0 && this.score % 10 ==0) {
                this.NewBossEnemy();
                com.bossIsExist = true;
                
            }
        }
    },
});

