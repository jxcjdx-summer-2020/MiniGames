cc.Class({
    extends: cc.Component,

    properties: {
        enemy_skin: {
            default: [],
            type: cc.SpriteFrame,
        },

        player_path: "Canvas/player",

    },

    onLoad: function () {
        this.speed_x = 0;
        this.speed_y = -200;
        this.anim = this.node.getChildByName("anim");
        this.root = cc.find("Canvas");
        this.game_scene = cc.find("Canvas").getComponent("game");
        this.flag = 0;
    },

    onCollisionEnter: function (other, self) {
        
        this.anim.getComponent(cc.Animation).play();
        this.scheduleOnce(function() {
            this.node.removeFromParent();
        }, 0.2);
        this.game_scene.add_score();
    },

    update: function (dt) {
        var sx = this.speed_x * dt;
        var sy = this.speed_y * dt;
        this.node.x += sx;
        this.node.y += sy;
        
        if (this.node.y < -1000) {
            this.node.removeFromParent();
        }
    },
});
