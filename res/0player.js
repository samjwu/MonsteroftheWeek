window.fameMap = new Map([
    [0, "nobody"],
    [1, "rando"],
    [2, "mad scientist"],
    [3, "mastermind"],
    [4, "Megamind"],
    [5, "super mega ultra evil genius"]
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

window.player = new Object();

setup.initializeStats = function() {
    player.fame = 0;

    player.atk = 0;
    player.def = 0;
    player.spd = 0;

    player.maxStamina = 100;
    player.staminaDrain = 1;

    player.abilities = new Set();
}

setup.changePlayerCoreStats = function(atk, def, spd) {
    player.atk += atk;
    player.def += def;
    player.spd += spd;
}

setup.changePlayerStaminaStats = function(max, drain) {
    player.maxStamina += max;
    player.staminaDrain += drain;
}