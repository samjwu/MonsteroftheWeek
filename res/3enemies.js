function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setup.generateEnemy = function(playerFame) {
    enemy = new Object();

    enemy.atk = getRandomIntInclusive(2, 2 + playerFame);
    enemy.def = getRandomIntInclusive(2, 2 + playerFame);
    enemy.spd = getRandomIntInclusive(2, 2 + playerFame);

    enemy.maxStamina = 100 + getRandomIntInclusive(0, playerFame);
    enemy.staminaDrainPercent = 100 - getRandomIntInclusive(0, playerFame);

    enemy.accuracyPercent = 100 + getRandomIntInclusive(0, playerFame);
    enemy.damageMultiplierPercent = 100 + getRandomIntInclusive(0, playerFame);

    return enemy;
}