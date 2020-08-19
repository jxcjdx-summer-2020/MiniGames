
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
cc._RF.push(module, 'b8694eNs5xIJrF83XSRs+f5', 'Player');
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
    accel: 0
  },
  setJumpAction: function setJumpAction() {
    // 跳跃上升
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); // 下落

    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn()); // 不断重复

    return cc.sequence(jumpUp, jumpDown);
  },
  // LIFE-CYCLE CALLBACKS:
  onKeyDown: function onKeyDown(event) {
    // set a flag when key pressed
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;

      case cc.macro.KEY.w:
        if (Math.round(this.node.y) == -120) {
          this.jumpAction = this.setJumpAction();
          this.node.runAction(this.jumpAction);
        }

        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // unset a flag when key released
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  onLoad: function onLoad() {
    // 初始化跳跃动作
    // this.jumpAction = this.setJumpAction();
    // this.node.runAction(this.jumpAction);
    // 加速度方向开关
    this.accLeft = false;
    this.accRight = false; // 主角当前水平方向速度

    this.xSpeed = 0; // 初始化键盘输入监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  spawnNewStar: function spawnNewStar() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    this.length = this.node.width / 2; // 根据当前加速度方向每帧更新速度

    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // 限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // if speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } // 根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt;

    if (this.node.x <= -480 + this.length || this.node.x >= 480 - this.length) {
      this.node.x = -this.xSpeed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwic2V0SnVtcEFjdGlvbiIsImp1bXBVcCIsIm1vdmVCeSIsInYyIiwiZWFzaW5nIiwiZWFzZUN1YmljQWN0aW9uT3V0IiwianVtcERvd24iLCJlYXNlQ3ViaWNBY3Rpb25JbiIsInNlcXVlbmNlIiwib25LZXlEb3duIiwiZXZlbnQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJhIiwiYWNjTGVmdCIsImQiLCJhY2NSaWdodCIsInciLCJNYXRoIiwicm91bmQiLCJub2RlIiwieSIsImp1bXBBY3Rpb24iLCJydW5BY3Rpb24iLCJvbktleVVwIiwib25Mb2FkIiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJvbkRlc3Ryb3kiLCJvZmYiLCJzcGF3bk5ld1N0YXIiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwibGVuZ3RoIiwid2lkdGgiLCJhYnMiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUDtBQUNBQyxJQUFBQSxVQUFVLEVBQUUsQ0FGTDtBQUdQO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQUpQO0FBS1A7QUFDQUMsSUFBQUEsWUFBWSxFQUFFLENBTlA7QUFPUDtBQUNBQyxJQUFBQSxLQUFLLEVBQUU7QUFSQSxHQUhQO0FBYUxDLEVBQUFBLGFBQWEsRUFBRSx5QkFBWTtBQUN2QjtBQUNBLFFBQUlDLE1BQU0sR0FBR1QsRUFBRSxDQUFD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QixJQUFMLENBQVVzQixDQUFWLElBQWMsQ0FBQyxHQUFELEdBQUssS0FBS0gsTUFBeEIsSUFBbUMsS0FBS25CLElBQUwsQ0FBVXNCLENBQVYsSUFBYyxNQUFJLEtBQUtILE1BQTdELEVBQXFFO0FBQ2pFLFdBQUtuQixJQUFMLENBQVVzQixDQUFWLEdBQWMsQ0FBQyxLQUFLaEIsTUFBcEI7QUFFSDtBQUNKO0FBN0dRLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgLy8g5Li76KeS6Lez6LeD6auY5bqmXHJcbiAgICAgICAgIGp1bXBIZWlnaHQ6IDAsXHJcbiAgICAgICAgIC8vIOS4u+inkui3s+i3g+aMgee7reaXtumXtFxyXG4gICAgICAgICBqdW1wRHVyYXRpb246IDAsXHJcbiAgICAgICAgIC8vIOacgOWkp+enu+WKqOmAn+W6plxyXG4gICAgICAgICBtYXhNb3ZlU3BlZWQ6IDAsXHJcbiAgICAgICAgIC8vIOWKoOmAn+W6plxyXG4gICAgICAgICBhY2NlbDogMCxcclxuICAgIH0sXHJcbiAgICBzZXRKdW1wQWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g6Lez6LeD5LiK5Y2HXHJcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MudjIoMCwgdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTtcclxuICAgICAgICAvLyDkuIvokL1cclxuICAgICAgICB2YXIganVtcERvd24gPSBjYy5tb3ZlQnkodGhpcy5qdW1wRHVyYXRpb24sIGNjLnYyKDAsIC10aGlzLmp1bXBIZWlnaHQpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSk7XHJcbiAgICAgICAgLy8g5LiN5pat6YeN5aSNXHJcbiAgICAgICAgcmV0dXJuIGNjLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvbktleURvd24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gc2V0IGEgZmxhZyB3aGVuIGtleSBwcmVzc2VkXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgaWYoTWF0aC5yb3VuZCh0aGlzLm5vZGUueSk9PS0xMjApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5VXAgKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gdW5zZXQgYSBmbGFnIHdoZW4ga2V5IHJlbGVhc2VkXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOWIneWni+WMlui3s+i3g+WKqOS9nFxyXG4gICAgICAgIC8vIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0aW9uKTtcclxuICAgICAgICAvLyDliqDpgJ/luqbmlrnlkJHlvIDlhbNcclxuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8g5Li76KeS5b2T5YmN5rC05bmz5pa55ZCR6YCf5bqmXHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbplK7nm5jovpPlhaXnm5HlkKxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpOyAgIFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyDlj5bmtojplK7nm5jovpPlhaXnm5HlkKxcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduTmV3U3RhcjpmdW5jdGlvbigpe1xyXG4gICAgICAgLy8g5Y+W5raI6ZSu55uY6L6T5YWl55uR5ZCsXHJcbiAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuXHJcbiAgIH0sXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmxlbmd0aD10aGlzLm5vZGUud2lkdGgvMlxyXG4gICAgLy8g5qC55o2u5b2T5YmN5Yqg6YCf5bqm5pa55ZCR5q+P5bin5pu05paw6YCf5bqmXHJcbiAgICBpZiAodGhpcy5hY2NMZWZ0KSB7XHJcbiAgICAgICAgdGhpcy54U3BlZWQgLT0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFjY1JpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgfVxyXG4gICAgLy8g6ZmQ5Yi25Li76KeS55qE6YCf5bqm5LiN6IO96LaF6L+H5pyA5aSn5YC8XHJcbiAgICBpZiAoIE1hdGguYWJzKHRoaXMueFNwZWVkKSA+IHRoaXMubWF4TW92ZVNwZWVkICkge1xyXG4gICAgICAgIC8vIGlmIHNwZWVkIHJlYWNoIGxpbWl0LCB1c2UgbWF4IHNwZWVkIHdpdGggY3VycmVudCBkaXJlY3Rpb25cclxuICAgICAgICB0aGlzLnhTcGVlZCA9IHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy54U3BlZWQgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XHJcbiAgICB9XHJcbiAgICAvLyDmoLnmja7lvZPliY3pgJ/luqbmm7TmlrDkuLvop5LnmoTkvY3nva5cclxuICAgIHRoaXMubm9kZS54ICs9IHRoaXMueFNwZWVkICogZHQ7XHJcbiAgICBpZih0aGlzLm5vZGUueDw9KC00ODArdGhpcy5sZW5ndGgpIHx8IHRoaXMubm9kZS54Pj0oNDgwLXRoaXMubGVuZ3RoKSl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggPSAtdGhpcy54U3BlZWQgO1xyXG5cclxuICAgIH1cclxufVxyXG59KTtcclxuIl19