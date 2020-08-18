// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
//导入模块

cc.Class({
    extends: cc.Component,

    properties: {
  // 这个属性引用了子弹预制资源
    bulletPrefab: {
      default: null,
      type: cc.Prefab
    },
    enemyPrefab: {
        default: null,
        type: cc.Prefab
      },
      bossPrefab: {
        default: null,
        type: cc.Prefab
      },
    plane: {
        default: null,
        type: cc.Node
    },
    scoreDisplay: {
        default: null,
        type: cc.Label
    },
    HeighestscoreDisplay: {
        default: null,
        type: cc.Label
    },
    score:0,
    gamenode:0,
  
    },
    onKeyDown (event) {
        // set a flag when key pressed
        switch(event.keyCode) {
            case cc.macro.KEY.j:
                this.shoot = true;
                
                break;
                 
        }
    },
    
    onKeyUp (event) {
        // unset a flag when key released
        switch(event.keyCode) {
            case cc.macro.KEY.j:
                this.shoot = false;
                break;
            
        }
    },

    onLoad: function () {
        cc.director.getPhysicsManager().enabled = true;
        this.shoot = false;
        // 初始化键盘输入监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);   
        this.gamenode=this.node
        
        
    },
    onDestroy() {
        // 取消键盘输入监听
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    update: function (dt) {
       
    

    },

    newbullet:function(){
        this.new_bullet=cc.instantiate(this.bulletPrefab);
        this.node.addChild(this.new_bullet);
        
        this.new_bullet.setPosition(this.getNewBulletPosition());
        this.new_bullet.getComponent('bullet').game = this;
        // new_bullet.destroy()
      


    },
    getNewBulletPosition:function(){
       
        this.plane_he=this.plane.height/2;
        var x=this.plane.x;
        var y=this.plane.y+this.plane_he;
        return cc.v2(x,y)
    },
    
    newenemy:function(){
        this.new_enemy=cc.instantiate(this.enemyPrefab);
        this.node.addChild(this.new_enemy);
        
        this.new_enemy.setPosition(this.getNewEnemyPosition());
        this.new_enemy.getComponent('enemy').game = this;
    },
    getNewEnemyPosition:function(){
        var enemy_wid=this.enemyPrefab.width/2;
        var enemy_he=this.enemyPrefab.height/2;
        var x=  Math.random()*940-480;
        var y=320;
        return cc.v2(x,y)
    },

    newboss:function(){
        this.new_boss=cc.instantiate(this.bossPrefab);
        this.node.addChild(this.new_boss);
        this.new_boss.setPosition(this.getNewBossPosition());
        this.new_boss.getComponent('Boss').game = this;
    },
    getNewBossPosition:function(){
        var boss_wid=this.bossPrefab.width/2;
        var enemy_he=this.bossPrefab.height/2;
        var x=  Math.random()*940-480;
        var y=320;
        return cc.v2(x,y)
    },
    start:function(){
        this.newenemy()
         this.schedule(this.newenemy,2)
         this.newbullet()
         this.schedule(this.newbullet,0.7)
         this.schedule(this.newboss,5,0)
        
         
    },
   returnnode:function(){
       return this.node;
   }
   
    


  
});
