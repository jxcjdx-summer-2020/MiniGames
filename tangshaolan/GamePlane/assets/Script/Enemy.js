
var com = require('common');
cc.Class({
    extends: cc.Component,

    properties: {
        //当主角与敌机之间的距离小于该值，敌机就会被收集
        EnemypickRadius: 0,
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      
    },
    start () {

    },
    update (dt) {
        // 根据 Game 脚本中的计时器更新敌机的透明度
        var opacityRatio = 1 - this.game.timer/this.game.starDuration;
        var minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
        if (this.isHitEnemy(this.node) < this.EnemypickRadius) {
            // 调用收集行为
            this.onPickedEnemy(this.node);
            return;
        }
    },
    //检测主角飞机是否碰到敌机
    isHitEnemy(enemy){
        var planePos = this.node.parent.getChildByName("Plane").getPosition();
        var dist = enemy.position.sub(planePos).mag();
        return dist;
    },
    //回收敌机
    onPickedEnemy(enemy){
        enemy.destroy();
        //cc.log("敌机被主角销毁");
        com.EnemyIsExist = false;
        cc.find('Canvas').getComponent("Game").NewAnEnemy();
        com.EnemyIsExist = true;
    },
});
