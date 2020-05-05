// Телепорты

mp.events.addCommand('tpch', (player, _, x, y ,z) =>  {
	if(player.admin < 1) return player.outputChatBox("!{red} Вы не являетесь Администратором.");
	player.position = new mp.Vector3(-537.01, -218.18, 37.65);
});

mp.events.addCommand('tpsh', (player, _, x, y ,z) =>  {
	if(player.admin < 1) return player.outputChatBox("!{red} Вы не являетесь Администратором.");
	player.position = new mp.Vector3(1855.43, 3682.84, 34.27);
});

mp.events.addCommand('fall', (player, id) =>  {
	if(player.admin < 1) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
	let target = mp.players.at(id);
    target.position = new mp.Vector3(-15900.46, 7376.13, 2695.59);
	target.health = 50;
	target.armour = 0;
});