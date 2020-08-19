"use strict";
cc._RF.push(module, '388d5MWNutFcqKTAdb0P7hH', 'counter');
// Script/counter.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var countText = null;
cc.Class({
  "extends": cc.Component,
  properties: {
    countText: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    $base.set('count', this.count);
    countText = this.countText;
    countText.string = $base.countNumber;
  },
  count: function count(num) {
    var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '++';

    try {
      var label = countText;
      var countNumber = Number(label.string);
      symbol === '++' ? countNumber = +Number(num) : countNumber -= Number(num);
      $base.countNumber += countNumber;
      label.string = $base.countNumber;
    } catch (error) {
      console.log(error);
    }
  } // start () {
  // },
  // update (dt) {
  // },

});

cc._RF.pop();