// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       pickRadius:0
    },
    update(){
        this.node.runAction(this.planeAction())
        if(this.node.y <-360){
            this.node.destroy();
        }
    },
    planeAction:function(){
        var action = cc.moveBy(800,cc.v2(0,-720));
        return action;
    },
});
