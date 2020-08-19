
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/counter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '388d5MWNutFcqKTAdb0P7hH', 'counter');
// Script/counter.js

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
var countText = null;
cc.Class({
  "extends": cc.Component,
  properties: {
    countText: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    $base.set('count', this.count);
    countText = this.countText;
    countText.string = $base.countNumber;
  },
  count: function count(num) {
    var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '++';

    try {
      var label = countText;
      var countNumber = Number(label.string);
      symbol === '++' ? countNumber = +Number(num) : countNumber -= Number(num);
      $base.countNumber += countNumber;
      label.string = $base.countNumber;
    } catch (error) {
      console.log(error);
    }
  } // start () {
  // },
  // update (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb3VudGVyLmpzIl0sIm5hbWVzIjpbImNvdW50VGV4dCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiTGFiZWwiLCJvbkxvYWQiLCIkYmFzZSIsInNldCIsImNvdW50Iiwic3RyaW5nIiwiY291bnROdW1iZXIiLCJudW0iLCJzeW1ib2wiLCJsYWJlbCIsIk51bWJlciIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxTQUFTLEdBQUcsSUFBaEI7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JKLElBQUFBLFNBQVMsRUFBRUMsRUFBRSxDQUFDSTtBQUROLEdBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ05DLElBQUFBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLE9BQVYsRUFBbUIsS0FBS0MsS0FBeEI7QUFDQVQsSUFBQUEsU0FBUyxHQUFHLEtBQUtBLFNBQWpCO0FBQ0FBLElBQUFBLFNBQVMsQ0FBQ1UsTUFBVixHQUFtQkgsS0FBSyxDQUFDSSxXQUF6QjtBQUNILEdBYkk7QUFlTEYsRUFBQUEsS0FmSyxpQkFlQ0csR0FmRCxFQWVxQjtBQUFBLFFBQWZDLE1BQWUsdUVBQU4sSUFBTTs7QUFDdEIsUUFBSTtBQUNBLFVBQUlDLEtBQUssR0FBR2QsU0FBWjtBQUNBLFVBQUlXLFdBQVcsR0FBR0ksTUFBTSxDQUFDRCxLQUFLLENBQUNKLE1BQVAsQ0FBeEI7QUFDQUcsTUFBQUEsTUFBTSxLQUFLLElBQVgsR0FDR0YsV0FBVyxHQUFFLENBQUVJLE1BQU0sQ0FBQ0gsR0FBRCxDQUR4QixHQUVFRCxXQUFXLElBQUlJLE1BQU0sQ0FBQ0gsR0FBRCxDQUZ2QjtBQUdBTCxNQUFBQSxLQUFLLENBQUNJLFdBQU4sSUFBcUJBLFdBQXJCO0FBQ0FHLE1BQUFBLEtBQUssQ0FBQ0osTUFBTixHQUFlSCxLQUFLLENBQUNJLFdBQXJCO0FBQ0gsS0FSRCxDQVFFLE9BQU9LLEtBQVAsRUFBYztBQUNaQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNIO0FBQ0osR0EzQkksQ0E2Qkw7QUFDQTtBQUVBO0FBRUE7O0FBbENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5sZXQgY291bnRUZXh0ID0gbnVsbFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNvdW50VGV4dDogY2MuTGFiZWxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAkYmFzZS5zZXQoJ2NvdW50JywgdGhpcy5jb3VudClcclxuICAgICAgICBjb3VudFRleHQgPSB0aGlzLmNvdW50VGV4dFxyXG4gICAgICAgIGNvdW50VGV4dC5zdHJpbmcgPSAkYmFzZS5jb3VudE51bWJlclxyXG4gICAgfSxcclxuXHJcbiAgICBjb3VudChudW0sIHN5bWJvbCA9ICcrKycpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBjb3VudFRleHQ7XHJcbiAgICAgICAgICAgIGxldCBjb3VudE51bWJlciA9IE51bWJlcihsYWJlbC5zdHJpbmcpO1xyXG4gICAgICAgICAgICBzeW1ib2wgPT09ICcrKydcclxuICAgICAgICAgICAgPyAgY291bnROdW1iZXIgPSsgTnVtYmVyKG51bSlcclxuICAgICAgICAgICAgOiBjb3VudE51bWJlciAtPSBOdW1iZXIobnVtKVxyXG4gICAgICAgICAgICAkYmFzZS5jb3VudE51bWJlciArPSBjb3VudE51bWJlclxyXG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSAkYmFzZS5jb3VudE51bWJlcjsgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGFydCAoKSB7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl19