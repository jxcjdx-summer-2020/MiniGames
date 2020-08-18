
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9e3byYqE9JJIXjjDRK6y1B', 'enemy');
// script/enemy.ts

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
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //奖励分数
        _this.rewardScore = 1;
        //飞行速度，用时间来表示
        _this.speed = 1;
        //生命值
        _this.hp = 100;
        //爆炸音效
        _this.audio_blowup = null;
        //行程
        _this._s = 0;
        _this._hp = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS
    Enemy.prototype.onLoad = function () {
    };
    // start() { }
    // update (dt) {}
    //飞行动作
    Enemy.prototype.fly = function () {
        var _this = this;
        this._s = -this.node.parent.height;
        this._hp = this.hp;
        // this.node.setPosition(cc.v2(this.mrandX,600));
        this.node.runAction(cc.sequence(cc.moveBy(this.speed, cc.v2(0, this._s)).easing(cc.easeIn(1.0)), cc.callFunc(function () {
            //回收到对象池
            app_1.default.Instance.PutNode2Pool(_this.node.name, _this.node);
        }, this)));
    };
    //碰撞检测
    Enemy.prototype.onCollisionEnter = function (other, self) {
        cc.log(self.name, "<发生碰撞>", other.name);
        if (this._hp > 0) {
            this._hp -= 50;
            cc.log("enemy hp=", this.hp);
            return;
        }
        this._spriteFrame = this.node.getComponent(cc.Sprite).spriteFrame;
        this.node.stopAllActions();
        this.node.group = 'default'; //不让动画在执行碰撞
        var anim = this.node.getComponent(cc.Animation);
        anim.play();
        anim.on('finished', this.onResume, this);
        cc.audioEngine.play(this.audio_blowup, false, 1);
        //播放音效
        // cc.audioEngine.playEffect(this.enemyDownClip, false);  
    };
    //重置节点 回收到对象池
    Enemy.prototype.onResume = function (e) {
        cc.log("动画结束后 动画节点回收");
        this.node.getComponent(cc.Sprite).spriteFrame = this._spriteFrame;
        this._hp = this.hp;
        var event = new cc.Event.EventCustom('enemy_destory', true);
        event.setUserData(this.rewardScore);
        //敌机消灭，通知奖励
        this.node.dispatchEvent(event);
        app_1.default.Instance.PutNode2Pool(this.node.name, this.node);
    };
    __decorate([
        property
    ], Enemy.prototype, "rewardScore", void 0);
    __decorate([
        property
    ], Enemy.prototype, "speed", void 0);
    __decorate([
        property
    ], Enemy.prototype, "hp", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Enemy.prototype, "audio_blowup", void 0);
    Enemy = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(cc.Component));
exports.default = Enemy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBQzVDLDZCQUF3QjtBQUd4QjtJQUFtQyx5QkFBWTtJQUQvQztRQUFBLHFFQTRFQztRQTFFRyxNQUFNO1FBRU4saUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsYUFBYTtRQUViLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsS0FBSztRQUVMLFFBQUUsR0FBVyxHQUFHLENBQUM7UUFFaEIsTUFBTTtRQUVOLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVuQyxJQUFJO1FBQ0ksUUFBRSxHQUFDLENBQUMsQ0FBQztRQUNMLFNBQUcsR0FBQyxDQUFDLENBQUM7O0lBd0RsQixDQUFDO0lBbkRHLHVCQUF1QjtJQUN2QixzQkFBTSxHQUFOO0lBQ0EsQ0FBQztJQUVELGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLG1CQUFHLEdBQUg7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxFQUFFLEdBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pCLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUU7WUFDMUcsUUFBUTtZQUNSLGFBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELE1BQU07SUFDTixnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1lBQ2YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDLFdBQVc7UUFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsTUFBTTtRQUNOLDBEQUEwRDtJQUM5RCxDQUFDO0lBRUQsYUFBYTtJQUNiLHdCQUFRLEdBQVIsVUFBUyxDQUFDO1FBQ04sRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRWpCLElBQUksS0FBSyxHQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXBDLFdBQVc7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QixhQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQXZFRDtRQURDLFFBQVE7OENBQ2U7SUFJeEI7UUFEQyxRQUFRO3dDQUNTO0lBSWxCO1FBREMsUUFBUTtxQ0FDUTtJQUloQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOytDQUNXO0lBZmxCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0EyRXpCO0lBQUQsWUFBQztDQTNFRCxBQTJFQyxDQTNFa0MsRUFBRSxDQUFDLFNBQVMsR0EyRTlDO2tCQTNFb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvL+WlluWKseWIhuaVsFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByZXdhcmRTY29yZTogbnVtYmVyID0gMTtcclxuXHJcbiAgICAvL+mjnuihjOmAn+W6pu+8jOeUqOaXtumXtOadpeihqOekulxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMTtcclxuXHJcbiAgICAvL+eUn+WRveWAvFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBocDogbnVtYmVyID0gMTAwO1xyXG5cclxuICAgICAvL+eIhueCuOmfs+aViFxyXG4gICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAgYXVkaW9fYmxvd3VwOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIC8v6KGM56iLXHJcbiAgICBwcml2YXRlIF9zPTA7XHJcbiAgICBwcml2YXRlIF9ocD0wO1xyXG5cclxuICAgIC8vZGVmYXVsdCBzcHJpdGVcclxuICAgIHByaXZhdGUgX3Nwcml0ZUZyYW1lOmNjLlNwcml0ZUZyYW1lO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0YXJ0KCkgeyB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG4gICAgLy/po57ooYzliqjkvZxcclxuICAgIGZseSgpIHtcclxuICAgICAgICB0aGlzLl9zPS10aGlzLm5vZGUucGFyZW50LmhlaWdodDtcclxuICAgICAgICB0aGlzLl9ocD10aGlzLmhwO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYy52Mih0aGlzLm1yYW5kWCw2MDApKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVCeSh0aGlzLnNwZWVkLCBjYy52MigwLCB0aGlzLl9zKSkuZWFzaW5nKGNjLmVhc2VJbigxLjApKSwgY2MuY2FsbEZ1bmMoICgpID0+e1xyXG4gICAgICAgICAgICAvL+WbnuaUtuWIsOWvueixoeaxoFxyXG4gICAgICAgICAgICBBcHAuSW5zdGFuY2UuUHV0Tm9kZTJQb29sKHRoaXMubm9kZS5uYW1lLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIH0sIHRoaXMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/norDmkp7mo4DmtYtcclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBjYy5sb2coc2VsZi5uYW1lLCBcIjzlj5HnlJ/norDmkp4+XCIsIG90aGVyLm5hbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLl9ocCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5faHAgLT0gNTA7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcImVuZW15IGhwPVwiLHRoaXMuaHApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBcclxuICAgICAgICB0aGlzLl9zcHJpdGVGcmFtZT10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gJ2RlZmF1bHQnOyAvL+S4jeiuqeWKqOeUu+WcqOaJp+ihjOeisOaSnlxyXG4gICAgICAgIGxldCBhbmltID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGFuaW0ucGxheSgpO1xyXG4gICAgICAgIGFuaW0ub24oJ2ZpbmlzaGVkJywgdGhpcy5vblJlc3VtZSwgdGhpcyk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF1ZGlvX2Jsb3d1cCxmYWxzZSwxKTtcclxuICAgICAgICAvL+aSreaUvumfs+aViFxyXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5lbmVteURvd25DbGlwLCBmYWxzZSk7ICBcclxuICAgIH1cclxuXHJcbiAgICAvL+mHjee9ruiKgueCuSDlm57mlLbliLDlr7nosaHmsaBcclxuICAgIG9uUmVzdW1lKGUpIHtcclxuICAgICAgICBjYy5sb2coXCLliqjnlLvnu5PmnZ/lkI4g5Yqo55S76IqC54K55Zue5pS2XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT10aGlzLl9zcHJpdGVGcmFtZTtcclxuICAgICAgICB0aGlzLl9ocD10aGlzLmhwO1xyXG5cclxuICAgICAgICBsZXQgZXZlbnQ9bmV3IGNjLkV2ZW50LkV2ZW50Q3VzdG9tKCdlbmVteV9kZXN0b3J5JywgdHJ1ZSk7XHJcbiAgICAgICAgZXZlbnQuc2V0VXNlckRhdGEodGhpcy5yZXdhcmRTY29yZSk7XHJcbiAgICBcclxuICAgICAgICAvL+aVjOacuua2iOeBre+8jOmAmuefpeWlluWKsVxyXG4gICAgICAgdGhpcy5ub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIEFwcC5JbnN0YW5jZS5QdXROb2RlMlBvb2wodGhpcy5ub2RlLm5hbWUsIHRoaXMubm9kZSk7XHJcbiAgICB9XHJcbn1cclxuIl19