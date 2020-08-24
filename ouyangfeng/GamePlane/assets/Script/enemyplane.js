// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var a = require("a");
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        pickRadius: 0,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         
         cc.log("enemypos = "+a.enemypos);
         a.enemypos= this.node.getPosition();
         cc.log("enemypos = "+a.enemypos);

    },
     


    start () {

    },

     update (dt) {
         
        a.enemypos= this.node.getPosition();
        var p=this.node.getPosition();
         
        this.node.y-=100*dt

        if(p.y>640){
            this.node.destroy()
        }

     },
});
