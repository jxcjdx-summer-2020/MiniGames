
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/enemyPlane_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c919dWKWZhJeplIUv81qd4t', 'enemyPlane_2');
// Scripts/enemyPlane_2.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 0,
    bulletrDuration: 0,
    timer: 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.bulletrDuration = 0.7;
    this.timer = 0.8;
    this.speed = 3;
    this.parent = this.node.getParent();
    this.game = this.parent.getComponent('game');
  },
  update: function update(dt) {
    this.node.y -= this.speed;
    if (this.node.y < -500) this.node.destroy();

    if (this.timer > this.bulletrDuration) {
      this.game.spawnEnemyBullet(this.node.x, this.node.y + this.node.height / 2 - 65);
      this.timer = 0;
      return;
    }

    this.timer += dt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZW5lbXlQbGFuZV8yLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJidWxsZXRyRHVyYXRpb24iLCJ0aW1lciIsIm9uTG9hZCIsInBhcmVudCIsIm5vZGUiLCJnZXRQYXJlbnQiLCJnYW1lIiwiZ2V0Q29tcG9uZW50IiwidXBkYXRlIiwiZHQiLCJ5IiwiZGVzdHJveSIsInNwYXduRW5lbXlCdWxsZXQiLCJ4IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFDLENBREU7QUFFUkMsSUFBQUEsZUFBZSxFQUFDLENBRlI7QUFHUkMsSUFBQUEsS0FBSyxFQUFDO0FBSEUsR0FIUDtBQVNMO0FBRUFDLEVBQUFBLE1BWEssb0JBV0s7QUFDTixTQUFLRixlQUFMLEdBQXFCLEdBQXJCO0FBQ0EsU0FBS0MsS0FBTCxHQUFXLEdBQVg7QUFDQSxTQUFLRixLQUFMLEdBQVcsQ0FBWDtBQUNBLFNBQUtJLE1BQUwsR0FBWSxLQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBVSxLQUFLSCxNQUFMLENBQVlJLFlBQVosQ0FBeUIsTUFBekIsQ0FBVjtBQUVILEdBbEJJO0FBcUJMQyxFQUFBQSxNQXJCSyxrQkFxQkdDLEVBckJILEVBcUJPO0FBQ1IsU0FBS0wsSUFBTCxDQUFVTSxDQUFWLElBQWEsS0FBS1gsS0FBbEI7QUFDQSxRQUFHLEtBQUtLLElBQUwsQ0FBVU0sQ0FBVixHQUFZLENBQUMsR0FBaEIsRUFDSSxLQUFLTixJQUFMLENBQVVPLE9BQVY7O0FBRUosUUFBSSxLQUFLVixLQUFMLEdBQWEsS0FBS0QsZUFBdEIsRUFBdUM7QUFDbkMsV0FBS00sSUFBTCxDQUFVTSxnQkFBVixDQUEyQixLQUFLUixJQUFMLENBQVVTLENBQXJDLEVBQXVDLEtBQUtULElBQUwsQ0FBVU0sQ0FBVixHQUFZLEtBQUtOLElBQUwsQ0FBVVUsTUFBVixHQUFpQixDQUE3QixHQUErQixFQUF0RTtBQUNBLFdBQUtiLEtBQUwsR0FBVyxDQUFYO0FBQ0E7QUFDSDs7QUFDRCxTQUFLQSxLQUFMLElBQWNRLEVBQWQ7QUFDSDtBQWhDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcGVlZDowLFxyXG4gICAgICAgIGJ1bGxldHJEdXJhdGlvbjowLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5idWxsZXRyRHVyYXRpb249MC43O1xyXG4gICAgICAgIHRoaXMudGltZXI9MC44O1xyXG4gICAgICAgIHRoaXMuc3BlZWQ9MztcclxuICAgICAgICB0aGlzLnBhcmVudD10aGlzLm5vZGUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lPXRoaXMucGFyZW50LmdldENvbXBvbmVudCgnZ2FtZScpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUueS09dGhpcy5zcGVlZDtcclxuICAgICAgICBpZih0aGlzLm5vZGUueTwtNTAwKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpOyBcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiB0aGlzLmJ1bGxldHJEdXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc3Bhd25FbmVteUJ1bGxldCh0aGlzLm5vZGUueCx0aGlzLm5vZGUueSt0aGlzLm5vZGUuaGVpZ2h0LzItNjUpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyPTA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDsgICBcclxuICAgIH0sICAgIFxyXG4gICAgXHJcbn0pO1xyXG4iXX0=