// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var b = require("a");
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        myplane: {
            default: null,
            type: cc.Node
        },

        // 这个属性引用了敌机预制资源
        enemyplanePrefab: {
            default: null,
            type: cc.Prefab
        },
        bulletPrefab:{
            default:null,
            type:cc.Prefab
        },

         // score label 的引用
         scoreDisplay: {
            default: null,
            type: cc.Label
        }


    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         // 生成一个新的星星
        this.spawnNewEnemy();
        this.schedule(this.spawnNewBullet.bind(this),0.5);
        this.score = 0;
       
 
     },

     spawnNewEnemy: function() {
        // 使用给定的模板在场景中生成一个新节点
        var newenemy = cc.instantiate(this.enemyplanePrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newenemy);
        // 为星星设置一个随机位置
        newenemy.setPosition(this.getNewEnemyPosition());
    
        newenemy.getComponent('enemyplane').game = this;
  
    },

    getNewEnemyPosition: function () {
        var randX = (Math.random() - 0.5) * 2 * 420;

        var randY =   Math.random() * 250;
      
        return cc.v2(randX, randY);
    },

    spawnNewBullet: function() {
        // 使用给定的模板在场景中生成一个新节点
        var newbullet = cc.instantiate(this.bulletPrefab);
        // 将新增的节点添加到 Canvas 节点下面
        this.node.addChild(newbullet);
        newbullet.setPosition(this.getNewBulletPosition());
        newbullet.getComponent('bullet').game = this;
 

    },

    getNewBulletPosition: function () {
        var pos = this.myplane.getPosition();
        var x=pos.x;
        var y=pos.y+55;
        return cc.v2(x,y)
    
    },


    start () {

    },

     update (dt) {
         if(b.enemypos.sub(this.myplane.position).mag()<80){
             this.gameOver()
         }

     },
     gainScore: function () {
        this.score += 1;
        // 更新 scoreDisplay Label 的文字
        this.scoreDisplay.string = 'Score: ' + this.score;
    },
    gameOver: function () {
        cc.director.loadScene('game');
    }
});
