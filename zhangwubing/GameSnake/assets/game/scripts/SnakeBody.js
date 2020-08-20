const SnakeView = require("SnakeView");

cc.Class({
    extends: SnakeView,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    init(posX, posY, dir, pre) {
        this._super(posX, posY, dir);
        this._pre = pre;
        return this;
    },

    getPreBody() {
        return this._pre;
    },
    
    // update (dt) {},
});
