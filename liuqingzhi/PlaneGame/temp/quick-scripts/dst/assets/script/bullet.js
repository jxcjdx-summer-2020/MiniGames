
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
cc._RF.push(module, 'c2b70IHNohMdZSTuHK6ZOvM', 'bullet');
// script/bullet.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var app_1 = require("./app");
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //速度,用时间来表示
        _this._flyTime = 1;
        //射程
        _this._s = 1136;
        //伤害值
        _this._hp = 50;
        return _this;
    }
    // use this for initialization
    Bullet.prototype.onLoad = function () {
        this._s = this.node.parent.height;
        cc.director.getCollisionManager().enabled = true;
    };
    // start () {}
    //碰撞检测
    Bullet.prototype.onCollisionEnter = function (other, self) {
        cc.log("子弹射中了");
        //回收到对象池
        app_1.default.Instance.PutNode2Pool("Bullet1", this.node);
    };
    //子弹飞行
    Bullet.prototype.fly = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.moveBy(this._flyTime, cc.v2(0, this._s)).easing(cc.easeIn(1.0)), cc.callFunc(function () {
            _this.node.stopAllActions();
            //回收到对象池
            app_1.default.Instance.PutNode2Pool("Bullet", _this.node);
        }, this)));
    };
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxidWxsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUM1Qyw2QkFBd0I7QUFHeEI7SUFBb0MsMEJBQVk7SUFEaEQ7UUFBQSxxRUFrQ0M7UUEvQkcsV0FBVztRQUNILGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFN0IsSUFBSTtRQUNJLFFBQUUsR0FBVyxJQUFJLENBQUM7UUFFMUIsS0FBSztRQUNHLFNBQUcsR0FBVyxFQUFFLENBQUM7O0lBd0I3QixDQUFDO0lBdEJHLDhCQUE4QjtJQUM5Qix1QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckQsQ0FBQztJQUNELGNBQWM7SUFFZCxNQUFNO0lBQ04saUNBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQzFCLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEIsUUFBUTtRQUNSLGFBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELE1BQU07SUFDTixvQkFBRyxHQUFIO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDM0csS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzQixRQUFRO1lBQ1IsYUFBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQWhDZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWlDMUI7SUFBRCxhQUFDO0NBakNELEFBaUNDLENBakNtQyxFQUFFLENBQUMsU0FBUyxHQWlDL0M7a0JBakNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9hcHBcIjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIC8v6YCf5bqmLOeUqOaXtumXtOadpeihqOekulxyXG4gICAgcHJpdmF0ZSBfZmx5VGltZTogbnVtYmVyID0gMTtcclxuXHJcbiAgICAvL+WwhOeoi1xyXG4gICAgcHJpdmF0ZSBfczogbnVtYmVyID0gMTEzNjtcclxuXHJcbiAgICAvL+S8pOWus+WAvFxyXG4gICAgcHJpdmF0ZSBfaHA6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3M9dGhpcy5ub2RlLnBhcmVudC5oZWlnaHQ7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gc3RhcnQgKCkge31cclxuXHJcbiAgICAvL+eisOaSnuajgOa1i1xyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICBjYy5sb2coXCLlrZDlvLnlsITkuK3kuoZcIik7XHJcbiAgICAgIC8v5Zue5pS25Yiw5a+56LGh5rGgXHJcbiAgICAgIEFwcC5JbnN0YW5jZS5QdXROb2RlMlBvb2woXCJCdWxsZXQxXCIsdGhpcy5ub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WtkOW8uemjnuihjFxyXG4gICAgZmx5KCl7XHJcbiAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZUJ5KHRoaXMuX2ZseVRpbWUsY2MudjIoMCx0aGlzLl9zKSkuZWFzaW5nKGNjLmVhc2VJbigxLjApKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIC8v5Zue5pS25Yiw5a+56LGh5rGgXHJcbiAgICAgICAgQXBwLkluc3RhbmNlLlB1dE5vZGUyUG9vbChcIkJ1bGxldFwiLHRoaXMubm9kZSk7XHJcbiAgICAgIH0sdGhpcykpKTtcclxuICAgIH1cclxufVxyXG4iXX0=