cc.Class({
    extends: cc.Component,
    properties: {
        
    },

    onLoad() {
        window.app = this;
        this.initManager();
    },

    initManager() {
        this.prefabMgr = this.node.getComponent("PrefabManager").init();
    },

    onRestartButtonClick() {
        // 弹出对话框，提示
        // if (this.isGameRunning) {
            
            
        // }
        cc.game.restart();
    },
})