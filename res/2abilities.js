window.abilityMap = new Map([
    ["gorilla", "Gorilla grip"],
    ["hippo", "Hippo hide"],
    ["cheetah", "Cheetah speed"],
    ["puma", "Puma pounce"],
    ["rabies", "Mammal rabies"],

    ["beak", "Peak Beak"],
    ["feathers", "Carbon Fiber Feathers"],
    ["wings", "Jet-Black Wings"],
    ["eagle", "Eagle Eye"],
    ["eleven", "Eleven Lungs"],

    ["fangs", "Snake Fangs"],
    ["cape", "King Cobra Cape"],
    ["snake", "Slithering Snake"],
    ["pit", "Pit Organs"],
    ["venom", "Viper Venom"],

    ["swole", "Swole Sacs"],
    ["slimy", "Slimy Skin"],
    ["frog", "Frog Legs"],
    ["respiration", "Cutaneous Respiration"],
    ["poison", "Poison Skin"],
]);

window.maxAbilities = 2;

setup.restrictAbilities = function () {
    $(document).on(':passagedisplay', function () {
        function isValidSelection () {
            var checkedChecks = document.querySelectorAll("input:checked");
            if (checkedChecks.length >= maxAbilities + 1) {
                return false;
            }
            return true;
        }

        var checks = document.querySelectorAll("input");
        for (var i = 0; i < checks.length; i++) {
            checks[i].onclick = isValidSelection;
        }
    });
}

setup.addPlayerAbilities = function(abilityName) {
    player.abilities.push(abilityName);
}