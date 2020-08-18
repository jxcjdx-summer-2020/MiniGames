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
        this.node.runAction(this.setBulletAction());
        if(this.node.y>360){
            this.node.destroy();
        }
    },
    setBulletAction: function () {
        var move = cc.moveBy(40, cc.v2(0, 720))
        return move;
    },
});
