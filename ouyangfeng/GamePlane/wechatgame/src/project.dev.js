window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  a: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1629aynzQRJFYTD+CLeQsx1", "a");
    "use strict";
    module.exports = {
      enemypos: null
    };
    cc._RF.pop();
  }, {} ],
  bullet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94d562r/uZIXYg7k62ANXi8", "bullet");
    "use strict";
    var b = require("a");
    cc.Class({
      extends: cc.Component,
      properties: {
        bulletMoveSpeed: 0
      },
      onLoad: function onLoad() {
        cc.log(this.node.parent.getChildByName("enemyplane"));
      },
      getPlayerDistance: function getPlayerDistance(bullet) {
        cc.log("a.enemypos" + b.enemypos);
        var dist = b.enemypos.sub(bullet.position).mag();
        cc.log("bulletpos" + bullet.position);
        cc.log("dist" + dist);
        return dist;
      },
      onPicked: function onPicked(bullet) {
        bullet.parent.getChildByName("enemyplane").destroy();
        this.game.spawnNewEnemy();
        this.game.gainScore();
        cc.log("enemyplane, destroy");
        bullet.destroy();
      },
      start: function start() {},
      update: function update(dt) {
        var p = this.node.getPosition();
        this.node.y += this.bulletMoveSpeed * dt;
        p.y > 640 && this.node.destroy();
        if (this.getPlayerDistance(this.node) < 80) {
          cc.log("\u5df2\u7ecf\u89e6\u78b0\u654c\u673a");
          this.onPicked(this.node);
        }
      }
    });
    cc._RF.pop();
  }, {
    a: "a"
  } ],
  enemyplane: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54a228KZGlFJojawX2+ldTn", "enemyplane");
    "use strict";
    var a = require("a");
    cc.Class({
      extends: cc.Component,
      properties: {
        pickRadius: 0
      },
      onLoad: function onLoad() {
        cc.log("enemypos = " + a.enemypos);
        a.enemypos = this.node.getPosition();
        cc.log("enemypos = " + a.enemypos);
      },
      start: function start() {},
      update: function update(dt) {
        a.enemypos = this.node.getPosition();
        var p = this.node.getPosition();
        this.node.y -= 100 * dt;
        p.y > 640 && this.node.destroy();
      }
    });
    cc._RF.pop();
  }, {
    a: "a"
  } ],
  game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27cc8CRKE5Ob5JBeh6IffD7", "game");
    "use strict";
    var b = require("a");
    cc.Class({
      extends: cc.Component,
      properties: {
        myplane: {
          default: null,
          type: cc.Node
        },
        enemyplanePrefab: {
          default: null,
          type: cc.Prefab
        },
        bulletPrefab: {
          default: null,
          type: cc.Prefab
        },
        scoreDisplay: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.spawnNewEnemy();
        this.schedule(this.spawnNewBullet.bind(this), .3);
        this.score = 0;
      },
      spawnNewEnemy: function spawnNewEnemy() {
        var newenemy = cc.instantiate(this.enemyplanePrefab);
        this.node.addChild(newenemy);
        newenemy.setPosition(this.getNewEnemyPosition());
        newenemy.getComponent("enemyplane").game = this;
      },
      getNewEnemyPosition: function getNewEnemyPosition() {
        var randX = 2 * (Math.random() - .5) * 420;
        var randY = 500 * Math.random(.5, 1);
        return cc.v2(randX, randY);
      },
      spawnNewBullet: function spawnNewBullet() {
        var newbullet = cc.instantiate(this.bulletPrefab);
        this.node.addChild(newbullet);
        newbullet.setPosition(this.getNewBulletPosition());
        newbullet.getComponent("bullet").game = this;
      },
      getNewBulletPosition: function getNewBulletPosition() {
        var pos = this.myplane.getPosition();
        var x = pos.x;
        var y = pos.y + 55;
        return cc.v2(x, y);
      },
      start: function start() {},
      update: function update(dt) {
        b.enemypos.sub(this.myplane.position).mag() < 80 && this.gameOver();
      },
      gainScore: function gainScore() {
        this.score += 1;
        this.scoreDisplay.string = "Score: " + this.score;
      },
      gameOver: function gameOver() {
        cc.director.loadScene("end");
      }
    });
    cc._RF.pop();
  }, {
    a: "a"
  } ],
  plane: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3a389xTC1A8qqCqbe7nlX2", "plane");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        maxMoveSpeed: 0,
        accel: 0
      },
      onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.a:
          this.accLeft = true;
          break;

         case cc.macro.KEY.d:
          this.accRight = true;
          break;

         case cc.macro.KEY.w:
          this.accUp = true;
          break;

         case cc.macro.KEY.s:
          this.accDown = true;
        }
      },
      onKeyUp: function onKeyUp(event) {
        switch (event.keyCode) {
         case cc.macro.KEY.a:
          this.accLeft = false;
          break;

         case cc.macro.KEY.d:
          this.accRight = false;
          break;

         case cc.macro.KEY.w:
          this.accUp = false;
          break;

         case cc.macro.KEY.s:
          this.accDown = false;
        }
      },
      onLoad: function onLoad() {
        this.accLeft = false;
        this.accRight = false;
        this.xSpeed = 0;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
      },
      start: function start() {},
      update: function update(dt) {
        this.accLeft ? this.node.x > -420 ? this.node.x -= 400 * dt : this.node.x -= 0 : this.accRight ? this.node.x < 420 ? this.node.x += 400 * dt : this.node.x += 0 : this.accUp ? this.node.y < 250 ? this.node.y += 300 * dt : this.node.y += 0 : this.accDown && (this.node.y > -250 ? this.node.y -= 200 * dt : this.node.y -= 0);
      }
    });
    cc._RF.pop();
  }, {} ],
  start: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a396euS6pA8JfDeoOJJkGQ", "start");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {},
      toGame: function toGame() {
        cc.director.loadScene("game");
      },
      toStart: function toStart() {
        cc.director.loadScene("start");
      }
    });
    cc._RF.pop();
  }, {} ],
  use_reversed_rotateBy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fbfe12X3ApNaINLtVRnIO8g", "use_reversed_rotateBy");
    "use strict";
    cc.RotateBy._reverse = true;
    cc._RF.pop();
  }, {} ]
}, {}, [ "a", "bullet", "enemyplane", "game", "plane", "start", "use_reversed_rotateBy" ]);
//# sourceMappingURL=project.dev.js.map
