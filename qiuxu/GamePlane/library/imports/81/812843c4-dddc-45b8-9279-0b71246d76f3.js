"use strict";
cc._RF.push(module, '81284PE3dxFuJJ5C3EkbXbz', 'hero');
// script/hero.ts

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
var bullet_1 = require("./bullet");
var main_1 = require("./main");
var Input = {};
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //子弹pfb
        _this.pfb_bullet1 = null;
        //子弹发射声音
        _this.audio_bullet = null;
        //飞机被毁声音
        _this.audio_hero_blowup = null;
        _this._speed = 300;
        return _this;
    }
    //水平速度
    //   private hv = 0;
    //水平加速度
    //   private ahV=0.5;
    Hero.prototype.onLoad = function () {
        this._speed = 300;
        // cc.log("生成子弹池");
        app_1.default.Instance.AddTypePool("Bullet1", 50, this.pfb_bullet1);
        cc.systemEvent.on('keydown', this.onKeydown, this);
        cc.systemEvent.on('keyup', this.onKeyup, this);
    };
    Hero.prototype.start = function () {
        // this.node.on(cc.Node.EventType.TOUCH_MOVE, this.dragMove, this);
    };
    Hero.prototype.onKeydown = function (e) {
        Input[e.keyCode] = 1;
    };
    Hero.prototype.onKeyup = function (e) {
        Input[e.keyCode] = 0;
    };
    Hero.prototype.update = function (dt) {
        //根据要移动的方向更新主角速度
        //左右移动
        if (Input[cc.macro.KEY.a] || Input[cc.macro.KEY.left]) {
            this.node.x -= this._speed * dt;
        }
        else if (Input[cc.macro.KEY.d] || Input[cc.macro.KEY.right]) {
            this.node.x += this._speed * dt;
        }
        else {
        }
        if (Input[cc.macro.KEY.w] || Input[cc.macro.KEY.up]) {
            this.node.y += this._speed * dt;
        }
        else if (Input[cc.macro.KEY.s] || Input[cc.macro.KEY.down]) {
            this.node.y -= this._speed * dt;
        }
        else {
        }
    };
    //移动处理
    Hero.prototype.dragMove = function (e) {
        var locationv = e.getLocation();
        var location = this.node.parent.convertToNodeSpaceAR(locationv);
        //飞机不移出屏幕 
        var minX = -this.node.parent.width / 2 + this.node.width / 2;
        var maxX = -minX;
        var minY = -this.node.parent.height / 2 + this.node.height / 2;
        var maxY = -minY;
        if (location.x < minX) {
            location.x = minX;
        }
        if (location.x > maxX) {
            location.x = maxX;
        }
        if (location.y < minY) {
            location.y = minY;
        }
        if (location.y > maxY) {
            location.y = maxY;
        }
        this.node.setPosition(location);
    };
    //单发
    Hero.prototype.sigleFire = function (type) {
        this.genBullet();
    };
    //连发
    Hero.prototype.autoFire = function () {
        this.schedule(this.genBullet, 0.1, cc.macro.REPEAT_FOREVER);
    };
    //停止发射
    Hero.prototype.stopFire = function () {
        this.unschedule(this.genBullet);
    };
    Hero.prototype.changeSpeed1 = function () {
        this._speed = 500;
    };
    Hero.prototype.changeSpeed2 = function () {
        this._speed = 1000;
    };
    //生成子弹
    Hero.prototype.genBullet = function () {
        cc.audioEngine.play(this.audio_bullet, false, 1);
        // cc.log("生成子弹1");
        var bullet1 = app_1.default.Instance.GetNodeFromPool("Bullet1");
        this.node.parent.addChild(bullet1);
        bullet1.setPosition(cc.v2(this.node.x, this.node.y + 20));
        bullet1.getComponent(bullet_1.default).fly();
        // cc.log("bullet1 group=",bullet1.group);
    };
    //碰撞检测
    Hero.prototype.onCollisionEnter = function (other, self) {
        var _this = this;
        this.stopFire();
        //停止碰撞检测
        this.node.group = "default";
        this.node.targetOff(this);
        cc.log("碰撞到检测");
        cc.audioEngine.play(this.audio_hero_blowup, false, 1);
        var anim = this.node.getComponent(cc.Animation);
        // 指定播放 test 动画
        anim.play('hero_blowup');
        anim.on('finished', function () {
            _this.node.destroy();
            _this.node.parent.getComponent(main_1.default).gameOver();
        }, this);
    };
    __decorate([
        property(cc.Prefab)
    ], Hero.prototype, "pfb_bullet1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Hero.prototype, "audio_bullet", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Hero.prototype, "audio_hero_blowup", void 0);
    Hero = __decorate([
        ccclass
    ], Hero);
    return Hero;
}(cc.Component));
exports.default = Hero;

cc._RF.pop();