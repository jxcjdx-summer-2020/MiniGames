"use strict";
cc._RF.push(module, '2c6aavOVj9ERKIEJN6huiGR', 'boom');
// Scripts/boom.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.scheduleOnce(this.boom.bind(this), 0.1);
  },
  boom: function boom() {
    this.node.destroy();
  } // update (dt) {},

});

cc._RF.pop();