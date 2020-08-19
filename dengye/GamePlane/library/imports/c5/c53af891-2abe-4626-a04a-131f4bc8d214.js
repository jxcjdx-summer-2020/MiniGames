"use strict";
cc._RF.push(module, 'c53afiRKr5GJqBKEx9LyNIU', 'enemy_01');
// Script/enemy_01.js

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
cc.Class({
  "extends": cc.Component,
  properties: {
    initHp: {
      "default": 1
    },
    HP: {
      "default": 1
    },
    ySpeed: {
      "default": 3,
      tooltip: '移动到底部需要多少时间'
    }
  },
  // LIFE-CYCLE CALLBACKS:
  hitAnimation: function hitAnimation() {
    var _this = this;

    // 击中执行动画
    var node = this.node;
    var anim = this.getComponent(cc.Animation);
    var name = node.name;
    node.hide = false;

    if (this.HP === 0) {
      var animName = "".concat(name, "_ruin");
      var audioName = "".concat(name, "_down");
      node.stopAllActions();
      $base.count(this.node.grade);
      anim.on('finished', function () {
        // console.log('结束');
        anim.off('finished');
        var object_pool = cc.find('Canvas/object_pool').getComponent('object_pool');
        node.hide = true;
        anim.node.runAction(cc.hide());
        _this.HP = _this.getInitHp(); // console.log(this, 'this.getInitHp()');

        anim.setCurrentTime(0, animName);
        node.ySpeed = _this.ySpeed;
        object_pool.recyclePool({
          name: name,
          node: node
        });
        _this.isHit = false;
      }, anim);
      anim.play(animName);
      $base.audio.play(audioName);
    } else {
      var _animName = "".concat(name, "_hit"); // console.log(animName,this, this.HP, '未灭亡');


      anim.on('finished', function () {
        // console.log('结束');
        anim.off('finished');
        anim.setCurrentTime(0, _animName);
        _this.isHit = false;
      }, anim);
      anim.play(_animName);
    }
  },
  hit: function hit(ruin) {
    this.HP -= ruin;
    if (this.HP < 0) this.HP = 0;
    this.hitAnimation();
    return this.HP;
  },
  getInitHp: function getInitHp() {
    return new Number(this.initHp);
  },
  init: function init() {
    this.node.componentName = 'enemy_01';
    this.node.ySpeed = this.ySpeed;
  },
  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    this.init();
  },
  onCollisionEnter: function onCollisionEnter(other) {
    // 碰撞开始
    if (this.isHit) return;
    this.isHit = true;
    var component = other.getComponent(other.node.componentName);
    var harm = component.harm;
    this.hit(harm, other); // console.log(component, other);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();