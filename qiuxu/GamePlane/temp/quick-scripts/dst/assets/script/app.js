
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/app.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce38cBY2J9Mbbc4YjWoTMTt', 'app');
// script/app.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//游戏状态
var GameState;
(function (GameState) {
    GameState[GameState["gameNone"] = 0] = "gameNone";
    GameState[GameState["gameStart"] = 1] = "gameStart";
    GameState[GameState["gamePuse"] = 2] = "gamePuse";
    GameState[GameState["gameEnd"] = 3] = "gameEnd";
})(GameState = exports.GameState || (exports.GameState = {}));
var App = /** @class */ (function () {
    function App() {
        this._nodePools = {};
        this._nodePfb = {};
    }
    Object.defineProperty(App, "Instance", {
        get: function () {
            if (this._instance == null)
                this._instance = new App();
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * 添加对象池
    * @param    type    `类型`
    * @param    size    `大小`
    * @param    pfb     `预制体`
    */
    App.prototype.AddTypePool = function (type, size, pfb) {
        this._nodePools[type] = new cc.NodePool();
        this._nodePfb[type] = pfb;
        for (var ii = 0; ii < size; ++ii) {
            this._nodePools[type].put(cc.instantiate(pfb));
        }
    };
    /**
     * 添加对象到池
     * @param    type    `类型`
     * @param    node     `cc.node`
     */
    App.prototype.PutNode2Pool = function (type, node) {
        this._nodePools[type].put(node);
    };
    /**
     * 从对象池生成对象
     * @param    type    `类型`
     * return   cc.Node
     */
    App.prototype.GetNodeFromPool = function (type) {
        // cc.log(type, ":pool size=", this._nodePools[type].size())
        if (this._nodePools[type].size() <= 0)
            return cc.instantiate(this._nodePfb[type]);
        return this._nodePools[type].get();
    };
    return App;
}());
exports.default = App;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxhcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNO0FBQ04sSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ25CLGlEQUFRLENBQUE7SUFDUixtREFBUyxDQUFBO0lBQ1QsaURBQVEsQ0FBQTtJQUNSLCtDQUFPLENBQUE7QUFDVCxDQUFDLEVBTFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFLcEI7QUFFRDtJQVlFO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQVJELHNCQUFrQixlQUFRO2FBQTFCO1lBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUk7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ3ZELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQU9EOzs7OztNQUtFO0lBQ0sseUJBQVcsR0FBbEIsVUFBbUIsSUFBWSxFQUFFLElBQVksRUFBRSxHQUFjO1FBQzNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDMUIsS0FBSyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBCQUFZLEdBQW5CLFVBQW9CLElBQVksRUFBRSxJQUFhO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksNkJBQWUsR0FBdEIsVUFBdUIsSUFBWTtRQUNqQyw0REFBNEQ7UUFDNUQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsVUFBQztBQUFELENBbERBLEFBa0RDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+a4uOaIj+eKtuaAgVxyXG5leHBvcnQgZW51bSBHYW1lU3RhdGUge1xyXG4gIGdhbWVOb25lLC8v5Yid5aeL54q25oCBXHJcbiAgZ2FtZVN0YXJ0LC8v5ri45oiP5byA5aeLXHJcbiAgZ2FtZVB1c2UsLy/muLjmiI/mmoLlgZxcclxuICBnYW1lRW5kLC8v5ri45oiP57uT5p2fXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQXBwO1xyXG5cclxuICBwcml2YXRlIF9ub2RlUG9vbHM6IHsgW2luZGV4OiBzdHJpbmddOiBjYy5Ob2RlUG9vbCB9O1xyXG4gIHByaXZhdGUgX25vZGVQZmI6IHsgW2luZGV4OiBzdHJpbmddOiBjYy5QcmVmYWIgfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgSW5zdGFuY2UoKTogQXBwIHtcclxuICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB0aGlzLl9pbnN0YW5jZSA9IG5ldyBBcHAoKTtcclxuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fbm9kZVBvb2xzID0ge307XHJcbiAgICB0aGlzLl9ub2RlUGZiID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIOa3u+WKoOWvueixoeaxoFxyXG4gICogQHBhcmFtICAgIHR5cGUgICAgYOexu+Wei2BcclxuICAqIEBwYXJhbSAgICBzaXplICAgIGDlpKflsI9gXHJcbiAgKiBAcGFyYW0gICAgcGZiICAgICBg6aKE5Yi25L2TYFxyXG4gICovXHJcbiAgcHVibGljIEFkZFR5cGVQb29sKHR5cGU6IHN0cmluZywgc2l6ZTogbnVtYmVyLCBwZmI6IGNjLlByZWZhYikge1xyXG4gICAgdGhpcy5fbm9kZVBvb2xzW3R5cGVdID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICB0aGlzLl9ub2RlUGZiW3R5cGVdID0gcGZiO1xyXG4gICAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IHNpemU7ICsraWkpIHtcclxuICAgICAgdGhpcy5fbm9kZVBvb2xzW3R5cGVdLnB1dChjYy5pbnN0YW50aWF0ZShwZmIpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOa3u+WKoOWvueixoeWIsOaxoFxyXG4gICAqIEBwYXJhbSAgICB0eXBlICAgIGDnsbvlnotgXHJcbiAgICogQHBhcmFtICAgIG5vZGUgICAgIGBjYy5ub2RlYFxyXG4gICAqL1xyXG4gIHB1YmxpYyBQdXROb2RlMlBvb2wodHlwZTogc3RyaW5nLCBub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICB0aGlzLl9ub2RlUG9vbHNbdHlwZV0ucHV0KG5vZGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5LuO5a+56LGh5rGg55Sf5oiQ5a+56LGhXHJcbiAgICogQHBhcmFtICAgIHR5cGUgICAgYOexu+Wei2BcclxuICAgKiByZXR1cm4gICBjYy5Ob2RlXHJcbiAgICovXHJcbiAgcHVibGljIEdldE5vZGVGcm9tUG9vbCh0eXBlOiBzdHJpbmcpOiBjYy5Ob2RlIHtcclxuICAgIC8vIGNjLmxvZyh0eXBlLCBcIjpwb29sIHNpemU9XCIsIHRoaXMuX25vZGVQb29sc1t0eXBlXS5zaXplKCkpXHJcbiAgICBpZiAodGhpcy5fbm9kZVBvb2xzW3R5cGVdLnNpemUoKSA8PSAwKSByZXR1cm4gY2MuaW5zdGFudGlhdGUodGhpcy5fbm9kZVBmYlt0eXBlXSk7XHJcbiAgICByZXR1cm4gdGhpcy5fbm9kZVBvb2xzW3R5cGVdLmdldCgpO1xyXG4gIH1cclxufVxyXG4iXX0=