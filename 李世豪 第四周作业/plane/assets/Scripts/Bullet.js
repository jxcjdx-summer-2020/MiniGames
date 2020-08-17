//子弹的属性及携带方法
cc.Class({
    extends: cc.Component,

    properties: {
        speed:10,
    },

    onCollisionEnter:function(other,self){    //碰撞则销毁物体
        if (other.node.group != 'enemy'){
            return ;
        }
        if(other.node.group == 'enemy') //检测碰撞敌人
        {   
            this.destroySelf();
        }
    },

    bulletMove:function(){ //子弹移动
        this.node.y += this.speed;
    }, 

    destroySelf:function(){ //子弹销毁
        this.node.destroy();
    },
    onLoad:function(){
        //开启碰撞检测
        cc.director.getCollisionManager().enabled=true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    },
    start:function () {
        this.schedule(this.bulletMove.bind(this),0.02);
    },
    update:function(){
        if(this.node.y>this.bul.node.height/2){ //子弹超出上边界就销毁
            this.destroySelf();
        }
    },

});
