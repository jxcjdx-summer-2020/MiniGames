
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/buff.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30187+WBrZODqspv2DNXmBH', 'buff');
// Scripts/buff.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.speed = 1;
    this.parent = this.node.getParent();
    this.game = this.parent.getComponent('game');
    cc.director.getCollisionManager().enabled = true;
    cc.director.getCollisionManager().enabledDebugDraw = false;
  },
  start: function start() {},
  update: function update(dt) {
    this.node.y -= this.speed;
    if (this.node.y < -400) this.node.destroy();
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == 'player') {
      this.node.destroy();
      this.game.tran_Bullet(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcYnVmZi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwZWVkIiwib25Mb2FkIiwicGFyZW50Iiwibm9kZSIsImdldFBhcmVudCIsImdhbWUiLCJnZXRDb21wb25lbnQiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwiZW5hYmxlZERlYnVnRHJhdyIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJ5IiwiZGVzdHJveSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJncm91cCIsInRyYW5fQnVsbGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFDO0FBREUsR0FIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0s7QUFDTixTQUFLRCxLQUFMLEdBQVcsQ0FBWDtBQUdBLFNBQUtFLE1BQUwsR0FBWSxLQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBVSxLQUFLSCxNQUFMLENBQVlJLFlBQVosQ0FBeUIsTUFBekIsQ0FBVjtBQUNBVixJQUFBQSxFQUFFLENBQUNXLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NDLE9BQWxDLEdBQTBDLElBQTFDO0FBQ0FiLElBQUFBLEVBQUUsQ0FBQ1csUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0UsZ0JBQWxDLEdBQXFELEtBQXJEO0FBQ0gsR0FqQkk7QUFtQkxDLEVBQUFBLEtBbkJLLG1CQW1CSSxDQUVSLENBckJJO0FBdUJMQyxFQUFBQSxNQXZCSyxrQkF1QkdDLEVBdkJILEVBdUJPO0FBQ1IsU0FBS1YsSUFBTCxDQUFVVyxDQUFWLElBQWEsS0FBS2QsS0FBbEI7QUFDQSxRQUFHLEtBQUtHLElBQUwsQ0FBVVcsQ0FBVixHQUFZLENBQUMsR0FBaEIsRUFDSSxLQUFLWCxJQUFMLENBQVVZLE9BQVY7QUFDUCxHQTNCSTtBQTRCTEMsRUFBQUEsZ0JBQWdCLEVBQUMsMEJBQVNDLEtBQVQsRUFBZUMsSUFBZixFQUFvQjtBQUNqQyxRQUFHRCxLQUFLLENBQUNkLElBQU4sQ0FBV2dCLEtBQVgsSUFBb0IsUUFBdkIsRUFDQTtBQUNJLFdBQUtoQixJQUFMLENBQVVZLE9BQVY7QUFDQSxXQUFLVixJQUFMLENBQVVlLFdBQVYsQ0FBc0IsQ0FBdEI7QUFDSDtBQUNKO0FBbENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHNwZWVkOjAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZD0xXHJcblxyXG5cclxuICAgICAgICB0aGlzLnBhcmVudD10aGlzLm5vZGUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lPXRoaXMucGFyZW50LmdldENvbXBvbmVudCgnZ2FtZScpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkPXRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMubm9kZS55LT10aGlzLnNwZWVkXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnk8LTQwMClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0sXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOmZ1bmN0aW9uKG90aGVyLHNlbGYpeyAgICAgICAgICAgICAgXHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSAncGxheWVyJykgXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUudHJhbl9CdWxsZXQoMSk7IFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=