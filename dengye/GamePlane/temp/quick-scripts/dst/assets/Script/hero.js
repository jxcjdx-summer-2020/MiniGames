
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/hero.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10511v8kUxIgLCx3PL7p7Vi', 'hero');
// Script/hero.js

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
    object_pool: {
      "default": null,
      type: require('object_pool')
    },
    fireRate: {
      "default": 300,
      tooltip: '射速'
    },
    harm: {
      "default": 5
    },
    bulletPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: '初始创建子弹'
    },
    bulletName: {
      "default": 'bullet',
      tooltip: '子弹名称'
    }
  },
  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    this.node.componentName = 'hero';
    this.onDrag();
    this.initBullet();
    this.fire();
  },
  fire: function fire() {
    this.schedule(function () {
      var create = {
        name: this.bulletName,
        parentNode: this.node.parent
      };
      this.object_pool.createEnemy(create).setCurrentPosition(this.node).fire(this.node);
    }, this.fireRate / 1000);
  },
  initBullet: function initBullet() {
    var init = {
      name: this.bulletName,
      initCount: 10,
      prefab: this.bulletPrefab
    };
    this.object_pool.initPool(init);
  },
  onDrag: function onDrag() {
    // 主角可以进行拖动
    this.getLimit(); // 获取移动结界

    this.node.on('touchmove', this.dragMove, this);
  },
  getLimit: function getLimit() {
    var parent = cc.winSize;
    this.minX = -parent.width / 2 + this.node.width / 2;
    this.maxX = -this.minX;
    this.minY = -parent.height / 2 + this.node.height / 2;
    this.maxY = -this.minY;
  },
  dragMove: function dragMove(event) {
    // convertToNodeSpaceAR // 将一个点转换到节点 (局部) 空间坐标系，这个坐标系以锚点为原点。
    var parent = this.node.parent;
    var info = parent.convertToNodeSpaceAR(event.getLocation()); // https://docs.cocos.com/creator/api/zh/classes/Event.EventMouse.html#getlocation

    var x = info.x,
        y = info.y; //飞机不移出屏幕 

    if (x < this.minX) {
      x = this.minX;
    }

    if (x > this.maxX) {
      x = this.maxX;
    }

    if (y < this.minY) {
      y = this.minY;
    }

    if (y > this.maxY) {
      y = this.maxY;
    }

    this.node.setPosition(x, y); // https://docs.cocos.com/creator/api/zh/classes/Node.html#setposition
  },
  ruin: function ruin() {
    var _this = this;

    this.node.off('touchmove');
    var name = this.node.name;
    var anim = this.getComponent(cc.Animation);
    var animName = "".concat(name, "_ruin");
    anim.on('finished', function () {
      anim.off('finished');
      anim.node.runAction(cc.hide());
      anim.setCurrentTime(0, animName);

      _this.node.destroy();

      _this.isHit = false;
      cc.director.loadScene('game_over', function () {});
    }, anim);
    anim.play(animName);
  },
  onCollisionEnter: function onCollisionEnter(other) {
    // 碰撞结束
    if (this.isHit) return;
    this.isHit = true; // let component = other.getComponent(other.node.componentName)

    console.log(other.node.group);

    switch (other.node.group) {
      case 'enemy':
        this.ruin();
        break;

      case 'porp':
        console.log(other.node);
        this.isHit = false;
        break;

      default:
        this.isHit = false;
        break;
    } // console.log(component, other);

  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxoZXJvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib2JqZWN0X3Bvb2wiLCJ0eXBlIiwicmVxdWlyZSIsImZpcmVSYXRlIiwidG9vbHRpcCIsImhhcm0iLCJidWxsZXRQcmVmYWIiLCJQcmVmYWIiLCJidWxsZXROYW1lIiwib25Mb2FkIiwibWFuYWdlciIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJub2RlIiwiY29tcG9uZW50TmFtZSIsIm9uRHJhZyIsImluaXRCdWxsZXQiLCJmaXJlIiwic2NoZWR1bGUiLCJjcmVhdGUiLCJuYW1lIiwicGFyZW50Tm9kZSIsInBhcmVudCIsImNyZWF0ZUVuZW15Iiwic2V0Q3VycmVudFBvc2l0aW9uIiwiaW5pdCIsImluaXRDb3VudCIsInByZWZhYiIsImluaXRQb29sIiwiZ2V0TGltaXQiLCJvbiIsImRyYWdNb3ZlIiwid2luU2l6ZSIsIm1pblgiLCJ3aWR0aCIsIm1heFgiLCJtaW5ZIiwiaGVpZ2h0IiwibWF4WSIsImV2ZW50IiwiaW5mbyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiZ2V0TG9jYXRpb24iLCJ4IiwieSIsInNldFBvc2l0aW9uIiwicnVpbiIsIm9mZiIsImFuaW0iLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJhbmltTmFtZSIsInJ1bkFjdGlvbiIsImhpZGUiLCJzZXRDdXJyZW50VGltZSIsImRlc3Ryb3kiLCJpc0hpdCIsImxvYWRTY2VuZSIsInBsYXkiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJjb25zb2xlIiwibG9nIiwiZ3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FB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QXBCLEVBQXNCSCxRQUF0Qjs7QUFDQSxNQUFBLEtBQUksQ0FBQ3RDLElBQUwsQ0FBVTBDLE9BQVY7O0FBQ0EsTUFBQSxLQUFJLENBQUNDLEtBQUwsR0FBYSxLQUFiO0FBQ0E3RCxNQUFBQSxFQUFFLENBQUNlLFFBQUgsQ0FBWStDLFNBQVosQ0FBdUIsV0FBdkIsRUFBbUMsWUFBVSxDQUU1QyxDQUZEO0FBR0gsS0FURCxFQVNFVCxJQVRGO0FBVUFBLElBQUFBLElBQUksQ0FBQ1UsSUFBTCxDQUFVUCxRQUFWO0FBQ0gsR0FyR0k7QUF1R0xRLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCO0FBQUU7QUFDakMsUUFBRyxLQUFLSixLQUFSLEVBQWU7QUFDZixTQUFLQSxLQUFMLEdBQWEsSUFBYixDQUYrQixDQUcvQjs7QUFDQUssSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQy9DLElBQU4sQ0FBV2tELEtBQXZCOztBQUVBLFlBQVFILEtBQUssQ0FBQy9DLElBQU4sQ0FBV2tELEtBQW5CO0FBQ0ksV0FBSyxPQUFMO0FBQ0ksYUFBS2pCLElBQUw7QUFDQTs7QUFDSixXQUFLLE1BQUw7QUFDSWUsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQy9DLElBQWxCO0FBQ0EsYUFBSzJDLEtBQUwsR0FBYSxLQUFiO0FBQ0E7O0FBQ0o7QUFDSSxhQUFLQSxLQUFMLEdBQWEsS0FBYjtBQUNBO0FBVlIsS0FOK0IsQ0FrQi9COztBQUNILEdBMUhJLENBNEhMOztBQTVISyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgb2JqZWN0X3Bvb2w6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogcmVxdWlyZSgnb2JqZWN0X3Bvb2wnKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpcmVSYXRlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDMwMCxcclxuICAgICAgICAgICAgdG9vbHRpcDogJ+WwhOmAnydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhcm06IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnVsbGV0UHJlZmFiOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgdG9vbHRpcDogJ+WIneWni+WIm+W7uuWtkOW8uScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidWxsZXROYW1lOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdidWxsZXQnLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAn5a2Q5by55ZCN56ewJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5ub2RlLmNvbXBvbmVudE5hbWUgPSAnaGVybydcclxuICAgICAgICB0aGlzLm9uRHJhZygpXHJcbiAgICAgICAgdGhpcy5pbml0QnVsbGV0KClcclxuICAgICAgICB0aGlzLmZpcmUoKVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZmlyZSgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgY3JlYXRlID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5idWxsZXROYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogdGhpcy5ub2RlLnBhcmVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0X3Bvb2wuY3JlYXRlRW5lbXkoY3JlYXRlKS5zZXRDdXJyZW50UG9zaXRpb24odGhpcy5ub2RlKS5maXJlKHRoaXMubm9kZSlcclxuICAgICAgICB9LCB0aGlzLmZpcmVSYXRlIC8gMTAwMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRCdWxsZXQoKSB7XHJcbiAgICAgICAgbGV0IGluaXQgPSB7bmFtZTogdGhpcy5idWxsZXROYW1lLCBpbml0Q291bnQ6IDEwLCBwcmVmYWI6IHRoaXMuYnVsbGV0UHJlZmFifVxyXG4gICAgICAgIHRoaXMub2JqZWN0X3Bvb2wuaW5pdFBvb2woaW5pdClcclxuICAgIH0sXHJcblxyXG4gICAgb25EcmFnKCkgeyAvLyDkuLvop5Llj6/ku6Xov5vooYzmi5bliqhcclxuICAgICAgICB0aGlzLmdldExpbWl0KCkgLy8g6I635Y+W56e75Yqo57uT55WMXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWdNb3ZlLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBnZXRMaW1pdCgpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBjYy53aW5TaXplXHJcbiAgICAgICAgdGhpcy5taW5YID0gLXBhcmVudC53aWR0aC8yK3RoaXMubm9kZS53aWR0aC8yO1xyXG4gICAgICAgIHRoaXMubWF4WCA9IC10aGlzLm1pblg7XHJcbiAgICAgICAgdGhpcy5taW5ZID0gLXBhcmVudC5oZWlnaHQvMit0aGlzLm5vZGUuaGVpZ2h0LzI7XHJcbiAgICAgICAgdGhpcy5tYXhZID0gLXRoaXMubWluWTtcclxuICAgIH0sXHJcbiAgICBkcmFnTW92ZTogZnVuY3Rpb24oZXZlbnQpeyBcclxuICAgICAgICAvLyBjb252ZXJ0VG9Ob2RlU3BhY2VBUiAvLyDlsIbkuIDkuKrngrnovazmjaLliLDoioLngrkgKOWxgOmDqCkg56m66Ze05Z2Q5qCH57O777yM6L+Z5Liq5Z2Q5qCH57O75Lul6ZSa54K55Li65Y6f54K544CCXHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudFxyXG4gICAgICAgIHZhciBpbmZvID0gcGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpIC8vIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9hcGkvemgvY2xhc3Nlcy9FdmVudC5FdmVudE1vdXNlLmh0bWwjZ2V0bG9jYXRpb25cclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICB5XHJcbiAgICAgICAgfSA9IGluZm9cclxuICAgICAgICAvL+mjnuacuuS4jeenu+WHuuWxj+W5lSBcclxuICAgICAgICBpZiAoeDwgdGhpcy5taW5YKXtcclxuICAgICAgICAgICAgeCA9IHRoaXMubWluWDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHg+dGhpcy5tYXhYKXtcclxuICAgICAgICAgICAgeCA9IHRoaXMubWF4WDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHk8IHRoaXMubWluWSl7XHJcbiAgICAgICAgICAgIHkgPSB0aGlzLm1pblk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh5PiB0aGlzLm1heFkpe1xyXG4gICAgICAgICAgICB5ID0gdGhpcy5tYXhZO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oeCx5KSAvLyBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvYXBpL3poL2NsYXNzZXMvTm9kZS5odG1sI3NldHBvc2l0aW9uXHJcbiAgICB9LFxyXG5cclxuICAgIHJ1aW4oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZigndG91Y2htb3ZlJylcclxuICAgICAgICBsZXQgbmFtZSA9IHRoaXMubm9kZS5uYW1lXHJcbiAgICAgICAgbGV0IGFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGxldCBhbmltTmFtZSA9IGAke25hbWV9X3J1aW5gXHJcbiAgICAgICAgYW5pbS5vbignZmluaXNoZWQnLCgpPT57XHJcbiAgICAgICAgICAgIGFuaW0ub2ZmKCdmaW5pc2hlZCcpXHJcbiAgICAgICAgICAgIGFuaW0ubm9kZS5ydW5BY3Rpb24oY2MuaGlkZSgpKVxyXG4gICAgICAgICAgICBhbmltLnNldEN1cnJlbnRUaW1lKDAsYW5pbU5hbWUpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgdGhpcy5pc0hpdCA9IGZhbHNlXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSAoJ2dhbWVfb3ZlcicsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgIH0sYW5pbSk7XHJcbiAgICAgICAgYW5pbS5wbGF5KGFuaW1OYW1lKVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIpIHsgLy8g56Kw5pKe57uT5p2fXHJcbiAgICAgICAgaWYodGhpcy5pc0hpdCkgcmV0dXJuXHJcbiAgICAgICAgdGhpcy5pc0hpdCA9IHRydWVcclxuICAgICAgICAvLyBsZXQgY29tcG9uZW50ID0gb3RoZXIuZ2V0Q29tcG9uZW50KG90aGVyLm5vZGUuY29tcG9uZW50TmFtZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhvdGhlci5ub2RlLmdyb3VwKTtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKG90aGVyLm5vZGUuZ3JvdXApIHtcclxuICAgICAgICAgICAgY2FzZSAnZW5lbXknOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ydWluKClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwb3JwJzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG90aGVyLm5vZGUpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNIaXQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzSGl0ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21wb25lbnQsIG90aGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==