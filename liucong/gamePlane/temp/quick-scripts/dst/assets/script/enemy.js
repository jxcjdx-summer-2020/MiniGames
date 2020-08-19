
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd0f1n0OtlGaIGySOk83nlJ', 'enemy');
// script/enemy.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    enemy_skin: {
      "default": [],
      type: cc.SpriteFrame
    },
    player_path: "Canvas/player"
  },
  onLoad: function onLoad() {
    this.speed_x = 0;
    this.speed_y = -200;
    this.anim = this.node.getChildByName("anim");
    this.root = cc.find("Canvas");
    this.game_scene = cc.find("Canvas").getComponent("game");
    this.flag = 0;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.anim.getComponent(cc.Animation).play();
    this.scheduleOnce(function () {
      this.node.removeFromParent();
    }, 0.2);
    this.game_scene.add_score();
  },
  update: function update(dt) {
    var sx = this.speed_x * dt;
    var sy = this.speed_y * dt;
    this.node.x += sx;
    this.node.y += sy;

    if (this.node.y < -1000) {
      this.node.removeFromParent();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImVuZW15X3NraW4iLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJwbGF5ZXJfcGF0aCIsIm9uTG9hZCIsInNwZWVkX3giLCJzcGVlZF95IiwiYW5pbSIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsInJvb3QiLCJmaW5kIiwiZ2FtZV9zY2VuZSIsImdldENvbXBvbmVudCIsImZsYWciLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiQW5pbWF0aW9uIiwicGxheSIsInNjaGVkdWxlT25jZSIsInJlbW92ZUZyb21QYXJlbnQiLCJhZGRfc2NvcmUiLCJ1cGRhdGUiLCJkdCIsInN4Iiwic3kiLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLEVBREQ7QUFFUkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FESjtBQU1SQyxJQUFBQSxXQUFXLEVBQUU7QUFOTCxHQUhQO0FBYUxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQixTQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFDLEdBQWhCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixNQUF6QixDQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZZCxFQUFFLENBQUNlLElBQUgsQ0FBUSxRQUFSLENBQVo7QUFDQSxTQUFLQyxVQUFMLEdBQWtCaEIsRUFBRSxDQUFDZSxJQUFILENBQVEsUUFBUixFQUFrQkUsWUFBbEIsQ0FBK0IsTUFBL0IsQ0FBbEI7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNILEdBcEJJO0FBc0JMQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFFckMsU0FBS1YsSUFBTCxDQUFVTSxZQUFWLENBQXVCakIsRUFBRSxDQUFDc0IsU0FBMUIsRUFBcUNDLElBQXJDO0FBQ0EsU0FBS0MsWUFBTCxDQUFrQixZQUFXO0FBQ3pCLFdBQUtaLElBQUwsQ0FBVWEsZ0JBQVY7QUFDSCxLQUZELEVBRUcsR0FGSDtBQUdBLFNBQUtULFVBQUwsQ0FBZ0JVLFNBQWhCO0FBQ0gsR0E3Qkk7QUErQkxDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCLFFBQUlDLEVBQUUsR0FBRyxLQUFLcEIsT0FBTCxHQUFlbUIsRUFBeEI7QUFDQSxRQUFJRSxFQUFFLEdBQUcsS0FBS3BCLE9BQUwsR0FBZWtCLEVBQXhCO0FBQ0EsU0FBS2hCLElBQUwsQ0FBVW1CLENBQVYsSUFBZUYsRUFBZjtBQUNBLFNBQUtqQixJQUFMLENBQVVvQixDQUFWLElBQWVGLEVBQWY7O0FBRUEsUUFBSSxLQUFLbEIsSUFBTCxDQUFVb0IsQ0FBVixHQUFjLENBQUMsSUFBbkIsRUFBeUI7QUFDckIsV0FBS3BCLElBQUwsQ0FBVWEsZ0JBQVY7QUFDSDtBQUNKO0FBeENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZW5lbXlfc2tpbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGxheWVyX3BhdGg6IFwiQ2FudmFzL3BsYXllclwiLFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZF94ID0gMDtcclxuICAgICAgICB0aGlzLnNwZWVkX3kgPSAtMjAwO1xyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImFuaW1cIik7XHJcbiAgICAgICAgdGhpcy5yb290ID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICB0aGlzLmdhbWVfc2NlbmUgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChcImdhbWVcIik7XHJcbiAgICAgICAgdGhpcy5mbGFnID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hbmltLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB9LCAwLjIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZV9zY2VuZS5hZGRfc2NvcmUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICB2YXIgc3ggPSB0aGlzLnNwZWVkX3ggKiBkdDtcclxuICAgICAgICB2YXIgc3kgPSB0aGlzLnNwZWVkX3kgKiBkdDtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSBzeDtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSBzeTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPCAtMTAwMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=