const Enum = require("Constant");

cc.Class({
    extends: cc.Component,

    properties: {
        snakeNode: cc.Node,
        wallNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.initData();
        this.initUI(1);
        
    },

    start() {
        this.onEvent();
        this.driverSanke(Enum.Snake_Origin_Speed);
    },

    onEvent() {
        this.offEvent();
        this.node.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp.bind(this), this);
    },

    offEvent() {

    },

    initData() {
        this._snakes = [];
        this._walls = [];
    },

    initUI(level) {
        switch (level) {
            case 1:
                this.initUI_1();

        }
    },

    initUI_1() {
        // 蛇本体
        this.initSnake(0, 0, Enum.Direction.Left, 4);
        // 地图
        var wallPos = [];
        for (let i = -1 * Enum.Design_Cell_Width; i <= Enum.Design_Cell_Width; i++) {
            for (let j = -1 * Enum.Design_Cell_Height; j <= Enum.Design_Cell_Height; j++) {
                if (i == -1 * Enum.Design_Cell_Width || i == Enum.Design_Cell_Width || j == -1 * Enum.Design_Cell_Height || j == Enum.Design_Cell_Height) {
                    wallPos.push({ posX: i, posY: j });
                }
            }
        }
        this.initMap(wallPos);
    },

    initMap(wallCellPosArray) {
        if (wallCellPosArray == null || wallCellPosArray.length == 0) {
            return;
        }
        wallCellPosArray.forEach(element => {
            let { posX, posY } = element;
            var prefab = app.prefabMgr.getPrefabByName("Wall");
            var wallNode = cc.instantiate(prefab);
            wallNode.parent = this.wallNode;
            let _wall = wallNode.getComponent("Wall").init(posX, posY);
            this._walls.push(_wall);
        });
    },

    /**
     * 
     * @param {*} headPosX 
     * @param {*} headPosY 
     * @param {*} headDir 
     * @param {*} totalLength 
     */
    initSnake(headPosX, headPosY, headDir, totalLength) {
        // 头部初始化
        var prefab = app.prefabMgr.getPrefabByName("SnakeHead");
        var headNode = cc.instantiate(prefab);
        headNode.parent = this.snakeNode;
        this._head = headNode.getComponent("SnakeHead").init(headPosX, headPosY, headDir);
        this._snakes.push(this._head);
        // 身体初始化
        this.buildBody(totalLength - 1);
    },

    buildBody(size) {
        if (!size) {
            cc.error("The size of building snake body is null or zero");
            return;
        }
        for (let i = 0; i < size; i++) {
            var prefab = app.prefabMgr.getPrefabByName("SnakeBody");
            let bodyNode = cc.instantiate(prefab);
            bodyNode.parent = this.snakeNode;
            let _lastBody = this.getLastBody();
            let { posX, posY } = this.getNextCellPosByNode(_lastBody, false);
            let lastDir = _lastBody.getDirection();
            var _body = bodyNode.getComponent("SnakeBody").init(posX, posY, lastDir, _lastBody);
            this._snakes.push(_body);
        }
    },

    driverSanke(speed) {
        this.speed = speed;
        this.unschedule(this.snakeTimer.bind(this));
        this.schedule(this.snakeTimer.bind(this), this.speed);
        this.snakeTimer();
    },

    snakeTimer() {
        // 渲染身体
        for (let i = this._snakes.length - 1; i > 0; i--) {
            let _snake = this._snakes[i];
            var _pre = _snake.getPreBody();
            if (_pre != null) {
                let { posX, posY } = _pre.getCellPosition();
                let dir = _pre.getDirection();
                _snake.init(posX, posY, dir, _pre);
            }
        }
        // 渲染头
        let { posX, posY } = this.getNextCellPosByNode(this._head, true);
        let dir = this._head.getDirection();
        this._head.init(posX, posY, dir);
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

    onKeyUp(event) {
        cc.log(event);
    },
});
