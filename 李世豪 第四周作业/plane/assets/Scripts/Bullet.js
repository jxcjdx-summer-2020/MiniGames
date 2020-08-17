//子弹的属性及携带方法
cc.Class({
    extends: cc.Component,

    properties: {
        speed:10,
    },

    bulletMove:function(){ //子弹移动
        this.node.y += this.speed;
    }, 

    destroySelf:function(){ //子弹销毁
        this.node.destroy();
    },
    start:function () {
        this.schedule(this.bulletMove.bind(this),0.02);
        this.schedule(this.destroySelf.bind(this),8);
    },

});
