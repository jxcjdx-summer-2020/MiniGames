// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    onLoad:function(){
        this.start=false

    },

    

   
    Onclick_game:function(){
        //防止按了多次
        if(this.start){
            return
        }
        this.start=true
        cc.director.loadScene('game');
    }
});
