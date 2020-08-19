"use strict";
cc._RF.push(module, '06f96EafNRIUpR6fNmcNXXP', 'object_pool');
// Script/object_pool.js

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
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  initPool: function initPool(_ref) {
    var _ref$initCount = _ref.initCount,
        initCount = _ref$initCount === void 0 ? 1 : _ref$initCount,
        name = _ref.name,
        prefab = _ref.prefab;
    if (this["".concat(name, "Pool")]) return;
    if (prefab) this["".concat(name, "Prefab")] = prefab;
    this["".concat(name, "Pool")] = new cc.NodePool();

    for (var i = 0; i < initCount; ++i) {
      var node = cc.instantiate(this["".concat(name, "Prefab")]); // 创建节点

      this["".concat(name, "Pool")].put(node); // 通过 put 接口放入对象池
    }

    return this;
  },
  recyclePool: function recyclePool(_ref2) {
    var name = _ref2.name,
        node = _ref2.node;
    this["".concat(name, "Pool")].put(node);
    return this;
  },
  createEnemy: function createEnemy(_ref3) {
    var name = _ref3.name,
        _ref3$parentNode = _ref3.parentNode,
        parentNode = _ref3$parentNode === void 0 ? cc.find('Canvas/background') : _ref3$parentNode,
        componentName = _ref3.componentName;
    var node = null;
    var pool = this["".concat(name, "Pool")];
    var prefab = this["".concat(name, "Prefab")];

    if (pool.size() > 0) {
      // 通过 size 接口判断对象池中是否有空闲的对象
      node = pool.get();
    } else {
      // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
      node = cc.instantiate(prefab);
    }

    node.parent = parentNode; // 加入节点树

    if (!componentName) componentName = name;
    var component = node.getComponent(componentName); // console.log(component,'componentcomponentcomponent');

    if (component.init) component.init();

    if (component) {
      return component;
    } else {
      return node;
    }
  },
  onLoad: function onLoad() {
    $base.set('objectPool', this);
  } // start () {
  // },
  // update (dt) {},

});

cc._RF.pop();