module.exports =
{
    registerAccount: function(player){
		player.sendToCreator();
        player.data.customMoney = 5000;
        player.position = new mp.Vector3(-537.01, -218.18, 37.65);   //  Use the same values that are default inside your DB
        player.health = 100;
        player.armour = 0;
        player.loggedInAs = player.name;
		player.admin = 0;
		player.fraction = 0;
		player.rank = 0;
    },
    saveAccount: function(player){
        gm.mysql.handle.query('UPDATE `accounts` SET money = ?, health = ?, armour = ?, fraction = ?, rank = ?, admin = ? WHERE username = ?', [player.data.customMoney, player.health, player.armour, player.fraction, player.rank, player.admin, player.name], function(err, res, row){
            if(err) console.log(err);
        });
    },
    loadAccount: function(player){
		player.loadCharacter();
        gm.mysql.handle.query('SELECT * FROM `accounts` WHERE username = ?', [player.name], function(err, res, row){
            if(err) console.log(err);
            if(res.length){
                res.forEach(function(playerData){
                    player.name = playerData.username;
                    player.data.customMoney;
                    player.health = playerData.health;
                    player.armour = playerData.armour;
                    player.loggedInAs = playerData.username;                    
                    player.admin = playerData.admin;
					player.fraction = playerData.fraction;
					spawnAtFrac();
					player.rank = playerData.rank;
                });
            }
        });
        console.log(`${player.name} has logged in`);
    }
}

