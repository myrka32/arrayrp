mp.events.addCommand('invite', (player, id) =>  {
	if(player.fraction === 1) {
		if(player.rank > 9);
		let target = mp.players.at(id);
		gm.mysql.handle.query('UPDATE `accounts` SET fraction = ? WHERE username = ?', [1, target.name], function(err, res, row){
			if(err) console.log(err);
		});
		target.fraction = 1;
		gm.mysql.handle.query('UPDATE `accounts` SET rank = ? WHERE username = ?', [1, target.name], function(err, res, row){
			if(err) console.log(err);
		});
		target.rank = 1;
		target.outputChatBox(`${player.name} принял вас в !{dodgerblue}LSPD.`);
		target.outputChatBox(`${player.name} принял вас во фракцию!{dodgerblue} LSPD.`);
	} else if(player.fraction === 9) {
		if(player.rank > 9);
		let target = mp.players.at(id);
		gm.mysql.handle.query('UPDATE `accounts` SET fraction = ? WHERE username = ?', [1, target.name], function(err, res, row){
			if(err) console.log(err);
		});
		target.fraction = 9;
		gm.mysql.handle.query('UPDATE `accounts` SET rank = ? WHERE username = ?', [1, target.name], function(err, res, row){
			if(err) console.log(err);
		});
		target.rank = 1;
		target.outputChatBox(`${player.name} принял вас в !{dodgerblue}BALLAS.`);
		target.outputChatBox(`${player.name} принял вас во фракцию!{dodgerblue} BALLAS.`);
	}
});