
// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html



cc.Class({
    extends: cc.Component,

    properties: {
        collider: cc.BoxCollider
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
      
    },

    update:function(dt){
        this.node.runAction(this.BulletMove())

        if(Math.round(this.node.y)>=(320-this.bullet_he)){
            this.game.newbullet();
            this.node.destroy();

        }
       
        
       


    },
    start:function(){
        
        // cc.director.getCollisionManager().enabledDebugDraw = true;
    

    },
    onCollisionEnter: function (other, self) {
       this.ondestroy()
   

    },
    BulletMove:function(){
        this.bullet_he=this.node.height/2;
        var up = cc.moveBy(80, cc.v2(0, 320-this.bullet_he)).easing(cc.easeCubicActionOut());
        return up;
    },
    getposition:function(){
        var x=this.node.x;
        return x;
    },
    ondestroy:function(){
        this.node.destroy();
    }
    

    // update (dt) {},
});
