
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/audioSourceControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9aa5e4r+apNGqXl2RdxfGgL', 'audioSourceControl');
// Script/audioSourceControl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bullet: {
      type: cc.AudioClip,
      "default": null
    },
    enemy1_down: {
      type: cc.AudioClip,
      "default": null
    },
    enemy2_down: {
      type: cc.AudioClip,
      "default": null
    },
    enemy3_down: {
      type: cc.AudioClip,
      "default": null
    },
    game_over: {
      type: cc.AudioClip,
      "default": null
    }
  },
  play: function play(name) {
    cc.audioEngine.play(this[name]);
  },
  stop: function stop(name) {
    cc.audioEngine.stop(this[name]);
  },
  resume: function resume(name) {
    cc.audioEngine.resume(this[name]);
  },
  pause: function pause(name) {
    cc.audioEngine.pause(this[name]);
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    $base.set('audio', this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhdWRpb1NvdXJjZUNvbnRyb2wuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJidWxsZXQiLCJ0eXBlIiwiQXVkaW9DbGlwIiwiZW5lbXkxX2Rvd24iLCJlbmVteTJfZG93biIsImVuZW15M19kb3duIiwiZ2FtZV9vdmVyIiwicGxheSIsIm5hbWUiLCJhdWRpb0VuZ2luZSIsInN0b3AiLCJyZXN1bWUiLCJwYXVzZSIsIm9uTG9hZCIsIiRiYXNlIiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxTQURIO0FBRU4saUJBQVM7QUFGSCxLQURFO0FBS1ZDLElBQUFBLFdBQVcsRUFBRTtBQUNYRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sU0FERTtBQUVYLGlCQUFTO0FBRkUsS0FMSDtBQVNWRSxJQUFBQSxXQUFXLEVBQUU7QUFDWEgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFNBREU7QUFFWCxpQkFBUztBQUZFLEtBVEg7QUFhVkcsSUFBQUEsV0FBVyxFQUFFO0FBQ1hKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxTQURFO0FBRVgsaUJBQVM7QUFGRSxLQWJIO0FBaUJWSSxJQUFBQSxTQUFTLEVBQUU7QUFDVEwsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFNBREE7QUFFVCxpQkFBUztBQUZBO0FBakJELEdBSEw7QUEwQlBLLEVBQUFBLElBQUksRUFBRSxjQUFVQyxJQUFWLEVBQWdCO0FBQ3BCWixJQUFBQSxFQUFFLENBQUNhLFdBQUgsQ0FBZUYsSUFBZixDQUFvQixLQUFLQyxJQUFMLENBQXBCO0FBQ0QsR0E1Qk07QUE4QlBFLEVBQUFBLElBQUksRUFBRSxjQUFVRixJQUFWLEVBQWdCO0FBQ3BCWixJQUFBQSxFQUFFLENBQUNhLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLRixJQUFMLENBQXBCO0FBQ0QsR0FoQ007QUFrQ1BHLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUgsSUFBVixFQUFnQjtBQUN0QlosSUFBQUEsRUFBRSxDQUFDYSxXQUFILENBQWVFLE1BQWYsQ0FBc0IsS0FBS0gsSUFBTCxDQUF0QjtBQUNELEdBcENNO0FBc0NQSSxFQUFBQSxLQUFLLEVBQUUsZUFBVUosSUFBVixFQUFnQjtBQUNyQlosSUFBQUEsRUFBRSxDQUFDYSxXQUFILENBQWVHLEtBQWYsQ0FBcUIsS0FBS0osSUFBTCxDQUFyQjtBQUNELEdBeENNO0FBMENQO0FBRUFLLEVBQUFBLE1BNUNPLG9CQTRDRztBQUNSQyxJQUFBQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxPQUFWLEVBQW1CLElBQW5CO0FBQ0Q7QUE5Q00sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgYnVsbGV0OiB7XHJcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgfSxcclxuICAgIGVuZW15MV9kb3duOiB7XHJcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgfSxcclxuICAgIGVuZW15Ml9kb3duOiB7XHJcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgfSxcclxuICAgIGVuZW15M19kb3duOiB7XHJcbiAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgfSxcclxuICAgIGdhbWVfb3Zlcjoge1xyXG4gICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBwbGF5OiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzW25hbWVdKVxyXG4gIH0sXHJcblxyXG4gIHN0b3A6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXNbbmFtZV0pXHJcbiAgfSxcclxuXHJcbiAgcmVzdW1lOiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXNbbmFtZV0pXHJcbiAgfSxcclxuXHJcbiAgcGF1c2U6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzW25hbWVdKVxyXG4gIH0sXHJcblxyXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICBvbkxvYWQgKCkge1xyXG4gICAgJGJhc2Uuc2V0KCdhdWRpbycsIHRoaXMpXHJcbiAgfSxcclxuXHJcbn0pO1xyXG4iXX0=