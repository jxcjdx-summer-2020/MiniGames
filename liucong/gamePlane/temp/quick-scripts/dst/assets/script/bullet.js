
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8db4ecxcY5EvZONzFLxnXlp', 'bullet');
// script/bullet.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.speed_x = 0;
    this.speed_y = 400;
    this.audio = this.node.getComponent(cc.AudioSource);
  },
  start: function start() {},
  // 碰撞事件
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.node.removeFromParent();
    this.audio.play();
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    var sx = this.speed_x * dt;
    var sy = this.speed_y * dt;
    this.node.x += sx;
    this.node.y += sy;

    if (this.node.y >= 650 || this.node.x >= 330 || this.node.x <= -330) {
      this.node.removeFromParent();
      return;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxidWxsZXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJzcGVlZF94Iiwic3BlZWRfeSIsImF1ZGlvIiwibm9kZSIsImdldENvbXBvbmVudCIsIkF1ZGlvU291cmNlIiwic3RhcnQiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwicmVtb3ZlRnJvbVBhcmVudCIsInBsYXkiLCJ1cGRhdGUiLCJkdCIsInN4Iiwic3kiLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFLTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEdBQWY7QUFDQSxTQUFLQyxLQUFMLEdBQWEsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCVCxFQUFFLENBQUNVLFdBQTFCLENBQWI7QUFDSCxHQVRJO0FBV0xDLEVBQUFBLEtBQUssRUFBRSxpQkFBVyxDQUVqQixDQWJJO0FBY0w7QUFDQUMsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCO0FBQ3BDLFNBQUtOLElBQUwsQ0FBVU8sZ0JBQVY7QUFDQSxTQUFLUixLQUFMLENBQVdTLElBQVg7QUFDSCxHQWxCSTtBQW9CTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNsQixRQUFJQyxFQUFFLEdBQUcsS0FBS2QsT0FBTCxHQUFlYSxFQUF4QjtBQUNBLFFBQUlFLEVBQUUsR0FBRyxLQUFLZCxPQUFMLEdBQWVZLEVBQXhCO0FBRUEsU0FBS1YsSUFBTCxDQUFVYSxDQUFWLElBQWVGLEVBQWY7QUFDQSxTQUFLWCxJQUFMLENBQVVjLENBQVYsSUFBZUYsRUFBZjs7QUFFQSxRQUFJLEtBQUtaLElBQUwsQ0FBVWMsQ0FBVixJQUFlLEdBQWYsSUFBc0IsS0FBS2QsSUFBTCxDQUFVYSxDQUFWLElBQWUsR0FBckMsSUFBNEMsS0FBS2IsSUFBTCxDQUFVYSxDQUFWLElBQWUsQ0FBQyxHQUFoRSxFQUFxRTtBQUNqRSxXQUFLYixJQUFMLENBQVVPLGdCQUFWO0FBQ0E7QUFDSDtBQUNKO0FBaENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zcGVlZF94ID0gMDtcclxuICAgICAgICB0aGlzLnNwZWVkX3kgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5hdWRpbyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgLy8g56Kw5pKe5LqL5Lu2XHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbihvdGhlciwgc2VsZikge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgdGhpcy5hdWRpby5wbGF5KCk7ICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIHZhciBzeCA9IHRoaXMuc3BlZWRfeCAqIGR0O1xyXG4gICAgICAgIHZhciBzeSA9IHRoaXMuc3BlZWRfeSAqIGR0O1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUueCArPSBzeDtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSBzeTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPj0gNjUwIHx8IHRoaXMubm9kZS54ID49IDMzMCB8fCB0aGlzLm5vZGUueCA8PSAtMzMwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==