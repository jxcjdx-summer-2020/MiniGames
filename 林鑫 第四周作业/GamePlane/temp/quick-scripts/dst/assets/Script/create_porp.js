
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/create_porp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'abdc95H4pVHf5/K0UqHfRLn', 'create_porp');
// Script/create_porp.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
// 1. 道具生产节点，以分数为区间值 如100-130 生产道具00x
cc.Class({
  "extends": cc.Component,
  properties: {
    intervalMin: {
      "default": 30
    },
    intervalMax: {
      "default": 50
    },
    porp: {
      "default": [],
      type: cc.Prefab,
      tooltip: '道具'
    },
    chances: {
      "default": [],
      tooltip: '出现几率'
    },
    object_pool: {
      "default": null,
      type: require('object_pool')
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.createEnemy(); // let porp = this.object_pool.createEnemy({
    //     name: this.porp.name,
    //     parentNode: this.node.parent,
    //     componentName: 'create_porp'
    // })
    // this.schedule(()=> {
    //     porp.fire(-20)
    // }, 2000)
  },
  createEnemy: function createEnemy() {
    var _this = this;

    // 生成敌人
    var porp = this.porp;
    porp.forEach(function (element) {
      if (!element) return;
      var name = element.name;

      _this.object_pool.initPool({
        initCount: 10,
        name: name,
        prefab: element
      });
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjcmVhdGVfcG9ycC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImludGVydmFsTWluIiwiaW50ZXJ2YWxNYXgiLCJwb3JwIiwidHlwZSIsIlByZWZhYiIsInRvb2x0aXAiLCJjaGFuY2VzIiwib2JqZWN0X3Bvb2wiLCJyZXF1aXJlIiwib25Mb2FkIiwiY3JlYXRlRW5lbXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJpbml0UG9vbCIsImluaXRDb3VudCIsInByZWZhYiIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUztBQURBLEtBREw7QUFJUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVM7QUFEQSxLQUpMO0FBT1JDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRLE1BRlA7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQVlSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUyxFQURKO0FBRUxELE1BQUFBLE9BQU8sRUFBRTtBQUZKLEtBWkQ7QUFnQlJFLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEosTUFBQUEsSUFBSSxFQUFFSyxPQUFPLENBQUMsYUFBRDtBQUZKO0FBaEJMLEdBSFA7QUF5Qkw7QUFFQUMsRUFBQUEsTUEzQkssb0JBMkJLO0FBQ04sU0FBS0MsV0FBTCxHQURNLENBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBckNJO0FBdUNMQSxFQUFBQSxXQXZDSyx5QkF1Q1M7QUFBQTs7QUFBRTtBQUNaLFFBQUlSLElBQUksR0FBRyxLQUFLQSxJQUFoQjtBQUNBQSxJQUFBQSxJQUFJLENBQUNTLE9BQUwsQ0FBYSxVQUFDQyxPQUFELEVBQWE7QUFDdEIsVUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDZCxVQUFJQyxJQUFJLEdBQUdELE9BQU8sQ0FBQ0MsSUFBbkI7O0FBQ0EsTUFBQSxLQUFJLENBQUNOLFdBQUwsQ0FBaUJPLFFBQWpCLENBQTBCO0FBQ3RCQyxRQUFBQSxTQUFTLEVBQUUsRUFEVztBQUV0QkYsUUFBQUEsSUFBSSxFQUFKQSxJQUZzQjtBQUd0QkcsUUFBQUEsTUFBTSxFQUFFSjtBQUhjLE9BQTFCO0FBS0gsS0FSRDtBQVNILEdBbERJO0FBb0RMSyxFQUFBQSxLQXBESyxtQkFvREksQ0FFUixDQXRESSxDQXdETDs7QUF4REssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gMS4g6YGT5YW355Sf5Lqn6IqC54K577yM5Lul5YiG5pWw5Li65Yy66Ze05YC8IOWmgjEwMC0xMzAg55Sf5Lqn6YGT5YW3MDB4XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaW50ZXJ2YWxNaW46IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogMzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGludGVydmFsTWF4OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDUwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3JwOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICfpgZPlhbcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuY2VzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAn5Ye6546w5Yeg546HJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2JqZWN0X3Bvb2w6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogcmVxdWlyZSgnb2JqZWN0X3Bvb2wnKSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFbmVteSgpXHJcbiAgICAgICAgLy8gbGV0IHBvcnAgPSB0aGlzLm9iamVjdF9wb29sLmNyZWF0ZUVuZW15KHtcclxuICAgICAgICAvLyAgICAgbmFtZTogdGhpcy5wb3JwLm5hbWUsXHJcbiAgICAgICAgLy8gICAgIHBhcmVudE5vZGU6IHRoaXMubm9kZS5wYXJlbnQsXHJcbiAgICAgICAgLy8gICAgIGNvbXBvbmVudE5hbWU6ICdjcmVhdGVfcG9ycCdcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoKCk9PiB7XHJcbiAgICAgICAgLy8gICAgIHBvcnAuZmlyZSgtMjApXHJcbiAgICAgICAgLy8gfSwgMjAwMClcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlRW5lbXkoKSB7IC8vIOeUn+aIkOaVjOS6ulxyXG4gICAgICAgIGxldCBwb3JwID0gdGhpcy5wb3JwXHJcbiAgICAgICAgcG9ycC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuXHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gZWxlbWVudC5uYW1lXHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0X3Bvb2wuaW5pdFBvb2woe1xyXG4gICAgICAgICAgICAgICAgaW5pdENvdW50OiAxMCxcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwcmVmYWI6IGVsZW1lbnRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==