window.statMap = new Map([
    [0, "fodder"],
    [1, "minion"],
    [2, "mob"],
    [3, "monster"],
    [4, "beast"],
    [5, "mid-boss"],
    [6, "final boss"],
    [7, "hidden boss"],
    [8, "imba"],
    [9, "OP"],
    [10, "broken"]
]);

window.mammal = {
    atk: 2,
    def: 2,
    spd: 2
};

window.bird = {
    atk: 2,
    def: 1,
    spd: 3
};

setup.initializeStats = function() {
    state.active.variables.fame = 0;

    state.active.variables.atk = 0;
    state.active.variables.def = 0;
    state.active.variables.spd = 0;
}

setup.getStatString = function(val) {
    return statMap.get(val);
}

setup.changeStat = function(stat, change) {
    stat += change;
}