const BaseView = require("BaseView");
const Enum = require("Constant");

cc.Class({
    extends: BaseView,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
    },

    setGameLogic(logic) {
        this._logic = logic;
    },

    init(posX, posY) {
        this.reset();
        this._super(posX, posY);
        this.level = this._logic.level;
        this.lifeTime = this.getCurrentLevelAppleLifeTime();
        this.score = this.lifeTime * this.level;
        this.schedule(this.appleTimer, 1);
        return this;
    },

    getAppleScore() {
        return this.score;
    },

    appleTimer() {
        // 生命值判断
        if (this.lifeTime <= 0) {
            this.unschedule(this.appleTimer);
            this._logic.initApple(this);
            return;
        }
        // 3秒内闪烁
        if (this.lifeTime == 3) {
            this.addBlinkAnim();
        }
        if (this.score > this.level) {
            this.score -= this.level;
        }
        this.lifeTime -= 1;
    },

    addBlinkAnim() {
        this.node.runAction(cc.repeatForever(cc.blink(0.5, 1)));
    },

    reset() {
        this.node.stopAllActions();
        this.unscheduleAllCallbacks();
        this.node.active = true;
        this.node.opacity = 255;
    },

    getCurrentLevelAppleLifeTime() {
        var origin_life_time = Enum.Level_Apple_Life_Time;
        return Math.floor(Math.random() * origin_life_time / 2) + Math.floor(origin_life_time / 2 + 1);
    },
});
