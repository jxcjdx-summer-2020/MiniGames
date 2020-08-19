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
})