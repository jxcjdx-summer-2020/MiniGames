
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35a46h3ItVNrL4vCICECniI', 'Player');
// scripts/Player.js

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
    // 主角跳跃高度
    jumpHeight: 0,
    // 主角跳跃持续时间
    jumpDuration: 0,
    // 最大移动速度
    maxMoveSpeed: 0,
    // 加速度
    accel: 0,
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    // 初始化跳跃动作
    this.jumpAction = this.setJumpAction(); // this.node.runAction(this.jumpAction);
    // 加速度方向开关

    this.accLeft = false;
    this.accRight = false; // 主角当前水平方向速度

    this.xSpeed = 0;
    this.currentHeight = 0; // 初始化键盘输入监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  setJumpAction: function setJumpAction() {
    // 跳跃上升
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); // 下落

    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn()); // 添加一个回调函数，用于在动作结束时调用我们定义的其他方法

    var callback = cc.callFunc(this.playJumpSound, this); // 不断重复
    // return cc.repeatForever(cc.sequence(jumpUp, jumpDown));

    return cc.sequence(callback, jumpUp, jumpDown);
  },
  playJumpSound: function playJumpSound() {
    // 调用声音引擎播放声音
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    // set a flag when key pressed
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  logNumber: function logNumber() {
    console.log(1);
  },
  onKeyUp: function onKeyUp(event) {
    // a键向左加速，w键跳跃，d向右加速
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;

      case cc.macro.KEY.w:
        if (Math.round(this.currentHeight) == -120) {
          this.node.runAction(this.jumpAction);
        }

        break;
    }
  },
  update: function update(dt) {
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // 限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // if speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    }

    this.currentHeight = this.node.y;

    if (this.node.x <= -480 + this.node.width / 2 || this.node.x >= 480 - this.node.width / 2) {
      this.xSpeed = -this.xSpeed;
    } // 根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt;
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImp1bXBBY3Rpb24iLCJzZXRKdW1wQWN0aW9uIiwiYWNjTGVmdCIsImFjY1JpZ2h0IiwieFNwZWVkIiwiY3VycmVudEhlaWdodCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsImp1bXBVcCIsIm1vdmVCeSIsInYyIiwiZWFzaW5nIiwiZWFzZUN1YmljQWN0aW9uT3V0IiwianVtcERvd24iLCJlYXNlQ3ViaWNBY3Rpb25JbiIsImNhbGxiYWNrIiwiY2FsbEZ1bmMiLCJwbGF5SnVtcFNvdW5kIiwic2VxdWVuY2UiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJkIiwibG9nTnVtYmVyIiwiY29uc29sZSIsImxvZyIsInciLCJNYXRoIiwicm91bmQiLCJub2RlIiwicnVuQWN0aW9uIiwidXBkYXRlIiwiZHQiLCJhYnMiLCJ5IiwieCIsIndpZHRoIiwib25EZXN0cm95Iiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUDtBQUNBQyxJQUFBQSxVQUFVLEVBQUUsQ0FGTDtBQUdQO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQUpQO0FBS1A7QUFDQUMsSUFBQUEsWUFBWSxFQUFF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LEtBQUtBLE1BQXBCO0FBQ0gsS0FmaUIsQ0FnQmxCOzs7QUFDQSxTQUFLbUMsSUFBTCxDQUFVTSxDQUFWLElBQWUsS0FBS3pDLE1BQUwsR0FBY3NDLEVBQTdCO0FBQ0gsR0E3Rkk7QUE4RkxLLEVBQUFBLFNBOUZLLHVCQThGUTtBQUNUO0FBQ0EzRCxJQUFBQSxFQUFFLENBQUNrQixXQUFILENBQWUwQyxHQUFmLENBQW1CNUQsRUFBRSxDQUFDb0IsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUE1QyxFQUFzRCxLQUFLQyxTQUEzRCxFQUFzRSxJQUF0RTtBQUNBdkIsSUFBQUEsRUFBRSxDQUFDa0IsV0FBSCxDQUFlMEMsR0FBZixDQUFtQjVELEVBQUUsQ0FBQ29CLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkcsTUFBNUMsRUFBb0QsS0FBS0MsT0FBekQsRUFBa0UsSUFBbEU7QUFDSDtBQWxHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgIC8vIOS4u+inkui3s+i3g+mrmOW6plxyXG4gICAgICAgICBqdW1wSGVpZ2h0OiAwLFxyXG4gICAgICAgICAvLyDkuLvop5Lot7Pot4PmjIHnu63ml7bpl7RcclxuICAgICAgICAganVtcER1cmF0aW9uOiAwLFxyXG4gICAgICAgICAvLyDmnIDlpKfnp7vliqjpgJ/luqZcclxuICAgICAgICAgbWF4TW92ZVNwZWVkOiAwLFxyXG4gICAgICAgICAvLyDliqDpgJ/luqZcclxuICAgICAgICAgYWNjZWw6IDAsXHJcbiAgICAgICAgIGp1bXBBdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOWIneWni+WMlui3s+i3g+WKqOS9nFxyXG4gICAgICAgIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0aW9uKTtcclxuICAgICAgICAgLy8g5Yqg6YCf5bqm5pa55ZCR5byA5YWzXHJcbiAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgIC8vIOS4u+inkuW9k+WJjeawtOW5s+aWueWQkemAn+W6plxyXG4gICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGVpZ2h0ID0gMDtcclxuICAgICAgICAgLy8g5Yid5aeL5YyW6ZSu55uY6L6T5YWl55uR5ZCsXHJcbiAgICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpOyAgXHJcbiAgICB9LFxyXG4gICAgc2V0SnVtcEFjdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOi3s+i3g+S4iuWNh1xyXG4gICAgICAgIHZhciBqdW1wVXAgPSBjYy5tb3ZlQnkodGhpcy5qdW1wRHVyYXRpb24sIGNjLnYyKDAsIHRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XHJcbiAgICAgICAgLy8g5LiL6JC9XHJcbiAgICAgICAgdmFyIGp1bXBEb3duID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy52MigwLCAtdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluKCkpO1xyXG4gICAgICAgIC8vIOa3u+WKoOS4gOS4quWbnuiwg+WHveaVsO+8jOeUqOS6juWcqOWKqOS9nOe7k+adn+aXtuiwg+eUqOaIkeS7rOWumuS5ieeahOWFtuS7luaWueazlVxyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNjLmNhbGxGdW5jKHRoaXMucGxheUp1bXBTb3VuZCwgdGhpcyk7XHJcbiAgICAgICAgLy8g5LiN5pat6YeN5aSNXHJcbiAgICAgICAgLy8gcmV0dXJuIGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bikpO1xyXG4gICAgICAgIHJldHVybiBjYy5zZXF1ZW5jZShjYWxsYmFjayxqdW1wVXAsIGp1bXBEb3duKTtcclxuICAgIH0sXHJcbiAgICBwbGF5SnVtcFNvdW5kOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g6LCD55So5aOw6Z+z5byV5pOO5pKt5pS+5aOw6Z+zXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbywgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcclxuICAgICAgICAvLyBzZXQgYSBmbGFnIHdoZW4ga2V5IHByZXNzZWRcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbG9nTnVtYmVyOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coMSlcclxuICAgIH0sXHJcbiAgICBvbktleVVwIChldmVudCkge1xyXG4gICAgICAgIC8vIGHplK7lkJHlt6bliqDpgJ/vvIx36ZSu6Lez6LeD77yMZOWQkeWPs+WKoOmAn1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgICAgICBpZihNYXRoLnJvdW5kKHRoaXMuY3VycmVudEhlaWdodCkgPT0gLTEyMClcclxuICAgICAgICAgICAgICAgIHt0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMuanVtcEFjdGlvbik7fVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgLy8g5qC55o2u5b2T5YmN5Yqg6YCf5bqm5pa55ZCR5q+P5bin5pu05paw6YCf5bqmXHJcbiAgICAgICAgaWYgKHRoaXMuYWNjTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjY1JpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6ZmQ5Yi25Li76KeS55qE6YCf5bqm5LiN6IO96LaF6L+H5pyA5aSn5YC8XHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyh0aGlzLnhTcGVlZCkgPiB0aGlzLm1heE1vdmVTcGVlZCApIHtcclxuICAgICAgICAgICAgLy8gaWYgc3BlZWQgcmVhY2ggbGltaXQsIHVzZSBtYXggc3BlZWQgd2l0aCBjdXJyZW50IGRpcmVjdGlvblxyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCA9IHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy54U3BlZWQgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudEhlaWdodCA9IHRoaXMubm9kZS55O1xyXG4gICAgICAgIGlmKHRoaXMubm9kZS54IDw9IC00ODArdGhpcy5ub2RlLndpZHRoLzJ8fHRoaXMubm9kZS54ID49NDgwLXRoaXMubm9kZS53aWR0aC8yKXtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSAtdGhpcy54U3BlZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5qC55o2u5b2T5YmN6YCf5bqm5pu05paw5Li76KeS55qE5L2N572uXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIC8vIOWPlua2iOmUruebmOi+k+WFpeebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19