
cc.Class({
    extends: cc.Component,

    properties: {
        bosspickRadius: 0,
        //boss的移动速度
        bossMoveSpeed:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var Bpos = this.node.getPosition();
        cc.log(Bpos) 
        cc.log(this.bossMoveSpeed)
        
    },

    start () {

    },

    update (dt) {
        var Bpos =this.node.getPosition();
        if(Bpos.y < 340) {
            Bpos.y += this.bossMoveSpeed *dt;
        }
        if(Bpos.y > 340) {
            Bpos.y = 340;
        }
    },
});
