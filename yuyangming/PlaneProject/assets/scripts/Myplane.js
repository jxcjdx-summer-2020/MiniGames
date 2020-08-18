
cc.Class({
    extends: cc.Component,

    properties: {

       // 主角移动速度
       Speed: 0,
       //射击时间间隔
       buttleDuration: 0,
       // 计时器
       timer: 0,
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
            case cc.macro.KEY.w:
                this.accUp = true;
                break;
            case cc.macro.KEY.s:
                this.accDown = true;
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
            case cc.macro.KEY.w:
                this.accUp = false;
                break;
            case cc.macro.KEY.s:
                this.accDown = false;
                break;
           
        }
    },
    

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        
        // 加速度方向开关
        this.accLeft = false;
        this.accRight = false;
        this.accUp = false;
        this.accDown = false;
        
        // 初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);  
    },

    onDestroy () {
        // 取消键盘输入监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    start () {

    },

    update: function (dt) {
        // 根据当前加速度方向每帧更新速度
        /*if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }*/

        if (this.accLeft) {
            this.node.x -= this.Speed;
        } else if (this.accRight) {
            this.node.x += this.Speed;
        } else if (this.accUp) {
            this.node.y += this.Speed;
        } else if (this.accDown) {
            this.node.y -= this.Speed;
        }
        
        if(this.timer > this.buttleDuration){
            this.game.spawnNewBullet(this.node.x,this.node.y+this.node.height/2)
            this.timer = 0;
            return;
        }
        this.timer += dt;
    },
});
