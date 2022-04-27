let gamerScores = {
    john: 89,
    paul: 725,
    george: 553,
    robert: 9302,
    steve: 733,
};

for (let gamer in gamerScores) {
    console.log(`${gamer} scored ${gamerScores[gamer]}`)
}