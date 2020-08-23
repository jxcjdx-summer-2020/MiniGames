
cc.Class({
    extends: cc.Component,

    properties: {
       
    },
    onLoad:function(){
        cc.director.getCollisionManager().enabled = true;

    },
update:function(){
    this.node.runAction(this.BulletMove())

    if(Math.round(this.node.y)<=(-320+this.bullet_he)){
        
        this.node.destroy();

    }
},
BulletMove:function(){
    this.bullet_he=this.node.height/2;
    var up = cc.moveBy(80, cc.v2(0, -320+this.bullet_he)).easing(cc.easeCubicActionOut());
    return up;
},
onCollisionEnter: function(other,self){
    if(other.node.group=='plane'){
      this.gameOver();
    }
    if(other.node.group=='bullet'){
        this.node.destroy()
    }

   },
gameOver: function () {
    this.game.game.plane.stopAllActions(); //停止 player 节点的跳跃动作
    cc.director.loadScene('StartGame');
},
    
});
