
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cdadeZ/OXROt7PZTgXt0mbp', 'Player');
// Scripts/Player.js

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
    //主角跳跃高度
    jumpHeight: 0,
    //主角跳跃持续时间
    jumpDuration: 0,
    //最大移动速度
    maxMoveSpeed: 0,
    //加速度
    accel: 0,
    Mcanvas: {
      "default": null,
      type: cc.Node
    },
    // 跳跃音效资源
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  setJumpAction: function setJumpAction() {
    //跳跃动作
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn()); // 添加一个回调函数，用于在动作结束时调用我们定义的其他方法

    var callback = cc.callFunc(this.playJumpSound, this);
    return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
  },
  //移动控制
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  playJumpSound: function playJumpSound() {
    // 调用声音引擎播放声音
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onLoad: function onLoad() {
    // 初始化跳跃动作
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction); //加速度方向开关

    this.accLeft = false;
    this.accRight = false; //水平速度

    this.xSpeed = 0; //初始化键盘事件监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    //取消监听
    cc.systemEvent.off(cc.SystemEvent.EventType, KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType, KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } //限制主角不能超过maxMoveSpeed


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } //根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt; //撞墙反弹

    if (this.node.x >= this.Mcanvas.x || this.node.x <= -this.Mcanvas.x) {
      this.xSpeed = -this.xSpeed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwiTWNhbnZhcyIsInR5cGUiLCJOb2RlIiwianVtcEF1ZGlvIiwiQXVkaW9DbGlwIiwic2V0SnVtcEFjdGlvbiIsImp1bXBVcCIsIm1vdmVCeSIsInYyIiwiZWFzaW5nIiwiZWFzZUN1YmljQWN0aW9uT3V0IiwianVtcERvd24iLCJlYXNlQ3ViaWNBY3Rpb25JbiIsImNhbGxiYWNrIiwiY2FsbEZ1bmMiLCJwbGF5SnVtcFNvdW5kIiwicmVwZWF0Rm9yZXZlciIsInNlcXVlbmNlIiwib25LZXlEb3duIiwiZXZlbnQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwiYWNjTGVmdCIsImQiLCJhY2NSaWdodCIsIm9uS2V5VXAiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJvbkxvYWQiLCJqdW1wQWN0aW9uIiwibm9kZSIsInJ1bkFjdGlvbiIsInhTcGVlZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwiS0VZX1VQIiwib25EZXN0cm95Iiwib2ZmIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUMsQ0FGSDtBQUdSO0FBQ0FDLElBQUFBLFlBQVksRUFBQyxDQUpMO0FBS1I7QUFDQUMsSUFBQUEsWUFBWSxFQUFDLENBTkw7QUFPUjtBQUNBQyxJQUFBQSxLQUFLLEVBQUMsQ0FSRTtBQVNSQyxJQUFBQSxPQUFPLEVBQUM7QUFDSixpQkFBUyxJQURMO0FBRUpDLE1BQUFBLElBQUksRUFBQ1QsRUFBRSxDQUFDVTtBQUZKLEtBVEE7QUFhUjtBQUNBQyxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBGLE1BQUFBLElBQUksRUFBRVQsRUFBRSxDQUFDWTtBQUZGO0FBZEgsR0FIUDtBQXVCTEMsRUFBQUEsYUFBYSxFQUFFLHlCQUNmO0FBQ0k7QUFDQSxRQUFJQyxNQUFNLEdBQUdkLEVBQUUsQ0FBQ2UsTUFBSCxDQUFVLEtBQUtWLFlBQWYsRUFBNEJMLEVBQUUsQ0FBQ2dCLEVBQUgsQ0FBTSxDQUFOLEVBQVEsS0FBS1osVUFBYixDQUE1QixFQUFzRGEsTUFBdEQsQ0FBNkRqQixFQUFFLENBQUNrQixrQkFBSCxFQUE3RCxDQUFiO0FBQ0EsUUFBSUMsUUFBUSxHQUFHbkIsRUFBRSxDQUFDZSxNQUFILENBQVUsS0FBS1YsWUFBZixFQUE0QkwsRUFBRSxDQUFDZ0IsRUFBSCxDQUFNLENBQU4sRUFBUSxDQUFDLEtBQUtaLFVBQWQsQ0FBNUIsRUFBdURhLE1BQXZELENBQThEakIsRUFBRSxDQUFDb0IsaUJBQUgsRUFBOUQsQ0FBZixDQUhKLENBSUk7O0FBQ0EsUUFBSUMsUUFBUSxHQUFHckIsRUFBRSxDQUFDc0IsUUFBSCxDQUFZLEtBQUtDLGFBQWpCLEVBQWdDLElBQWhDLENBQWY7QUFDQSxXQUFPdkIsRUFBRSxDQUFDd0IsYUFBSCxDQUFpQnhCLEVBQUUsQ0FBQ3lCLFFBQUgsQ0FBWVgsTUFBWixFQUFtQkssUUFBbkIsRUFBNEJFLFFBQTVCLENBQWpCLENBQVA7QUFDSCxHQS9CSTtBQWlDTDtBQUNBSyxFQUFBQSxTQWxDSyxxQkFrQ0tDLEtBbENMLEVBa0NXO0FBQ1osWUFBT0EsS0FBSyxDQUFDQyxPQUFiO0FBQ0ksV0FBSzVCLEVBQUUsQ0FBQzZCLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUFsQjtBQUNJLGFBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0E7O0FBQ0osV0FBS2hDLEVBQUUsQ0FBQzZCLEtBQUgsQ0FBU0MsR0FBVCxDQUFhRyxDQUFsQjtBQUNJLGFBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQTtBQU5SO0FBUUgsR0EzQ0k7QUE0Q0xDLEVBQUFBLE9BNUNLLG1CQTRDR1IsS0E1Q0gsRUE0Q1M7QUFDVixZQUFPQSxLQUFLLENBQUNDLE9BQWI7QUFDSSxXQUFLNUIsRUFBRSxDQUFDNkIsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxCO0FBQ0ksYUFBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQTs7QUFDSixXQUFLaEMsRUFBRSxDQUFDNkIsS0FBSCxDQUFTQyxHQUFULENBQWFHLENBQWxCO0FBQ0ksYUFBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBO0FBTlI7QUFRSCxHQXJESTtBQXVETFgsRUFBQUEsYUFBYSxFQUFFLHlCQUFZO0FBQ3ZCO0FBQ0F2QixJQUFBQSxFQUFFLENBQUNvQyxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBSzFCLFNBQS9CLEVBQTBDLEtBQTFDO0FBQ0gsR0ExREk7QUE0REwyQixFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQUsxQixhQUFMLEVBQWxCO0FBQ0EsU0FBSzJCLElBQUwsQ0FBVUMsU0FBVixDQUFvQixLQUFLRixVQUF6QixFQUhnQixDQUloQjs7QUFDQSxTQUFLUCxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtFLFFBQUwsR0FBZ0IsS0FBaEIsQ0FOZ0IsQ0FPaEI7O0FBQ0EsU0FBS1EsTUFBTCxHQUFjLENBQWQsQ0FSZ0IsQ0FTaEI7O0FBQ0ExQyxJQUFBQSxFQUFFLENBQUMyQyxXQUFILENBQWVDLEVBQWYsQ0FBa0I1QyxFQUFFLENBQUM2QyxXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQW9ELEtBQUtyQixTQUF6RCxFQUFtRSxJQUFuRTtBQUNBMUIsSUFBQUEsRUFBRSxDQUFDMkMsV0FBSCxDQUFlQyxFQUFmLENBQWtCNUMsRUFBRSxDQUFDNkMsV0FBSCxDQUFlQyxTQUFmLENBQXlCRSxNQUEzQyxFQUFrRCxLQUFLYixPQUF2RCxFQUErRCxJQUEvRDtBQUNILEdBeEVJO0FBeUVMYyxFQUFBQSxTQXpFSyx1QkF5RVE7QUFDVDtBQUNBakQsSUFBQUEsRUFBRSxDQUFDMkMsV0FBSCxDQUFlTyxHQUFmLENBQW1CbEQsRUFBRSxDQUFDNkMsV0FBSCxDQUFlQyxTQUFsQyxFQUE0Q0MsUUFBNUMsRUFBcUQsS0FBS3JCLFNBQTFELEVBQW9FLElBQXBFO0FBQ0ExQixJQUFBQSxFQUFFLENBQUMyQyxXQUFILENBQWVPLEdBQWYsQ0FBbUJsRCxFQUFFLENBQUM2QyxXQUFILENBQWVDLFNBQWxDLEVBQTRDRSxNQUE1QyxFQUFtRCxLQUFLYixPQUF4RCxFQUFnRSxJQUFoRTtBQUNILEdBN0VJO0FBK0VMZ0IsRUFBQUEsS0FBSyxFQUFFLGlCQUFZLENBRWxCLENBakZJO0FBbUZMQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVNDLEVBQVQsRUFBWTtBQUNoQixRQUFHLEtBQUtyQixPQUFSLEVBQWdCO0FBQ1osV0FBS1UsTUFBTCxJQUFjLEtBQUtuQyxLQUFMLEdBQVk4QyxFQUExQjtBQUNILEtBRkQsTUFFTSxJQUFHLEtBQUtuQixRQUFSLEVBQWlCO0FBQ25CLFdBQUtRLE1BQUwsSUFBYyxLQUFLbkMsS0FBTCxHQUFZOEMsRUFBMUI7QUFDSCxLQUxlLENBTWhCOzs7QUFDQSxRQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLYixNQUFkLElBQXNCLEtBQUtwQyxZQUE5QixFQUEyQztBQUN2QyxXQUFLb0MsTUFBTCxHQUFhLEtBQUtwQyxZQUFMLEdBQW1CLEtBQUtvQyxNQUF4QixHQUErQlksSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS2IsTUFBZCxDQUE1QztBQUNILEtBVGUsQ0FVaEI7OztBQUNBLFNBQUtGLElBQUwsQ0FBVWdCLENBQVYsSUFBZSxLQUFLZCxNQUFMLEdBQWFXLEVBQTVCLENBWGdCLENBWWhCOztBQUNBLFFBQUksS0FBS2IsSUFBTCxDQUFVZ0IsQ0FBVixJQUFhLEtBQUtoRCxPQUFMLENBQWFnRCxDQUExQixJQUErQixLQUFLaEIsSUFBTCxDQUFVZ0IsQ0FBVixJQUFhLENBQUMsS0FBS2hELE9BQUwsQ0FBYWdELENBQTlELEVBQWdFO0FBQzVELFdBQUtkLE1BQUwsR0FBYyxDQUFDLEtBQUtBLE1BQXBCO0FBQ0g7QUFDSjtBQW5HSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy/kuLvop5Lot7Pot4Ppq5jluqZcclxuICAgICAgICBqdW1wSGVpZ2h0OjAsXHJcbiAgICAgICAgLy/kuLvop5Lot7Pot4PmjIHnu63ml7bpl7RcclxuICAgICAgICBqdW1wRHVyYXRpb246MCxcclxuICAgICAgICAvL+acgOWkp+enu+WKqOmAn+W6plxyXG4gICAgICAgIG1heE1vdmVTcGVlZDowLFxyXG4gICAgICAgIC8v5Yqg6YCf5bqmXHJcbiAgICAgICAgYWNjZWw6MCxcclxuICAgICAgICBNY2FudmFzOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDot7Pot4Ppn7PmlYjotYTmupBcclxuICAgICAgICBqdW1wQXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc2V0SnVtcEFjdGlvbjogZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIC8v6Lez6LeD5Yqo5L2cXHJcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbixjYy52MigwLHRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XHJcbiAgICAgICAgdmFyIGp1bXBEb3duID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLGNjLnYyKDAsLXRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25JbigpKTtcclxuICAgICAgICAvLyDmt7vliqDkuIDkuKrlm57osIPlh73mlbDvvIznlKjkuo7lnKjliqjkvZznu5PmnZ/ml7bosIPnlKjmiJHku6zlrprkuYnnmoTlhbbku5bmlrnms5VcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYy5jYWxsRnVuYyh0aGlzLnBsYXlKdW1wU291bmQsIHRoaXMpO1xyXG4gICAgICAgIHJldHVybiBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGp1bXBVcCxqdW1wRG93bixjYWxsYmFjaykpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+enu+WKqOaOp+WItlxyXG4gICAgb25LZXlEb3duKGV2ZW50KXtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSl7XHJcbiAgICAgICAgICAgIGNhc2UoY2MubWFjcm8uS0VZLmEpOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKGNjLm1hY3JvLktFWS5kKTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uS2V5VXAoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZShjYy5tYWNyby5LRVkuYSk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKGNjLm1hY3JvLktFWS5kKTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcGxheUp1bXBTb3VuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOiwg+eUqOWjsOmfs+W8leaTjuaSreaUvuWjsOmfs1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6Lez6LeD5Yqo5L2cXHJcbiAgICAgICAgdGhpcy5qdW1wQWN0aW9uID0gdGhpcy5zZXRKdW1wQWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLmp1bXBBY3Rpb24pO1xyXG4gICAgICAgIC8v5Yqg6YCf5bqm5pa55ZCR5byA5YWzXHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIC8v5rC05bmz6YCf5bqmXHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG4gICAgICAgIC8v5Yid5aeL5YyW6ZSu55uY5LqL5Lu255uR5ZCsXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLHRoaXMub25LZXlEb3duLHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsdGhpcy5vbktleVVwLHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgLy/lj5bmtojnm5HlkKxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLEtFWV9ET1dOLHRoaXMub25LZXlEb3duLHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUsS0VZX1VQLHRoaXMub25LZXlVcCx0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24oZHQpe1xyXG4gICAgICAgIGlmKHRoaXMuYWNjTGVmdCl7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkIC09dGhpcy5hY2NlbCAqZHQ7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5hY2NSaWdodCl7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9dGhpcy5hY2NlbCAqZHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6ZmQ5Yi25Li76KeS5LiN6IO96LaF6L+HbWF4TW92ZVNwZWVkXHJcbiAgICAgICAgaWYoTWF0aC5hYnModGhpcy54U3BlZWQpPnRoaXMubWF4TW92ZVNwZWVkKXtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPXRoaXMubWF4TW92ZVNwZWVkICp0aGlzLnhTcGVlZC9NYXRoLmFicyh0aGlzLnhTcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5qC55o2u5b2T5YmN6YCf5bqm5pu05paw5Li76KeS55qE5L2N572uXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKmR0O1xyXG4gICAgICAgIC8v5pKe5aKZ5Y+N5by5XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS54Pj10aGlzLk1jYW52YXMueCB8fCB0aGlzLm5vZGUueDw9LXRoaXMuTWNhbnZhcy54KXtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSAtdGhpcy54U3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==