
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7078aKatUJAjYFHiAx343w0', 'player');
// Scripts/player.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 0,
    bulletrDuration: 0,
    timer: 0
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

      case cc.macro.KEY.w:
        this.accFlow = true;
        break;

      case cc.macro.KEY.s:
        this.accDown = true;
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

      case cc.macro.KEY.w:
        this.accFlow = false;
        break;

      case cc.macro.KEY.s:
        this.accDown = false;
        break;
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.parent = this.node.getParent();
    this.game = this.parent.getComponent('game');
    this.accLeft = false;
    this.accRight = false;
    this.accDown = false;
    this.accFlow = false;
    cc.director.getCollisionManager().enabled = true;
    cc.director.getCollisionManager().enabledDebugDraw = false; // infiniate keyboard listerner

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    // cancel keyboard listerner 
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    if (this.accLeft && this.node.x > -270) this.node.x -= this.speed;else if (this.accRight && this.node.x < 270) this.node.x += this.speed;else if (this.accFlow && this.node.y < 425) this.node.y += this.speed;else if (this.accDown && this.node.y > -425) this.node.y -= this.speed;else ;

    if (this.timer > this.bulletrDuration) {
      this.game.spawnNewBullet(this.node.x, this.node.y + this.node.height / 2 + 13);
      this.timer = 0;
      return;
    }

    this.timer += dt;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.node.group == 'enemy' || other.node.group == 'enemybuff') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJidWxsZXRyRHVyYXRpb24iLCJ0aW1lciIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImFjY0xlZnQiLCJkIiwiYWNjUmlnaHQiLCJ3IiwiYWNjRmxvdyIsInMiLCJhY2NEb3duIiwib25LZXlVcCIsIm9uTG9hZCIsInBhcmVudCIsIm5vZGUiLCJnZXRQYXJlbnQiLCJnYW1lIiwiZ2V0Q29tcG9uZW50IiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImVuYWJsZWREZWJ1Z0RyYXciLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIktFWV9VUCIsIm9uRGVzdHJveSIsIm9mZiIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJ4IiwieSIsInNwYXduTmV3QnVsbGV0IiwiaGVpZ2h0Iiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImdyb3VwIiwiZGVzdHJveSIsImdhbWVPdmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFDLENBREU7QUFFUkMsSUFBQUEsZUFBZSxFQUFDLENBRlI7QUFHUkMsSUFBQUEsS0FBSyxFQUFDO0FBSEUsR0FIUDtBQVFMQyxFQUFBQSxTQVJLLHFCQVFNQyxLQVJOLEVBUWE7QUFDZDtBQUNBLFlBQU9BLEtBQUssQ0FBQ0MsT0FBYjtBQUNJLFdBQUtULEVBQUUsQ0FBQ1UsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxCO0FBQ0ksYUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQTs7QUFDSixXQUFLYixFQUFFLENBQUNVLEtBQUgsQ0FBU0MsR0FBVCxDQUFhRyxDQUFsQjtBQUNJLGFBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQTs7QUFDSixXQUFLZixFQUFFLENBQUNVLEtBQUgsQ0FBU0MsR0FBVCxDQUFhSyxDQUFsQjtBQUNJLGFBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0E7O0FBQ0osV0FBS2pCLEVBQUUsQ0FBQ1UsS0FBSCxDQUFTQyxHQUFULENBQWFPLENBQWxCO0FBQ0ksYUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQTtBQVpSO0FBY0gsR0F4Qkk7QUEwQkxDLEVBQUFBLE9BMUJLLG1CQTBCSVosS0ExQkosRUEwQlc7QUFDWjtBQUNBLFlBQU9BLEtBQUssQ0FBQ0MsT0FBYjtBQUNJLFdBQUtULEVBQUUsQ0FBQ1UsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxCO0FBQ0ksYUFBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQTs7QUFDSixXQUFLYixFQUFFLENBQUNVLEtBQUgsQ0FBU0MsR0FBVCxDQUFhRyxDQUFsQjtBQUNJLGFBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQTs7QUFDSixXQUFLZixFQUFFLENBQUNVLEtBQUgsQ0FBU0MsR0FBVCxDQUFhSyxDQUFsQjtBQUNJLGFBQUtDLE9BQUwsR0FBYSxLQUFiO0FBQ0E7O0FBQ0osV0FBS2pCLEVBQUUsQ0FBQ1UsS0FBSCxDQUFTQyxHQUFULENBQWFPLENBQWxCO0FBQ0ksYUFBS0MsT0FBTCxHQUFhLEtBQWI7QUFDQTtBQVpSO0FBY0gsR0ExQ0k7QUEyQ0w7QUFFQUUsRUFBQUEsTUE3Q0ssb0JBNkNLO0FBRU4sU0FBS0MsTUFBTCxHQUFZLEtBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFVLEtBQUtILE1BQUwsQ0FBWUksWUFBWixDQUF5QixNQUF6QixDQUFWO0FBRUEsU0FBS2IsT0FBTCxHQUFlLEtBQWY7QUFDQSxTQUFLRSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBS0ksT0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLRixPQUFMLEdBQWEsS0FBYjtBQUdBakIsSUFBQUEsRUFBRSxDQUFDMkIsUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0MsT0FBbEMsR0FBMEMsSUFBMUM7QUFDQTdCLElBQUFBLEVBQUUsQ0FBQzJCLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NFLGdCQUFsQyxHQUFxRCxLQUFyRCxDQVpNLENBY047O0FBQ0E5QixJQUFBQSxFQUFFLENBQUMrQixXQUFILENBQWVDLEVBQWYsQ0FBa0JoQyxFQUFFLENBQUNpQyxXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTNDLEVBQXFELEtBQUs1QixTQUExRCxFQUFxRSxJQUFyRTtBQUNBUCxJQUFBQSxFQUFFLENBQUMrQixXQUFILENBQWVDLEVBQWYsQ0FBa0JoQyxFQUFFLENBQUNpQyxXQUFILENBQWVDLFNBQWYsQ0FBeUJFLE1BQTNDLEVBQW1ELEtBQUtoQixPQUF4RCxFQUFpRSxJQUFqRTtBQUNILEdBOURJO0FBZ0VMaUIsRUFBQUEsU0FoRUssdUJBZ0VRO0FBQ1Q7QUFHQXJDLElBQUFBLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZU8sR0FBZixDQUFtQnRDLEVBQUUsQ0FBQ2lDLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBNUMsRUFBc0QsS0FBSzVCLFNBQTNELEVBQXNFLElBQXRFO0FBQ0FQLElBQUFBLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZU8sR0FBZixDQUFtQnRDLEVBQUUsQ0FBQ2lDLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkUsTUFBNUMsRUFBb0QsS0FBS2hCLE9BQXpELEVBQWtFLElBQWxFO0FBQ0gsR0F0RUk7QUF1RUxtQixFQUFBQSxLQXZFSyxtQkF1RUksQ0FFUixDQXpFSTtBQTJFTkMsRUFBQUEsTUEzRU0sa0JBMkVFQyxFQTNFRixFQTJFTTtBQUNQLFFBQUcsS0FBSzVCLE9BQUwsSUFBYyxLQUFLVSxJQUFMLENBQVVtQixDQUFWLEdBQVksQ0FBQyxHQUE5QixFQUNJLEtBQUtuQixJQUFMLENBQVVtQixDQUFWLElBQWUsS0FBS3RDLEtBQXBCLENBREosS0FFSyxJQUFHLEtBQUtXLFFBQUwsSUFBZSxLQUFLUSxJQUFMLENBQVVtQixDQUFWLEdBQVksR0FBOUIsRUFDRCxLQUFLbkIsSUFBTCxDQUFVbUIsQ0FBVixJQUFhLEtBQUt0QyxLQUFsQixDQURDLEtBRUEsSUFBRyxLQUFLYSxPQUFMLElBQWMsS0FBS00sSUFBTCxDQUFVb0IsQ0FBVixHQUFZLEdBQTdCLEVBQ0QsS0FBS3BCLElBQUwsQ0FBVW9CLENBQVYsSUFBYSxLQUFLdkMsS0FBbEIsQ0FEQyxLQUVBLElBQUcsS0FBS2UsT0FBTCxJQUFjLEtBQUtJLElBQUwsQ0FBVW9CLENBQVYsR0FBWSxDQUFDLEdBQTlCLEVBQ0QsS0FBS3BCLElBQUwsQ0FBVW9CLENBQVYsSUFBYSxLQUFLdkMsS0FBbEIsQ0FEQyxLQUdGOztBQUVILFFBQUksS0FBS0UsS0FBTCxHQUFhLEtBQUtELGVBQXRCLEVBQXVDO0FBQ25DLFdBQUtvQixJQUFMLENBQVVtQixjQUFWLENBQXlCLEtBQUtyQixJQUFMLENBQVVtQixDQUFuQyxFQUFxQyxLQUFLbkIsSUFBTCxDQUFVb0IsQ0FBVixHQUFZLEtBQUtwQixJQUFMLENBQVVzQixNQUFWLEdBQWlCLENBQTdCLEdBQStCLEVBQXBFO0FBQ0EsV0FBS3ZDLEtBQUwsR0FBVyxDQUFYO0FBQ0E7QUFDSDs7QUFDRCxTQUFLQSxLQUFMLElBQWNtQyxFQUFkO0FBQ0gsR0E3Rkk7QUErRkxLLEVBQUFBLGdCQUFnQixFQUFDLDBCQUFTQyxLQUFULEVBQWVDLElBQWYsRUFBb0I7QUFDakMsUUFBR0QsS0FBSyxDQUFDeEIsSUFBTixDQUFXMEIsS0FBWCxJQUFvQixPQUFwQixJQUErQkYsS0FBSyxDQUFDeEIsSUFBTixDQUFXMEIsS0FBWCxJQUFvQixXQUF0RCxFQUNBO0FBQ0ksV0FBSzFCLElBQUwsQ0FBVTJCLE9BQVY7QUFDQUgsTUFBQUEsS0FBSyxDQUFDeEIsSUFBTixDQUFXMkIsT0FBWDtBQUNBLFdBQUt6QixJQUFMLENBQVUwQixRQUFWO0FBQ0g7QUFDSjtBQXRHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcGVlZDowLFxyXG4gICAgICAgIGJ1bGxldHJEdXJhdGlvbjowLFxyXG4gICAgICAgIHRpbWVyOjAsXHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duIChldmVudCkge1xyXG4gICAgICAgIC8vIHNldCBhIGZsYWcgd2hlbiBrZXkgcHJlc3NlZFxyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NGbG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NEb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25LZXlVcCAoZXZlbnQpIHtcclxuICAgICAgICAvLyB1bnNldCBhIGZsYWcgd2hlbiBrZXkgcmVsZWFzZWRcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NGbG93PWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0Rvd249ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJlbnQ9dGhpcy5ub2RlLmdldFBhcmVudCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZT10aGlzLnBhcmVudC5nZXRDb21wb25lbnQoJ2dhbWUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjRG93bj1mYWxzZTtcclxuICAgICAgICB0aGlzLmFjY0Zsb3c9ZmFsc2U7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkPXRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gaW5maW5pYXRlIGtleWJvYXJkIGxpc3Rlcm5lclxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7ICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgLy8gY2FuY2VsIGtleWJvYXJkIGxpc3Rlcm5lciBcclxuICAgICAgIFxyXG5cclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICBcclxuICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuYWNjTGVmdCYmdGhpcy5ub2RlLng+LTI3MClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZDsgICAgIFxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5hY2NSaWdodCYmdGhpcy5ub2RlLng8MjcwKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCs9dGhpcy5zcGVlZDtcclxuICAgICAgICBlbHNlIGlmKHRoaXMuYWNjRmxvdyYmdGhpcy5ub2RlLnk8NDI1KVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSs9dGhpcy5zcGVlZDtcclxuICAgICAgICBlbHNlIGlmKHRoaXMuYWNjRG93biYmdGhpcy5ub2RlLnk+LTQyNSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnktPXRoaXMuc3BlZWQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiB0aGlzLmJ1bGxldHJEdXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc3Bhd25OZXdCdWxsZXQodGhpcy5ub2RlLngsdGhpcy5ub2RlLnkrdGhpcy5ub2RlLmhlaWdodC8yKzEzKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lcj0wO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7ICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6ZnVuY3Rpb24ob3RoZXIsc2VsZil7ICAgICAgICAgICAgICBcclxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09ICdlbmVteScgfHwgb3RoZXIubm9kZS5ncm91cCA9PSAnZW5lbXlidWZmJykgXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpOyBcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5nYW1lT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgIFxyXG59KTtcclxuIl19