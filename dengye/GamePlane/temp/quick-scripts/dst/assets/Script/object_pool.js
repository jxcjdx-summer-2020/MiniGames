
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/object_pool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06f96EafNRIUpR6fNmcNXXP', 'object_pool');
// Script/object_pool.js

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
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  initPool: function initPool(_ref) {
    var _ref$initCount = _ref.initCount,
        initCount = _ref$initCount === void 0 ? 1 : _ref$initCount,
        name = _ref.name,
        prefab = _ref.prefab;
    if (this["".concat(name, "Pool")]) return;
    if (prefab) this["".concat(name, "Prefab")] = prefab;
    this["".concat(name, "Pool")] = new cc.NodePool();

    for (var i = 0; i < initCount; ++i) {
      var node = cc.instantiate(this["".concat(name, "Prefab")]); // 创建节点

      this["".concat(name, "Pool")].put(node); // 通过 put 接口放入对象池
    }

    return this;
  },
  recyclePool: function recyclePool(_ref2) {
    var name = _ref2.name,
        node = _ref2.node;
    this["".concat(name, "Pool")].put(node);
    return this;
  },
  createEnemy: function createEnemy(_ref3) {
    var name = _ref3.name,
        _ref3$parentNode = _ref3.parentNode,
        parentNode = _ref3$parentNode === void 0 ? cc.find('Canvas/background') : _ref3$parentNode,
        componentName = _ref3.componentName;
    var node = null;
    var pool = this["".concat(name, "Pool")];
    var prefab = this["".concat(name, "Prefab")];

    if (pool.size() > 0) {
      // 通过 size 接口判断对象池中是否有空闲的对象
      node = pool.get();
    } else {
      // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
      node = cc.instantiate(prefab);
    }

    node.parent = parentNode; // 加入节点树

    if (!componentName) componentName = name;
    var component = node.getComponent(componentName); // console.log(component,'componentcomponentcomponent');

    if (component.init) component.init();

    if (component) {
      return component;
    } else {
      return node;
    }
  },
  onLoad: function onLoad() {
    $base.set('objectPool', this);
  } // start () {
  // },
  // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxvYmplY3RfcG9vbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImluaXRQb29sIiwiaW5pdENvdW50IiwibmFtZSIsInByZWZhYiIsIk5vZGVQb29sIiwiaSIsIm5vZGUiLCJpbnN0YW50aWF0ZSIsInB1dCIsInJlY3ljbGVQb29sIiwiY3JlYXRlRW5lbXkiLCJwYXJlbnROb2RlIiwiZmluZCIsImNvbXBvbmVudE5hbWUiLCJwb29sIiwic2l6ZSIsImdldCIsInBhcmVudCIsImNvbXBvbmVudCIsImdldENvbXBvbmVudCIsImluaXQiLCJvbkxvYWQiLCIkYmFzZSIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBQyxFQUFBQSxRQVRLLDBCQWFGO0FBQUEsOEJBSENDLFNBR0Q7QUFBQSxRQUhDQSxTQUdELCtCQUhhLENBR2I7QUFBQSxRQUZDQyxJQUVELFFBRkNBLElBRUQ7QUFBQSxRQURDQyxNQUNELFFBRENBLE1BQ0Q7QUFDQyxRQUFJLGVBQVFELElBQVIsVUFBSixFQUEwQjtBQUMxQixRQUFJQyxNQUFKLEVBQWEsZUFBUUQsSUFBUixlQUF3QkMsTUFBeEI7QUFDYixtQkFBUUQsSUFBUixhQUFzQixJQUFJTixFQUFFLENBQUNRLFFBQVAsRUFBdEI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixTQUFwQixFQUErQixFQUFFSSxDQUFqQyxFQUFvQztBQUNoQyxVQUFJQyxJQUFJLEdBQUdWLEVBQUUsQ0FBQ1csV0FBSCxDQUFlLGVBQVFMLElBQVIsWUFBZixDQUFYLENBRGdDLENBQ2tCOztBQUNsRCxxQkFBUUEsSUFBUixXQUFvQk0sR0FBcEIsQ0FBd0JGLElBQXhCLEVBRmdDLENBRUQ7QUFDbEM7O0FBQ0QsV0FBTyxJQUFQO0FBQ0gsR0F0Qkk7QUF3QkxHLEVBQUFBLFdBeEJLLDhCQXdCc0I7QUFBQSxRQUFiUCxJQUFhLFNBQWJBLElBQWE7QUFBQSxRQUFSSSxJQUFRLFNBQVJBLElBQVE7QUFDdkIsbUJBQVFKLElBQVIsV0FBb0JNLEdBQXBCLENBQXdCRixJQUF4QjtBQUNBLFdBQU8sSUFBUDtBQUNILEdBM0JJO0FBNkJMSSxFQUFBQSxXQTdCSyw4QkFpQ0Y7QUFBQSxRQUhDUixJQUdELFNBSENBLElBR0Q7QUFBQSxpQ0FGQ1MsVUFFRDtBQUFBLFFBRkNBLFVBRUQsaUNBRmNmLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUSxtQkFBUixDQUVkO0FBQUEsUUFEQ0MsYUFDRCxTQURDQSxhQUNEO0FBQ0MsUUFBSVAsSUFBSSxHQUFHLElBQVg7QUFDQSxRQUFJUSxJQUFJLEdBQUcsZUFBUVosSUFBUixVQUFYO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLGVBQVFELElBQVIsWUFBYjs7QUFDQSxRQUFJWSxJQUFJLENBQUNDLElBQUwsS0FBYyxDQUFsQixFQUFxQjtBQUFFO0FBQ25CVCxNQUFBQSxJQUFJLEdBQUdRLElBQUksQ0FBQ0UsR0FBTCxFQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQUU7QUFDTFYsTUFBQUEsSUFBSSxHQUFHVixFQUFFLENBQUNXLFdBQUgsQ0FBZUosTUFBZixDQUFQO0FBQ0g7O0FBQ0RHLElBQUFBLElBQUksQ0FBQ1csTUFBTCxHQUFjTixVQUFkLENBVEQsQ0FTMkI7O0FBQzFCLFFBQUcsQ0FBQ0UsYUFBSixFQUFtQkEsYUFBYSxHQUFHWCxJQUFoQjtBQUNuQixRQUFJZ0IsU0FBUyxHQUFHWixJQUFJLENBQUNhLFlBQUwsQ0FBa0JOLGFBQWxCLENBQWhCLENBWEQsQ0FZQzs7QUFDQSxRQUFHSyxTQUFTLENBQUNFLElBQWIsRUFBbUJGLFNBQVMsQ0FBQ0UsSUFBVjs7QUFDbkIsUUFBR0YsU0FBSCxFQUFjO0FBQ1YsYUFBT0EsU0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGFBQU9aLElBQVA7QUFDSDtBQUVKLEdBckRJO0FBdURMZSxFQUFBQSxNQXZESyxvQkF1REs7QUFDTkMsSUFBQUEsS0FBSyxDQUFDQyxHQUFOLENBQVUsWUFBVixFQUF3QixJQUF4QjtBQUNILEdBekRJLENBMkRMO0FBRUE7QUFFQTs7QUEvREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBpbml0UG9vbCAoe1xyXG4gICAgICAgIGluaXRDb3VudCA9IDEsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBwcmVmYWJcclxuICAgIH0pIHtcclxuICAgICAgICBpZiggdGhpc1tgJHtuYW1lfVBvb2xgXSApIHJldHVyblxyXG4gICAgICAgIGlmKCBwcmVmYWIgKSB0aGlzW2Ake25hbWV9UHJlZmFiYF0gPSBwcmVmYWJcclxuICAgICAgICB0aGlzW2Ake25hbWV9UG9vbGBdID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0Q291bnQ7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXNbYCR7bmFtZX1QcmVmYWJgXSk7IC8vIOWIm+W7uuiKgueCuVxyXG4gICAgICAgICAgICB0aGlzW2Ake25hbWV9UG9vbGBdLnB1dChub2RlKTsgLy8g6YCa6L+HIHB1dCDmjqXlj6PmlL7lhaXlr7nosaHmsaBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH0sXHJcblxyXG4gICAgcmVjeWNsZVBvb2woeyBuYW1lLG5vZGUgfSkge1xyXG4gICAgICAgIHRoaXNbYCR7bmFtZX1Qb29sYF0ucHV0KG5vZGUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlRW5lbXkoe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgcGFyZW50Tm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9iYWNrZ3JvdW5kJyksXHJcbiAgICAgICAgY29tcG9uZW50TmFtZVxyXG4gICAgfSkge1xyXG4gICAgICAgIGxldCBub2RlID0gbnVsbDtcclxuICAgICAgICBsZXQgcG9vbCA9IHRoaXNbYCR7bmFtZX1Qb29sYF1cclxuICAgICAgICBsZXQgcHJlZmFiID0gdGhpc1tgJHtuYW1lfVByZWZhYmBdXHJcbiAgICAgICAgaWYgKHBvb2wuc2l6ZSgpID4gMCkgeyAvLyDpgJrov4cgc2l6ZSDmjqXlj6PliKTmlq3lr7nosaHmsaDkuK3mmK/lkKbmnInnqbrpl7LnmoTlr7nosaFcclxuICAgICAgICAgICAgbm9kZSA9IHBvb2wuZ2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8g5aaC5p6c5rKh5pyJ56m66Zey5a+56LGh77yM5Lmf5bCx5piv5a+56LGh5rGg5Lit5aSH55So5a+56LGh5LiN5aSf5pe277yM5oiR5Lus5bCx55SoIGNjLmluc3RhbnRpYXRlIOmHjeaWsOWIm+W7ulxyXG4gICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBwYXJlbnROb2RlOyAvLyDliqDlhaXoioLngrnmoJFcclxuICAgICAgICBpZighY29tcG9uZW50TmFtZSkgY29tcG9uZW50TmFtZSA9IG5hbWVcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbm9kZS5nZXRDb21wb25lbnQoY29tcG9uZW50TmFtZSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21wb25lbnQsJ2NvbXBvbmVudGNvbXBvbmVudGNvbXBvbmVudCcpO1xyXG4gICAgICAgIGlmKGNvbXBvbmVudC5pbml0KSBjb21wb25lbnQuaW5pdCgpXHJcbiAgICAgICAgaWYoY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZVxyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgJGJhc2Uuc2V0KCdvYmplY3RQb29sJywgdGhpcylcclxuICAgIH0sXHJcblxyXG4gICAgLy8gc3RhcnQgKCkge1xyXG5cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=