window.fameMap = new Map([
    [0, "nobody"],
    [1, "rando"],
    [2, "mad scientist"]
]);

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

setup.initializeStats = function() {
    state.active.variables.fame = 0;

    state.active.variables.atk = 0;
    state.active.variables.def = 0;
    state.active.variables.spd = 0;
}

setup.getFameString = function(val) {
    return fameMap.get(val);
}

setup.getStatString = function(val) {
    return statMap.get(val);
}

setup.changeStats = function(atk, def, spd) {
    state.active.variables.atk += atk;
    state.active.variables.def += def;
    state.active.variables.spd += spd;
}