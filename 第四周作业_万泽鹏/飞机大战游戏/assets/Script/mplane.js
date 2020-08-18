cc.Class({
    extends: cc.Component,

    properties: {
        maxMoveSpeed:0,
    },
    onLoad:function(){
        this.accLeft = false;
        this.accRight = false;
        this.accUp = false;
        this.accDown = false;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.moveSpeed=300;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);   
    },
    onKeyDown (event) {
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
    update: function (dt) {
        if (this.accLeft) {
            this.node.x -= this.moveSpeed * dt;
        } else if (this.accRight) {
            this.node.x += this.moveSpeed * dt;
        }
        if (this.accUp) {
            this.node.y += this.moveSpeed * dt;
        }else if (this.accDown) {
            this.node.y -= this.moveSpeed * dt;
        }
        if(this.node.x<=-480+this.node.width/2){
           this.node.x = this.node.x + 10;
        }else if(this.node.x>=480-this.node.width/2){
            this.node.x = this.node.x - 10;
        }
        if(this.node.y<=-320+this.node.height/2){
            this.node.y = this.node.y + 10;
         }else if(this.node.y>=320-this.node.height/2){
             this.node.y = this.node.y - 10;
         }
        
        
    },
    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
});
