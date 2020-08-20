
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/bullet_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48f148rpLtNhIqvV6p6MYdj', 'bullet_2');
// Scripts/bullet_2.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.speed = 10;
    this.parent = this.node.getParent();
    this.game = this.parent.getComponent('game');
    cc.director.getCollisionManager().enabled = true;
    cc.director.getCollisionManager().enabledDebugDraw = false;
  },
  start: function start() {},
  update: function update(dt) {
    this.node.y += this.speed;
    if (this.node.y > 470) this.node.destroy();
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == 'enemy') {
      var X = other.node.x;
      var Y = other.node.y;
      other.node.destroy();
      this.game.addBoom(X, Y);
      this.game.addScore();
    } else if (other.node.group == 'enemybuff') {
      var X = other.node.x;
      var Y = other.node.y;
      other.node.destroy();
      this.game.addBuff(X, Y);
      this.game.addScore();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcYnVsbGV0XzIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsIm9uTG9hZCIsInBhcmVudCIsIm5vZGUiLCJnZXRQYXJlbnQiLCJnYW1lIiwiZ2V0Q29tcG9uZW50IiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImVuYWJsZWREZWJ1Z0RyYXciLCJzdGFydCIsInVwZGF0ZSIsImR0IiwieSIsImRlc3Ryb3kiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiZ3JvdXAiLCJYIiwieCIsIlkiLCJhZGRCb29tIiwiYWRkU2NvcmUiLCJhZGRCdWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFDO0FBREUsR0FIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0s7QUFDTixTQUFLRCxLQUFMLEdBQVcsRUFBWDtBQUNBLFNBQUtFLE1BQUwsR0FBWSxLQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBVSxLQUFLSCxNQUFMLENBQVlJLFlBQVosQ0FBeUIsTUFBekIsQ0FBVjtBQUNBVixJQUFBQSxFQUFFLENBQUNXLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NDLE9BQWxDLEdBQTBDLElBQTFDO0FBQ0FiLElBQUFBLEVBQUUsQ0FBQ1csUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0UsZ0JBQWxDLEdBQXFELEtBQXJEO0FBQ0gsR0FmSTtBQWlCTEMsRUFBQUEsS0FqQkssbUJBaUJJLENBRVIsQ0FuQkk7QUFxQkxDLEVBQUFBLE1BckJLLGtCQXFCR0MsRUFyQkgsRUFxQk87QUFDUixTQUFLVixJQUFMLENBQVVXLENBQVYsSUFBYSxLQUFLZCxLQUFsQjtBQUNBLFFBQUcsS0FBS0csSUFBTCxDQUFVVyxDQUFWLEdBQVksR0FBZixFQUNJLEtBQUtYLElBQUwsQ0FBVVksT0FBVjtBQUNQLEdBekJJO0FBMEJMQyxFQUFBQSxnQkFBZ0IsRUFBQywwQkFBU0MsS0FBVCxFQUFlQyxJQUFmLEVBQW9CO0FBQ2pDLFFBQUdELEtBQUssQ0FBQ2QsSUFBTixDQUFXZ0IsS0FBWCxJQUFvQixPQUF2QixFQUNBO0FBQ0ksVUFBSUMsQ0FBQyxHQUFDSCxLQUFLLENBQUNkLElBQU4sQ0FBV2tCLENBQWpCO0FBQ0EsVUFBSUMsQ0FBQyxHQUFDTCxLQUFLLENBQUNkLElBQU4sQ0FBV1csQ0FBakI7QUFDQUcsTUFBQUEsS0FBSyxDQUFDZCxJQUFOLENBQVdZLE9BQVg7QUFDQSxXQUFLVixJQUFMLENBQVVrQixPQUFWLENBQWtCSCxDQUFsQixFQUFvQkUsQ0FBcEI7QUFDQSxXQUFLakIsSUFBTCxDQUFVbUIsUUFBVjtBQUNILEtBUEQsTUFRSyxJQUFHUCxLQUFLLENBQUNkLElBQU4sQ0FBV2dCLEtBQVgsSUFBb0IsV0FBdkIsRUFDTDtBQUNJLFVBQUlDLENBQUMsR0FBQ0gsS0FBSyxDQUFDZCxJQUFOLENBQVdrQixDQUFqQjtBQUNBLFVBQUlDLENBQUMsR0FBQ0wsS0FBSyxDQUFDZCxJQUFOLENBQVdXLENBQWpCO0FBQ0FHLE1BQUFBLEtBQUssQ0FBQ2QsSUFBTixDQUFXWSxPQUFYO0FBQ0EsV0FBS1YsSUFBTCxDQUFVb0IsT0FBVixDQUFrQkwsQ0FBbEIsRUFBb0JFLENBQXBCO0FBQ0EsV0FBS2pCLElBQUwsQ0FBVW1CLFFBQVY7QUFDSDtBQUNKO0FBM0NJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHNwZWVkOjAsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZD0xMDtcclxuICAgICAgICB0aGlzLnBhcmVudD10aGlzLm5vZGUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lPXRoaXMucGFyZW50LmdldENvbXBvbmVudCgnZ2FtZScpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkPXRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMubm9kZS55Kz10aGlzLnNwZWVkO1xyXG4gICAgICAgIGlmKHRoaXMubm9kZS55PjQ3MClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0sXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOmZ1bmN0aW9uKG90aGVyLHNlbGYpeyAgICAgICAgICAgICAgXHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnZW5lbXknKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBYPW90aGVyLm5vZGUueDtcclxuICAgICAgICAgICAgdmFyIFk9b3RoZXIubm9kZS55OyAgIFxyXG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFkZEJvb20oWCxZKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFkZFNjb3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSAnZW5lbXlidWZmJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBYPW90aGVyLm5vZGUueDtcclxuICAgICAgICAgICAgdmFyIFk9b3RoZXIubm9kZS55OyAgIFxyXG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFkZEJ1ZmYoWCxZKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFkZFNjb3JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==