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

setup.calculateTurn = function(player, enemy, move) {
    var damageDealt = calculateDamage(player.atk, player.damageMultiplierPercent / 100, move);
    var finalDamageDealt = damageDealt - calculateMitigation(enemy.def);
    if (determineIfHit(enemy.spd, player.accuracyPercent, move)) {
        enemy.currentStamina -= finalDamageDealt;
    }

    var damageTaken  = calculateDamage(enemy.atk, enemy.damageMultiplierPercent / 100, move);
    var finalDamageTaken = damageTaken - calculateMitigation(player.def);
    if (determineIfHit(player.spd, enemy.accuracyPercent, 0)) {
        player.currentStamina -= finalDamageTaken;
    }
}