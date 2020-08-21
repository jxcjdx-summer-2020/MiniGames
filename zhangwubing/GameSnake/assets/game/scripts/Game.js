const Enum = require("Constant");

cc.Class({
    extends: cc.Component,

    properties: {
        snakeNode: cc.Node,
        wallNode: cc.Node,
        appleNode: cc.Node,
        gameOverNode: cc.Node
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
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp.bind(this), this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown.bind(this), this);
    },

    offEvent() {

    },

    initData() {
        this._snakes = [];
        this._walls = [];
        this._apples = [];
        this._randomCount = 0;
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
        // 苹果
        this.initApple(10);
    },

    initApple(size) {
        for (let i = 0; i < size; i++) {
            let prefab = app.prefabMgr.getPrefabByName("Apple");
            var apple = cc.instantiate(prefab);
            apple.parent = this.appleNode;
            let { posX, posY } = this.getRandomCellPosition();
            var _apple = apple.getComponent("Apple").init(posX, posY);
            this._apples.push(_apple);
        }
    },

    getRandomCellPosition() {
        if (this._randomCount >= 30) {
            this.runGameOver();
            return;
        }
        var randomX = Math.floor(Math.random() * (Enum.Design_Cell_Width * 2 - 1)) - (Enum.Design_Cell_Width - 1);
        var randomY = Math.floor(Math.random() * (Enum.Design_Cell_Height * 2 - 1)) - (Enum.Design_Cell_Height - 1);
        if (this.isNotVaildPos(randomX, randomY)) {
            this._randomCount += 1;     // 循环次数加1
            return this.getRandomCellPosition();
        }
        this._randomCount = 0;
        return { posX: randomX, posY: randomY };
    },

    isNotVaildPos(randomX, randomY) {
        var flag = false;
        // 不在蛇数组
        for (let i = 0; i < this._snakes.length; i++) {
            let _body = this._snakes[i];
            let { posX, posY } = _body.getCellPosition();
            if (posX == randomX && posY == randomY) {
                flag = true;
                break;
            }
        }
        // 不在苹果上
        for (let i = 0; i < this._apples.length; i++) {
            let _apple = this._apples[i];
            let { posX, posY } = _apple.getCellPosition();
            if (posX == randomX && posY == randomY) {
                flag = true;
                break;
            }
        }
        return flag;
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
        this.unschedule(this.snakeTimer);
        this.schedule(this.snakeTimer, this.speed, this);
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
        if (this.isVaildDir(dir, this.current_dir)) {
            dir = this.current_dir;
        }
        this._head.init(posX, posY, dir);
        // 是否游戏结束
        if (this.isGameOver(posX, posY)) {
            this.runGameOver();
        }
    },

    runGameOver() {
        // 取消运动
        this.unschedule(this.snakeTimer);
        // 闪动
        this.addBlinkAnim();
        // show "GameOver"
        this.addGameOverAnim();
    },

    addGameOverAnim() {
        this.gameOverNode.setScale(0);
        this.gameOverNode.active = true;
        this.gameOverNode.runAction(cc.sequence(cc.scaleTo(1, 1.2), cc.scaleTo(0.2, 1), cc.rotateBy(2, 360)));
    },

    addBlinkAnim() {
        for (let i = 0; i < this._snakes.length; i++) {
            let _body = this._snakes[i];
            _body.node.runAction(cc.repeatForever(cc.blink(0.5, 1)));
        }
    },

    isGameOver(headPosX, headPosY) {
        // 撞墙
        for (let i = 0; i < this._walls.length; i++) {
            const _wall = this._walls[i];
            let { posX, posY } = _wall.getCellPosition();
            if (headPosX == posX && headPosY == posY) {
                return true;
            }
        }
        return false;
    },

    /**
     * 判断按键方向是否可用
     * @param {*} currentDir 当前蛇的运行方向
     * @param {*} targetDir 键盘获取的目标转向
     */
    isVaildDir(currentDir, targetDir) {
        if (targetDir == null) {
            return false;
        }
        if (currentDir == Enum.Direction.Left && targetDir == Enum.Direction.Right) {
            return false;
        }
        if (currentDir == Enum.Direction.Right && targetDir == Enum.Direction.Left) {
            return false;
        }
        if (currentDir == Enum.Direction.Up && targetDir == Enum.Direction.Down) {
            return false;
        }
        if (currentDir == Enum.Direction.Down && targetDir == Enum.Direction.Up) {
            return false;
        }
        return true;
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
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                // 记录当前方向
                this.current_dir = Enum.Direction.Left;
                break;
            case cc.macro.KEY.w:
                // 记录当前方向
                this.current_dir = Enum.Direction.Up;
                break;
            case cc.macro.KEY.d:
                // 记录当前方向
                this.current_dir = Enum.Direction.Right;
                break;
            case cc.macro.KEY.s:
                // 记录当前方向
                this.current_dir = Enum.Direction.Down;
                break;
        }
    },

    onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.e:
                // 加速
                break;
        }
    },
});
