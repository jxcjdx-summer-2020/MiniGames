
cc.Class({
    extends: cc.Component,

    properties: {
        speed:0,
        bulletrDuration:0,
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
    //触摸移动；
    onTouchMove (event) {
        var self = this;
        var touches = event.getTouches();
        //触摸刚开始的位置
        var oldPos = self.node.parent.convertToNodeSpaceAR(touches[0].getStartLocation());
        //触摸时不断变更的位置
        var newPos = self.node.parent.convertToNodeSpaceAR(touches[0].getLocation());
 
        var subPos = oldPos.sub(newPos); 
 
        self.node.x = self.nodePos.x - subPos.x;
        self.node.y = self.nodePos.y - subPos.y;
        
        // 控制节点移不出屏幕; 
        var minX = -self.node.parent.width/2 + self.node.width/2; //最小X坐标；
        var maxX = Math.abs(minX);
        var minY = -self.node.parent.height/2 + self.node.height/2; //最小Y坐标；
        var maxY = Math.abs(minY);
        var nPos = self.node.getPosition(); //节点实时坐标；
 
        if (nPos.x < minX) {
            nPos.x = minX;
        };
        if (nPos.x > maxX) {
            nPos.x = maxX;
        };
        if (nPos.y < minY) {
            nPos.y = minY;
        };
        if (nPos.y > maxY) {
            nPos.y = maxY;
        };
        self.node.setPosition(nPos);
    },
    onTouchEnd () {
        this.nodePos = this.node.getPosition(); //获取触摸结束之后的node坐标；
    },
    onTouchCancel: function () {
        this.nodePos = this.node.getPosition(); //获取触摸结束之后的node坐标；
    },

        
    onLoad () {

        this.parent=this.node.getParent();
        this.game=this.parent.getComponent('game');

        this.accLeft = false;
        this.accRight = false;
        this.accDown=false;
        this.accFlow=false;

        
        cc.director.getCollisionManager().enabled=true;
        cc.director.getCollisionManager().enabledDebugDraw = false;

        // infiniate keyboard listerner
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);   

        //touch listerner
        this.nodePos = this.node.getPosition();
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    },

    onDestroy () {
        // cancel keyboard listerner 
       

        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },
    start () {
        
    },
  
   update (dt) {
        if(this.accLeft&&this.node.x>-270)
            this.node.x -= this.speed;     
        else if(this.accRight&&this.node.x<270)
            this.node.x+=this.speed;
        else if(this.accFlow&&this.node.y<425)
            this.node.y+=this.speed;
        else if(this.accDown&&this.node.y>-425)
            this.node.y-=this.speed;
        else
           ;

        if (this.timer > this.bulletrDuration) {
            this.game.spawnNewBullet(this.node.x,this.node.y+this.node.height/2+13);
            this.timer=0;
            return;
        }
        this.timer += dt;      
    },

    onCollisionEnter:function(other,self){              
        if(other.node.group == 'enemy' || other.node.group == 'enemybuff') 
        {   
            this.node.destroy(); 
            other.node.destroy();
            this.game.gameOver();
        }
    },
   
});
