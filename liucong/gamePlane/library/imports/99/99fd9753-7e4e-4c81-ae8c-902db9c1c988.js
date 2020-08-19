"use strict";
cc._RF.push(module, '99fd9dTfk5Mga6MkC25wcmI', 'game');
// script/game.js

"use strict";

var enemy_com = require("enemy");

cc.Class({
  "extends": cc.Component,
  properties: {
    is_enbale: true,
    is_debug: true,
    groups_prefab: {
      "default": [],
      type: cc.Prefab
    },
    enemy_component: {
      "default": null,
      type: enemy_com
    },
    score_path: "Canvas/killnum/label/num"
  },
  // use this for initialization
  onLoad: function onLoad() {
    if (this.is_enbale) {
      var manager = cc.director.getCollisionManager();
      manager.enabled = true; // 开启碰撞

      if (this.is_debug) {
        manager.enabledDebugDraw = true;
      }
    }

    this.kill_num = 0;
    this.score = cc.find(this.score_path).getComponent(cc.Label);
    this.player = cc.find("Canvas/player").getComponent("play");
    this.gameover = this.node.getChildByName("gameover");
    this.gameover.zIndex = 100;
  },
  start: function start() {
    // 随机产生一组敌人
    this._gen_random_group(); // 玩家发射子弹


    this.player.play_shoot_more_bullet();
  },
  // 击杀一个玩家得一分
  add_score: function add_score() {
    this.kill_num++;
    this.score.string = "" + this.kill_num;
  },
  // 随机&无限的产生一组敌人
  _gen_random_group: function _gen_random_group() {
    var g_type = Math.random() * this.groups_prefab.length + 1;
    g_type = Math.floor(g_type);

    if (g_type >= this.groups_prefab.length) {
      g_type = this.groups_prefab.length;
    }

    var g = cc.instantiate(this.groups_prefab[g_type - 1]);
    this.node.addChild(g);
    g.x = (Math.random() - 0.5) * 360;
    g.y = Math.random() * 100 + 500;
    this.scheduleOnce(this._gen_random_group.bind(this), Math.random() * 1 + 2);
  },
  // 点击重玩按钮
  play_again: function play_again() {
    cc.director.loadScene("game");
  }
});

cc._RF.pop();