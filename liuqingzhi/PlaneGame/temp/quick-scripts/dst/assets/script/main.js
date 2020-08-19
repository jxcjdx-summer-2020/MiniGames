
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5dc45quB2hNm6Nzw37JC7Q4', 'main');
// script/main.ts

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
// 从 cc._decorator 命名空间中引入 ccclass 和 property 两个装饰器
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var hero_1 = require("./hero");
var app_1 = require("./app");
var enemy_1 = require("./enemy");
var util_1 = require("./util");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pfbs_enemy = [];
        //btns_row
        _this.btns = [];
        _this.hero = null;
        _this.bg_1 = null;
        _this.bg_2 = null;
        // @property(cc.Node)
        // far_bg: cc.Node[]=[]
        // bg_speed=0.6;
        _this.label_score = null;
        _this.label_clock = null;
        _this.score = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Main.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        //开启物理系统
        // cc.director.getPhysicsManager().enabled = true;
        //init enmey pools
        //定义移动开关
        for (var i = 0; i < this.pfbs_enemy.length; i++) {
            app_1.default.Instance.AddTypePool("enemy" + (i + 1), 20, this.pfbs_enemy[i]);
        }
        // 节点 b 的组件脚本中
        this.node.on('enemy_destory', function (event) {
            cc.log("敌机毁灭");
            var addScore = event.getUserData();
            this.score += addScore;
            this.label_score.string = this.score.toString();
            event.stopPropagationImmediate();
        }.bind(this));
        //始终显示在最前面
        this.node.getChildByName("btn_pause").zIndex = 99;
        this.label_score.node.zIndex = 100;
        this.label_clock.node.zIndex = 101;
    };
    Main.prototype.start = function () {
        //背景移动
        var t = 24;
        this.bg_1.runAction(cc.sequence(cc.moveBy(t, cc.v2(0, -this.node.height)), cc.callFunc(function () {
            this.bg_1.setPosition(cc.v2(0, this.node.height));
        }, this), cc.callFunc(function () {
            this.bg_1.runAction(cc.repeatForever(cc.sequence(cc.moveBy(2 * t, cc.v2(0, -this.node.height * 2)), cc.callFunc(function () {
                this.bg_1.rotation += 180;
                this.bg_1.setPosition(cc.v2(0, this.node.height));
            }, this))));
        }, this)));
        this.bg_2.runAction(cc.repeatForever(cc.sequence(cc.moveBy(2 * t, cc.v2(0, -this.node.height * 2)), cc.callFunc(function () {
            this.bg_2.setPosition(cc.v2(0, this.node.height));
        }, this))));
        //btns addlisten TOUCH_START
        for (var i = 0; i < this.btns.length; i++) {
            this.btns[i].on(cc.Node.EventType.TOUCH_START, this._dirvePlane, this);
            this.btns[i].on(cc.Node.EventType.TOUCH_CANCEL, this._stopDrivePlane, this);
            this.btns[i].on(cc.Node.EventType.TOUCH_END, this._stopDrivePlane, this);
        }
        this.clockRun();
        //test
        this.hero.getComponent(hero_1.default).autoFire();
        if (this.score >= 50 && this.score < 100) {
            this.hero.getComponent(hero_1.default).changeSpeed1();
        }
        else if (this.score >= 150 && this.score < 200) {
            this.hero.getComponent(hero_1.default).changeSpeed2();
        }
        //gen enemy1
        this.schedule(function () {
            this.genEnemy(1);
        }.bind(this), 0.9, cc.macro.REPEAT_FOREVER);
        //delay 30s
        this.scheduleOnce(function () {
            //gen enemy2
            this.schedule(function () {
                this.genEnemy(2);
            }.bind(this), 2, cc.macro.REPEAT_FOREVER);
        }.bind(this), 30);
        //delay 50s
        this.schedule(function () {
            //gen enemy3
            this.schedule(function () {
                this.genEnemy(3);
            }.bind(this), 4, cc.macro.REPEAT_FOREVER);
        }.bind(this), 50);
    };
    //驱动飞机
    Main.prototype._dirvePlane = function (e) {
        this.hero.stopAllActions();
        var s = 0;
        if (e.currentTarget._name == "_left") {
            s = -this.node.width / 2 - this.hero.x - 10;
        }
        else {
            s = this.node.width / 2 - this.hero.x + 10;
        }
        this.hero.runAction(cc.moveBy(Math.abs(s / 120), cc.v2(s, 0)).easing(cc.easeOut(1.5)));
    };
    //驱动停止
    Main.prototype._stopDrivePlane = function (e) {
        //缓动距离
        var xS = 10;
        if (e.currentTarget._name == "_left") {
            xS = -xS;
        }
        this.hero.runAction(cc.sequence(cc.moveBy(0.6, cc.v2(xS, 0)).easing(cc.easeOut(1.5)), cc.callFunc(function () {
            this.hero.stopAllActions();
        }, this)));
    };
    // update (dt) {}
    //敌机生成
    Main.prototype.genEnemy = function (kind) {
        var enmy = app_1.default.Instance.GetNodeFromPool("enemy" + kind);
        var randX = -this.node.width / 2 + Math.random() * this.node.width;
        enmy.setPosition(cc.v2(randX, 600));
        this.node.addChild(enmy);
        enmy.getComponent(enemy_1.default).fly();
        enmy.group = "enemy";
    };
    //游戏结束
    Main.prototype.gameOver = function () {
        //停止所有定时器
        this.unscheduleAllCallbacks();
        // cc.log("game over!");
        cc.sys.localStorage.setItem("score", this.label_score.string);
        var maxScore = Number(cc.sys.localStorage.getItem("maxScore") || 0);
        if (this.score > maxScore) {
            cc.sys.localStorage.setItem("maxScore", this.score);
        }
        var newScoreObj = {
            "time": util_1.default.TimeFormt(new Date()),
            "score": this.score,
        };
        var historyScores = JSON.parse(cc.sys.localStorage.getItem("history_scores") || "[]");
        //保留10条历史记录
        // if(historyScores.length>=11)historyScores.pop();
        while (historyScores.length >= 11) {
            historyScores.pop();
        }
        historyScores.unshift(newScoreObj);
        cc.sys.localStorage.setItem("history_scores", JSON.stringify(historyScores));
        cc.director.loadScene("end", function () {
            cc.log("loaded end scene success");
        });
    };
    //游戏暂停
    Main.prototype.gamePause = function () {
        this.node.getChildByName("btn_pause").active = false;
        this.node.getChildByName("btn_resume").active = true;
        cc.game.pause();
    };
    //游戏恢复
    Main.prototype.gameResume = function () {
        this.node.getChildByName("btn_pause").active = true;
        this.node.getChildByName("btn_resume").active = false;
        cc.game.resume();
    };
    Main.prototype.clockRun = function () {
        var _30s = 30;
        var _60s = 60;
        var tick = function () {
            //90秒结束游戏
            if (_30s <= 1) {
                _60s--;
                if (_60s <= 0) {
                    this.gameOver();
                }
                this.label_clock.string = "" + _60s;
                return;
            }
            _30s--;
            if (_30s < 10) {
                this.label_clock.string = "1:0" + _30s;
                return;
            }
            this.label_clock.string = "1:" + _30s;
        };
        this.schedule(tick.bind(this), 1, cc.macro.REPEAT_FOREVER);
    };
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "pfbs_enemy", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "btns", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "hero", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "bg_1", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "bg_2", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "label_score", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "label_clock", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDNUU7UUFFRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFaEIsTUFBTTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXhDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBRyxFQUFFLElBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDL0M7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQy9DO1FBRUQsWUFBWTtRQUNaLElBQUksQ0FBQyxRQUFRLENBQUM7WUFD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QVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNVO0lBM0JaLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FvT3hCO0lBQUQsV0FBQztDQXBPRCxBQW9PQyxDQXBPaUMsRUFBRSxDQUFDLFNBQVMsR0FvTzdDO2tCQXBPb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOS7jiBjYy5fZGVjb3JhdG9yIOWRveWQjeepuumXtOS4reW8leWFpSBjY2NsYXNzIOWSjCBwcm9wZXJ0eSDkuKTkuKroo4XppbDlmahcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4vaGVyb1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgRW5lbXkgZnJvbSBcIi4vZW5lbXlcIjtcclxuaW1wb3J0IHV0aWwgZnJvbSBcIi4vdXRpbFwiO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvL3BmYnNfZW5lbXlcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHBmYnNfZW5lbXk6IGNjLlByZWZhYltdID0gW107XHJcblxyXG4gICAgLy9idG5zX3Jvd1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5zOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGhlcm86IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmdfMTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZ18yOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIC8vIGZhcl9iZzogY2MuTm9kZVtdPVtdXHJcbiAgICAvLyBiZ19zcGVlZD0wLjY7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxfc2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbF9jbG9jazogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHNjb3JlID0gMDtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRHJhd0JvdW5kaW5nQm94ID0gdHJ1ZTtcclxuICAgICAgICAvL+W8gOWQr+eJqeeQhuezu+e7n1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy9pbml0IGVubWV5IHBvb2xzXHJcbiAgICAgICAgLy/lrprkuYnnp7vliqjlvIDlhbNcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wZmJzX2VuZW15Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIEFwcC5JbnN0YW5jZS5BZGRUeXBlUG9vbChcImVuZW15XCIgKyAoaSArIDEpLCAyMCwgdGhpcy5wZmJzX2VuZW15W2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOiKgueCuSBiIOeahOe7hOS7tuiEmuacrOS4rVxyXG4gICAgICAgIHRoaXMubm9kZS5vbignZW5lbXlfZGVzdG9yeScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCLmlYzmnLrmr4Hnga1cIik7XHJcbiAgICAgICAgICAgIGxldCBhZGRTY29yZSA9IGV2ZW50LmdldFVzZXJEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gYWRkU2NvcmU7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfc2NvcmUuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb25JbW1lZGlhdGUoKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvL+Wni+e7iOaYvuekuuWcqOacgOWJjemdolxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9wYXVzZVwiKS56SW5kZXggPSA5OTtcclxuICAgICAgICB0aGlzLmxhYmVsX3Njb3JlLm5vZGUuekluZGV4ID0gMTAwO1xyXG4gICAgICAgIHRoaXMubGFiZWxfY2xvY2subm9kZS56SW5kZXggPSAxMDE7XHJcbiAgICB9XHJcblxyXG4gXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy/og4zmma/np7vliqhcclxuICAgICAgICBsZXQgdCA9IDI0XHJcbiAgICAgICAgdGhpcy5iZ18xLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkodCwgY2MudjIoMCwgLXRoaXMubm9kZS5oZWlnaHQpKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmJnXzEuc2V0UG9zaXRpb24oY2MudjIoMCwgdGhpcy5ub2RlLmhlaWdodCkpO1xyXG4gICAgICAgIH0sIHRoaXMpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmdfMS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMiAqIHQsIGNjLnYyKDAsIC10aGlzLm5vZGUuaGVpZ2h0ICogMikpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnXzEucm90YXRpb24gKz0gMTgwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ18xLnNldFBvc2l0aW9uKGNjLnYyKDAsIHRoaXMubm9kZS5oZWlnaHQpKTtcclxuICAgICAgICAgICAgfSwgdGhpcykpKSk7XHJcbiAgICAgICAgfSwgdGhpcykpKTtcclxuICAgICAgICB0aGlzLmJnXzIucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDIgKiB0LCBjYy52MigwLCAtdGhpcy5ub2RlLmhlaWdodCAqIDIpKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmJnXzIuc2V0UG9zaXRpb24oY2MudjIoMCwgdGhpcy5ub2RlLmhlaWdodCkpO1xyXG4gICAgICAgIH0sIHRoaXMpKSkpO1xyXG5cclxuICAgICAgICAvL2J0bnMgYWRkbGlzdGVuIFRPVUNIX1NUQVJUXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5idG5zW2ldLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl9kaXJ2ZVBsYW5lLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5idG5zW2ldLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fc3RvcERyaXZlUGxhbmUsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bnNbaV0ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9zdG9wRHJpdmVQbGFuZSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsb2NrUnVuKCk7XHJcblxyXG4gICAgICAgIC8vdGVzdFxyXG4gICAgICAgIHRoaXMuaGVyby5nZXRDb21wb25lbnQoSGVybykuYXV0b0ZpcmUoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5zY29yZSA+PTUwJiZ0aGlzLnNjb3JlPDEwMCkgeyBcclxuICAgICAgICAgICAgdGhpcy5oZXJvLmdldENvbXBvbmVudChIZXJvKS5jaGFuZ2VTcGVlZDEoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2NvcmUgPj0gMTUwICYmIHRoaXMuc2NvcmUgPCAyMDApe1xyXG4gICAgICAgICAgICB0aGlzLmhlcm8uZ2V0Q29tcG9uZW50KEhlcm8pLmNoYW5nZVNwZWVkMigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL2dlbiBlbmVteTFcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5FbmVteSgxKTtcclxuICAgICAgICB9LmJpbmQodGhpcyksIDAuOSwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIpO1xyXG5cclxuICAgICAgICAvL2RlbGF5IDMwc1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9nZW4gZW5lbXkyXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5FbmVteSgyKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCAyLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUik7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAzMCk7XHJcblxyXG4gICAgICAgIC8vZGVsYXkgNTBzXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vZ2VuIGVuZW15M1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuRW5lbXkoMyk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgNCwgY2MubWFjcm8uUkVQRUFUX0ZPUkVWRVIpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgNTApO1xyXG5cclxuICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/pqbHliqjpo57mnLpcclxuICAgIHByaXZhdGUgX2RpcnZlUGxhbmUoZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyby5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGxldCBzID0gMDtcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0Ll9uYW1lID09IFwiX2xlZnRcIikge1xyXG4gICAgICAgICAgICBzID0gLXRoaXMubm9kZS53aWR0aCAvIDIgLSB0aGlzLmhlcm8ueC0xMDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcz0gdGhpcy5ub2RlLndpZHRoIC8gMiAtIHRoaXMuaGVyby54KzEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhlcm8ucnVuQWN0aW9uKGNjLm1vdmVCeShNYXRoLmFicyhzIC8gMTIwKSwgY2MudjIocywgMCkpLmVhc2luZyhjYy5lYXNlT3V0KDEuNSkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+mpseWKqOWBnOatolxyXG4gICAgcHJpdmF0ZSBfc3RvcERyaXZlUGxhbmUoZSk6IHZvaWQge1xyXG4gICAgICAgIC8v57yT5Yqo6Led56a7XHJcbiAgICAgICAgbGV0IHhTID0gMTA7XHJcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5fbmFtZSA9PSBcIl9sZWZ0XCIpIHtcclxuICAgICAgICAgICAgeFMgPSAteFM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGVyby5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDAuNiwgY2MudjIoeFMsIDApKS5lYXNpbmcoY2MuZWFzZU91dCgxLjUpKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlcm8uc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB9LCB0aGlzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgLy/mlYzmnLrnlJ/miJBcclxuICAgIGdlbkVuZW15KGtpbmQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBlbm15ID0gQXBwLkluc3RhbmNlLkdldE5vZGVGcm9tUG9vbChcImVuZW15XCIgKyBraW5kKTtcclxuICAgICAgICBsZXQgcmFuZFggPSAtdGhpcy5ub2RlLndpZHRoIC8gMiArIE1hdGgucmFuZG9tKCkgKiB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgZW5teS5zZXRQb3NpdGlvbihjYy52MihyYW5kWCwgNjAwKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGVubXkpO1xyXG4gICAgICAgIGVubXkuZ2V0Q29tcG9uZW50KEVuZW15KS5mbHkoKTtcclxuICAgICAgICBlbm15Lmdyb3VwID0gXCJlbmVteVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5ri45oiP57uT5p2fXHJcbiAgICBnYW1lT3ZlcigpIHtcclxuICAgICAgICAvL+WBnOatouaJgOacieWumuaXtuWZqFxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIC8vIGNjLmxvZyhcImdhbWUgb3ZlciFcIik7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2NvcmVcIiwgdGhpcy5sYWJlbF9zY29yZS5zdHJpbmcpO1xyXG5cclxuICAgICAgICBsZXQgbWF4U2NvcmUgPSBOdW1iZXIoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWF4U2NvcmVcIil8fDApO1xyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlID4gbWF4U2NvcmUpIHtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWF4U2NvcmVcIiwgdGhpcy5zY29yZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld1Njb3JlT2JqID0ge1xyXG4gICAgICAgICAgICBcInRpbWVcIjogdXRpbC5UaW1lRm9ybXQobmV3IERhdGUoKSksXHJcbiAgICAgICAgICAgIFwic2NvcmVcIjogdGhpcy5zY29yZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhpc3RvcnlTY29yZXM9SlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaXN0b3J5X3Njb3Jlc1wiKXx8XCJbXVwiKTtcclxuICAgICAgICAvL+S/neeVmTEw5p2h5Y6G5Y+y6K6w5b2VXHJcbiAgICAgICAgLy8gaWYoaGlzdG9yeVNjb3Jlcy5sZW5ndGg+PTExKWhpc3RvcnlTY29yZXMucG9wKCk7XHJcbiAgICAgICAgd2hpbGUgKGhpc3RvcnlTY29yZXMubGVuZ3RoID49IDExKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlTY29yZXMucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhpc3RvcnlTY29yZXMudW5zaGlmdChuZXdTY29yZU9iaik7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlzdG9yeV9zY29yZXNcIiwgSlNPTi5zdHJpbmdpZnkoaGlzdG9yeVNjb3JlcykpO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJlbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJsb2FkZWQgZW5kIHNjZW5lIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/muLjmiI/mmoLlgZxcclxuICAgIGdhbWVQYXVzZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fcGF1c2VcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuX3Jlc3VtZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNjLmdhbWUucGF1c2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+a4uOaIj+aBouWkjVxyXG4gICAgZ2FtZVJlc3VtZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fcGF1c2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fcmVzdW1lXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmdhbWUucmVzdW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvY2tSdW4oKSB7XHJcbiAgICAgICAgbGV0IF8zMHMgPSAzMDtcclxuICAgICAgICBsZXQgXzYwcyA9IDYwO1xyXG4gICAgICAgIGxldCB0aWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLzkw56eS57uT5p2f5ri45oiPXHJcbiAgICAgICAgICAgIGlmIChfMzBzIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgIF82MHMtLTtcclxuICAgICAgICAgICAgICAgIGlmIChfNjBzIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsX2Nsb2NrLnN0cmluZyA9IFwiXCIgKyBfNjBzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXzMwcy0tO1xyXG4gICAgICAgICAgICBpZiAoXzMwcyA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsX2Nsb2NrLnN0cmluZyA9IFwiMTowXCIgKyBfMzBzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9jbG9jay5zdHJpbmcgPSBcIjE6XCIgKyBfMzBzO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aWNrLmJpbmQodGhpcyksIDEsIGNjLm1hY3JvLlJFUEVBVF9GT1JFVkVSKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==