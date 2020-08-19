
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/play.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwbGF5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZW5lbXlfcGF0aCIsImJ1bGxldF9wcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwicGxheWVyX3ByZWZhYiIsIm9uTG9hZCIsImFuaW0iLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9NT1ZFIiwidCIsIm9mZnNldCIsImdldERlbHRhIiwieCIsInkiLCJiaW5kIiwic2hvb3RfZmxhZyIsInJvb3QiLCJmaW5kIiwiZ2FtZU92ZXIiLCJzdGFydCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJwbGF5Iiwic2NoZWR1bGVPbmNlIiwicmVtb3ZlRnJvbVBhcmVudCIsImFjdGl2ZSIsInBsYXlfc2hvb3RfYnVsbGV0Iiwic2NoZWR1bGUiLCJfc2hvb3RfYnVsbGV0IiwiYnVsbGV0IiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJhZGRDaGlsZCIsInBsYXlfc2hvb3RfbW9yZV9idWxsZXQiLCJfc2hvb3RfbW9yZV9idWxsZXQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFLGNBREo7QUFHUkMsSUFBQUEsYUFBYSxFQUFFO0FBQ1hDLE1BQUFBLElBQUksRUFBRU4sRUFBRSxDQUFDTyxNQURFO0FBRVgsaUJBQVM7QUFGRSxLQUhQO0FBUVJDLElBQUFBLGFBQWEsRUFBRTtBQUNYRixNQUFBQSxJQUFJLEVBQUVOLEVBQUUsQ0FBQ08sTUFERTtBQUVYLGlCQUFTO0FBRkU7QUFSUCxHQUhQO0FBaUJMO0FBQ0FFLEVBQUFBLE1BQU0sRUFB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UUFBSWlCLE1BQU0sR0FBRyxFQUFiOztBQUVBLFNBQUssSUFBSU0sQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDLENBQWhCLEVBQW1CQSxDQUFDLEVBQXBCLEVBQXVCO0FBQ25CTixNQUFBQSxNQUFNLENBQUNNLENBQUQsQ0FBTixHQUFZOUMsRUFBRSxDQUFDeUMsV0FBSCxDQUFlLEtBQUtwQyxhQUFwQixDQUFaO0FBQ0EsV0FBS00sSUFBTCxDQUFVK0IsTUFBVixDQUFpQkMsUUFBakIsQ0FBMEJILE1BQU0sQ0FBQ00sQ0FBRCxDQUFoQztBQUNIOztBQUVETixJQUFBQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVwQixDQUFWLEdBQWMsS0FBS1QsSUFBTCxDQUFVUyxDQUFWLEdBQWMsRUFBNUI7QUFDQW9CLElBQUFBLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVW5CLENBQVYsR0FBYyxLQUFLVixJQUFMLENBQVVVLENBQXhCO0FBRUFtQixJQUFBQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVwQixDQUFWLEdBQWMsS0FBS1QsSUFBTCxDQUFVUyxDQUFWLEdBQWMsRUFBNUI7QUFDQW9CLElBQUFBLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVW5CLENBQVYsR0FBYyxLQUFLVixJQUFMLENBQVVVLENBQXhCLENBakIyQixDQWtCM0I7QUFFQTtBQUNBO0FBQ0E7QUFFSDtBQXZHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGVuZW15X3BhdGg6IFwiQ2FudmFzL2VuZW15XCIsXHJcblxyXG4gICAgICAgIGJ1bGxldF9wcmVmYWI6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBsYXllcl9wcmVmYWI6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/ojrflvpfop6bmkbjnp7vliqjkuovku7ZcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdC5nZXREZWx0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSBvZmZzZXQueDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgKz0gb2Zmc2V0Lnk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueCA+PSAzNjApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gMzYwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueCA8PSAtMzYwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IC0zNjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDw9IC02NDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gLTY0MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcy5ub2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zaG9vdF9mbGFnID0gMjsgXHJcblxyXG4gICAgICAgIHRoaXMucm9vdCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGNjLmZpbmQoXCJDYW52YXMvZ2FtZW92ZXJcIik7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICAvLyDnorDmkp7kuovku7ZcclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIl9fX19fX19fX19fX19fX+eisOaSnuaIkOWKn1wiKTtcclxuICAgICAgICB0aGlzLmFuaW0uZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICBcclxuICAgIH0sXHJcblxyXG4gICAgcGxheV9zaG9vdF9idWxsZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5fc2hvb3RfYnVsbGV0LmJpbmQodGhpcyksIDAuMyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOWPkeWwhOS4gOiIrOWtkOW8uVxyXG4gICAgX3Nob290X2J1bGxldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvb3RfZmxhZyAhPSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldF9wcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoYnVsbGV0KTtcclxuXHJcbiAgICAgICAgYnVsbGV0LnggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICBidWxsZXQueSA9IHRoaXMubm9kZS55O1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5X3Nob290X21vcmVfYnVsbGV0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuX3Nob290X21vcmVfYnVsbGV0LmJpbmQodGhpcyksIDAuMyk7XHJcbiAgICB9LFxyXG4gICAgLy8g5Y+R5bCE5aSa5p6a5a2Q5by5XHJcbiAgICBfc2hvb3RfbW9yZV9idWxsZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnNob290X2ZsYWcgIT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGJ1bGxldCA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8MjsgaSsrKXtcclxuICAgICAgICAgICAgYnVsbGV0W2ldID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRfcHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChidWxsZXRbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnVsbGV0WzBdLnggPSB0aGlzLm5vZGUueCArIDI1O1xyXG4gICAgICAgIGJ1bGxldFswXS55ID0gdGhpcy5ub2RlLnk7XHJcblxyXG4gICAgICAgIGJ1bGxldFsxXS54ID0gdGhpcy5ub2RlLnggLSAyNTtcclxuICAgICAgICBidWxsZXRbMV0ueSA9IHRoaXMubm9kZS55O1xyXG4gICAgICAgIC8vYnVsbGV0WzFdLmdldENvbXBvbmVudChcImJ1bGxldFwiKS5zcGVlZF94ID0gLTUwO1xyXG5cclxuICAgICAgICAvLyBidWxsZXRbMl0ueCA9IHRoaXMubm9kZS54ICsgMjU7XHJcbiAgICAgICAgLy8gYnVsbGV0WzJdLnkgPSB0aGlzLm5vZGUueTtcclxuICAgICAgICAvLyBidWxsZXRbMl0uZ2V0Q29tcG9uZW50KFwiYnVsbGV0XCIpLnNwZWVkX3ggPSA1MDtcclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19