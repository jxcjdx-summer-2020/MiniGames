const Enum = require("Constant");

cc.Class({
    extends: cc.Component,

    properties: {
        snakeNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.initData();
        this.initUI(1);
    },

    start() {

    },

    initData() {
        this._snakes = [];
    },

    initUI(level) {
        switch (level) {
            case 1:
                this.initUI_1();

        }
    },

    initUI_1() {
        this.initSnake(3);
    },

    initSnake(initBodyLength) {
        // 头部初始化
        app.prefabMgr.getPrefabByName("SnakeHead", (prefab) => {
            var headNode = cc.instantiate(prefab);
            headNode.parent = this.snakeNode;
            this._head = headNode.getComponent("SnakeHead").init(0, 0, Enum.Direction.Left);
            this._snakes.push(this._head);
            // 身体初始化
            this.buildBody(initBodyLength);
        });
    },

    buildBody(size) {
        if (!size) {
            cc.error("The size of building snake body is null or zero");
            return;
        }
        for (let i = 0; i < size; i++) {
            app.prefabMgr.getPrefabByName("SnakeBody", (prefab) => {
                let bodyNode = cc.instantiate(prefab);
                bodyNode.parent = this.snakeNode;
                var _lastBody = this.getLastBody();
                let { posX, posY } = this.getNextCellPosByNode(_lastBody, false);
                let lastDir = _lastBody.getDirection();
                var _body = bodyNode.getComponent("SnakeBody").init(posX, posY, lastDir);
                this._snakes.push(_body);
            });
        }
    },

    getLastBody() {
        if (this._snakes && this._snakes.length > 0) {
            return this._snakes[this._snakes.length - 1];
        }
        cc.error("This snakes is null");
    },

    /**
     * 获取指定节点的下一个坐标，注意：有方向
     * @param {*} _body 
     * @param {*} isForwad 
     */
    getNextCellPosByNode(_body, isForwad) {
        var dir = _body.getDirection();
        let { posX, posY } = _body.getCellPosition();
        switch (dir) {
            case Enum.Direction.Left:
                return { posX: isForwad ? posX - 1 : posX + 1, posY: posY };
            case Enum.Direction.Down:
                return { posX: posX, posY: isForwad ? posY - 1 : posY + 1 };
            case Enum.Direction.Right:
                return { posX: isForwad ? posX + 1 : posX - 1, posY: posY };
            case Enum.Direction.Up:
                return { posX: posX, posY: isForwad ? posY + 1 : posY - 1 };
        }
    },

    // update (dt) {},
});
