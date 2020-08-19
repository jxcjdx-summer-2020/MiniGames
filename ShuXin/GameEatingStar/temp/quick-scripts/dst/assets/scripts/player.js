
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbc5fea72pM0qSgO0c0lN/G', 'player');
// scripts/player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    jumpHeight: 0,
    jumpDuration: 0,
    maxMoveSpeed: 0,
    accel: 0,
    canvas: {
      "default": null,
      type: cc.Node
    },
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  setJumpAction: function setJumpAction() {
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn()); // 添加一个回调函数，用于在动作结束时调用我们定义的其他方法

    var callback = cc.callFunc(this.playJumpSound, this); //repeat

    return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
  },
  playJumpSound: function playJumpSound() {
    // play music
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
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // initialize jump action
    this.jumpActon = this.setJumpAction();
    this.node.runAction(this.jumpActon); // accelerate switch

    this.accLeft = false;
    this.accRight = false; // horizontal direction

    this.xSpeed = 0; //initialize keyboard listerner

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    // update the speed through accelerate direction
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // limit the player speed no more than max


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.xSpeed * this.maxMoveSpeed / Math.abs(this.xSpeed);
    }

    this.node.x += this.xSpeed * dt; // Bounce off the wall

    if (this.node.x >= this.canvas.x || this.node.x <= -this.canvas.x) {
      this.xSpeed = -this.xSpeed;
    }
  },
  onDestroy: function onDestroy() {
    // cancel keyboard listerner
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwiY2FudmFzIiwidHlwZSIsIk5vZGUiLCJqdW1wQXVkaW8iLCJBdWRpb0NsaXAiLCJzZXRKdW1wQWN0aW9uIiwianVtcFVwIiwibW92ZUJ5IiwidjIiLCJlYXNpbmciLCJlYXNlQ3ViaWNBY3Rpb25PdXQiLCJqdW1wRG93biIsImVhc2VDdWJpY0FjdGlvbkluIiwiY2FsbGJhY2siLCJjYWxsRnVuYyIsInBsYXlKdW1wU291bmQiLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJvbktleURvd24iLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJhY2NMZWZ0IiwiZCIsImFjY1JpZ2h0Iiwib25LZXlVcCIsIm9uTG9hZCIsImp1bXBBY3RvbiIsIm5vZGUiLCJydW5BY3Rpb24iLCJ4U3BlZWQiLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIktFWV9VUCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJNYXRoIiwiYWJzIiwieCIsIm9uRGVzdHJveSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBRVJDLElBQUFBLFVBQVUsRUFBRSxDQUZKO0FBR1JDLElBQUFBLFlBQVksRUFBRSxDQUhOO0FBSVJDLElBQUFBLFlBQVksRUFBRSxDQUpOO0FBS1JDLElBQUFBLEtBQUssRUFBRSxDQUxDO0FBT1JDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFF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QUFmLENBQW1CeEQsRUFBRSxDQUFDNkMsV0FBSCxDQUFlQyxTQUFmLENBQXlCRSxNQUE1QyxFQUFvRCxLQUFLWCxPQUF6RCxFQUFrRSxJQUFsRTtBQUNIO0FBcEhJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgICAgIGp1bXBIZWlnaHQ6IDAsXHJcbiAgICAgICAganVtcER1cmF0aW9uOiAwLFxyXG4gICAgICAgIG1heE1vdmVTcGVlZDogMCxcclxuICAgICAgICBhY2NlbDogMCxcclxuICAgICAgICBcclxuICAgICAgICBjYW52YXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGp1bXBBdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNldEp1bXBBY3Rpb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBqdW1wVXAgPSBjYy5tb3ZlQnkodGhpcy5qdW1wRHVyYXRpb24sIGNjLnYyKDAsIHRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XHJcbiAgICAgICAgdmFyIGp1bXBEb3duID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy52MigwLCAtdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluKCkpO1xyXG5cclxuICAgICAgICAvLyDmt7vliqDkuIDkuKrlm57osIPlh73mlbDvvIznlKjkuo7lnKjliqjkvZznu5PmnZ/ml7bosIPnlKjmiJHku6zlrprkuYnnmoTlhbbku5bmlrnms5VcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYy5jYWxsRnVuYyh0aGlzLnBsYXlKdW1wU291bmQsIHRoaXMpO1xyXG5cclxuICAgICAgICAvL3JlcGVhdFxyXG4gICAgICAgIHJldHVybiBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24sIGNhbGxiYWNrKSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlKdW1wU291bmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBwbGF5IG11c2ljXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbywgZmFsc2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbktleURvd24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gc2V0IGEgZmxhZyB3aGVuIGtleSBwcmVzc2VkXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uS2V5VXAgKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gdW5zZXQgYSBmbGFnIHdoZW4ga2V5IHJlbGVhc2VkXHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZDogIGZ1bmN0aW9uKCkgeyAgIFxyXG4gICAgICAgIC8vIGluaXRpYWxpemUganVtcCBhY3Rpb25cclxuICAgICAgICB0aGlzLmp1bXBBY3RvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0b24pOyAgXHJcblxyXG4gICAgICAgIC8vIGFjY2VsZXJhdGUgc3dpdGNoXHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBob3Jpem9udGFsIGRpcmVjdGlvblxyXG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcclxuXHJcbiAgICAgICAgLy9pbml0aWFsaXplIGtleWJvYXJkIGxpc3Rlcm5lclxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7ICAgXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHNwZWVkIHRocm91Z2ggYWNjZWxlcmF0ZSBkaXJlY3Rpb25cclxuICAgICAgICBpZih0aGlzLmFjY0xlZnQpe1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5hY2NSaWdodCl7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwqZHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsaW1pdCB0aGUgcGxheWVyIHNwZWVkIG5vIG1vcmUgdGhhbiBtYXhcclxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLnhTcGVlZCkgPiB0aGlzLm1heE1vdmVTcGVlZCl7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy54U3BlZWQqdGhpcy5tYXhNb3ZlU3BlZWQvTWF0aC5hYnModGhpcy54U3BlZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQqZHQ7XHJcblxyXG4gICAgICAgIC8vIEJvdW5jZSBvZmYgdGhlIHdhbGxcclxuICAgICAgICBpZih0aGlzLm5vZGUueCA+PSB0aGlzLmNhbnZhcy54IHx8IHRoaXMubm9kZS54IDw9IC10aGlzLmNhbnZhcy54KXtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSAtdGhpcy54U3BlZWRcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIC8vIGNhbmNlbCBrZXlib2FyZCBsaXN0ZXJuZXJcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgICAgICBcclxufSk7XHJcbiJdfQ==