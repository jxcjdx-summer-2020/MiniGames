// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,  
    properties: {
        // 主角跳跃高度
        jumpHeight: 0,
        // 主角跳跃持续时间
        jumpDuration: 0,
        // 最大移动速度
        MoveSpeed: 0,
        // 跳跃音效资源
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        },
    },
    setJumpAction: function () {
       // 跳跃上升
       var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
       // 下落
       var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
       // 添加一个回调函数，用于在动作结束时调用我们定义的其他方法
       var callback = cc.callFunc(this.playJumpSound, this);
       // 不断重复，而且每次完成落地动作后调用回调来播放声音
       return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
    },
    playJumpSound: function () {
        // 调用声音引擎播放声音
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },
    onKeyDown (event) {
        // set a flag when key pressed
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.MoveSpeed = -300;
                break;
            case cc.macro.KEY.d:
                this.MoveSpeed = 300;
                break;
        }
    },
    onKeyUp (event) {
        // unset a flag when key released
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.MoveSpeed = 0;
                break;
            case cc.macro.KEY.d:
                this.MoveSpeed = 0;
                break;
        }
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 初始化跳跃动作
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);
        // 初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);   
    },

    start () {

    },
    //update 在场景加载后就会每帧调用一次，我们一般把需要经常计算或及时更新的逻辑内容放在这里。
    update: function (dt) { 
        // 根据当前速度更新主角的位置
        this.node.x += this.MoveSpeed * dt;
    },
});
