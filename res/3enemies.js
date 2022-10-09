function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setup.generateEnemy = function(playerFame) {
    enemy = new Object();

    enemy.atk = getRandomIntInclusive(2, 2 + playerFame);
    enemy.def = getRandomIntInclusive(2, 2 + playerFame);
    enemy.spd = getRandomIntInclusive(2, 2 + playerFame);

    enemy.maxStamina = 100; 
    enemy.staminaDrainPercent = 100;

    enemy.accuracyPercent = 100;
    enemy.damageMultiplierPercent = 100;

    return enemy;
}