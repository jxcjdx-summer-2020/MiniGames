"use strict";
cc._RF.push(module, '8dc73cIfkpOU6XikhRhfcqD', 'StartGame');
// scripts/StartGame.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  btnClick: function btnClick() {
    cc.director.loadScene('game');
  }
});

cc._RF.pop();