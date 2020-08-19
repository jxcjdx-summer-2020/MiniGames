"use strict";
cc._RF.push(module, '8db4ecxcY5EvZONzFLxnXlp', 'bullet');
// script/bullet.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.speed_x = 0;
    this.speed_y = 400;
    this.audio = this.node.getComponent(cc.AudioSource);
  },
  start: function start() {},
  // 碰撞事件
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.node.removeFromParent();
    this.audio.play();
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    var sx = this.speed_x * dt;
    var sy = this.speed_y * dt;
    this.node.x += sx;
    this.node.y += sy;

    if (this.node.y >= 650 || this.node.x >= 330 || this.node.x <= -330) {
      this.node.removeFromParent();
      return;
    }
  }
});

cc._RF.pop();