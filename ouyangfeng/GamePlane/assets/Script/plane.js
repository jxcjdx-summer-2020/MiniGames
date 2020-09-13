// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        // 最大移动速度
        maxMoveSpeed: 0,
        // 加速度
        accel: 0,
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

     onLoad () {
         // 加速度方向开关
        this.accLeft = false;
        this.accRight = false;
        // 主角当前水平方向速度
        this.xSpeed = 0;

        // 初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        this.node.on(cc.Node.EventType.TOUCH_MOVE,function (event){

            var delta=event.touch.getDelta();
            this.x+=delta.x;
            this.y+=delta.y;

        },this.node);


     },

    start () {

    },

     update (dt) {
          // 根据当前加速度方向每帧更新速度
          if (this.accLeft) {
            if(this.node.x>-420){
            // 根据当前速度更新主角的位置
        this.node.x -= 400 * dt;
    }else{
        this.node.x-=0;
    }

        } else if (this.accRight) {
            if(this.node.x<420){
            // 根据当前速度更新主角的位置
        this.node.x += 400 * dt;
            }else{
                this.node.x+=0;
            }
        }else if(this.accUp){
            if(this.node.y<250){
          
            this.node.y+=300*dt;
            }else{
                this.node.y+=0;
            }
        }else if(this.accDown){
            if(this.node.y>-250){
            this.node.y-=200*dt}
            else{
                this.node.y-=0;
            }
        }
 

   
     },
});
