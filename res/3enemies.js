var adjectives = new Array(
    "monster",
    "monstrous",
    "terrifying",
    "horrifying",
    "dreadful",
    "ghastly",
    "horrible",
    "beastly",
    "scary",
    "creepy",
    "spooky"
);

var enemyOrgs = new Array(
    "Illuminati",
    "CIA",
    "RAW",
    "ISI",
    "MI6",
    "GRU",
    "MSS"
);

setup.getRandomIntInclusive = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setup.generateEnemy = function(playerFame, enemyRace) {
    var enemy = new Object();

    enemy.org = enemyOrgs[setup.getRandomIntInclusive(0, enemyOrgs.length - 1)];
    enemy.name = adjectives[setup.getRandomIntInclusive(0, adjectives.length - 1)] + " " + enemyRace.class;

    enemy.atk = setup.getRandomIntInclusive(0, playerFame) + enemyRace.atk;
    enemy.def = setup.getRandomIntInclusive(0, playerFame) + enemyRace.def;
    enemy.spd = setup.getRandomIntInclusive(0, playerFame) + enemyRace.spd;

    enemy.maxStamina = 100 + setup.getRandomIntInclusive(0, playerFame);
    enemy.currentStamina = enemy.maxStamina;
    enemy.staminaDrainPercent = 100 - setup.getRandomIntInclusive(0, playerFame);

    enemy.accuracyPercent = 100 + setup.getRandomIntInclusive(0, playerFame);
    enemy.damageMultiplierPercent = 100 + setup.getRandomIntInclusive(0, playerFame);

    return enemy;
}