// 格子边长（单位：px）
const Design_Cell_Size = 30;
// 地图尺寸
const Design_Cell_Width = 16;
const Design_Cell_Height = 9;
// 蛇的方向
const Direction = cc.Enum({
    Left: 0,
    Down: 1,
    Right: 2,
    Up: 3
});
// 方向组合

// 关卡常规速度（单位：s）
const Level_Speed = {
    ["Level_1"]: 0.2,
    ["Level_2"]: 0.18,
    ["Level_3"]: 0.16,
    ["Level_4"]: 0.14,
    ["Level_5"]: 0.12,
    ["Level_6"]: 0.1,
}

// 关卡苹果基础生命值
const Level_Apple_Life_Time = 10;

const Level = cc.Enum({
    Level_1: 1,
    Level_2: 2,
    Level_3: 3,
    Level_4: 4,
    Level_5: 5,
    Level_6: 6,
});

const Level_Score = cc.Enum({
    Level_1: 30,
    Level_2: 60,
    Level_3: 90,
    Level_4: 120,
    Level_5: 200,
    level_6: 9999,
});

// 最高记录密钥
const Secret_Key = "fsigjis3465756ushfr37";

module.exports = {
    Design_Cell_Size,
    Design_Cell_Width,
    Design_Cell_Height,
    Direction,
    Level_Speed,
    Level,
    Level_Apple_Life_Time,
    Secret_Key,
    Level_Score
}