
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnbG9iYWwuanMiXSwibmFtZXMiOlsid2luZG93IiwiJGJhc2UiLCJkYXRhIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImNvdW50TnVtYmVyIiwidmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFDQSxNQUFNLENBQUNDLEtBQVAsR0FBZTtBQUNiLGtCQUFhO0FBQUE7O0FBQ1osUUFBSUMsSUFBSSxHQUFHLEtBQUtBLElBQUwsRUFBWDs7QUFDQSxTQUFLLElBQU1DLEdBQVgsSUFBa0JELElBQWxCLEVBQXdCO0FBQ3RCLFVBQUlBLElBQUksQ0FBQ0UsY0FBTCxDQUFvQkQsR0FBcEIsQ0FBSixFQUE4QjtBQUM1QixhQUFLQSxHQUFMLElBQVlELElBQUksQ0FBQ0MsR0FBRCxDQUFoQjtBQUNEO0FBQ0Y7QUFDRDs7QUFSWTtBQUFBO0FBQUEsdUJBU1ZFLElBVFUsRUFTSjtBQUNSQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0E7QUFYWTtBQUFBO0FBQUEsMEJBWVAsQ0FFTDtBQWRZO0FBQUE7QUFBQSwyQkFlUDtBQUNKLGFBQU87QUFDTEMsUUFBQUEsV0FBVyxFQUFFO0FBRFIsT0FBUDtBQUdEO0FBbkJZO0FBQUE7QUFBQSx3QkFvQlRILElBcEJTLEVBb0JISSxHQXBCRyxFQW9CRTtBQUNkLFdBQUtKLElBQUwsSUFBYUksR0FBYjtBQUNBO0FBdEJZO0FBQUE7QUFBQSx3QkF1QlRKLElBdkJTLEVBdUJIO0FBQ1IsYUFBTyxLQUFLQSxJQUFMLENBQVA7QUFDRDtBQXpCWTs7QUFBQTtBQUFBLE1BQWYiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIiB3aW5kb3cuJGJhc2UgPSBuZXcgY2xhc3MgQmFzZSB7XHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YSgpXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICB9XHJcbiAgIG9uKG5hbWUpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgIH1cclxuICAgb2ZmKCkge1xyXG5cclxuICAgfVxyXG4gICBkYXRhKCl7XHJcbiAgICAgcmV0dXJuIHtcclxuICAgICAgIGNvdW50TnVtYmVyOiAwXHJcbiAgICAgfVxyXG4gICB9XHJcbiAgIHNldChuYW1lLCB2YWwpIHtcclxuICAgIHRoaXNbbmFtZV0gPSB2YWxcclxuICAgfVxyXG4gICBnZXQobmFtZSkge1xyXG4gICAgIHJldHVybiB0aGlzW25hbWVdXHJcbiAgIH1cclxuIH0iXX0=