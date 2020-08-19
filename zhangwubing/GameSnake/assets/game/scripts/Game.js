// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        snakeNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.initUI();
    },

    start () {

    },

    initUI() {
        this.initSnake(3);
    },

    initSnake(initBodyLength) {
        // 头部初始化
        app.prefabMgr.getPrefabByName("SnakeHead", (prefab) => {
            this._head = cc.instantiate(prefab);
            this._head.parent = this.snakeNode;
        });
        // 身体初始化
        this.buildBody(initBodyLength);
    },

    buildBody(size) {
        if (!size) {
            cc.error("build body size is null or zero");
            return;
        }
        for (let i = 0; i < size; i++) {
            app.prefabMgr.getPrefabByName("SnakeBody", (prefab) => {
                let bodyNode = cc.instantiate(prefab);
                bodyNode.parent = this.snakeNode;
            });
        }
    },

    // update (dt) {},
});
