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
        bulletMoveSpeed:0
    },

    // LIFE-CYCLE CALLBACKS:
   

     onLoad () {
        cc.log(this.node.parent.getChildByName("enemyplane"))
     },

     getPlayerDistance(bullet){
       cc.log("a.enemypos"+b.enemypos);
       var dist = b.enemypos.sub(bullet.position).mag();
       cc.log("bulletpos"+bullet.position)
       cc.log("dist"+dist);
       return dist;

   },

   onPicked: function(bullet) {
       // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
       
       bullet.parent.getChildByName("enemyplane").destroy();
       this.game.spawnNewEnemy();
         // 调用 Game 脚本的得分方法
        this.game.gainScore();
       cc.log("enemyplane, destroy")
       bullet.destroy();  
       
   },

    

   

    start () {

    },

     update (dt) {
         var p=this.node.getPosition();
         
         this.node.y+=this.bulletMoveSpeed*dt

         if(p.y>640){
             this.node.destroy()
         }

      // 每帧判断和主角之间的距离是否小于收集距离
      if (this.getPlayerDistance(this.node)<80) {
         

        cc.log("已经触碰敌机")
        // 调用收集行为
        this.onPicked(this.node);
        
    }
      

     },

});
