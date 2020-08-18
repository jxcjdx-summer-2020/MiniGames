
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/prop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83925bB1ENMvoA1XkVNX1rb', 'prop');
// Script/prop.js

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
// 创建道具包
// 道具包属性
// 1. 道具数量，决定主角可以使用多少次道具
// 2. 道具速度, 决定道具包下降速度
// 3. 道具类型当前只定义两种类型道具 类型1为子弹类型道具可以控制当前使用的是什么子弹 类型2为子弹发射方式类型道具可以控制子弹发射类型
// 4. 道具资源
cc.Class({
  "extends": cc.Component,
  properties: {
    number: {
      "default": 1,
      tooltip: '道具数量，决定主角可以使用多少次道具'
    },
    ySpeed: {
      "default": 1,
      tooltip: '道具速度, 决定道具包下降速度'
    },
    type: {
      "default": 1,
      tooltip: '道具类型'
    },
    countText: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
  },
  setName: function setName(text) {
    var label = this.countText;
    label.string = text;
  },
  fire: function fire(x) {
    var parent = cc.find('Canvas/background');
    var action = cc.moveTo(this.ySpeed, x, -(parent.height / 2 + this.node.height * 0.5));
    var finished = cc.callFunc(function () {
      $base.objectPool.recyclePool({
        node: this.node,
        name: this.node.name
      });
    }, this);
    var myAction = cc.sequence(cc.show(), action, finished);
    this.node.runAction(myAction);
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    console.log(other.node, self);
    this.node.stopAllActions();
    $base.objectPool.recyclePool({
      node: this.node,
      name: this.node.name
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwcm9wLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibnVtYmVyIiwidG9vbHRpcCIsInlTcGVlZCIsInR5cGUiLCJjb3VudFRleHQiLCJMYWJlbCIsIm9uTG9hZCIsIm1hbmFnZXIiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwic2V0TmFtZSIsInRleHQiLCJsYWJlbCIsInN0cmluZyIsImZpcmUiLCJ4IiwicGFyZW50IiwiZmluZCIsImFjdGlvbiIsIm1vdmVUbyIsImhlaWdodCIsIm5vZGUiLCJmaW5pc2hlZCIsImNhbGxGdW5jIiwiJGJhc2UiLCJvYmplY3RQb29sIiwicmVjeWNsZVBvb2wiLCJuYW1lIiwibXlBY3Rpb24iLCJzZXF1ZW5jZSIsInNob3ciLCJydW5BY3Rpb24iLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsInN0b3BBbGxBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDVEMsSUFBQUEsTUFBTSxFQUFFO0FBQ0wsaUJBQVMsQ0FESjtBQUVMQyxNQUFBQSxPQUFPLEVBQUU7QUFGSixLQURDO0FBS1RDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLENBREw7QUFFSkQsTUFBQUEsT0FBTyxFQUFFO0FBRkwsS0FMQztBQVNURSxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxDQURQO0FBRUZGLE1BQUFBLE9BQU8sRUFBRTtBQUZQLEtBVEc7QUFhVEcsSUFBQUEsU0FBUyxFQUFFUixFQUFFLENBQUNTO0FBYkwsR0FIUDtBQW1CTDtBQUVBQyxFQUFBQSxNQXJCSyxvQkFxQks7QUFDTixRQUFJQyxPQUFPLEdBQUdYLEVBQUUsQ0FBQ1ksUUFBSCxDQUFZQyxtQkFBWixFQUFkO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0csT0FBUixHQUFrQixJQUFsQjtBQUNILEdBeEJJO0FBMEJMQyxFQUFBQSxPQTFCSyxtQkEwQkdDLElBMUJILEVBMEJTO0FBQ1YsUUFBSUMsS0FBSyxHQUFHLEtBQUtULFNBQWpCO0FBQ0FTLElBQUFBLEtBQUssQ0FBQ0MsTUFBTixHQUFlRixJQUFmO0FBQ0gsR0E3Qkk7QUErQkxHLEVBQUFBLElBL0JLLGdCQStCQUMsQ0EvQkEsRUErQkc7QUFDSixRQUFNQyxNQUFNLEdBQUdyQixFQUFFLENBQUNzQixJQUFILENBQVEsbUJBQVIsQ0FBZjtBQUNBLFFBQUlDLE1BQU0sR0FBR3ZCLEVBQUUsQ0FBQ3dCLE1BQUgsQ0FBVSxLQUFLbEIsTUFBZixFQUF1QmMsQ0FBdkIsRUFBMEIsRUFBR0MsTUFBTSxDQUFDSSxNQUFQLEdBQWMsQ0FBZixHQUFxQixLQUFLQyxJQUFMLENBQVVELE1BQVYsR0FBbUIsR0FBMUMsQ0FBMUIsQ0FBYjtBQUNBLFFBQUlFLFFBQVEsR0FBRzNCLEVBQUUsQ0FBQzRCLFFBQUgsQ0FBWSxZQUFZO0FBQ25DQyxNQUFBQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLFdBQWpCLENBQTZCO0FBQ3pCTCxRQUFBQSxJQUFJLEVBQUUsS0FBS0EsSUFEYztBQUV6Qk0sUUFBQUEsSUFBSSxFQUFFLEtBQUtOLElBQUwsQ0FBVU07QUFGUyxPQUE3QjtBQUlILEtBTGMsRUFLWixJQUxZLENBQWY7QUFNQSxRQUFJQyxRQUFRLEdBQUdqQyxFQUFFLENBQUNrQyxRQUFILENBQVlsQyxFQUFFLENBQUNtQyxJQUFILEVBQVosRUFBc0JaLE1BQXRCLEVBQThCSSxRQUE5QixDQUFmO0FBQ0EsU0FBS0QsSUFBTCxDQUFVVSxTQUFWLENBQW9CSCxRQUFwQjtBQUNILEdBMUNJO0FBNENMSSxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckNDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFLLENBQUNaLElBQWxCLEVBQXdCYSxJQUF4QjtBQUNBLFNBQUtiLElBQUwsQ0FBVWdCLGNBQVY7QUFDQWIsSUFBQUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxXQUFqQixDQUE2QjtBQUN6QkwsTUFBQUEsSUFBSSxFQUFFLEtBQUtBLElBRGM7QUFFekJNLE1BQUFBLElBQUksRUFBRSxLQUFLTixJQUFMLENBQVVNO0FBRlMsS0FBN0I7QUFJSCxHQW5ESSxDQW9ETDs7QUFwREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8g5Yib5bu66YGT5YW35YyFXHJcbi8vIOmBk+WFt+WMheWxnuaAp1xyXG4vLyAxLiDpgZPlhbfmlbDph4/vvIzlhrPlrprkuLvop5Llj6/ku6Xkvb/nlKjlpJrlsJHmrKHpgZPlhbdcclxuLy8gMi4g6YGT5YW36YCf5bqmLCDlhrPlrprpgZPlhbfljIXkuIvpmY3pgJ/luqZcclxuLy8gMy4g6YGT5YW357G75Z6L5b2T5YmN5Y+q5a6a5LmJ5Lik56eN57G75Z6L6YGT5YW3IOexu+WeizHkuLrlrZDlvLnnsbvlnovpgZPlhbflj6/ku6XmjqfliLblvZPliY3kvb/nlKjnmoTmmK/ku4DkuYjlrZDlvLkg57G75Z6LMuS4uuWtkOW8ueWPkeWwhOaWueW8j+exu+Wei+mBk+WFt+WPr+S7peaOp+WItuWtkOW8ueWPkeWwhOexu+Wei1xyXG4vLyA0LiDpgZPlhbfotYTmupBcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICBudW1iZXI6IHtcclxuICAgICAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICAgICAgICB0b29sdGlwOiAn6YGT5YW35pWw6YeP77yM5Yaz5a6a5Li76KeS5Y+v5Lul5L2/55So5aSa5bCR5qyh6YGT5YW3J1xyXG4gICAgICAgfSxcclxuICAgICAgIHlTcGVlZDoge1xyXG4gICAgICAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICAgICAgICAgdG9vbHRpcDogJ+mBk+WFt+mAn+W6piwg5Yaz5a6a6YGT5YW35YyF5LiL6ZmN6YCf5bqmJyBcclxuICAgICAgIH0sXHJcbiAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgZGVmYXVsdDogMSxcclxuICAgICAgICAgICB0b29sdGlwOiAn6YGT5YW357G75Z6LJ1xyXG4gICAgICAgfSxcclxuICAgICAgIGNvdW50VGV4dDogY2MuTGFiZWxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzZXROYW1lKHRleHQpIHtcclxuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLmNvdW50VGV4dDtcclxuICAgICAgICBsYWJlbC5zdHJpbmcgPSB0ZXh0O1xyXG4gICAgfSxcclxuXHJcbiAgICBmaXJlKHgpIHsgXHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gY2MuZmluZCgnQ2FudmFzL2JhY2tncm91bmQnKVxyXG4gICAgICAgIHZhciBhY3Rpb24gPSBjYy5tb3ZlVG8odGhpcy55U3BlZWQsIHgsIC0oKHBhcmVudC5oZWlnaHQvMikgKyAodGhpcy5ub2RlLmhlaWdodCAqIDAuNSkpICk7XHJcbiAgICAgICAgdmFyIGZpbmlzaGVkID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkYmFzZS5vYmplY3RQb29sLnJlY3ljbGVQb29sKHtcclxuICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMubm9kZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubm9kZS5uYW1lXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgdmFyIG15QWN0aW9uID0gY2Muc2VxdWVuY2UoY2Muc2hvdygpLGFjdGlvbiwgZmluaXNoZWQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24obXlBY3Rpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvdGhlci5ub2RlLCBzZWxmKTtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgICRiYXNlLm9iamVjdFBvb2wucmVjeWNsZVBvb2woe1xyXG4gICAgICAgICAgICBub2RlOiB0aGlzLm5vZGUsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubm9kZS5uYW1lXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19