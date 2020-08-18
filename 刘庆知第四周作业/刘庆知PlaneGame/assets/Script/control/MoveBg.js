import { moveBg11, moveBg21 } from '../util/move'
cc.Class({
    extends: cc.Component,

    properties: {
        //背景
        bg01: {
            default: null,
            type: cc.Sprite
        },
        bg02: {
            default: null,
            type: cc.Sprite
        },
        bg_speed: 2
    },

    // LIFE-CYCLE CALLBACKS:
    bgMove: function (bgList, speed) {
        //每次循环二张图片一起滚动
        for (var index = 0; index < bgList.length; index++) {
            bgList[index].y -= speed;
        }
        //y坐标减去自身的height得到这张背景刚好完全离开场景时的y值
        if (bgList[0].y <= 0 - bgList[0].height) {
            bgList[0].y = 640; //离开场景后将此背景图的y重新赋值，位于场景的上方
        }
        if (bgList[1].y <= 640 - 2 * bgList[1].height) {
            bgList[1].y = 640;
        }
    },
    onLoad() {
        // moveBg11(this.bg01.node, this)
        // moveBg21(this.bg02.node, this)
    },
    update() {
        this.bgMove([this.bg01.node, this.bg02.node], this.bg_speed);
    },

    start() {

    },

    // update (dt) {},
});
