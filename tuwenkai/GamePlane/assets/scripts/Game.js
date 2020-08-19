// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        bulletPrefab: {
            default: null,
            type: cc.Prefab
        },
        enemyplanePrefab: {
            default: null,
            type: cc.Prefab
        },
        myplane: {
            default: null,
            type: cc.Node
        },
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        bgAudio: {
            default: null,
            type: cc.AudioClip
        }
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.score = 0;
          // 获取飞机的 x 轴坐标
          this.schedule(function() {
           this.myplaneX = this.myplane.x ;
       }, 0.1);
          // 获取飞机的 y 轴坐标
          this.schedule(function() {
            this.myplaneY = this.myplane.y + this.myplane.height/2;
       }, 0.01);
        // 生成子弹
       this.schedule(function() {
             this.spawnNewBullet();
        }, 0.3);
        this.schedule(function() {
            this.spawnNewEnemyplane();
       }, 0.5);
       cc.director.getCollisionManager().enabled=true;
       cc.audioEngine.playEffect(this.bgAudio, false);   
       
     },
     spawnNewBullet: function() {
        // 使用给定的模板在场景中生成一个新节点
        var newBullet = cc.instantiate(this.bulletPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newBullet);
        // 设置子弹位置
        newBullet.setPosition(this.myplaneX,this.myplaneY);
        var newBullet1 = cc.instantiate(this.bulletPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newBullet1);
        // 设置子弹位置
        newBullet1.setPosition(this.myplaneX,this.myplaneY);
        this.schedule(function() {
        newBullet.y+=6;
       }, 0.015);
       this.schedule(function() {
        newBullet1.y+=6;
        newBullet1.x-=1;
       }, 0.015);
       var newBullet2 = cc.instantiate(this.bulletPrefab);
       // 将新增的节点添加到 Canvas 节点下面
       this.node.addChild(newBullet2);
       // 设置子弹位置
       newBullet2.setPosition(this.myplaneX,this.myplaneY);
      
      this.schedule(function() {
       newBullet2.y+=6;
       newBullet2.x+=1;
      }, 0.015);
    },
    spawnNewEnemyplane: function() {
      
        // 使用给定的模板在场景中生成一个新节点
        var newEnemyplane = cc.instantiate(this.enemyplanePrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newEnemyplane);
        // 设置敌机位置
        newEnemyplane.setPosition(this.getNewEnemyplanePosition());
   
        this.schedule(function() {
        newEnemyplane.y-=3;
        if(newEnemyplane.x>0)
        newEnemyplane.x-=1;
        else
        newEnemyplane.x+=1;
       }, 0.005);
       
       newEnemyplane.getComponent('enemyplane').game = this;
    
    },
    getNewEnemyplanePosition: function () {
        var randX = 0;
  
        var randY = 480;
        // 根据屏幕宽度，随机得到一个 x 坐标
        var maxX = this.node.width/2;
        randX = (Math.random() - 0.5)  *2* maxX;
      
        // 返回坐标
        return cc.v2(randX, randY);
    },
    gainScore: function () {
        this.score += 1;
        // 更新 scoreDisplay Label 的文字
        this.scoreDisplay.string = 'Score: ' + this.score;
    },
    start () {

    },
    update (dt) {
      
     },
});
