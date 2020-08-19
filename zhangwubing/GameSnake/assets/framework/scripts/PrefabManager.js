var Cache_Prefabs = {};

cc.Class({
    extends: cc.Component,
    properties: {
      
    },

    /**
     * 获取预制资源
     * @param {*} prefabName 
     * @param {*} callback 
     */
    getPrefabByName(prefabName, callback) {
        var url = "res/prefabs/" + prefabName;
        cc.loader.loadRes(url, cc.Prefab, (err, prefab) => {
            if (err != null) {
                cc.error("Fail to load res " + err);
                cc.game.end();
                return;
            } else {
                cc.log("load " + prefabName + " successfully");
                if (Cache_Prefabs["prefabName"]) {
                    return Cache_Prefabs["prefabName"];
                }
                Cache_Prefabs[prefabName] = prefab;
                if (callback) {
                    callback(prefab);
                }
            }
        })
    },

    init() {
        return this;
    },
})