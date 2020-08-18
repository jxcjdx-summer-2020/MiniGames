cc.Class({
    extends: cc.Component,

    properties: {
    },
    onLoad: function () {
        this.speed_x = 0;
        this.speed_y = 400;
        this.audio = this.node.getComponent(cc.AudioSource);
    },

    start: function() {
        
    },
    // 碰撞事件
    onCollisionEnter: function(other, self) {
        this.node.removeFromParent();
        this.audio.play();      
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var sx = this.speed_x * dt;
        var sy = this.speed_y * dt;

        this.node.x += sx;
        this.node.y += sy;
        
        if (this.node.y >= 540 || this.node.x >= 360 || this.node.x <= -360) {
            this.node.removeFromParent();
            return ;
        }
    },
});
