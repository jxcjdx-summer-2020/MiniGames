"use strict";
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