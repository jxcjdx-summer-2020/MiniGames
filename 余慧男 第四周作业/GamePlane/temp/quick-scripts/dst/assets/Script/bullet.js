
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2c03n/DthKxKvQMs/xC+B/', 'bullet');
// Script/bullet.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
// 由于子弹开始设定没有考虑到多种子弹属性，后续维护使用两种区分
// 保留原逻辑为默认子弹，新建子弹工厂为道具包子弹
// 道具包子弹拥有以下可随时定义属性
// 1.子弹速度
// 2.子弹伤害
// 3.子弹射速
// 4.子弹资源（由当前节点而定）
// 5.子弹音效 (音效由全局播放器资源添加，这边只做抛给播放器要使用什么音效)
// 6.子弹数量 (数量由道具包定义)
// 7.子弹速率
// 8.子弹血量 (决定当前子弹是否具有穿透)
cc.Class({
  "extends": cc.Component,
  properties: {
    ySpeed: {
      "default": 3,
      tooltip: '子弹速度',
      type: cc.Integer
    },
    harm: {
      "default": 1,
      tooltip: '伤害'
    },
    easeOut: {
      "default": 1.6,
      tooltip: '子弹由快到慢'
    },
    pierce: {
      "default": false,
      tooltip: '子弹是否有穿透'
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
    this.init();
  },
  init: function init() {
    this.node.componentName = 'bullet';
    this.object_pool = cc.find('Canvas/object_pool').getComponent('object_pool'); // 最初考虑对象池为按需引入 后面发现对象池使用地方太多因改全局对象
  },
  // start () {
  // },
  // update (dt) {
  // },
  setCurrentPosition: function setCurrentPosition(node) {
    // console.log(this.node.parent, 'setCurrentPosition');
    this.node.x = node.x;
    this.node.y = node.y + node.height / 2 + this.node.height / 2;
    return this;
  },
  fire: function fire(currentNode) {
    var parent = cc.find('Canvas/background');
    var object_pool = this.object_pool;
    var action = cc.moveTo(this.ySpeed, currentNode.x, parent.height / 2 + this.node.height * 0.5);
    action.easing(cc.easeOut(this.easeOut));
    var finished = cc.callFunc(function () {
      object_pool.recyclePool({
        node: this.node,
        name: this.node.name
      });
    }, this);
    var myAction = cc.sequence(cc.show(), action, finished);
    this.node.runAction(myAction);
    $base.audio.play('bullet');
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.node.stopAllActions();
    this.object_pool.recyclePool({
      node: this.node,
      name: this.node.name
    });
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidWxsZXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ5U3BlZWQiLCJ0b29sdGlwIiwidHlwZSIsIkludGVnZXIiLCJoYXJtIiwiZWFzZU91dCIsInBpZXJjZSIsIm9uTG9hZCIsIm1hbmFnZXIiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwiaW5pdCIsIm5vZGUiLCJjb21wb25lbnROYW1lIiwib2JqZWN0X3Bvb2wiLCJmaW5kIiwiZ2V0Q29tcG9uZW50Iiwic2V0Q3VycmVudFBvc2l0aW9uIiwieCIsInkiLCJoZWlnaHQiLCJmaXJlIiwiY3VycmVudE5vZGUiLCJwYXJlbnQiLCJhY3Rpb24iLCJtb3ZlVG8iLCJlYXNpbmciLCJmaW5pc2hlZCIsImNhbGxGdW5jIiwicmVjeWNsZVBvb2wiLCJuYW1lIiwibXlBY3Rpb24iLCJzZXF1ZW5jZSIsInNob3ciLCJydW5BY3Rpb24iLCIkYmFzZSIsImF1ZGlvIiwicGxheSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJzdG9wQWxsQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxDQURMO0FBRUpDLE1BQUFBLE9BQU8sRUFBRSxNQUZMO0FBR0pDLE1BQUFBLElBQUksRUFBRU4sRUFBRSxDQUFDTztBQUhMLEtBREE7QUFNUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsQ0FEUDtBQUVGSCxNQUFBQSxPQUFPLEVBQUU7QUFGUCxLQU5FO0FBVVJJLElBQUFBLE9BQU8sRUFBRTtBQUNMLGlCQUFTLEdBREo7QUFFTEosTUFBQUEsT0FBTyxFQUFFO0FBRkosS0FWRDtBQWNSSyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxLQURMO0FBRUpMLE1BQUFBLE9BQU8sRUFBRTtBQUZMO0FBZEEsR0FIUDtBQXVCTDtBQUVBTSxFQUFBQSxNQXpCSyxvQkF5Qks7QUFDTixRQUFJQyxPQUFPLEdBQUdaLEVBQUUsQ0FBQ2EsUUFBSCxDQUFZQyxtQkFBWixFQUFkO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0csT0FBUixHQUFrQixJQUFsQjtBQUNBLFNBQUtDLElBQUw7QUFDSCxHQTdCSTtBQStCTEEsRUFBQUEsSUEvQkssa0JBK0JFO0FBQ0gsU0FBS0MsSUFBTCxDQUFVQyxhQUFWLEdBQTBCLFFBQTFCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQm5CLEVBQUUsQ0FBQ29CLElBQUgsQ0FBUSxvQkFBUixFQUE4QkMsWUFBOUIsQ0FBMkMsYUFBM0MsQ0FBbkIsQ0FGRyxDQUUwRTtBQUNoRixHQWxDSTtBQW1DTDtBQUNBO0FBRUE7QUFFQTtBQUVBQyxFQUFBQSxrQkExQ0ssOEJBMENjTCxJQTFDZCxFQTBDb0I7QUFDckI7QUFDQSxTQUFLQSxJQUFMLENBQVVNLENBQVYsR0FBY04sSUFBSSxDQUFDTSxDQUFuQjtBQUNBLFNBQUtOLElBQUwsQ0FBVU8sQ0FBVixHQUFjUCxJQUFJLENBQUNPLENBQUwsR0FBVVAsSUFBSSxDQUFDUSxNQUFMLEdBQWMsQ0FBeEIsR0FBOEIsS0FBS1IsSUFBTCxDQUFVUSxNQUFWLEdBQW1CLENBQS9EO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0EvQ0k7QUFpRExDLEVBQUFBLElBakRLLGdCQWlEQUMsV0FqREEsRUFpRGE7QUFDZCxRQUFNQyxNQUFNLEdBQUc1QixFQUFFLENBQUNvQixJQUFILENBQVEsbUJBQVIsQ0FBZjtBQUNBLFFBQU1ELFdBQVcsR0FBRyxLQUFLQSxXQUF6QjtBQUNBLFFBQUlVLE1BQU0sR0FBRzdCLEVBQUUsQ0FBQzhCLE1BQUgsQ0FBVSxLQUFLMUIsTUFBZixFQUF1QnVCLFdBQVcsQ0FBQ0osQ0FBbkMsRUFBdUNLLE1BQU0sQ0FBQ0gsTUFBUCxHQUFjLENBQWYsR0FBcUIsS0FBS1IsSUFBTCxDQUFVUSxNQUFWLEdBQW1CLEdBQTlFLENBQWI7QUFDQUksSUFBQUEsTUFBTSxDQUFDRSxNQUFQLENBQWMvQixFQUFFLENBQUNTLE9BQUgsQ0FBVyxLQUFLQSxPQUFoQixDQUFkO0FBQ0EsUUFBSXVCLFFBQVEsR0FBR2hDLEVBQUUsQ0FBQ2lDLFFBQUgsQ0FBWSxZQUFZO0FBQ25DZCxNQUFBQSxXQUFXLENBQUNlLFdBQVosQ0FBd0I7QUFDcEJqQixRQUFBQSxJQUFJLEVBQUUsS0FBS0EsSUFEUztBQUVwQmtCLFFBQUFBLElBQUksRUFBRSxLQUFLbEIsSUFBTCxDQUFVa0I7QUFGSSxPQUF4QjtBQUlILEtBTGMsRUFLWixJQUxZLENBQWY7QUFNQSxRQUFJQyxRQUFRLEdBQUdwQyxFQUFFLENBQUNxQyxRQUFILENBQVlyQyxFQUFFLENBQUNzQyxJQUFILEVBQVosRUFBc0JULE1BQXRCLEVBQThCRyxRQUE5QixDQUFmO0FBQ0EsU0FBS2YsSUFBTCxDQUFVc0IsU0FBVixDQUFvQkgsUUFBcEI7QUFDQUksSUFBQUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLElBQVosQ0FBaUIsUUFBakI7QUFDSCxHQS9ESTtBQWdFTEMsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFNBQUs1QixJQUFMLENBQVU2QixjQUFWO0FBQ0EsU0FBSzNCLFdBQUwsQ0FBaUJlLFdBQWpCLENBQTZCO0FBQ3pCakIsTUFBQUEsSUFBSSxFQUFFLEtBQUtBLElBRGM7QUFFekJrQixNQUFBQSxJQUFJLEVBQUUsS0FBS2xCLElBQUwsQ0FBVWtCO0FBRlMsS0FBN0I7QUFJSDtBQXRFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8g55Sx5LqO5a2Q5by55byA5aeL6K6+5a6a5rKh5pyJ6ICD6JmR5Yiw5aSa56eN5a2Q5by55bGe5oCn77yM5ZCO57ut57u05oqk5L2/55So5Lik56eN5Yy65YiGXHJcbi8vIOS/neeVmeWOn+mAu+i+keS4uum7mOiupOWtkOW8ue+8jOaWsOW7uuWtkOW8ueW3peWOguS4uumBk+WFt+WMheWtkOW8uVxyXG4vLyDpgZPlhbfljIXlrZDlvLnmi6XmnInku6XkuIvlj6/pmo/ml7blrprkuYnlsZ7mgKdcclxuLy8gMS7lrZDlvLnpgJ/luqZcclxuLy8gMi7lrZDlvLnkvKTlrrNcclxuLy8gMy7lrZDlvLnlsITpgJ9cclxuLy8gNC7lrZDlvLnotYTmupDvvIjnlLHlvZPliY3oioLngrnogIzlrprvvIlcclxuLy8gNS7lrZDlvLnpn7PmlYggKOmfs+aViOeUseWFqOWxgOaSreaUvuWZqOi1hOa6kOa3u+WKoO+8jOi/mei+ueWPquWBmuaKm+e7meaSreaUvuWZqOimgeS9v+eUqOS7gOS5iOmfs+aViClcclxuLy8gNi7lrZDlvLnmlbDph48gKOaVsOmHj+eUsemBk+WFt+WMheWumuS5iSlcclxuLy8gNy7lrZDlvLnpgJ/njodcclxuLy8gOC7lrZDlvLnooYDph48gKOWGs+WumuW9k+WJjeWtkOW8ueaYr+WQpuWFt+acieepv+mAjylcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB5U3BlZWQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogMyxcclxuICAgICAgICAgICAgdG9vbHRpcDogJ+WtkOW8uemAn+W6picsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkludGVnZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhcm06IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogMSxcclxuICAgICAgICAgICAgdG9vbHRpcDogJ+S8pOWusydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVhc2VPdXQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogMS42LFxyXG4gICAgICAgICAgICB0b29sdGlwOiAn5a2Q5by555Sx5b+r5Yiw5oWiJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGllcmNlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAn5a2Q5by55piv5ZCm5pyJ56m/6YCPJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5pbml0KClcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY29tcG9uZW50TmFtZSA9ICdidWxsZXQnXHJcbiAgICAgICAgdGhpcy5vYmplY3RfcG9vbCA9IGNjLmZpbmQoJ0NhbnZhcy9vYmplY3RfcG9vbCcpLmdldENvbXBvbmVudCgnb2JqZWN0X3Bvb2wnKSAvLyDmnIDliJ3ogIPomZHlr7nosaHmsaDkuLrmjInpnIDlvJXlhaUg5ZCO6Z2i5Y+R546w5a+56LGh5rGg5L2/55So5Zyw5pa55aSq5aSa5Zug5pS55YWo5bGA5a+56LGhXHJcbiAgICB9LFxyXG4gICAgLy8gc3RhcnQgKCkge1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxuXHJcbiAgICBzZXRDdXJyZW50UG9zaXRpb24obm9kZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS5wYXJlbnQsICdzZXRDdXJyZW50UG9zaXRpb24nKTtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IG5vZGUueFxyXG4gICAgICAgIHRoaXMubm9kZS55ID0gbm9kZS55ICsgKG5vZGUuaGVpZ2h0IC8gMikgKyAodGhpcy5ub2RlLmhlaWdodCAvIDIpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH0sXHJcblxyXG4gICAgZmlyZShjdXJyZW50Tm9kZSkgeyBcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBjYy5maW5kKCdDYW52YXMvYmFja2dyb3VuZCcpXHJcbiAgICAgICAgY29uc3Qgb2JqZWN0X3Bvb2wgPSB0aGlzLm9iamVjdF9wb29sXHJcbiAgICAgICAgdmFyIGFjdGlvbiA9IGNjLm1vdmVUbyh0aGlzLnlTcGVlZCwgY3VycmVudE5vZGUueCwgKHBhcmVudC5oZWlnaHQvMikgKyAodGhpcy5ub2RlLmhlaWdodCAqIDAuNSkpO1xyXG4gICAgICAgIGFjdGlvbi5lYXNpbmcoY2MuZWFzZU91dCh0aGlzLmVhc2VPdXQpKVxyXG4gICAgICAgIHZhciBmaW5pc2hlZCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgb2JqZWN0X3Bvb2wucmVjeWNsZVBvb2woe1xyXG4gICAgICAgICAgICAgICAgbm9kZTogdGhpcy5ub2RlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5ub2RlLm5hbWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB2YXIgbXlBY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5zaG93KCksYWN0aW9uLCBmaW5pc2hlZCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihteUFjdGlvbik7XHJcbiAgICAgICAgJGJhc2UuYXVkaW8ucGxheSgnYnVsbGV0JylcclxuICAgIH0sXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgIHRoaXMub2JqZWN0X3Bvb2wucmVjeWNsZVBvb2woe1xyXG4gICAgICAgICAgICBub2RlOiB0aGlzLm5vZGUsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubm9kZS5uYW1lXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSk7XHJcbiJdfQ==