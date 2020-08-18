// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        xSpeed: 0,
      
      
    },
    onKeyDown (event) {
        // set a flag when key pressed
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                if(this.node.x>-273){
                this.node.x-= this.xSpeed;}
                break;
            case cc.macro.KEY.d:
                if(this.node.x<273){
                    this.node.x+= this.xSpeed;}
                break;
            case cc.macro.KEY.w:
                if(this.node.y<410){
                this.node.y+= this.xSpeed;}
                break;
            case cc.macro.KEY.s:
                if(this.node.y>-400)
                {this.node.y-= this.xSpeed;}
                break;
        }
    },

    
    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         
       
            // 初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
   
     },
     onDestroy () {
        // 取消键盘输入监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    
    },
    start () {

    },
    
  
});
