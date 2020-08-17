
cc.Class({
    extends: cc.Component,

    properties: {
        Speed:0,

    
        // 敌机爆炸音效资源
        bombAudio: {
            default: null,
            type: cc.AudioClip
        }
        
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         this.Speed =5;
         this.parent=this.node.getParent();
         this.game=this.parent.getComponent('Game');
         cc.director.getCollisionManager().enabled=true;
         cc.director.getCollisionManager().enabledDebugDraw=false;
         
     },

    start () {

    },

    update (dt) {
        this.node.y += this.Speed;
        if(this.node.y>420)
            this.node.destroy();
        
    },
    onCollisionEnter:function(other,self){
        if(other.node.group!='enemyplane'){
            return;
        }
        if(other.node.group =='enemyplane'){
            this.node.destroy();
            other.node.destroy();

            // 调用 Game 脚本的得分方法
            this.game.gainScore();
            // 播放敌机爆炸音效
            cc.audioEngine.playEffect(this.bombAudio, false);
        }
        
    },


});
