// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       hp:30,
       blastPrefab: {
        default: null,
        type: cc.Prefab
      },
      enemybulletPrefab: {
        default: null,
        type: cc.Prefab
      },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function(){
        cc.director.getCollisionManager().enabled = true;
        if(Math.round(this.node.y)<=(-320+this.boss_he)){
            this.node.destroy();
        }


    },
    update:function(dt){
        this.node.runAction(this.BossMove())
        if(Math.round(this.node.y)<=(-320+this.enemy_he)){
         
            this.node.destroy();

        }
        if(this.hp==0){
            this.gainscore();
            this.node.destroy()
            this.newblast()
            
        }

        
            
        

    },

    BossMove:function(){
        this.boss_he=this.node.height/2;
        var up = cc.moveBy(30000, cc.v2(0, -320+this.boss_he)).easing(cc.easeCubicActionOut());
        return up;
    },
    gainscore:function(){
        this.game.score+=30;
        this.game.scoreDisplay.string = 'Score: ' + this.game.score;

    },
    
    onCollisionEnter: function(other,self){
     if(other.node.group=='bullet'){
         this.hp--;
         
       
        
        
     }

    },
    newblast:function(){
    var new_blast=cc.instantiate(this.blastPrefab);
    this.game.node.addChild(new_blast);
     new_blast.setPosition(this.getNewblastPosition());
    setTimeout(()=>{
        // this.game.node.removeChild(this.new_blast)
        new_blast.destroy();
      
    },100)
        
    },
    getNewblastPosition:function(){
        var x=this.node.x;
        var y=this.node.y
        return cc.v2(x,y)
    },
    newbullet:function(){
        this.new_bullet=cc.instantiate(this.enemybulletPrefab);
        this.game.node.addChild(this.new_bullet);
         this.new_bullet.setPosition(this.getNewbulletPosition());
         this.new_bullet.getComponent('enemybullet').game = this;
         

    },
    getNewbulletPosition:function(){
      var len=this.new_bullet.height/2;
      var boss_len=this.node.height/2;
        var x=this.node.x;
        var y=this.node.y-len-boss_len-10;
        return cc.v2(x,y)
    },
   start:function(){
    this.schedule(this.newbullet,2)
    
   }
  
});
