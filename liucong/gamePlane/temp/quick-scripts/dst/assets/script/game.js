
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lLmpzIl0sIm5hbWVzIjpbImVuZW15X2NvbSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImlzX2VuYmFsZSIsImlzX2RlYnVnIiwiZ3JvdXBzX3ByZWZhYiIsInR5cGUiLCJQcmVmYWIiLCJlbmVteV9jb21wb25lbnQiLCJzY29yZV9wYXRoIiwib25Mb2FkIiwibWFuYWdlciIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJlbmFibGVkRGVidWdEcmF3Iiwia2lsbF9udW0iLCJzY29yZSIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInBsYXllciIsImdhbWVvdmVyIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiekluZGV4Iiwic3RhcnQiLCJfZ2VuX3JhbmRvbV9ncm91cCIsInBsYXlfc2hvb3RfbW9yZV9idWxsZXQiLCJhZGRfc2NvcmUiLCJzdHJpbmciLCJnX3R5cGUiLCJNYXRoIiwicmFuZG9tIiwibGVuZ3RoIiwiZmxvb3IiLCJnIiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsIngiLCJ5Iiwic2NoZWR1bGVPbmNlIiwiYmluZCIsInBsYXlfYWdhaW4iLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsT0FBRCxDQUF2Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBRVJDLElBQUFBLFNBQVMsRUFBRSxJQUZIO0FBR1JDLElBQUFBLFFBQVEsRUFBRSxJQUhGO0FBS1JDLElBQUFBLGFBQWEsRUFBRTtBQUNYLGlCQUFTLEVBREU7QUFFWEMsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRO0FBRkUsS0FMUDtBQVVSQyxJQUFBQSxlQUFlLEVBQUU7QUFDYixpQkFBUyxJQURJO0FBRWJGLE1BQUFBLElBQUksRUFBRVQ7QUFGTyxLQVZUO0FBZVJZLElBQUFBLFVBQVUsRUFBRTtBQWZKLEdBSFA7QUFxQkw7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFFBQUksS0FBS1AsU0FBVCxFQUFvQjtBQUNoQixVQUFJUSxPQUFPLEdBQUdaLEVBQUUsQ0FBQ2EsUUFBSCxDQUFZQyxtQkFBWixFQUFkO0FBQ0FGLE1BQUFBLE9BQU8sQ0FBQ0csT0FBUixHQUFrQixJQUFsQixDQUZnQixDQUVROztBQUN4QixVQUFJLEtBQUtWLFFBQVQsRUFBbUI7QUFDZk8sUUFBQUEsT0FBTyxDQUFDSSxnQkFBUixHQUEyQixJQUEzQjtBQUNIO0FBQ0o7O0FBQ0QsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLEtBQUwsR0FBYWxCLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUSxLQUFLVCxVQUFiLEVBQXlCVSxZQUF6QixDQUFzQ3BCLEVBQUUsQ0FBQ3FCLEtBQXpDLENBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWN0QixFQUFFLENBQUNtQixJQUFILENBQVEsZUFBUixFQUF5QkMsWUFBekIsQ0FBc0MsTUFBdEMsQ0FBZDtBQUNBLFNBQUtHLFFBQUwsR0FBZ0IsS0FBS0MsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFVBQXpCLENBQWhCO0FBQ0EsU0FBS0YsUUFBTCxDQUFjRyxNQUFkLEdBQXVCLEdBQXZCO0FBQ0gsR0FuQ0k7QUFxQ0xDLEVBQUFBLEtBQUssRUFBRSxpQkFBVztBQUNkO0FBQ0EsU0FBS0MsaUJBQUwsR0FGYyxDQUdkOzs7QUFDQSxTQUFLTixNQUFMLENBQVlPLHNCQUFaO0FBQ0gsR0ExQ0k7QUE0Q0w7QUFDQUMsRUFBQUEsU0FBUyxFQUFFLHFCQUFXO0FBQ2xCLFNBQUtiLFFBQUw7QUFDQSxTQUFLQyxLQUFMLENBQVdhLE1BQVgsR0FBb0IsS0FBSyxLQUFLZCxRQUE5QjtBQUVILEdBakRJO0FBbURMO0FBQ0FXLEVBQUFBLGlCQUFpQixFQUFFLDZCQUFXO0FBQzFCLFFBQUlJLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEtBQUs1QixhQUFMLENBQW1CNkIsTUFBbkMsR0FBNEMsQ0FBekQ7QUFDQUgsSUFBQUEsTUFBTSxHQUFHQyxJQUFJLENBQUNHLEtBQUwsQ0FBV0osTUFBWCxDQUFUOztBQUNBLFFBQUlBLE1BQU0sSUFBSSxLQUFLMUIsYUFBTCxDQUFtQjZCLE1BQWpDLEVBQXlDO0FBQ3JDSCxNQUFBQSxNQUFNLEdBQUcsS0FBSzFCLGFBQUwsQ0FBbUI2QixNQUE1QjtBQUNIOztBQUNELFFBQUlFLENBQUMsR0FBR3JDLEVBQUUsQ0FBQ3NDLFdBQUgsQ0FBZSxLQUFLaEMsYUFBTCxDQUFtQjBCLE1BQU0sR0FBRyxDQUE1QixDQUFmLENBQVI7QUFDQSxTQUFLUixJQUFMLENBQVVlLFFBQVYsQ0FBbUJGLENBQW5CO0FBQ0FBLElBQUFBLENBQUMsQ0FBQ0csQ0FBRixHQUFNLENBQUNQLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFqQixJQUF3QixHQUE5QjtBQUNBRyxJQUFBQSxDQUFDLENBQUNJLENBQUYsR0FBT1IsSUFBSSxDQUFDQyxNQUFMLEVBQUQsR0FBa0IsR0FBbEIsR0FBd0IsR0FBOUI7QUFDQSxTQUFLUSxZQUFMLENBQWtCLEtBQUtkLGlCQUFMLENBQXVCZSxJQUF2QixDQUE0QixJQUE1QixDQUFsQixFQUFxRFYsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLENBQWhCLEdBQW9CLENBQXpFO0FBQ0gsR0EvREk7QUFnRUw7QUFDQVUsRUFBQUEsVUFBVSxFQUFFLHNCQUFXO0FBQ25CNUMsSUFBQUEsRUFBRSxDQUFDYSxRQUFILENBQVlnQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0g7QUFuRUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGVuZW15X2NvbSA9IHJlcXVpcmUoXCJlbmVteVwiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgaXNfZW5iYWxlOiB0cnVlLFxyXG4gICAgICAgIGlzX2RlYnVnOiB0cnVlLFxyXG5cclxuICAgICAgICBncm91cHNfcHJlZmFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZW5lbXlfY29tcG9uZW50OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGVuZW15X2NvbSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzY29yZV9wYXRoOiBcIkNhbnZhcy9raWxsbnVtL2xhYmVsL251bVwiLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzX2VuYmFsZSkge1xyXG4gICAgICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTsgLy8g5byA5ZCv56Kw5pKeXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzX2RlYnVnKSB7XHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtpbGxfbnVtID0gMDtcclxuICAgICAgICB0aGlzLnNjb3JlID0gY2MuZmluZCh0aGlzLnNjb3JlX3BhdGgpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL3BsYXllclwiKS5nZXRDb21wb25lbnQoXCJwbGF5XCIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZW92ZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lb3ZlclwiKTtcclxuICAgICAgICB0aGlzLmdhbWVvdmVyLnpJbmRleCA9IDEwMDtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyDpmo/mnLrkuqfnlJ/kuIDnu4TmlYzkurpcclxuICAgICAgICB0aGlzLl9nZW5fcmFuZG9tX2dyb3VwKCk7XHJcbiAgICAgICAgLy8g546p5a625Y+R5bCE5a2Q5by5XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIucGxheV9zaG9vdF9tb3JlX2J1bGxldCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyDlh7vmnYDkuIDkuKrnjqnlrrblvpfkuIDliIZcclxuICAgIGFkZF9zY29yZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5raWxsX251bSArKztcclxuICAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9IFwiXCIgKyB0aGlzLmtpbGxfbnVtO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDpmo/mnLom5peg6ZmQ55qE5Lqn55Sf5LiA57uE5pWM5Lq6XHJcbiAgICBfZ2VuX3JhbmRvbV9ncm91cDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGdfdHlwZSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmdyb3Vwc19wcmVmYWIubGVuZ3RoICsgMTtcclxuICAgICAgICBnX3R5cGUgPSBNYXRoLmZsb29yKGdfdHlwZSk7XHJcbiAgICAgICAgaWYgKGdfdHlwZSA+PSB0aGlzLmdyb3Vwc19wcmVmYWIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGdfdHlwZSA9IHRoaXMuZ3JvdXBzX3ByZWZhYi5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBnID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncm91cHNfcHJlZmFiW2dfdHlwZSAtIDFdKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZyk7XHJcbiAgICAgICAgZy54ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMzYwO1xyXG4gICAgICAgIGcueSA9IChNYXRoLnJhbmRvbSgpKSAqIDEwMCArIDUwMDtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLl9nZW5fcmFuZG9tX2dyb3VwLmJpbmQodGhpcyksIE1hdGgucmFuZG9tKCkgKiAxICsgMik7XHJcbiAgICB9LFxyXG4gICAgLy8g54K55Ye76YeN546p5oyJ6ZKuXHJcbiAgICBwbGF5X2FnYWluOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnYW1lXCIpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==