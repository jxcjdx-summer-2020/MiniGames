// 格子边长（单位：px）
const Design_Cell_Size = 30;
// 地图尺寸
const Design_Cell_Wight = 16;
const Design_Cell_Height = 9;
// 蛇的方向
const Direction = cc.Enum({
    Left: 0,
    Down: 1,
    Right: 2,
    Up: 3
})

module.exports = {
    Design_Cell_Size,
    Design_Cell_Wight,
    Design_Cell_Height,
    Direction
}