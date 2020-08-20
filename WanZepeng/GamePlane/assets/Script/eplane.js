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
    update(){
        this.node.runAction(this.planeAction())
    },
    planeAction:function(){
        var action = cc.moveBy(800,cc.v2(0,-this.game.node.height));
        return action;
    },
});
