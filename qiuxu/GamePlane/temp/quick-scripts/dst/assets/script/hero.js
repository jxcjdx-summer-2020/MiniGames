
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/hero.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCI7XHJcbmltcG9ydCBCdWxsZXQgZnJvbSBcIi4vYnVsbGV0XCI7XHJcbmltcG9ydCBNYWluIGZyb20gXCIuL21haW5cIjtcclxuXHJcbmNvbnN0IElucHV0ID17fTtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvL+WtkOW8uXBmYlxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBmYl9idWxsZXQxOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8v5a2Q5by55Y+R5bCE5aOw6Z+zXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYXVkaW9fYnVsbGV0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgICAvL+mjnuacuuiiq+avgeWjsOmfs1xyXG4gICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICAgYXVkaW9faGVyb19ibG93dXA6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgX3NwZWVkPTMwMDtcclxuICAgIC8v5rC05bmz6YCf5bqmXHJcbiAgICAvLyAgIHByaXZhdGUgaHYgPSAwO1xyXG4gICAgLy/msLTlubPliqDpgJ/luqZcclxuICAgIC8vICAgcHJpdmF0ZSBhaFY9MC41O1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3NwZWVkPTMwMDtcclxuXHJcbiAgICAgICAgLy8gY2MubG9nKFwi55Sf5oiQ5a2Q5by55rGgXCIpO1xyXG4gICAgICAgIEFwcC5JbnN0YW5jZS5BZGRUeXBlUG9vbChcIkJ1bGxldDFcIiwgNTAsIHRoaXMucGZiX2J1bGxldDEpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXlkb3duJyx0aGlzLm9uS2V5ZG93bix0aGlzKVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKCdrZXl1cCcsIHRoaXMub25LZXl1cCwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5kcmFnTW92ZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlkb3duKGUpe1xyXG4gICAgICAgIElucHV0W2Uua2V5Q29kZV0gPSAxXHJcbiAgICB9XHJcblxyXG4gICAgb25LZXl1cChlKXtcclxuICAgICAgICBJbnB1dFtlLmtleUNvZGVdID0gMFxyXG5cclxuICAgIH1cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8v5qC55o2u6KaB56e75Yqo55qE5pa55ZCR5pu05paw5Li76KeS6YCf5bqmXHJcbiAgICAgICAgLy/lt6blj7Pnp7vliqhcclxuICAgICAgICBpZiAoSW5wdXRbY2MubWFjcm8uS0VZLmFdIHx8IElucHV0W2NjLm1hY3JvLktFWS5sZWZ0XSkge1xyXG4gICAgICAgICAgIHRoaXMubm9kZS54LT10aGlzLl9zcGVlZCpkdDtcclxuICAgICAgICB9IGVsc2UgaWYgKElucHV0W2NjLm1hY3JvLktFWS5kXSB8fCBJbnB1dFtjYy5tYWNyby5LRVkucmlnaHRdKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5fc3BlZWQgKiBkdDtcclxuICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKElucHV0W2NjLm1hY3JvLktFWS53XSB8fCBJbnB1dFtjYy5tYWNyby5LRVkudXBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuX3NwZWVkICogZHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChJbnB1dFtjYy5tYWNyby5LRVkuc10gfHwgSW5wdXRbY2MubWFjcm8uS0VZLmRvd25dKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMuX3NwZWVkICogZHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+enu+WKqOWkhOeQhlxyXG4gICAgIHByaXZhdGUgZHJhZ01vdmUoZSk6IHZvaWQge1xyXG4gICAgICAgICB2YXIgbG9jYXRpb252ID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICB2YXIgbG9jYXRpb24gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGxvY2F0aW9udik7XHJcbiAgICAgICAgIC8v6aOe5py65LiN56e75Ye65bGP5bmVIFxyXG4gICAgICAgICB2YXIgbWluWCA9IC10aGlzLm5vZGUucGFyZW50LndpZHRoIC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgIHZhciBtYXhYID0gLW1pblg7XHJcbiAgICAgICAgIHZhciBtaW5ZID0gLXRoaXMubm9kZS5wYXJlbnQuaGVpZ2h0IC8gMiArIHRoaXMubm9kZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICB2YXIgbWF4WSA9IC1taW5ZO1xyXG4gICAgICAgICBpZiAobG9jYXRpb24ueCA8IG1pblgpIHtcclxuICAgICAgICAgICAgIGxvY2F0aW9uLnggPSBtaW5YO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmIChsb2NhdGlvbi54ID4gbWF4WCkge1xyXG4gICAgICAgICAgICAgbG9jYXRpb24ueCA9IG1heFg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYgKGxvY2F0aW9uLnkgPCBtaW5ZKSB7XHJcbiAgICAgICAgICAgICBsb2NhdGlvbi55ID0gbWluWTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZiAobG9jYXRpb24ueSA+IG1heFkpIHtcclxuICAgICAgICAgICAgIGxvY2F0aW9uLnkgPSBtYXhZO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihsb2NhdGlvbik7XHJcbiAgICAgfVxyXG5cclxuICAgIC8v5Y2V5Y+RXHJcbiAgICBzaWdsZUZpcmUodHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5nZW5CdWxsZXQoKTtcclxuICAgIH1cclxuICAgIC8v6L+e5Y+RXHJcbiAgICBhdXRvRmlyZSgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ2VuQnVsbGV0LCAwLjEsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSKTtcclxuICAgIH1cclxuICAgIC8v5YGc5q2i5Y+R5bCEXHJcbiAgICBzdG9wRmlyZSgpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5nZW5CdWxsZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNwZWVkMSgpe1xyXG4gICAgICAgIHRoaXMuX3NwZWVkID0gNTAwO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlU3BlZWQyKCkge1xyXG4gICAgICAgIHRoaXMuX3NwZWVkID0gMTAwMDtcclxuICAgIH1cclxuICAgIC8v55Sf5oiQ5a2Q5by5XHJcbiAgICBnZW5CdWxsZXQoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmF1ZGlvX2J1bGxldCxmYWxzZSwxKTtcclxuICAgICAgICAvLyBjYy5sb2coXCLnlJ/miJDlrZDlvLkxXCIpO1xyXG4gICAgICAgIGxldCBidWxsZXQxID0gQXBwLkluc3RhbmNlLkdldE5vZGVGcm9tUG9vbChcIkJ1bGxldDFcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChidWxsZXQxKTtcclxuICAgICAgICBidWxsZXQxLnNldFBvc2l0aW9uKGNjLnYyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSArIDIwKSk7XHJcbiAgICAgICAgYnVsbGV0MS5nZXRDb21wb25lbnQoQnVsbGV0KS5mbHkoKTtcclxuICAgICAgICAvLyBjYy5sb2coXCJidWxsZXQxIGdyb3VwPVwiLGJ1bGxldDEuZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8v56Kw5pKe5qOA5rWLXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wRmlyZSgpO1xyXG4gICAgICAgIC8v5YGc5q2i56Kw5pKe5qOA5rWLXHJcbiAgICAgICAgdGhpcy5ub2RlLmdyb3VwPVwiZGVmYXVsdFwiO1xyXG4gICAgICAgIHRoaXMubm9kZS50YXJnZXRPZmYodGhpcyk7XHJcblxyXG4gICAgICAgIGNjLmxvZyhcIueisOaSnuWIsOajgOa1i1wiKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYXVkaW9faGVyb19ibG93dXAsZmFsc2UsMSk7XHJcbiAgICAgICAgdmFyIGFuaW0gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgLy8g5oyH5a6a5pKt5pS+IHRlc3Qg5Yqo55S7XHJcbiAgICAgICAgYW5pbS5wbGF5KCdoZXJvX2Jsb3d1cCcpO1xyXG4gICAgICAgIGFuaW0ub24oJ2ZpbmlzaGVkJywgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoTWFpbikuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==