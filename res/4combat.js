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

window.previousTurn = new Object();

setup.calculateTurn = function(player, enemy, move) {
    var damageDealt = calculateDamage(player.atk, player.damageMultiplierPercent / 100, move);
    var finalDamageDealt = Math.max(damageDealt - calculateMitigation(enemy.def), 1);
    var hit = determineIfHit(enemy.spd, player.accuracyPercent, move);
    if (hit == true) {
        enemy.currentStamina -= finalDamageDealt;
    }
    var enemyDrain = calculateStaminaDrain(enemy.staminaDrainPercent / 100);
    enemy.currentStamina -= enemyDrain;

    var damageTaken  = calculateDamage(enemy.atk, enemy.damageMultiplierPercent / 100, move);
    var finalDamageTaken = Math.max(damageTaken - calculateMitigation(player.def), 1);
    var dodgeFailed = determineIfHit(player.spd, enemy.accuracyPercent, 0);
    if (dodgeFailed == true) {
        player.currentStamina -= finalDamageTaken;
    }
    var playerDrain = calculateStaminaDrain(player.staminaDrainPercent / 100);
    player.currentStamina -= playerDrain;

    var turn = new Object();
    turn.hit = hit;
    turn.dealt = finalDamageDealt;
    turn.dodgeFailed = dodgeFailed;
    turn.taken = finalDamageTaken;
    turn.playerDrain = playerDrain;
    turn.enemyDrain = enemyDrain;
    window.previousTurn = turn;

    window.player.turnNumber += 1;
}