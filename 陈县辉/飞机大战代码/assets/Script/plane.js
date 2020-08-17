cc.Class({
    extends: cc.Component,

    properties: {
      
    },
 // LIFE-CYCLE CALLBACKS:
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
    // use this for initialization
    onLoad: function () {
        this.accLeft = false;
        this.accRight = false;
      
        // 初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);   
    },
    onDestroy() {
        // 取消键盘输入监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
    // called every frame
    update: function (dt) {
        if(this.accLeft){
            this.node.x-=5
        }
        if(this.accRight){
            this.node.x+=5
        }
        this.length=this.length=this.node.width/2
        if(this.node.x<=(-480+this.length) || this.node.x>=(480-this.length)){
            this.node.x=-this.node.x

        }

    },
});
