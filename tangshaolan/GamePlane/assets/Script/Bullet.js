
var com = require('common');
cc.Class({
    extends: cc.Component,

    properties: {
        //子弹移动速度
        bulletMovespeed:0,
        //当子弹与敌机之间的距离小于该值就会被收集
        pickRadius: 0,
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },
    //boss是否被子弹击中
    isHitBoss(bullet) {
        //boss位置
        var posA = this.node.parent.getChildByName("boss").getPosition();
        var dist = bullet.position.sub(posA).mag();
        return dist;
    },
    onPickedBoss(bullet) {
        bullet.parent.getChildByName("boss").destroy();
        cc.log("boss被子弹销毁");
        bullet.destroy();
        cc.log("子弹被销毁");
        cc.find('Canvas').getComponent("Game").gainScore(3);
    },
    //敌机是否被子弹击中
    isHitEnemy(bullet) {
        //敌机的位置
        var posA = this.node.parent.getChildByName("Enemy").getPosition();
        var dist = bullet.position.sub(posA).mag();
        return dist;
    },
    //被收集
    onPickedEnemy(bullet) {
        bullet.parent.getChildByName("Enemy").destroy();
        cc.log("敌机被子弹销毁");
        com.EnemyIsExist = false;
        bullet.destroy();
        // cc.log("子弹被销毁");
        cc.find('Canvas').getComponent("Game").NewAnEnemy();
        com.EnemyIsExist = true;
        cc.find('Canvas').getComponent("Game").gainScore(1);
        
    },
    update (dt) {
        var p = this.node.getPosition();
        this.node.y += this.bulletMovespeed * dt;
        if(p.y > 340) {
            this.node.destroy();
            cc.log("子弹被销毁");
        }
        // 每帧判断和主角之间的距离是否小于收集距离
        if (this.isHitEnemy(this.node) < this.pickRadius) {
            // 调用收集行为
            this.onPickedEnemy(this.node);
            return;
        }
        //判断主角与boss之间是否碰撞
        if(com.bossIsExist){
            if (this.isHitBoss(this.node) < this.pickRadius) {
                    // 调用收集行为
                this.onPickedBoss(this.node);
                com.bossIsExist = false;  
                return;
            }
                
        }
        
    },
});
