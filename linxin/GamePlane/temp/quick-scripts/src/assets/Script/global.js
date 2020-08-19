"use strict";
cc._RF.push(module, '24f1eefks5Eo4drD+vBszBI', 'global');
// Script/global.js

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.$base = new ( /*#__PURE__*/function () {
  function Base() {
    _classCallCheck(this, Base);

    var data = this.data();

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key];
      }
    }
  }

  _createClass(Base, [{
    key: "on",
    value: function on(name) {
      console.log(this);
    }
  }, {
    key: "off",
    value: function off() {}
  }, {
    key: "data",
    value: function data() {
      return {
        countNumber: 0
      };
    }
  }, {
    key: "set",
    value: function set(name, val) {
      this[name] = val;
    }
  }, {
    key: "get",
    value: function get(name) {
      return this[name];
    }
  }]);

  return Base;
}())();

cc._RF.pop();