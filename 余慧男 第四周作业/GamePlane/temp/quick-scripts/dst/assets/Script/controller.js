
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9015FP7JdEy6OlSB7scgwT', 'controller');
// Script/controller.js

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
    gameStatus: {
      "default": true
    },
    stopSprite: {
      "default": [],
      type: cc.SpriteFrame,
      tooltip: '暂停按钮不同状态的图片'
    },
    playSprite: {
      "default": [],
      type: cc.SpriteFrame,
      tooltip: '播放按钮不同状态的图片'
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  gameControls: function gameControls() {
    var _this = this;

    var spriteFrame;
    var Button = this.node.getComponent(cc.Button);

    if (this.gameStatus) {
      spriteFrame = this.playSprite;
    } else {
      spriteFrame = this.stopSprite;
    }

    Button.normalSprite = spriteFrame[0];
    Button.pressedSprite = spriteFrame[1];
    Button.hoverSprite = spriteFrame[1];
    setTimeout(function () {
      _this.gameStatus ? cc.game.pause() : cc.game.resume();
      _this.gameStatus = !_this.gameStatus;
    }, 50);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2FtZVN0YXR1cyIsInN0b3BTcHJpdGUiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJ0b29sdGlwIiwicGxheVNwcml0ZSIsImdhbWVDb250cm9scyIsInNwcml0ZUZyYW1lIiwiQnV0dG9uIiwibm9kZSIsImdldENvbXBvbmVudCIsIm5vcm1hbFNwcml0ZSIsInByZXNzZWRTcHJpdGUiLCJob3ZlclNwcml0ZSIsInNldFRpbWVvdXQiLCJnYW1lIiwicGF1c2UiLCJyZXN1bWUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTO0FBREQsS0FESjtBQUlSQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxFQUREO0FBRVJDLE1BQUFBLElBQUksRUFBRU4sRUFBRSxDQUFDTyxXQUZEO0FBR1JDLE1BQUFBLE9BQU8sRUFBQztBQUhBLEtBSko7QUFTUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsRUFERDtBQUVSSCxNQUFBQSxJQUFJLEVBQUVOLEVBQUUsQ0FBQ08sV0FGRDtBQUdSQyxNQUFBQSxPQUFPLEVBQUM7QUFIQTtBQVRKLEdBSFA7QUFtQkw7QUFFQTtBQUVBRSxFQUFBQSxZQXZCSywwQkF1QlU7QUFBQTs7QUFDWCxRQUFJQyxXQUFKO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QmQsRUFBRSxDQUFDWSxNQUExQixDQUFiOztBQUVBLFFBQUcsS0FBS1IsVUFBUixFQUFtQjtBQUNmTyxNQUFBQSxXQUFXLEdBQUcsS0FBS0YsVUFBbkI7QUFDSCxLQUZELE1BRU07QUFDRkUsTUFBQUEsV0FBVyxHQUFHLEtBQUtOLFVBQW5CO0FBRUg7O0FBQ0RPLElBQUFBLE1BQU0sQ0FBQ0csWUFBUCxHQUFzQkosV0FBVyxDQUFDLENBQUQsQ0FBakM7QUFDQUMsSUFBQUEsTUFBTSxDQUFDSSxhQUFQLEdBQXVCTCxXQUFXLENBQUMsQ0FBRCxDQUFsQztBQUNBQyxJQUFBQSxNQUFNLENBQUNLLFdBQVAsR0FBcUJOLFdBQVcsQ0FBQyxDQUFELENBQWhDO0FBQ0FPLElBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2QsTUFBQSxLQUFJLENBQUNkLFVBQUwsR0FBa0JKLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUUMsS0FBUixFQUFsQixHQUFvQ3BCLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUUUsTUFBUixFQUFwQztBQUNBLE1BQUEsS0FBSSxDQUFDakIsVUFBTCxHQUFrQixDQUFDLEtBQUksQ0FBQ0EsVUFBeEI7QUFDRixLQUhTLEVBR1AsRUFITyxDQUFWO0FBTUgsR0ExQ0k7QUE2Q0xrQixFQUFBQSxLQTdDSyxtQkE2Q0ksQ0FFUixDQS9DSSxDQWlETDs7QUFqREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdhbWVTdGF0dXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvcFNwcml0ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6J+aaguWBnOaMiemSruS4jeWQjOeKtuaAgeeahOWbvueJhydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsYXlTcHJpdGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgICAgICB0b29sdGlwOifmkq3mlL7mjInpkq7kuI3lkIznirbmgIHnmoTlm77niYcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgZ2FtZUNvbnRyb2xzKCkge1xyXG4gICAgICAgIGxldCBzcHJpdGVGcmFtZVxyXG4gICAgICAgIGxldCBCdXR0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmdhbWVTdGF0dXMpe1xyXG4gICAgICAgICAgICBzcHJpdGVGcmFtZSA9IHRoaXMucGxheVNwcml0ZVxyXG4gICAgICAgIH1lbHNlIHsgXHJcbiAgICAgICAgICAgIHNwcml0ZUZyYW1lID0gdGhpcy5zdG9wU3ByaXRlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBCdXR0b24ubm9ybWFsU3ByaXRlID0gc3ByaXRlRnJhbWVbMF07XHJcbiAgICAgICAgQnV0dG9uLnByZXNzZWRTcHJpdGUgPSBzcHJpdGVGcmFtZVsxXTtcclxuICAgICAgICBCdXR0b24uaG92ZXJTcHJpdGUgPSBzcHJpdGVGcmFtZVsxXTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPyBjYy5nYW1lLnBhdXNlKCkgOiBjYy5nYW1lLnJlc3VtZSgpIFxyXG4gICAgICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9ICF0aGlzLmdhbWVTdGF0dXNcclxuICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=