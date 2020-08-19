"use strict";
cc._RF.push(module, '31c48bPWn9ERZwAfQRNIDjj', 'game');
// Scripts/game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bullet_1Prefab: {
      "default": null,
      type: cc.Prefab
    },
    player: {
      "default": null,
      type: cc.Node
    },
    enemyPrefab: {
      "default": null,
      type: cc.Prefab
    },
    enemyBulletPrefab: {
      "default": null,
      type: cc.Prefab
    },
    score: {
      "default": null,
      type: cc.Label
    },
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    },
    bullet_2Prefab: {
      "default": null,
      type: cc.Prefab
    },
    boomPrefab: {
      "default": null,
      type: cc.Prefab
    },
    enemyBuffPrefab: {
      "default": null,
      type: cc.Prefab
    },
    buff: {
      "default": null,
      type: cc.Prefab
    }
  },
  onLoad: function onLoad() {
    this.tran = 0;
    this.Score = 0;
    this.bulletrDuration = 2;
    this.timer = 0;
    this.player.getComponent('player').game = this;
  },
  start: function start() {},
  update: function update(dt) {
    //enemy plane
    if (this.timer > this.bulletrDuration) {
      this.spawnNewEnemy();
      this.timer = 0;
      return;
    }

    this.timer += dt;
  },
  //bullet
  spawnNewBullet: function spawnNewBullet(X, Y) {
    switch (this.tran) {
      case 0:
        var newBullet = cc.instantiate(this.bullet_1Prefab);
        this.node.addChild(newBullet);
        newBullet.setPosition(cc.v2(X, Y));
        break;

      case 1:
        var newBullet = cc.instantiate(this.bullet_2Prefab);
        this.node.addChild(newBullet);
        newBullet.setPosition(cc.v2(X, Y));
        break;
    }
  },
  //enemy plane random location
  spawnNewEnemy: function spawnNewEnemy() {
    if (Math.random() < 0.3) {
      var newEnemy = cc.instantiate(this.enemyBuffPrefab);
      this.node.addChild(newEnemy);
      newEnemy.setPosition(this.getNewEnemyPosition());
    } else {
      var newEnemy = cc.instantiate(this.enemyPrefab);
      this.node.addChild(newEnemy);
      newEnemy.setPosition(this.getNewEnemyPosition());
    }
  },
  getNewEnemyPosition: function getNewEnemyPosition() {
    var randX = 0; //  get the x coordiate through screen width

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;
    return cc.v2(randX, 480);
  },
  //enemy plane's bullet
  spawnEnemyBullet: function spawnEnemyBullet(X, Y) {
    var newEnemyBullet = cc.instantiate(this.enemyBulletPrefab);
    this.node.addChild(newEnemyBullet);
    newEnemyBullet.setPosition(cc.v2(X, Y));
  },
  //score
  addScore: function addScore() {
    cc.audioEngine.playEffect(this.scoreAudio, false);
    this.Score++;
    this.score.string = "Scoer: " + this.Score;
  },
  //boom
  addBoom: function addBoom(X, Y) {
    var newBoom = cc.instantiate(this.boomPrefab);
    this.node.addChild(newBoom);
    newBoom.setPosition(cc.v2(X, Y));
  },
  //buff
  addBuff: function addBuff(X, Y) {
    var newBuff = cc.instantiate(this.buff);
    this.node.addChild(newBuff);
    newBuff.setPosition(cc.v2(X, Y));
  },
  tran_Bullet: function tran_Bullet(X) {
    this.tran = X;
  },
  gameOver: function gameOver() {
    cc.director.loadScene('end');
  }
});

cc._RF.pop();