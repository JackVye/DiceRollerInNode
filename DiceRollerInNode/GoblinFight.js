module.exports = {
    fight: function (health) {
        var goblin = Math.floor(Math.random() * 5 + 1) + Math.floor(Math.random() * 5 + 1);
        var hero = health;

        var heroAttack;
        var goblinAttack;
        var hit = "Missed";
        var count = 0;
        var round = "";
        var battle = "";
        var damage;

        while (hero > 0 && goblin > 0) {
            count += 1;
            round = "<h3>ROUND " + count + ":</h3>\n"

            heroAttack = Math.floor(Math.random() * 19 + 3);
            hit = "MISS";
            if (heroAttack > 15) {
                hit = "HIT";
                damage = Math.floor(Math.random() * 7 + 1);
            }
            round += "<p>The hero rolls a " + heroAttack + ", it\'s a  " + hit + "!</p>\n";
            if (hit == "HIT") {
                round += "<p>The hero deals " + damage + " points of slashing damage!</p>\n";
                goblin -= damage;
                round += "<p>The goblin has " + goblin + " health remaining</p>\n";
            }

            goblinAttack = Math.floor(Math.random() * 19 + 3);
            hit = "MISS";
            if (goblinAttack > 12) {
                hit = "HIT";
                damage = Math.floor(Math.random() * 7 + 1);
            }
            round += "<p>The goblin rolls a " + goblinAttack + ", it\'s a  " + hit + "!</p>\n";
            if (hit == "HIT") {
                round += "<p>The goblin deals " + damage + " points of slashing damage!</p>\n";
                hero -= damage;
                round += "<p>The hero has " + hero + " health remaining</p>\n";
            }

            battle += turn(hero, goblin);
        }
        if (goblin < 1) {
            battle += "<h2>The hero has defeated the goblin!</h2>";
        } else {
            battle += "<h2>The goblin has defeated the hero!</h2>";
        }

        return battle;
    }

}