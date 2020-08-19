// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       hp:5,
       blastPrefab: {
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
            this.node.destroy()
            this.newblast()
        }

    },

    BossMove:function(){
        this.boss_he=this.node.height/2;
        var up = cc.moveBy(3000, cc.v2(0, -320+this.boss_he)).easing(cc.easeCubicActionOut());
        return up;
    },
    gainscore:function(){
        this.game.score+=5;
        this.game.scoreDisplay.string = 'Score: ' + this.game.score;

    },
    
    onCollisionEnter: function(other,self){
     if(other.node.group=='bullet'){
         this.hp--;
         this.gainscore();
        
        
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

    // update (dt) {},
});
