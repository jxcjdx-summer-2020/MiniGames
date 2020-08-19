
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/audioSourceControl');
require('./assets/Script/background');
require('./assets/Script/bullet');
require('./assets/Script/controller');
require('./assets/Script/counter');
require('./assets/Script/create_enemy');
require('./assets/Script/create_porp');
require('./assets/Script/enemy_01');
require('./assets/Script/global');
require('./assets/Script/hero');
require('./assets/Script/main');
require('./assets/Script/object_pool');
require('./assets/Script/prop');
require('./assets/Script/start');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');

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