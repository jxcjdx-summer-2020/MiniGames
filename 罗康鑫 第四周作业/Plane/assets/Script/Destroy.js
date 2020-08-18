
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.scheduleOnce(this.Destroy.bind(this),0.1);
    },
    Destroy(){
      this.node.destroy();  
    },

    // update (dt) {},
});
