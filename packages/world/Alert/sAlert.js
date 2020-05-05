mp.events.addCommand({
	 'alert' : (player, alert, type, arg2) => {
//      if (!player.loggedIn || player.adminlvl < 1) return;
		if(type == "siren")
		{
			if(arg2 && arg2 > 0 && arg2 < 10)
			{
				mp.players.forEach( (player) => { player.call(`sirenalertp`, [arg2]); } );
			}
			else if(arg2 == "stop")
			{
				mp.players.forEach( (player) => { player.call(`sirenalertoff`); } );
			}
			else player.outputChatBox('!{Red}ERROR !{White}Command /alert siren: please type a duration between 1 and 9 or stop');
		}
		else if(type == "tornado")
		{
			if(arg2 > 0 && arg2 < 10)
			{
				mp.players.forEach( (player) => { player.call(`tornadoalert`, [arg2]); } );
			}
			else player.outputChatBox('!{Red}ERROR !{White}Command /alert tornado: please type a duration between 1 and 9');
		}
		else player.outputChatBox('!{Red}ERROR !{White}Command /alert not valid');
    }  
});