
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/background.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88997954xVD+ozcnBT8te59', 'background');
// Script/background.js

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
    bg1: {
      "default": null,
      type: cc.Node
    },
    bg2: {
      "default": null,
      type: cc.Node
    },
    roll_speed: 3
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  // start () {
  // },
  update: function update(dt) {
    var parentHeight = this.node.parent.height;
    this.bg1.y -= this.roll_speed;
    this.bg2.y -= this.roll_speed;

    if (this.bg1.y <= -parentHeight) {
      var bg2Height = this.bg2.y;
      this.bg1.y = parentHeight + bg2Height;
    }

    if (this.bg2.y <= -parentHeight) {
      var bg1Height = this.bg1.y;
      this.bg2.y = parentHeight + bg1Height;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxiYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmcxIiwidHlwZSIsIk5vZGUiLCJiZzIiLCJyb2xsX3NwZWVkIiwidXBkYXRlIiwiZHQiLCJwYXJlbnRIZWlnaHQiLCJub2RlIiwicGFyZW50IiwiaGVpZ2h0IiwieSIsImJnMkhlaWdodCIsImJnMUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEdBQUcsRUFBRTtBQUNELGlCQUFTLElBRFI7QUFFREMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlIsS0FERztBQUtSQyxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxJQURSO0FBRURGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZSLEtBTEc7QUFTUkUsSUFBQUEsVUFBVSxFQUFFO0FBVEosR0FIUDtBQWVMO0FBRUE7QUFFQTtBQUVBO0FBRUFDLEVBQUFBLE1BdkJLLGtCQXVCR0MsRUF2QkgsRUF1Qk87QUFDUixRQUFJQyxZQUFZLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxNQUFwQztBQUNBLFNBQUtWLEdBQUwsQ0FBU1csQ0FBVCxJQUFjLEtBQUtQLFVBQW5CO0FBQ0EsU0FBS0QsR0FBTCxDQUFTUSxDQUFULElBQWMsS0FBS1AsVUFBbkI7O0FBQ0EsUUFBRyxLQUFLSixHQUFMLENBQVNXLENBQVQsSUFBYyxDQUFDSixZQUFsQixFQUFnQztBQUM1QixVQUFJSyxTQUFTLEdBQUcsS0FBS1QsR0FBTCxDQUFTUSxDQUF6QjtBQUNBLFdBQUtYLEdBQUwsQ0FBU1csQ0FBVCxHQUFhSixZQUFZLEdBQUdLLFNBQTVCO0FBQ0g7O0FBRUQsUUFBRyxLQUFLVCxHQUFMLENBQVNRLENBQVQsSUFBYyxDQUFDSixZQUFsQixFQUFnQztBQUM1QixVQUFJTSxTQUFTLEdBQUcsS0FBS2IsR0FBTCxDQUFTVyxDQUF6QjtBQUNBLFdBQUtSLEdBQUwsQ0FBU1EsQ0FBVCxHQUFhSixZQUFZLEdBQUdNLFNBQTVCO0FBQ0g7QUFDSjtBQXBDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmcxOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiZzI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGxfc3BlZWQ6IDMsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICAvLyBzdGFydCAoKSB7XHJcblxyXG4gICAgLy8gfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdmFyIHBhcmVudEhlaWdodCA9IHRoaXMubm9kZS5wYXJlbnQuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYmcxLnkgLT0gdGhpcy5yb2xsX3NwZWVkO1xyXG4gICAgICAgIHRoaXMuYmcyLnkgLT0gdGhpcy5yb2xsX3NwZWVkO1xyXG4gICAgICAgIGlmKHRoaXMuYmcxLnkgPD0gLXBhcmVudEhlaWdodCkge1xyXG4gICAgICAgICAgICB2YXIgYmcySGVpZ2h0ID0gdGhpcy5iZzIueTtcclxuICAgICAgICAgICAgdGhpcy5iZzEueSA9IHBhcmVudEhlaWdodCArIGJnMkhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZih0aGlzLmJnMi55IDw9IC1wYXJlbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgdmFyIGJnMUhlaWdodCA9IHRoaXMuYmcxLnk7XHJcbiAgICAgICAgICAgIHRoaXMuYmcyLnkgPSBwYXJlbnRIZWlnaHQgKyBiZzFIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==