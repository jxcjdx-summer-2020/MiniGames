
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/enemyPlane_1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cbeceQ6b0VF94Z68bvl+/xn', 'enemyPlane_1');
// Scripts/enemyPlane_1.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 0,
    bulletrDuration: 0,
    timer: 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.speed = 3;
    this.parent = this.node.getParent();
    this.game = this.parent.getComponent('game');
  },
  update: function update(dt) {
    this.node.y -= this.speed;
    if (this.node.y < -500) this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZW5lbXlQbGFuZV8xLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJidWxsZXRyRHVyYXRpb24iLCJ0aW1lciIsIm9uTG9hZCIsInBhcmVudCIsIm5vZGUiLCJnZXRQYXJlbnQiLCJnYW1lIiwiZ2V0Q29tcG9uZW50IiwidXBkYXRlIiwiZHQiLCJ5IiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBQyxDQURFO0FBRVJDLElBQUFBLGVBQWUsRUFBQyxDQUZSO0FBR1JDLElBQUFBLEtBQUssRUFBQztBQUhFLEdBSFA7QUFTTDtBQUVBQyxFQUFBQSxNQVhLLG9CQVdLO0FBQ04sU0FBS0gsS0FBTCxHQUFXLENBQVg7QUFDQSxTQUFLSSxNQUFMLEdBQVksS0FBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVUsS0FBS0gsTUFBTCxDQUFZSSxZQUFaLENBQXlCLE1BQXpCLENBQVY7QUFFSCxHQWhCSTtBQW1CTEMsRUFBQUEsTUFuQkssa0JBbUJHQyxFQW5CSCxFQW1CTztBQUNSLFNBQUtMLElBQUwsQ0FBVU0sQ0FBVixJQUFhLEtBQUtYLEtBQWxCO0FBQ0EsUUFBRyxLQUFLSyxJQUFMLENBQVVNLENBQVYsR0FBWSxDQUFDLEdBQWhCLEVBQ0ksS0FBS04sSUFBTCxDQUFVTyxPQUFWO0FBRVA7QUF4QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc3BlZWQ6MCxcclxuICAgICAgICBidWxsZXRyRHVyYXRpb246MCxcclxuICAgICAgICB0aW1lcjowLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuc3BlZWQ9MztcclxuICAgICAgICB0aGlzLnBhcmVudD10aGlzLm5vZGUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lPXRoaXMucGFyZW50LmdldENvbXBvbmVudCgnZ2FtZScpO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUueS09dGhpcy5zcGVlZDtcclxuICAgICAgICBpZih0aGlzLm5vZGUueTwtNTAwKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpOyBcclxuIFxyXG4gICAgfSwgICAgXHJcbiAgICBcclxufSk7XHJcbiJdfQ==