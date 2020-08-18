
cc.Class({
    extends: cc.Component,

    properties: {
        //子弹速度
        speed:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.speed=1


        this.parent=this.node.getParent();
        this.game=this.parent.getComponent('Game');
        cc.director.getCollisionManager().enabled=true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    },

    start () {

    },

    update (dt) {
        this.node.y-=this.speed
        if(this.node.y<-400)
            this.node.destroy();
    },
    onCollisionEnter:function(other,self){              
        if(other.node.group == 'player') //检测碰撞组
        {   
            this.node.destroy();
            this.game.tran_Bullet(1); 
        }
    },
});
