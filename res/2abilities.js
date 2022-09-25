window.abilityMap = new Map([
    ["muscles", "Gorilla grip"],
    ["blubber", "Hippo hide"],
    ["running", "Cheetah speed"],
    ["eyesight", "Eagle eye"],
    ["jumping", "Puma pounce"],
    ["rabies", "Mammal rabies"],
]);

setup.restrictAbilities = function () {
    $(document).on(':passagedisplay', function () {
        var maxAbilities = 2;
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