
cc.Class({
    extends: cc.Component,

    properties: {
        //主角移动速度
        speed:0,
        //射击间隔时间
        bulletrDuration:0,
        //计时器
        timer:0,
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
                this.accFlow = true;
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
                this.accFlow=false;
                break;
            case cc.macro.KEY.s:
                this.accDown=false;
                break;
        }
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.accLeft = false;
        this.accRight = false;
        this.accDown=false;
        this.accFlow=false;

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
        //this.schedule(this.Print.bind(this),0.5);
    },
    Print(){
        cc.log("XX");
    },
   update (dt) {
        if(this.accLeft&&this.node.x>-270)
            // 根据当前速度更新主角的位置
            this.node.x -= this.speed;     
        else if(this.accRight&&this.node.x<270)
            this.node.x+=this.speed;
        else if(this.accFlow&&this.node.y<425)
            this.node.y+=this.speed;
        else if(this.accDown&&this.node.y>-425)
            this.node.y-=this.speed;
        else
           ;
        //子弹时间间隔判断
        if (this.timer > this.bulletrDuration) {
            this.game.spawnNewBullet(this.node.x,this.node.y+this.node.height/2+13);
            this.timer=0;
            return;
        }
        this.timer += dt;      
    },
   
});
