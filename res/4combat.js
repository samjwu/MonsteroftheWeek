function calculateDamage(atk, multiplier, move) {
    var base = 1 + Math.random() * (atk + move) * 10 * multiplier;
    return base * multiplier;
}

function calculateMitigation(def) {
    return Math.random() * def * 10;
}

function determineIfHit(spd, accuracy, move) {
    var dodgeChance = Math.random() * spd * 10;
    var hitChance = Math.random() * 100 + (accuracy - 100) - (move * 10);
    return hitChance >= dodgeChance;
}

function calculateStaminaDrain(drain) {
    return 2 * drain;
}

setup.calculateTurn = function(player, enemy, move) {
    var damageDealt = calculateDamage(player.atk, player.damageMultiplierPercent / 100, move);
    var finalDamageDealt = Math.max(damageDealt - calculateMitigation(enemy.def), 1);
    if (determineIfHit(enemy.spd, player.accuracyPercent, move)) {
        enemy.currentStamina -= finalDamageDealt;
    }
    enemy.currentStamina -= calculateStaminaDrain(enemy.staminaDrainPercent);

    var damageTaken  = calculateDamage(enemy.atk, enemy.damageMultiplierPercent / 100, move);
    var finalDamageTaken = Math.max(damageTaken - calculateMitigation(player.def), 1);
    if (determineIfHit(player.spd, enemy.accuracyPercent, 0)) {
        player.currentStamina -= finalDamageTaken;
    }
    player.currentStamina -= calculateStaminaDrain(player.staminaDrainPercent);
}