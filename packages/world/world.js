mp.events.addCommand('weather', (player, message) =>  {
	if(player.admin < 1) return player.outputChatBox("Вы не являетесь !{red}Администратором.");
	if (typeof message === 'undefined') return player.outputChatBox("!{red}Используйте команду так: /weather название погоды!");
	let name = player.name.replace("_"," ");
	mp.world.setWeatherTransition(message);
	player.outputChatBox("Вы !{dodgerblue}изменили !{white}погоду на !{dodgerblue}" + message + "!{white}.");
	mp.players.broadcast("!{red}[A] !{white}Администратор " + "!{dodgerblue}" + name + " !{white}сменил погоду на: !{dodgerblue}" + message);
});

mp.events.addCommand('time', (player, message) =>  {
	if(player.admin < 1) return player.outputChatBox("Вы не являетесь !{red}Администратором.");
	if (typeof message === 'undefined') return player.outputChatBox("!{red}Используйте команду так: /time время!");
	let name = player.name.replace("_"," ");
	mp.world.time.set(message, 0, 0);
	player.outputChatBox("Вы !{dodgerblue}изменили !{white}погоду на !{dodgerblue}" + message + ".");
	mp.players.broadcast("!{red}[A] !{white}Администратор " + "!{dodgerblue}" + name + " !{white}сменил время на: !{dodgerblue}" + message + ":00");
});
