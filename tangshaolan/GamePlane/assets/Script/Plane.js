
cc.Class({
    extends: cc.Component,

    properties: {
        //主角移动速度
        moveSpeed: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    
    onKeyDown(event){
        switch(event.keyCode) {
            case cc.macro.KEY.a: 
                this.xSpeed = -this.moveSpeed;
                break;
            case cc.macro.KEY.d:
                this.xSpeed = this.moveSpeed;
                break;
            case cc.macro.KEY.w:
                this.ySpeed = this.moveSpeed;
                break;
            case cc.macro.KEY.s:
                this.ySpeed = -this.moveSpeed;
                break;
        }
    },
    onKeyUp(event){
        switch(event.keyCode) {
            case cc.macro.KEY.a: 
                this.xSpeed = 0;
                break;
            case cc.macro.KEY.d:
                this.xSpeed = 0;
                break;
            case cc.macro.KEY.w: 
                this.ySpeed = 0;
                break;
            case cc.macro.KEY.s:
                this.ySpeed = 0;
                break;
        }
    },
    onLoad () {
        
       // cc.log("this.moveSpeed="+this.moveSpeed)
        this.xSpeed = 0;
        this.ySpeed = 0;
        //初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        
        
    },
    start () {
       
    },
    
    
    update (dt) {
       // cc.log("this.xSpeed="+this.xSpeed);
        this.node.x += this.xSpeed * dt;
        this.node.y += this.ySpeed * dt;
        if(this.node.x < -430)
        {
            this.node.x = -430;
        }else if(this.node.x > 430){
            this.node.x = 430;
        }else if(this.node.y < - 315){
            this.node.y = -315;
        }else if(this.node.y > 200){
            this.node.y = 200;
        }
    },
});
