
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/create_enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjcmVhdGVfZW5lbXkuanMiXSwibmFtZXMiOlsiYWlyY3JhZnRMb2FkaW5nIiwicXVhbnRpdHkiLCJjaGFuY2UiLCJjb21wb25lbnROYW1lIiwiZ3JhZGUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImFpcmNyYWZ0IiwidHlwZSIsIlByZWZhYiIsInRvb2x0aXAiLCJvYmplY3RfcG9vbCIsInJlcXVpcmUiLCJ0YWt0VGltZSIsIm9uTG9hZCIsImNyZWF0ZUVuZW15IiwicGxhbnQiLCJiYWNrZ3JvdW5kIiwiZmluZCIsInNjaGVkdWxlIiwiYWlyY3JhZnRBZGQiLCJwcmVmYWIiLCJjdXJyZW50RWxlbWVudCIsImVuZW15IiwibmFtZSIsInBhcmVudE5vZGUiLCJub2RlIiwicGFyZW50IiwieCIsInJhbmRvbVBvc2l0aW9uIiwieSIsImhlaWdodCIsInRha2VPZmYiLCJyYW5kb20iLCJNYXRoIiwiYiIsIndpZHRoIiwibnVtYmVyIiwicGFyc2VJbnQiLCJtYXgiLCJnYXAiLCJhYnMiLCJhY3Rpb24iLCJtb3ZlVG8iLCJ5U3BlZWQiLCJmaW5pc2hlZCIsImNhbGxGdW5jIiwicmVjeWNsZVBvb2wiLCJteUFjdGlvbiIsInNlcXVlbmNlIiwic2hvdyIsInJ1bkFjdGlvbiIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJpbml0UG9vbCIsImluaXRDb3VudCIsIm51bSIsImZpc3RDaGFuY2UiLCJjdXJyZW50TnVtYmVyIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxlQUFlLEdBQUcsQ0FBQztBQUNyQkMsRUFBQUEsUUFBUSxFQUFFLEVBRFc7QUFFckJDLEVBQUFBLE1BQU0sRUFBRSxFQUZhO0FBR3JCQyxFQUFBQSxhQUFhLEVBQUUsVUFITTtBQUlyQkMsRUFBQUEsS0FBSyxFQUFFO0FB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UUFBSXRDLE1BQU0sR0FBRyxLQUFLZCxRQUFMLENBQWMrQyxLQUFkLENBQWI7QUFDQSxXQUFPO0FBQ0hqQyxNQUFBQSxNQUFNLEVBQU5BLE1BREc7QUFFSEMsTUFBQUEsY0FBYyxFQUFkQTtBQUZHLEtBQVA7QUFJSCxHQTVHSSxDQTZHTDtBQUVBO0FBRUE7O0FBakhLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cDovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5jb25zdCBhaXJjcmFmdExvYWRpbmcgPSBbe1xyXG4gICAgcXVhbnRpdHk6IDEwLFxyXG4gICAgY2hhbmNlOiA2NSxcclxuICAgIGNvbXBvbmVudE5hbWU6ICdlbmVteV8wMScsXHJcbiAgICBncmFkZTogMVxyXG59LCB7XHJcbiAgICBxdWFudGl0eTogNSxcclxuICAgIGNoYW5jZTogMjUuMixcclxuICAgIGNvbXBvbmVudE5hbWU6ICdlbmVteV8wMScsXHJcbiAgICBncmFkZTogM1xyXG59LCB7XHJcbiAgICBxdWFudGl0eTogMixcclxuICAgIGNoYW5jZTogOS44LFxyXG4gICAgY29tcG9uZW50TmFtZTogJ2VuZW15XzAxJyxcclxuICAgIGdyYWRlOiA1XHJcbn1dXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYWlyY3JhZnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICAgICAgdG9vbHRpcDogJ+mjnuacuidcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9iamVjdF9wb29sOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IHJlcXVpcmUoJ29iamVjdF9wb29sJyksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YWt0VGltZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAyMDAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVFbmVteSgpXHJcbiAgICAgICAgdGhpcy5wbGFudCgpICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgcGxhbnQgKCkgeyAvLyDpo57mnLrlt6XljoJcclxuICAgICAgICBsZXQgYmFja2dyb3VuZCA9IGNjLmZpbmQoJ0NhbnZhcy9iYWNrZ3JvdW5kJylcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQge3ByZWZhYiwgY3VycmVudEVsZW1lbnR9ID0gdGhpcy5haXJjcmFmdEFkZCgpXHJcbiAgICAgICAgICAgIGlmKHByZWZhYil7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5lbXkgPSB0aGlzLm9iamVjdF9wb29sLmNyZWF0ZUVuZW15KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcmVmYWIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiB0aGlzLm5vZGUucGFyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6ICdlbmVteV8wMSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGVuZW15Lm5vZGVcclxuICAgICAgICAgICAgICAgIG5vZGUucXVhbnRpdHkgPSBjdXJyZW50RWxlbWVudC5xdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgbm9kZS5jaGFuY2UgPSBjdXJyZW50RWxlbWVudC5jaGFuY2VcclxuICAgICAgICAgICAgICAgIG5vZGUuZ3JhZGUgPSBjdXJyZW50RWxlbWVudC5ncmFkZVxyXG4gICAgICAgICAgICAgICAgbm9kZS54ID0gdGhpcy5yYW5kb21Qb3NpdGlvbihiYWNrZ3JvdW5kLCBub2RlKVxyXG4gICAgICAgICAgICAgICAgbm9kZS55ID0gKGJhY2tncm91bmQuaGVpZ2h0LzIpICArIChub2RlLmhlaWdodCAqIDAuNSlcclxuICAgICAgICAgICAgICAgIHRoaXMudGFrZU9mZihub2RlLCBiYWNrZ3JvdW5kKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzLnRha3RUaW1lIC8gMTAwMClcclxuICAgIH0sXHJcblxyXG4gICAgcmFuZG9tUG9zaXRpb24gKHBhcmVudCwgbm9kZSkgeyAvLyDliJvlu7rmlYzkurrnmoTpmo/mnLrkvY3nva5cclxuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGxldCBiID0gcGFyZW50LndpZHRoIC8gMiAvLyDojrflvpflsY/luZXkuIDljYpcclxuICAgICAgICBsZXQgbnVtYmVyID0gLXBhcnNlSW50KCBiIC0gKHBhcmVudC53aWR0aCAqIHJhbmRvbSkgKSAvLyDnlKjkuIDljYrlh4/ljrvnmb7liIbmr5Qg5b6X5Yiw5pW05bCx5piv5bCRIOi0n+WAvOWwseaYr+WkmiDmiYDku6Xlj5blj41cclxuICAgICAgICBcclxuICAgICAgICBsZXQgbWF4ID0gYiAtIChub2RlLndpZHRoIC8gMikgLy8g5b6X5Yiw5LiN6LaF6L+H5bGP5bmV5pyA5aSn5YC8XHJcbiAgICAgICAgbGV0IGdhcCA9IG1heCAtIE1hdGguYWJzKCBudW1iZXIgKSAvLyDlkozmnIDlpKflgLznmoTpl7TpmplcclxuICAgICAgICBpZihnYXAgPCAwKSB7XHJcbiAgICAgICAgICAgIG51bWJlciA+IDAgPyBudW1iZXIgPSBtYXggOiBudW1iZXIgPSAtbWF4IC8vIOiuqemjnuacuuWni+e7iOS4jeiDvei2hei/h+acgOWkp1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtYmVyXHJcbiAgICB9LFxyXG5cclxuICAgIHRha2VPZmYoZW5lbXksIHBhcmVudCkgeyAvLyDlkK/liqjpo57mnLpcclxuICAgICAgICBjb25zdCBvYmplY3RfcG9vbCA9IHRoaXMub2JqZWN0X3Bvb2xcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlbmVteS55U3BlZWQsIGVuZW15LngpO1xyXG4gICAgICAgIHZhciBhY3Rpb24gPSBjYy5tb3ZlVG8oZW5lbXkueVNwZWVkLCBlbmVteS54LCAtKChwYXJlbnQuaGVpZ2h0LzIpICsgKGVuZW15LmhlaWdodCAqIDAuNSkpKTtcclxuICAgICAgICB2YXIgZmluaXNoZWQgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG9iamVjdF9wb29sLnJlY3ljbGVQb29sKHtcclxuICAgICAgICAgICAgICAgIG5vZGU6IGVuZW15LFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZW5lbXkubmFtZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHZhciBteUFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLnNob3coKSxhY3Rpb24sIGZpbmlzaGVkKTtcclxuICAgICAgICBlbmVteS5ydW5BY3Rpb24obXlBY3Rpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVFbmVteSgpIHsgLy8g55Sf5oiQ5pWM5Lq6XHJcbiAgICAgICAgbGV0IGFpcmNyYWZ0ID0gdGhpcy5haXJjcmFmdFxyXG4gICAgICAgIGFpcmNyYWZ0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkgcmV0dXJuXHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gZWxlbWVudC5uYW1lXHJcbiAgICAgICAgICAgIHRoaXMub2JqZWN0X3Bvb2wuaW5pdFBvb2woe1xyXG4gICAgICAgICAgICAgICAgaW5pdENvdW50OiBhaXJjcmFmdExvYWRpbmdbaW5kZXhdLnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHByZWZhYjogZWxlbWVudFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIGFpcmNyYWZ0QWRkKCkgeyAvLyDpo57mnLrmt7vliqBcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIGxldCBpbmRleFxyXG4gICAgICAgIGxldCBmaXN0Q2hhbmNlID0gMFxyXG4gICAgICAgIGxldCBjdXJyZW50TnVtYmVyID0gMFxyXG4gICAgICAgIGxldCBjdXJyZW50RWxlbWVudFxyXG4gICAgICAgIGFpcmNyYWZ0TG9hZGluZy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjaGFuY2UgPSBlbGVtZW50LmNoYW5jZSAvIDEwMFxyXG4gICAgICAgICAgICBjdXJyZW50TnVtYmVyICs9IGNoYW5jZVxyXG4gICAgICAgICAgICBpZihudW0gPiBmaXN0Q2hhbmNlICYmICBudW0gPD0gY3VycmVudE51bWJlciApIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gaVxyXG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlzdENoYW5jZSA9IGN1cnJlbnROdW1iZXJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLmFpcmNyYWZ0W2luZGV4XVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByZWZhYixcclxuICAgICAgICAgICAgY3VycmVudEVsZW1lbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzdGFydCAoKSB7XHJcblxyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7Il19