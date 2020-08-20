var Cache_Prefabs = {};

cc.Class({
    extends: cc.Component,
    properties: {
        snakeHead: cc.Prefab,
        snakeBody: cc.Prefab,
        wall: cc.Prefab,
    },

    /**
     * 获取预制资源
     * @param {*} prefabName 
     */
    getPrefabByName(prefabName) {
        if (prefabName == "SnakeHead") {
            return this.snakeHead;
        } else if (prefabName == "SnakeBody") {
            return this.snakeBody;
        } else if (prefabName == "Wall") {
            return this.wall;
        }
    },

    init() {
        return this;
    },
})