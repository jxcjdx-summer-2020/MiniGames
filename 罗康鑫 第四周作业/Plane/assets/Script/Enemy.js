
cc.Class({
    extends: cc.Component,

    properties: {
        //敌机速度
        speed:0,
        bulletrDuration:0,
        timer:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.bulletrDuration=0.7;
        this.timer=0.8;
        this.speed=3;
        //获取game脚本 
        this.parent=this.node.getParent();
        this.game=this.parent.getComponent('Game');

        cc.director.getCollisionManager().enabled=true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    },

   
    update (dt) {
        this.node.y-=this.speed;
        if(this.node.y<-500)
            this.node.destroy(); 

        if (this.timer > this.bulletrDuration) {
            this.game.spawnEnemyBullet(this.node.x,this.node.y+this.node.height/2-65);
            this.timer=0;
            return;
        }
        this.timer += dt;   
    },    
    onCollisionEnter:function(other,self){              
        if(other.node.group == 'player') //检测碰撞组
        {   
            this.node.destroy(); 
            other.node.destroy();
        }
    },
});
