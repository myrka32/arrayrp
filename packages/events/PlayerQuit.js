const constants = require("../money/constants");
mp.events.add("playerQuit", (player, exitType, reason) => {
    if (player.data.customMoney !== undefined) {
        gm.mysql.handle.query("UPDATE accounts SET money=? WHERE username=?", [player.data.customMoney, player.name], (err) => {
            if (err) console.log(constants.eventErrorPre + err.message);
        });
    }
});