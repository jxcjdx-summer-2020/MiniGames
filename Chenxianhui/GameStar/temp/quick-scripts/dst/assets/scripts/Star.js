
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57692X4oUNFirxsOsSM5oG3', 'Star');
// scripts/Star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // 星星和主角之间的距离小于这个数值时，就会完成收集
    pickRadius: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  update: function update(dt) {
    // 每帧判断和主角之间的距离是否小于收集距离
    if (this.getPlayerDistance() < this.pickRadius) {
      // 调用收集行为
      this.onPicked();
      return;
    } // 根据 Game 脚本中的计时器更新星星的透明度


    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  },
  getPlayerDistance: function getPlayerDistance() {
    // 根据 player 节点位置判断距离
    var playerPos = this.game.player.getPosition(); // 根据两点位置计算两点之间距离

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
    this.game.spawnNewStar(); // 调用 Game 脚本的得分方法

    this.game.gainScore(); // 然后销毁当前星星节点

    this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiZ2V0UGxheWVyRGlzdGFuY2UiLCJvblBpY2tlZCIsIm9wYWNpdHlSYXRpbyIsImdhbWUiLCJ0aW1lciIsInN0YXJEdXJhdGlvbiIsIm1pbk9wYWNpdHkiLCJub2RlIiwib3BhY2l0eSIsIk1hdGgiLCJmbG9vciIsInBsYXllclBvcyIsInBsYXllciIsImdldFBvc2l0aW9uIiwiZGlzdCIsInBvc2l0aW9uIiwic3ViIiwibWFnIiwic3Bhd25OZXdTdGFyIiwiZ2FpblNjb3JlIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFFO0FBRkosR0FIUDtBQVFMO0FBRUE7QUFFQUMsRUFBQUEsS0FaSyxtQkFZSSxDQUVSLENBZEk7QUFnQkxDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCO0FBQ0EsUUFBSSxLQUFLQyxpQkFBTCxLQUEyQixLQUFLSixVQUFwQyxFQUFnRDtBQUM1QztBQUNBLFdBQUtLLFFBQUw7QUFDQTtBQUNILEtBTmlCLENBT2xCOzs7QUFDQSxRQUFJQyxZQUFZLEdBQUcsSUFBSSxLQUFLQyxJQUFMLENBQVVDLEtBQVYsR0FBZ0IsS0FBS0QsSUFBTCxDQUFVRSxZQUFqRDtBQUNBLFFBQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsT0FBVixHQUFvQkYsVUFBVSxHQUFHRyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsWUFBWSxJQUFJLE1BQU1JLFVBQVYsQ0FBdkIsQ0FBakM7QUFDSCxHQTNCSTtBQTZCTE4sRUFBQUEsaUJBQWlCLEVBQUUsNkJBQVk7QUFDM0I7QUFDQSxRQUFJVyxTQUFTLEdBQUcsS0FBS1IsSUFBTCxDQUFVUyxNQUFWLENBQWlCQyxXQUFqQixFQUFoQixDQUYyQixDQUczQjs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBS1AsSUFBTCxDQUFVUSxRQUFWLENBQW1CQyxHQUFuQixDQUF1QkwsU0FBdkIsRUFBa0NNLEdBQWxDLEVBQVg7QUFDQSxXQUFPSCxJQUFQO0FBQ0gsR0FuQ0k7QUFxQ0xiLEVBQUFBLFFBQVEsRUFBRSxvQkFBVztBQUNqQjtBQUNBLFNBQUtFLElBQUwsQ0FBVWUsWUFBVixHQUZpQixDQUdqQjs7QUFDQSxTQUFLZixJQUFMLENBQVVnQixTQUFWLEdBSmlCLENBS2pCOztBQUNBLFNBQUtaLElBQUwsQ0FBVWEsT0FBVjtBQUNIO0FBNUNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDmmJ/mmJ/lkozkuLvop5LkuYvpl7TnmoTot53nprvlsI/kuo7ov5nkuKrmlbDlgLzml7bvvIzlsLHkvJrlrozmiJDmlLbpm4ZcclxuICAgICAgICBwaWNrUmFkaXVzOiAwLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgLy8g5q+P5bin5Yik5pat5ZKM5Li76KeS5LmL6Ze055qE6Led56a75piv5ZCm5bCP5LqO5pS26ZuG6Led56a7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMucGlja1JhZGl1cykge1xyXG4gICAgICAgICAgICAvLyDosIPnlKjmlLbpm4booYzkuLpcclxuICAgICAgICAgICAgdGhpcy5vblBpY2tlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOagueaNriBHYW1lIOiEmuacrOS4reeahOiuoeaXtuWZqOabtOaWsOaYn+aYn+eahOmAj+aYjuW6plxyXG4gICAgICAgIHZhciBvcGFjaXR5UmF0aW8gPSAxIC0gdGhpcy5nYW1lLnRpbWVyL3RoaXMuZ2FtZS5zdGFyRHVyYXRpb247XHJcbiAgICAgICAgdmFyIG1pbk9wYWNpdHkgPSA1MDtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IG1pbk9wYWNpdHkgKyBNYXRoLmZsb29yKG9wYWNpdHlSYXRpbyAqICgyNTUgLSBtaW5PcGFjaXR5KSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFBsYXllckRpc3RhbmNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g5qC55o2uIHBsYXllciDoioLngrnkvY3nva7liKTmlq3ot53nprtcclxuICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5nYW1lLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vIOagueaNruS4pOeCueS9jee9ruiuoeeul+S4pOeCueS5i+mXtOi3neemu1xyXG4gICAgICAgIHZhciBkaXN0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihwbGF5ZXJQb3MpLm1hZygpO1xyXG4gICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgfSxcclxuXHJcbiAgICBvblBpY2tlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8g5b2T5pif5pif6KKr5pS26ZuG5pe277yM6LCD55SoIEdhbWUg6ISa5pys5Lit55qE5o6l5Y+j77yM55Sf5oiQ5LiA5Liq5paw55qE5pif5pifXHJcbiAgICAgICAgdGhpcy5nYW1lLnNwYXduTmV3U3RhcigpO1xyXG4gICAgICAgIC8vIOiwg+eUqCBHYW1lIOiEmuacrOeahOW+l+WIhuaWueazlVxyXG4gICAgICAgIHRoaXMuZ2FtZS5nYWluU2NvcmUoKTtcclxuICAgICAgICAvLyDnhLblkI7plIDmr4HlvZPliY3mmJ/mmJ/oioLngrlcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==