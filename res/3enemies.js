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

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setup.generateEnemy = function(playerFame, enemyRace) {
    enemy = new Object();

    enemy.name = adjectives[getRandomIntInclusive(0, adjectives.length)] + " " + enemyRace.class;

    enemy.atk = getRandomIntInclusive(0, playerFame) + enemyRace.atk;
    enemy.def = getRandomIntInclusive(0, playerFame) + enemyRace.def;
    enemy.spd = getRandomIntInclusive(0, playerFame) + enemyRace.spd;

    enemy.maxStamina = 100 + getRandomIntInclusive(0, playerFame);
    enemy.staminaDrainPercent = 100 - getRandomIntInclusive(0, playerFame);

    enemy.accuracyPercent = 100 + getRandomIntInclusive(0, playerFame);
    enemy.damageMultiplierPercent = 100 + getRandomIntInclusive(0, playerFame);

    return enemy;
}