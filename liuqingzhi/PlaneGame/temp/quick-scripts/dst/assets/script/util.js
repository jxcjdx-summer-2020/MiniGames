
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
            .replace("MM", time.getMonth() < 10 ? 0 + (time.getMonth() + 1).toString() : (time.getMonth() + 1).toString())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx1dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQWVBLENBQUM7SUFkSSw0QkFBNEI7SUFDdkIsZUFBUyxHQUFoQixVQUFpQixJQUFTO1FBRXJCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQzlCLE9BQU8sc0JBQXNCO2FBQzVCLE9BQU8sQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzdDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFDLEVBQUUsQ0FBQSxDQUFDLENBQUEsQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBLENBQUMsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNoRyxPQUFPLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFBLENBQUMsR0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyRixPQUFPLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFBLENBQUMsR0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN4RixPQUFPLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFBLENBQUMsR0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM5RixPQUFPLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFBLENBQUMsR0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQ25HLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHV0aWxzIHtcclxuICAgICAvL+aXtumXtOagvOW8j+WMliBZWVlZ5bm0TU3mnIhEROaXpSBoaDptbTpzc1xyXG4gICBzdGF0aWMgVGltZUZvcm10KHRpbWU6RGF0ZSk6c3RyaW5nIHsgXHJcblxyXG4gICAgICAgIGNjLmxvZyhcImRheVwiLHRpbWUuZ2V0RGF5KCkudG9TdHJpbmcoKSlcclxuICAgICAgICBjYy5sb2coXCJkYXkgbnVtXCIsdGltZS5nZXREYXkoKSlcclxuICAgICAgICBjYy5sb2coXCJkYXRlIFwiLHRpbWUuZ2V0RGF0ZSgpKVxyXG4gICAgICAgIHJldHVybiBcIllZWVnlubRNTeaciERE5pelIGhoOm1tOnNzXCJcclxuICAgICAgICAucmVwbGFjZShcIllZWVlcIix0aW1lLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSlcclxuICAgICAgICAucmVwbGFjZShcIk1NXCIsdGltZS5nZXRNb250aCgpPDEwPzArKHRpbWUuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpOih0aW1lLmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKSlcclxuICAgICAgICAucmVwbGFjZShcIkREXCIsdGltZS5nZXREYXRlKCk8MTA/MCt0aW1lLmdldERhdGUoKS50b1N0cmluZygpOnRpbWUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJoaFwiLHRpbWUuZ2V0SG91cnMoKTwxMD8wK3RpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpOnRpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpKVxyXG4gICAgICAgIC5yZXBsYWNlKFwibW1cIix0aW1lLmdldE1pbnV0ZXMoKTwxMD8wK3RpbWUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCk6dGltZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKSlcclxuICAgICAgICAucmVwbGFjZShcInNzXCIsdGltZS5nZXRTZWNvbmRzKCk8MTA/MCt0aW1lLmdldFNlY29uZHMoKS50b1N0cmluZygpOnRpbWUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkpXHJcbiAgICB9XHJcbn0iXX0=