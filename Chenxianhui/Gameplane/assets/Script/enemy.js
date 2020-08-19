// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


cc.Class({
    extends: cc.Component,

    properties: {
        // 之间的距离小于这个数值时，就会完成收集
        pickRadius: 0,
        blastPrefab: {
            default: null,
            type: cc.Prefab
          },
    },
    onLoad:function(){
        this.heightScore=0
        
        if(localStorage.getItem("height")){
            this.heightScore=localStorage.getItem("height");
        }
        cc.director.getCollisionManager().enabled = true;
    },
   

    update:function(dt){
        this.node.runAction(this.EnemyMove())
        if(Math.round(this.node.y)<=(-320+this.enemy_he)){
         
            this.node.destroy();

        }
        if (this.getPlaneDistance() < this.pickRadius) {
            // 调用收集行为
            this.onPicked();
            return;
        }

        if(this.heightScore<this.game.score){
            this.heightScore=this.game.score;
        }
        this.game.HeighestscoreDisplay.string = '最高分数为: ' + this.heightScore;


    },
    EnemyMove:function(){
        this.enemy_he=this.node.height/2;
        var up = cc.moveBy(800, cc.v2(0, -320+this.enemy_he)).easing(cc.easeCubicActionOut());
        return up;
    },

    getPlaneDistance: function () {
        // 根据 player 节点位置判断距离
        var playerPos = this.game.plane.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = this.node.position.sub(playerPos).mag();
        return dist;
    },

    onPicked: function() {
        this.node.destroy();
        this.gameOver()
    },
    gameOver: function () {
        localStorage.setItem("height",this.heightScore)
        this.game.plane.stopAllActions(); //停止 player 节点的跳跃动作
        cc.director.loadScene('StartGame');
    },
    onCollisionEnter: function(other,self){
      this.ondestroy();
      this.gainscore();
    },
    
    ondestroy:function(){
        this.node.destroy();
        this.newblast()
       
       
        
    },
    gainscore:function(){
        this.game.score+=5;
        this.game.scoreDisplay.string = 'Score: ' + this.game.score;

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






});




