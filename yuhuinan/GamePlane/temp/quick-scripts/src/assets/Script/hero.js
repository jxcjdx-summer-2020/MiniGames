"use strict";
cc._RF.push(module, '10511v8kUxIgLCx3PL7p7Vi', 'hero');
// Script/hero.js

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
    object_pool: {
      "default": null,
      type: require('object_pool')
    },
    fireRate: {
      "default": 300,
      tooltip: '射速'
    },
    harm: {
      "default": 5
    },
    bulletPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: '初始创建子弹'
    },
    bulletName: {
      "default": 'bullet',
      tooltip: '子弹名称'
    }
  },
  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    this.node.componentName = 'hero';
    this.onDrag();
    this.initBullet();
    this.fire();
  },
  fire: function fire() {
    this.schedule(function () {
      var create = {
        name: this.bulletName,
        parentNode: this.node.parent
      };
      this.object_pool.createEnemy(create).setCurrentPosition(this.node).fire(this.node);
    }, this.fireRate / 1000);
  },
  initBullet: function initBullet() {
    var init = {
      name: this.bulletName,
      initCount: 10,
      prefab: this.bulletPrefab
    };
    this.object_pool.initPool(init);
  },
  onDrag: function onDrag() {
    // 主角可以进行拖动
    this.getLimit(); // 获取移动结界

    this.node.on('touchmove', this.dragMove, this);
  },
  getLimit: function getLimit() {
    var parent = cc.winSize;
    this.minX = -parent.width / 2 + this.node.width / 2;
    this.maxX = -this.minX;
    this.minY = -parent.height / 2 + this.node.height / 2;
    this.maxY = -this.minY;
  },
  dragMove: function dragMove(event) {
    // convertToNodeSpaceAR // 将一个点转换到节点 (局部) 空间坐标系，这个坐标系以锚点为原点。
    var parent = this.node.parent;
    var info = parent.convertToNodeSpaceAR(event.getLocation()); // https://docs.cocos.com/creator/api/zh/classes/Event.EventMouse.html#getlocation

    var x = info.x,
        y = info.y; //飞机不移出屏幕 

    if (x < this.minX) {
      x = this.minX;
    }

    if (x > this.maxX) {
      x = this.maxX;
    }

    if (y < this.minY) {
      y = this.minY;
    }

    if (y > this.maxY) {
      y = this.maxY;
    }

    this.node.setPosition(x, y); // https://docs.cocos.com/creator/api/zh/classes/Node.html#setposition
  },
  ruin: function ruin() {
    var _this = this;

    this.node.off('touchmove');
    var name = this.node.name;
    var anim = this.getComponent(cc.Animation);
    var animName = "".concat(name, "_ruin");
    anim.on('finished', function () {
      anim.off('finished');
      anim.node.runAction(cc.hide());
      anim.setCurrentTime(0, animName);

      _this.node.destroy();

      _this.isHit = false;
      cc.director.loadScene('game_over', function () {});
    }, anim);
    anim.play(animName);
  },
  onCollisionEnter: function onCollisionEnter(other) {
    // 碰撞结束
    if (this.isHit) return;
    this.isHit = true; // let component = other.getComponent(other.node.componentName)

    console.log(other.node.group);

    switch (other.node.group) {
      case 'enemy':
        this.ruin();
        break;

      case 'porp':
        console.log(other.node);
        this.isHit = false;
        break;

      default:
        this.isHit = false;
        break;
    } // console.log(component, other);

  } // update (dt) {},

});

cc._RF.pop();