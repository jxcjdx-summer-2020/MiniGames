
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1421g+wexHn45P+YjXSas7', 'util');
// script/util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = /** @class */ (function () {
    function utils() {
    }
    //时间格式化 YYYY年MM月DD日 hh:mm:ss
    utils.TimeFormt = function (time) {
        cc.log("day", time.getDay().toString());
        cc.log("day num", time.getDay());
        cc.log("date ", time.getDate());
        return "YYYY年MM月DD日 hh:mm:ss"
            .replace("YYYY", time.getFullYear().toString())
            .replace("MM", time.getMonth() < 10 ? 0 + time.getMonth().toString() : time.getMonth().toString())
            .replace("DD", time.getDate() < 10 ? 0 + time.getDate().toString() : time.getDate().toString())
            .replace("hh", time.getHours() < 10 ? 0 + time.getHours().toString() : time.getHours().toString())
            .replace("mm", time.getMinutes() < 10 ? 0 + time.getMinutes().toString() : time.getMinutes().toString())
            .replace("ss", time.getSeconds() < 10 ? 0 + time.getSeconds().toString() : time.getSeconds().toString());
    };
    return utils;
}());
exports.default = utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQWVBLENBQUM7SUFkSSw0QkFBNEI7SUFDdkIsZUFBUyxHQUFoQixVQUFpQixJQUFTO1FBRXJCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQzlCLE9BQU8sc0JBQXNCO2FBQzVCLE9BQU8sQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzdDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUEsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3hGLE9BQU8sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUEsQ0FBQyxHQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JGLE9BQU8sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUEsQ0FBQyxHQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3hGLE9BQU8sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUEsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzlGLE9BQU8sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUEsQ0FBQyxHQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDbkcsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdXRpbHMge1xyXG4gICAgIC8v5pe26Ze05qC85byP5YyWIFlZWVnlubRNTeaciERE5pelIGhoOm1tOnNzXHJcbiAgIHN0YXRpYyBUaW1lRm9ybXQodGltZTpEYXRlKTpzdHJpbmcgeyBcclxuXHJcbiAgICAgICAgY2MubG9nKFwiZGF5XCIsdGltZS5nZXREYXkoKS50b1N0cmluZygpKVxyXG4gICAgICAgIGNjLmxvZyhcImRheSBudW1cIix0aW1lLmdldERheSgpKVxyXG4gICAgICAgIGNjLmxvZyhcImRhdGUgXCIsdGltZS5nZXREYXRlKCkpXHJcbiAgICAgICAgcmV0dXJuIFwiWVlZWeW5tE1N5pyIRETml6UgaGg6bW06c3NcIlxyXG4gICAgICAgIC5yZXBsYWNlKFwiWVlZWVwiLHRpbWUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiTU1cIix0aW1lLmdldE1vbnRoKCk8MTA/MCt0aW1lLmdldE1vbnRoKCkudG9TdHJpbmcoKTp0aW1lLmdldE1vbnRoKCkudG9TdHJpbmcoKSlcclxuICAgICAgICAucmVwbGFjZShcIkREXCIsdGltZS5nZXREYXRlKCk8MTA/MCt0aW1lLmdldERhdGUoKS50b1N0cmluZygpOnRpbWUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJoaFwiLHRpbWUuZ2V0SG91cnMoKTwxMD8wK3RpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpOnRpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpKVxyXG4gICAgICAgIC5yZXBsYWNlKFwibW1cIix0aW1lLmdldE1pbnV0ZXMoKTwxMD8wK3RpbWUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCk6dGltZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKSlcclxuICAgICAgICAucmVwbGFjZShcInNzXCIsdGltZS5nZXRTZWNvbmRzKCk8MTA/MCt0aW1lLmdldFNlY29uZHMoKS50b1N0cmluZygpOnRpbWUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkpXHJcbiAgICB9XHJcbn0iXX0=