// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        pickRadius: 0,
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
     
      
    },
    onCollisionEnter:function(other,self){              //碰撞则播放爆炸动画
      
        if(other.node.group =='myplane')
        {
            this.node.removeFromParent();
            other.node.removeFromParent();
            this.gameOver();
        }
        if(other.node.group == 'bullet') //检测碰撞组
        {   this.node.removeFromParent();
            other.node.removeFromParent();
            this.game.gainScore();
            cc.audioEngine.playEffect(this.scoreAudio, false);
           
        }
      
    }, 
    gameOver: function () {
        
        cc.director.loadScene('FlyWar');
    },
start () {

},

 update (dt) {
    
    }
 
});
