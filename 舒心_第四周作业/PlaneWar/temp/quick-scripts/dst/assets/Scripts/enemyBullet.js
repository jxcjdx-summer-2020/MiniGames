
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/enemyBullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f297dVtGtZP36mxDzJQVXiS', 'enemyBullet');
// Scripts/enemyBullet.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.speed = 5;
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
      other.node.destroy();
      this.game.gameOver();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZW5lbXlCdWxsZXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsIm9uTG9hZCIsInBhcmVudCIsIm5vZGUiLCJnZXRQYXJlbnQiLCJnYW1lIiwiZ2V0Q29tcG9uZW50IiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImVuYWJsZWREZWJ1Z0RyYXciLCJzdGFydCIsInVwZGF0ZSIsImR0IiwieSIsImRlc3Ryb3kiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiZ3JvdXAiLCJnYW1lT3ZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBQztBQURFLEdBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ04sU0FBS0QsS0FBTCxHQUFXLENBQVg7QUFFQSxTQUFLRSxNQUFMLEdBQVksS0FBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVUsS0FBS0gsTUFBTCxDQUFZSSxZQUFaLENBQXlCLE1BQXpCLENBQVY7QUFHQVYsSUFBQUEsRUFBRSxDQUFDVyxRQUFILENBQVlDLG1CQUFaLEdBQWtDQyxPQUFsQyxHQUEwQyxJQUExQztBQUNBYixJQUFBQSxFQUFFLENBQUNXLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NFLGdCQUFsQyxHQUFxRCxLQUFyRDtBQUNILEdBbEJJO0FBb0JMQyxFQUFBQSxLQXBCSyxtQkFvQkksQ0FFUixDQXRCSTtBQXdCTEMsRUFBQUEsTUF4Qkssa0JBd0JHQyxFQXhCSCxFQXdCTztBQUNSLFNBQUtWLElBQUwsQ0FBVVcsQ0FBVixJQUFhLEtBQUtkLEtBQWxCO0FBQ0EsUUFBRyxLQUFLRyxJQUFMLENBQVVXLENBQVYsR0FBWSxDQUFDLEdBQWhCLEVBQ0ksS0FBS1gsSUFBTCxDQUFVWSxPQUFWO0FBQ1AsR0E1Qkk7QUE2QkxDLEVBQUFBLGdCQUFnQixFQUFDLDBCQUFTQyxLQUFULEVBQWVDLElBQWYsRUFBb0I7QUFDakMsUUFBR0QsS0FBSyxDQUFDZCxJQUFOLENBQVdnQixLQUFYLElBQW9CLFFBQXZCLEVBQ0E7QUFDSSxXQUFLaEIsSUFBTCxDQUFVWSxPQUFWO0FBQ0FFLE1BQUFBLEtBQUssQ0FBQ2QsSUFBTixDQUFXWSxPQUFYO0FBQ0EsV0FBS1YsSUFBTCxDQUFVZSxRQUFWO0FBQ0g7QUFDSjtBQXBDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcGVlZDowLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQ9NVxyXG5cclxuICAgICAgICB0aGlzLnBhcmVudD10aGlzLm5vZGUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lPXRoaXMucGFyZW50LmdldENvbXBvbmVudCgnZ2FtZScpO1xyXG5cclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQ9dHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnktPXRoaXMuc3BlZWRcclxuICAgICAgICBpZih0aGlzLm5vZGUueTwtNDAwKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6ZnVuY3Rpb24ob3RoZXIsc2VsZil7ICAgICAgICAgICAgICBcclxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09ICdwbGF5ZXInKVxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTsgXHJcbiAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19