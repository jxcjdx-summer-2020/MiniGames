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
    // use this for initialization
    onLoad: function () {
        this.accLeft = false;
        this.accRight = false;
        this.accUp=false;
        this.accDown = false;
        cc.director.getCollisionManager().enabled = true;
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
        this.he=this.node.height/2;
        if(this.node.y>=(320-this.he)){
            this.accUp=false
        }
        if(this.node.y<=(-320+this.he)){
            this.accDown=false
        }
        if(this.node.x<=(-480+this.length) ){
            this.accLeft=false;

        }
        if( this.node.x>=(480-this.length)){
            this.accRight=false;
        }



        if(this.accLeft){
            this.node.x-=5
        }
        if(this.accRight){
            this.node.x+=5
        }
        if(this.accUp){
            this.node.y+=5;
        }
        if(this.accDown){
            this.node.y-=5;
        }
        this.length=this.node.width/2
        
      


    },
    gameOver: function () {
      
        this.node.stopAllActions(); //停止 player 节点的跳跃动作
        cc.director.loadScene('StartGame');
    },
    onCollisionEnter: function(other,self){
       this.gameOver()

    }

});
