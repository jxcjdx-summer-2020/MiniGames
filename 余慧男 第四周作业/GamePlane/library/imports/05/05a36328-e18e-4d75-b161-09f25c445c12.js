"use strict";
cc._RF.push(module, '05a36Mo4Y5NdbFhCfJcRFwS', 'create_enemy');
// Script/create_enemy.js

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
var aircraftLoading = [{
  quantity: 10,
  chance: 65,
  componentName: 'enemy_01',
  grade: 1
}, {
  quantity: 5,
  chance: 25.2,
  componentName: 'enemy_01',
  grade: 3
}, {
  quantity: 2,
  chance: 9.8,
  componentName: 'enemy_01',
  grade: 5
}];
cc.Class({
  "extends": cc.Component,
  properties: {
    aircraft: {
      "default": [],
      type: cc.Prefab,
      tooltip: '飞机'
    },
    object_pool: {
      "default": null,
      type: require('object_pool')
    },
    taktTime: {
      "default": 2000
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.createEnemy();
    this.plant();
  },
  plant: function plant() {
    // 飞机工厂
    var background = cc.find('Canvas/background');
    this.schedule(function () {
      var _this$aircraftAdd = this.aircraftAdd(),
          prefab = _this$aircraftAdd.prefab,
          currentElement = _this$aircraftAdd.currentElement;

      if (prefab) {
        var enemy = this.object_pool.createEnemy({
          name: prefab.name,
          parentNode: this.node.parent,
          componentName: 'enemy_01'
        });
        var node = enemy.node;
        node.quantity = currentElement.quantity;
        node.chance = currentElement.chance;
        node.grade = currentElement.grade;
        node.x = this.randomPosition(background, node);
        node.y = background.height / 2 + node.height * 0.5;
        this.takeOff(node, background);
      }
    }, this.taktTime / 1000);
  },
  randomPosition: function randomPosition(parent, node) {
    // 创建敌人的随机位置
    var random = Math.random();
    var b = parent.width / 2; // 获得屏幕一半

    var number = -parseInt(b - parent.width * random); // 用一半减去百分比 得到整就是少 负值就是多 所以取反

    var max = b - node.width / 2; // 得到不超过屏幕最大值

    var gap = max - Math.abs(number); // 和最大值的间隙

    if (gap < 0) {
      number > 0 ? number = max : number = -max; // 让飞机始终不能超过最大
    }

    return number;
  },
  takeOff: function takeOff(enemy, parent) {
    // 启动飞机
    var object_pool = this.object_pool; // console.log(enemy.ySpeed, enemy.x);

    var action = cc.moveTo(enemy.ySpeed, enemy.x, -(parent.height / 2 + enemy.height * 0.5));
    var finished = cc.callFunc(function () {
      object_pool.recyclePool({
        node: enemy,
        name: enemy.name
      });
    }, this);
    var myAction = cc.sequence(cc.show(), action, finished);
    enemy.runAction(myAction);
  },
  createEnemy: function createEnemy() {
    var _this = this;

    // 生成敌人
    var aircraft = this.aircraft;
    aircraft.forEach(function (element, index) {
      if (!element) return;
      var name = element.name;

      _this.object_pool.initPool({
        initCount: aircraftLoading[index].quantity,
        name: name,
        prefab: element
      });
    });
  },
  aircraftAdd: function aircraftAdd() {
    // 飞机添加
    var num = Math.random();
    var index;
    var fistChance = 0;
    var currentNumber = 0;
    var currentElement;
    aircraftLoading.forEach(function (element, i) {
      var chance = element.chance / 100;
      currentNumber += chance;

      if (num > fistChance && num <= currentNumber) {
        index = i;
        currentElement = element;
      }

      fistChance = currentNumber;
    });
    var prefab = this.aircraft[index];
    return {
      prefab: prefab,
      currentElement: currentElement
    };
  } // start () {
  // },
  // update (dt) {},

});

cc._RF.pop();