//敌机的属性及携带方法
cc.Class({
    extends: cc.Component,

    properties: {
        enemySpeed:5,//敌机速度
        Eradius:100,//与子弹的距离
    },

    onCollisionEnter:function(other,self){              //碰撞则销毁物体
        if (other.node.group != 'bullet'){
            return ;
        }
        if(other.node.group == 'bullet') //检测碰撞组
        {   
            this.dis.newBullet1.getComponent('Bullet').destroySelf();
            this.dis.gainScore();
            this.enemyDestroy();
        }
        else if(other.node.group == 'Player'){
            //this.dis.myPlane.getComponent('MyPlane').destroySelf();
            //this.enemyDestroy();
            //this.dis.unschedule(this.bulletFire.bind(this.dis));
            //this.dis.score=0;
            cc.director.loadScene('plane');
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
        this.schedule(this.enemyDestroy.bind(this),8);
    },

    update:function (dt) {
    },
    
});
