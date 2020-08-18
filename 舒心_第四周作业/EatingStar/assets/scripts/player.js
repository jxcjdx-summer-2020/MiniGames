cc.Class({
    extends: cc.Component,

    properties: {

        jumpHeight: 0,
        jumpDuration: 0,
        maxMoveSpeed: 0,
        accel: 0,
        
        canvas: {
            default: null,
            type: cc.Node
        },

        jumpAudio: {
            default: null,
            type: cc.AudioClip
        },


    },

    setJumpAction: function() {
        var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());

        // 添加一个回调函数，用于在动作结束时调用我们定义的其他方法
        var callback = cc.callFunc(this.playJumpSound, this);

        //repeat
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
        
    },

    playJumpSound: function () {
        // play music
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    onKeyDown (event) {
        // set a flag when key pressed
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
        }


    },

    onKeyUp (event) {
        // unset a flag when key released
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:  function() {   
        // initialize jump action
        this.jumpActon = this.setJumpAction();
        this.node.runAction(this.jumpActon);  

        // accelerate switch
        this.accLeft = false;
        this.accRight = false;

        // horizontal direction
        this.xSpeed = 0;

        //initialize keyboard listerner
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);   
        
      },

    start () {

    },

    update: function (dt) {
        // update the speed through accelerate direction
        if(this.accLeft){
            this.xSpeed -= this.accel * dt;
        }else if(this.accRight){
            this.xSpeed += this.accel*dt;
        }

        // limit the player speed no more than max
        if(Math.abs(this.xSpeed) > this.maxMoveSpeed){
            this.xSpeed = this.xSpeed*this.maxMoveSpeed/Math.abs(this.xSpeed);
        }

        this.node.x += this.xSpeed*dt;

        // Bounce off the wall
        if(this.node.x >= this.canvas.x || this.node.x <= -this.canvas.x){
            this.xSpeed = -this.xSpeed
        }

    },

    onDestroy () {
        // cancel keyboard listerner
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

        
});
