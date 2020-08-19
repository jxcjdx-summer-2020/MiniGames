
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e68b3VdNKhIWaWXPzXLU2BN', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // 这个属性引用了星星预制资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 得分音效资源
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    // 地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: cc.Node
    },
    // score label 的引用
    scoreDisplay: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    // 获取地平面的 y 轴坐标
    this.groundY = this.ground.y + this.ground.height / 2; // 初始化计时器

    this.timer = 0;
    this.starDuration = 0; // 生成一个新的星星

    this.spawnNewStar(); // 初始化计分

    this.score = 0;
  },
  spawnNewStar: function spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab); // 将新增的节点添加到 Canvas 节点下面

    this.node.addChild(newStar); // 为星星设置一个随机位置

    newStar.setPosition(this.getNewStarPosition());
    newStar.getComponent('Star').game = this; // 重置计时器，根据消失时间范围随机取一个值

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // 根据屏幕宽度，随机得到一个星星 x 坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // 返回星星坐标

    return cc.v2(randX, randY);
  },
  // LIFE-CYCLE CALLBACKS:
  start: function start() {},
  update: function update(dt) {
    // 每帧更新计时器，超过限度还没有生成新的星星
    // 就会调用游戏失败逻辑
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  gainScore: function gainScore() {
    this.score += 1; // 更新 scoreDisplay Label 的文字

    this.scoreDisplay.string = 'Score: ' + this.score.toString(); // 播放得分音效

    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    this.player.stopAllActions(); //停止 player 节点的跳跃动作

    cc.director.loadScene('game');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm1heFN0YXJEdXJhdGlvbiIsIm1pblN0YXJEdXJhdGlvbiIsImdyb3VuZCIsIk5vZGUiLCJwbGF5ZXIiLCJzY29yZURpc3BsYXkiLCJMYWJlbCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJzY29yZSIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iLCJyYW5kWCIsInJhbmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImdhbWVPdmVyIiwiZ2FpblNjb3JlIiwic3RyaW5nIiwidG9TdHJpbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJzdG9wQWxsQWN0aW9ucyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDWDtBQUNBQyxJQUFBQSxVQUFVLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZBLEtBRkQ7QUFNWDtBQUNBQyxJQUFBQSxVQUFVLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRGLE1BQUFBLElBQUksRUFBRUws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LFFBQVgsRUFBdkMsQ0FIbUIsQ0FJbkI7O0FBQ0E5QyxJQUFBQSxFQUFFLENBQUMrQyxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBS3pDLFVBQS9CLEVBQTJDLEtBQTNDO0FBQ0gsR0ExRkk7QUEyRkpvQyxFQUFBQSxRQUFRLEVBQUUsb0JBQVk7QUFDbkIsU0FBSzlCLE1BQUwsQ0FBWW9DLGNBQVosR0FEbUIsQ0FDVzs7QUFDOUJqRCxJQUFBQSxFQUFFLENBQUNrRCxRQUFILENBQVlDLFNBQVosQ0FBc0IsTUFBdEI7QUFDSDtBQTlGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgLy8g6L+Z5Liq5bGe5oCn5byV55So5LqG5pif5pif6aKE5Yi26LWE5rqQXHJcbiAgICAgc3RhclByZWZhYjoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICB9LFxyXG4gICAgIC8vIOW+l+WIhumfs+aViOi1hOa6kFxyXG4gICAgIHNjb3JlQXVkaW86IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgfSxcclxuICAgIC8vIOaYn+aYn+S6p+eUn+WQjua2iOWkseaXtumXtOeahOmaj+acuuiMg+WbtFxyXG4gICAgbWF4U3RhckR1cmF0aW9uOiAwLFxyXG4gICAgbWluU3RhckR1cmF0aW9uOiAwLFxyXG4gICAgLy8g5Zyw6Z2i6IqC54K577yM55So5LqO56Gu5a6a5pif5pif55Sf5oiQ55qE6auY5bqmXHJcbiAgICBncm91bmQ6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgIH0sXHJcbiAgICAvLyBwbGF5ZXIg6IqC54K577yM55So5LqO6I635Y+W5Li76KeS5by56Lez55qE6auY5bqm77yM5ZKM5o6n5Yi25Li76KeS6KGM5Yqo5byA5YWzXHJcbiAgICBwbGF5ZXI6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgIH0sXHJcbiAgICAgLy8gc2NvcmUgbGFiZWwg55qE5byV55SoXHJcbiAgICAgc2NvcmVEaXNwbGF5OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgfVxyXG4gICAgfSxcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOiOt+WPluWcsOW5s+mdoueahCB5IOi9tOWdkOagh1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kWSA9IHRoaXMuZ3JvdW5kLnkgKyB0aGlzLmdyb3VuZC5oZWlnaHQvMjtcclxuICAgICAgICAgLy8g5Yid5aeL5YyW6K6h5pe25ZmoXHJcbiAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgLy8g55Sf5oiQ5LiA5Liq5paw55qE5pif5pifXHJcbiAgICAgICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcclxuICAgICAgICAgLy8g5Yid5aeL5YyW6K6h5YiGXHJcbiAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICBzcGF3bk5ld1N0YXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIOS9v+eUqOe7meWumueahOaooeadv+WcqOWcuuaZr+S4reeUn+aIkOS4gOS4quaWsOiKgueCuVxyXG4gICAgICAgIHZhciBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyUHJlZmFiKTtcclxuICAgICAgICAvLyDlsIbmlrDlop7nmoToioLngrnmt7vliqDliLAgQ2FudmFzIOiKgueCueS4i+mdolxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKTtcclxuICAgICAgICAvLyDkuLrmmJ/mmJ/orr7nva7kuIDkuKrpmo/mnLrkvY3nva5cclxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xyXG4gICAgICAgIG5ld1N0YXIuZ2V0Q29tcG9uZW50KCdTdGFyJykuZ2FtZSA9IHRoaXM7XHJcbiAgICAgICAgLy8g6YeN572u6K6h5pe25Zmo77yM5qC55o2u5raI5aSx5pe26Ze06IyD5Zu06ZqP5py65Y+W5LiA5Liq5YC8XHJcbiAgICAgICAgdGhpcy5zdGFyRHVyYXRpb24gPSB0aGlzLm1pblN0YXJEdXJhdGlvbiArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhTdGFyRHVyYXRpb24gLSB0aGlzLm1pblN0YXJEdXJhdGlvbik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldE5ld1N0YXJQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByYW5kWCA9IDA7XHJcbiAgICAgICAgLy8g5qC55o2u5Zyw5bmz6Z2i5L2N572u5ZKM5Li76KeS6Lez6LeD6auY5bqm77yM6ZqP5py65b6X5Yiw5LiA5Liq5pif5pif55qEIHkg5Z2Q5qCHXHJcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xyXG4gICAgICAgIC8vIOagueaNruWxj+W5leWuveW6pu+8jOmaj+acuuW+l+WIsOS4gOS4quaYn+aYnyB4IOWdkOagh1xyXG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5ub2RlLndpZHRoLzI7XHJcbiAgICAgICAgcmFuZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyICogbWF4WDtcclxuICAgICAgICAvLyDov5Tlm57mmJ/mmJ/lnZDmoIdcclxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKTtcclxuICAgIH0sXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIC8vIOavj+W4p+abtOaWsOiuoeaXtuWZqO+8jOi2hei/h+mZkOW6pui/mOayoeacieeUn+aIkOaWsOeahOaYn+aYn1xyXG4gICAgICAgIC8vIOWwseS8muiwg+eUqOa4uOaIj+Wksei0pemAu+i+kVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICB9LFxyXG4gICAgZ2FpblNjb3JlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgIC8vIOabtOaWsCBzY29yZURpc3BsYXkgTGFiZWwg55qE5paH5a2XXHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJ1Njb3JlOiAnICsgdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vIOaSreaUvuW+l+WIhumfs+aViFxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zY29yZUF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgIGdhbWVPdmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTsgLy/lgZzmraIgcGxheWVyIOiKgueCueeahOi3s+i3g+WKqOS9nFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==