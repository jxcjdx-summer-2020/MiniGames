
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/enemy_01.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c53afiRKr5GJqBKEx9LyNIU', 'enemy_01');
// Script/enemy_01.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    initHp: {
      "default": 1
    },
    HP: {
      "default": 1
    },
    ySpeed: {
      "default": 3,
      tooltip: '移动到底部需要多少时间'
    }
  },
  // LIFE-CYCLE CALLBACKS:
  hitAnimation: function hitAnimation() {
    var _this = this;

    // 击中执行动画
    var node = this.node;
    var anim = this.getComponent(cc.Animation);
    var name = node.name;
    node.hide = false;

    if (this.HP === 0) {
      var animName = "".concat(name, "_ruin");
      var audioName = "".concat(name, "_down");
      node.stopAllActions();
      $base.count(this.node.grade);
      anim.on('finished', function () {
        // console.log('结束');
        anim.off('finished');
        var object_pool = cc.find('Canvas/object_pool').getComponent('object_pool');
        node.hide = true;
        anim.node.runAction(cc.hide());
        _this.HP = _this.getInitHp(); // console.log(this, 'this.getInitHp()');

        anim.setCurrentTime(0, animName);
        node.ySpeed = _this.ySpeed;
        object_pool.recyclePool({
          name: name,
          node: node
        });
        _this.isHit = false;
      }, anim);
      anim.play(animName);
      $base.audio.play(audioName);
    } else {
      var _animName = "".concat(name, "_hit"); // console.log(animName,this, this.HP, '未灭亡');


      anim.on('finished', function () {
        // console.log('结束');
        anim.off('finished');
        anim.setCurrentTime(0, _animName);
        _this.isHit = false;
      }, anim);
      anim.play(_animName);
    }
  },
  hit: function hit(ruin) {
    this.HP -= ruin;
    if (this.HP < 0) this.HP = 0;
    this.hitAnimation();
    return this.HP;
  },
  getInitHp: function getInitHp() {
    return new Number(this.initHp);
  },
  init: function init() {
    this.node.componentName = 'enemy_01';
    this.node.ySpeed = this.ySpeed;
  },
  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    this.init();
  },
  onCollisionEnter: function onCollisionEnter(other) {
    // 碰撞开始
    if (this.isHit) return;
    this.isHit = true;
    var component = other.getComponent(other.node.componentName);
    var harm = component.harm;
    this.hit(harm, other); // console.log(component, other);
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxlbmVteV8wMS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImluaXRIcCIsIkhQIiwieVNwZWVkIiwidG9vbHRpcCIsImhpdEFuaW1hdGlvbiIsIm5vZGUiLCJhbmltIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwibmFtZSIsImhpZGUiLCJhbmltTmFtZSIsImF1ZGlvTmFtZSIsInN0b3BBbGxBY3Rpb25zIiwiJGJhc2UiLCJjb3VudCIsImdyYWRlIiwib24iLCJvZmYiLCJvYmplY3RfcG9vbCIsImZpbmQiLCJydW5BY3Rpb24iLCJnZXRJbml0SHAiLCJzZXRDdXJyZW50VGltZSIsInJlY3ljbGVQb29sIiwiaXNIaXQiLCJwbGF5IiwiYXVkaW8iLCJoaXQiLCJydWluIiwiTnVtYmVyIiwiaW5pdCIsImNvbXBvbmVudE5hbWUiLCJvbkxvYWQiLCJtYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsImNvbXBvbmVudCIsImhhcm0iLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTO0FBREwsS0FEQTtBQUlSQyxJQUFBQSxFQUFFLEVBQUU7QUFDQSxpQkFBUztBQURULEtBSkk7QUFPUkMsSUFBQUEsTUFBTSxFQUFFO0FBQ0osaUJBQVMsQ0FETDtBQUVKQyxNQUFBQSxPQUFPLEVBQUU7QUFGTDtBQVBBLEdBSFA7QUFnQkw7QUFFQUMsRUFBQUEsWUFsQkssMEJBa0JVO0FBQUE7O0FBQUU7QUFDYixR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LEdBQUd0QyxFQUFFLENBQUN1QyxRQUFILENBQVlDLG1CQUFaLEVBQWQ7QUFDQUYsSUFBQUEsT0FBTyxDQUFDRyxPQUFSLEdBQWtCLElBQWxCO0FBQ0EsU0FBS04sSUFBTDtBQUNILEdBOUVJO0FBZ0ZMTyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQjtBQUFFO0FBQ2pDLFFBQUcsS0FBS2QsS0FBUixFQUFlO0FBQ2YsU0FBS0EsS0FBTCxHQUFhLElBQWI7QUFDQSxRQUFJZSxTQUFTLEdBQUdELEtBQUssQ0FBQ2hDLFlBQU4sQ0FBbUJnQyxLQUFLLENBQUNsQyxJQUFOLENBQVcyQixhQUE5QixDQUFoQjtBQUNBLFFBQUlTLElBQUksR0FBR0QsU0FBUyxDQUFDQyxJQUFyQjtBQUNBLFNBQUtiLEdBQUwsQ0FBU2EsSUFBVCxFQUFlRixLQUFmLEVBTCtCLENBTS9CO0FBQ0gsR0F2Rkk7QUF5RkxHLEVBQUFBLEtBekZLLG1CQXlGSSxDQUVSLENBM0ZJLENBNkZMOztBQTdGSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaW5pdEhwOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIEhQOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHlTcGVlZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAzLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAn56e75Yqo5Yiw5bqV6YOo6ZyA6KaB5aSa5bCR5pe26Ze0J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgaGl0QW5pbWF0aW9uKCkgeyAvLyDlh7vkuK3miafooYzliqjnlLtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMubm9kZVxyXG4gICAgICAgIGxldCBhbmltID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICBsZXQgbmFtZSA9IG5vZGUubmFtZVxyXG4gICAgICAgIG5vZGUuaGlkZSA9IGZhbHNlXHJcbiAgICAgICAgaWYodGhpcy5IUCA9PT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgYW5pbU5hbWUgPSBgJHtuYW1lfV9ydWluYFxyXG4gICAgICAgICAgICBsZXQgYXVkaW9OYW1lID0gYCR7bmFtZX1fZG93bmBcclxuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgICAgICRiYXNlLmNvdW50KHRoaXMubm9kZS5ncmFkZSlcclxuICAgICAgICAgICAgYW5pbS5vbignZmluaXNoZWQnLCgpPT57XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfnu5PmnZ8nKTtcclxuICAgICAgICAgICAgICAgIGFuaW0ub2ZmKCdmaW5pc2hlZCcpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RfcG9vbCA9IGNjLmZpbmQoJ0NhbnZhcy9vYmplY3RfcG9vbCcpLmdldENvbXBvbmVudCgnb2JqZWN0X3Bvb2wnKVxyXG4gICAgICAgICAgICAgICAgbm9kZS5oaWRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgYW5pbS5ub2RlLnJ1bkFjdGlvbihjYy5oaWRlKCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkhQID0gdGhpcy5nZXRJbml0SHAoKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcywgJ3RoaXMuZ2V0SW5pdEhwKCknKTtcclxuICAgICAgICAgICAgICAgIGFuaW0uc2V0Q3VycmVudFRpbWUoMCxhbmltTmFtZSlcclxuICAgICAgICAgICAgICAgIG5vZGUueVNwZWVkID0gdGhpcy55U3BlZWRcclxuICAgICAgICAgICAgICAgIG9iamVjdF9wb29sLnJlY3ljbGVQb29sKHsgbmFtZSxub2RlIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzSGl0ID0gZmFsc2VcclxuICAgICAgICAgICAgfSxhbmltKTtcclxuICAgICAgICAgICAgYW5pbS5wbGF5KGFuaW1OYW1lKVxyXG4gICAgICAgICAgICAkYmFzZS5hdWRpby5wbGF5KGF1ZGlvTmFtZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGFuaW1OYW1lID0gYCR7bmFtZX1faGl0YFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbmltTmFtZSx0aGlzLCB0aGlzLkhQLCAn5pyq54Gt5LqhJyk7XHJcbiAgICAgICAgICAgIGFuaW0ub24oJ2ZpbmlzaGVkJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+e7k+adnycpO1xyXG4gICAgICAgICAgICAgICAgYW5pbS5vZmYoJ2ZpbmlzaGVkJylcclxuICAgICAgICAgICAgICAgIGFuaW0uc2V0Q3VycmVudFRpbWUoMCxhbmltTmFtZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNIaXQgPSBmYWxzZVxyXG4gICAgICAgICAgICB9LGFuaW0pO1xyXG4gICAgICAgICAgICBhbmltLnBsYXkoYW5pbU5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBoaXQocnVpbikge1xyXG4gICAgICAgIHRoaXMuSFAgLT0gcnVpblxyXG4gICAgICAgIGlmKHRoaXMuSFAgIDwgMCApIHRoaXMuSFAgPSAwXHJcbiAgICAgICAgdGhpcy5oaXRBbmltYXRpb24oKVxyXG4gICAgICAgIHJldHVybiB0aGlzLkhQXHJcbiAgICB9LFxyXG5cclxuICAgIGdldEluaXRIcCgpIHtcclxuICAgICAgICByZXR1cm4gIG5ldyBOdW1iZXIoIHRoaXMuaW5pdEhwIClcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY29tcG9uZW50TmFtZSA9ICdlbmVteV8wMScgICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS55U3BlZWQgPSB0aGlzLnlTcGVlZFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIpIHsgLy8g56Kw5pKe5byA5aeLXHJcbiAgICAgICAgaWYodGhpcy5pc0hpdCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc0hpdCA9IHRydWVcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gb3RoZXIuZ2V0Q29tcG9uZW50KG90aGVyLm5vZGUuY29tcG9uZW50TmFtZSlcclxuICAgICAgICBsZXQgaGFybSA9IGNvbXBvbmVudC5oYXJtXHJcbiAgICAgICAgdGhpcy5oaXQoaGFybSwgb3RoZXIpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29tcG9uZW50LCBvdGhlcik7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19