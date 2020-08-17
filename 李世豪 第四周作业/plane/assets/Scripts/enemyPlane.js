//敌机的属性及携带方法
cc.Class({
    extends: cc.Component,

    properties: {
        enemySpeed:5,//敌机速度
        Eradius:100,//与子弹的距离
    },

    onCollisionEnter:function(other,self){              //碰撞则销毁物体
        if (other.node.group != 'bullet' && other.node.group != 'Player'){
            return ;
        }
        if(other.node.group == 'bullet') //检测碰撞组
        {   
            this.enm.gainScore();
            this.enemyDestroy();
        }
        else if(other.node.group == 'Player'){
            cc.director.loadScene('plane'); //撞到重新开始
        }
    },

    enemyMove:function(){ //敌机移动
        this.node.y-=this.enemySpeed;
    },
    enemyDestroy:function(){ //敌机销毁
        this.node.destroy();
    },
    

    onLoad:function () {
        //开启碰撞检测
        cc.director.getCollisionManager().enabled=true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        
    },

    start:function () {
        this.schedule(this.enemyMove.bind(this),0.02);
    },

    update:function (dt) {
        if (this.node.y<-this.enm.node.height/2){ //超出下边界就销毁
            this.enemyDestroy();
        }
    },
    
});
