"use strict";
cc._RF.push(module, 'e2015vJNAhCipNCGVOP6Pc2', 'history');
// script/history.ts

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
var History = /** @class */ (function (_super) {
    __extends(History, _super);
    function History() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pfb_item = null;
        _this.layout_rank = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    History.prototype.onLoad = function () {
        var historyScores = JSON.parse(cc.sys.localStorage.getItem("history_scores")) || [];
        cc.log(historyScores);
        for (var i = 0; i < historyScores.length; i++) {
            var item = cc.instantiate(this.pfb_item);
            item.getChildByName("time").getComponent(cc.Label).string = historyScores[i].time;
            item.getChildByName("score").getComponent(cc.Label).string = historyScores[i].score.toString();
            this.layout_rank.addChild(item);
        }
    };
    History.prototype.start = function () {
    };
    //返回结束场景
    History.prototype.backToEndScene = function () {
        cc.director.loadScene("end");
    };
    __decorate([
        property(cc.Prefab)
    ], History.prototype, "pfb_item", void 0);
    __decorate([
        property(cc.Node)
    ], History.prototype, "layout_rank", void 0);
    History = __decorate([
        ccclass
    ], History);
    return History;
}(cc.Component));
exports.default = History;

cc._RF.pop();