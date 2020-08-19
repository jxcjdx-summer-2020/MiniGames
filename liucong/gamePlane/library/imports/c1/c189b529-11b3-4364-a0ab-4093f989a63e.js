"use strict";
cc._RF.push(module, 'c189bUpEbNDZKCrQJP5iaY+', 'play');
// script/play.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    enemy_path: "Canvas/enemy",
    bullet_prefab: {
      type: cc.Prefab,
      "default": null
    },
    player_prefab: {
      type: cc.Prefab,
      "default": null
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.anim = this.node.getChildByName("anim"); //获得触摸移动事件

    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (t) {
      var offset = t.getDelta();
      this.node.x += offset.x;
      this.node.y += offset.y;

      if (this.node.x >= 360) {
        this.node.x = 360;
      }

      if (this.node.x <= -360) {
        this.node.x = -360;
      }

      if (this.node.y <= -640) {
        this.node.y = -640;
      }
    }.bind(this), this.node);
    this.shoot_flag = 2;
    this.root = cc.find("Canvas");
    this.gameOver = cc.find("Canvas/gameover");
  },
  start: function start() {},
  // 碰撞事件
  onCollisionEnter: function onCollisionEnter(other, self) {
    //console.log("_______________碰撞成功");
    this.anim.getComponent(cc.Animation).play();
    this.scheduleOnce(function () {
      this.node.removeFromParent();
      this.gameOver.active = true;
    }, 1);
  },
  play_shoot_bullet: function play_shoot_bullet() {
    this.schedule(this._shoot_bullet.bind(this), 0.3);
  },
  // 发射一般子弹
  _shoot_bullet: function _shoot_bullet() {
    if (this.shoot_flag != 2) {
      return;
    }

    var bullet = cc.instantiate(this.bullet_prefab);
    this.node.parent.addChild(bullet);
    bullet.x = this.node.x;
    bullet.y = this.node.y;
  },
  play_shoot_more_bullet: function play_shoot_more_bullet() {
    this.schedule(this._shoot_more_bullet.bind(this), 0.3);
  },
  // 发射多枚子弹
  _shoot_more_bullet: function _shoot_more_bullet() {
    if (this.shoot_flag != 2) {
      return;
    }

    var bullet = [];

    for (var i = 0; i < 2; i++) {
      bullet[i] = cc.instantiate(this.bullet_prefab);
      this.node.parent.addChild(bullet[i]);
    }

    bullet[0].x = this.node.x + 25;
    bullet[0].y = this.node.y;
    bullet[1].x = this.node.x - 25;
    bullet[1].y = this.node.y; //bullet[1].getComponent("bullet").speed_x = -50;
    // bullet[2].x = this.node.x + 25;
    // bullet[2].y = this.node.y;
    // bullet[2].getComponent("bullet").speed_x = 50;
  }
});

cc._RF.pop();