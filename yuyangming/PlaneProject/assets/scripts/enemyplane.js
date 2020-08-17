
cc.Class({
    extends: cc.Component,

    properties: {
        // enemyplane和子弹之间的距离小于这个数值时，enemyplane就会消失
        //pickRadius: 0,
        //敌机速度
        speed: 0,
        //计时器
        timer:0,
        enemyDuration:0,
        
    },
    


    start () {

    },

    onLoad(){
        this.speed = 2;

    },

    update (dt) {
        this.node.y -= this.speed;
        if(this.node.y<-480)
            this.node.destroy();
    },
});
