// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        starPrefab: {
            default: null,
            type: cc.Prefab
        },

        // set star appears duration
        minStarDuration: 0,
        maxStarDuration: 0,

        // through setting ground node to set star height
        ground: {
            default: null,
            type: cc.Node
        },

        // player node
        player: {
            default: null,
            type: cc.Node
        },

        // score
        scoreDisplay: {
            default: null,
            type: cc.Label
        },

        scoreAudio: {
            default: null,
            type: cc.AudioClip
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        
        // ground vertical coordinate
        this.groundY = this.ground.y + this.ground.height/2;

        // initialize timer
         this.timer = 0;
         this.starDuration = 0;

        // create new star
         this.spawnNewStar();

        // initialize score
        this.score = 0;

    },

    spawnNewStar: function() { 
        var newStar = cc.instantiate(this.starPrefab);
        this.node.addChild(newStar);
        newStar.setPosition(this.getNewStarPosition());
        newStar.getComponent('star').game = this;

        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    },



    getNewStarPosition: function () {

        var randX = 0;
        // According to the ground and player jump height, get the star random y coordinate
        var randY = this.groundY + Math.random() * this.player.getComponent('player').jumpHeight + 50;
        // According to the screen width, get the star random x coordinate
        var maxX = this.node.width/2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        // return star coordinate
        return cc.v2(randX, randY);

    },

    start () {

    },

    update: function(dt) {
        if (this.timer > this.starDuration) {
            this.gameOver();
            return;
        }
        this.timer += dt;
    },

    gainScore: function () {
        this.score += 1;
        this.scoreDisplay.string = 'Score: ' + this.score;
        // 播放得分音效
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },

    gameOver: function () {
        this.player.stopAllActions(); 
        cc.director.loadScene('game');
    }
});
