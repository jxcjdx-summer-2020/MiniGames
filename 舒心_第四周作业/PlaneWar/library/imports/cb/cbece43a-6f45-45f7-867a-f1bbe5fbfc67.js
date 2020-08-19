"use strict";
cc._RF.push(module, 'cbeceQ6b0VF94Z68bvl+/xn', 'enemyPlane_1');
// Scripts/enemyPlane_1.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 0,
    bulletrDuration: 0,
    timer: 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.speed = 3;
    this.parent = this.node.getParent();
    this.game = this.parent.getComponent('game');
  },
  update: function update(dt) {
    this.node.y -= this.speed;
    if (this.node.y < -500) this.node.destroy();
  }
});

cc._RF.pop();