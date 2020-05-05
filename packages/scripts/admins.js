//Команды: Администратор

mp.events.addCommand('makeadmin', (player, id) =>  {
  if(player.admin < 5) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
  let target = mp.players.at(id);
  gm.mysql.handle.query('UPDATE `accounts` SET admin = ? WHERE username = ?', [1, target.name], function(err, res, row){
      if(err) console.log(err);
  });
  target.admin = 1;
  player.outputChatBox(`!{red}[A] !{white}Вы назначили{dodgerblue} ${target.name} !{white}на должность Хелпера.`);
  target.outputChatBox(`Администратор ${player.name} назначил вас на должность хелпера.`);
  mp.players.broadcast(`!{red}[A] !{white}${player.name} назначил на должность хелпера игрока !{dodgerblue} ${target.name}.`);
});

mp.events.addCommand('hp', (player, id) =>  {
	if(player.admin < 1) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
	let target = mp.players.at(id);
    target.health = 100;
	player.outputChatBox(`!{red}[A] !{white}Вы !{dodgerblue}восстановили !{white}здоровье игроку !{dodgerblue}${target.name}.`);
	target.outputChatBox(`!{red}[A] !{white}${player.name} !{dodgerblue}восстановил !{white}вам здоровье.`)
});

mp.events.addCommand('armor', (player, id) =>  {
	if(player.admin < 1) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
	let target = mp.players.at(id);
    target.armour= 100;
	player.outputChatBox(`!{red}[A] !{white}Вы !{dodgerblue}восстановили !{white}броню игроку !{dodgerblue} ${target.name}.`);
	target.outputChatBox(`!{red}[A] !{white}${player.name} !{dodgerblue}восстановил !{white}вам броню.`)
});

mp.events.addCommand('tp', (player, _, x, y ,z) => 
{
	if(player.admin < 1) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    if (!isNaN(parseFloat(x)) && !isNaN(parseFloat(y)) && !isNaN(parseFloat(z)))
        player.position = new mp.Vector3(parseFloat(x),parseFloat(y),parseFloat(z));
    else
        player.outputChatBox(`!{dodgerblue}[ПОМОЩЬ] !{white}Для !{dodgerblue}телепорта !{white}используйте !{dodgerblue}/tp [x] [z] [y]`);
    });

mp.events.addCommand("a", (player, message) => {
    if(player.admin < 3) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
        let name = player.name.replace("_"," ");    
        let id = `[${player.id}]`
        let str = (`!{red}[A] !{white}${player.name} : !{dodgerblue}${message}`);
mp.players.broadcastInRange(player.position, 999999999, str);
});

mp.events.addCommand('kick', (player, text, target,args) => {
    if(player.admin < 1) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let newTarget = mp.players.at(target);
    if(!target || isNaN(target)) return player.outputChatBox("!{dodgerblue}[ОШИБКА] Для того что бы !{dodgerblue}выгнать !{white}игрока используйте !{dodgerblue}/kick [playerID] [Reason]");
	if (typeof args === 'undefined') return player.outputChatBox("Для того что бы !{dodgerblue}выгнать !{white}игрока используйте !{dodgerblue}/kick [playerID] [Reason]")
    if(newTarget === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.")
    mp.players.broadcast(`!{red}[A] !{white}${player.name} кикнул игрока !{dodgerblue} ${newTarget.name}. !{white}Причина: !{red} ${args}.`);
    newTarget.outputChatBox("Вас !{dodgerblue}выгнали !{white}с сервера.");
    newTarget.kick('!{red}[A] !{white}Игрок !{dodgerblue}выгнан.');
});

	mp.events.addCommand('goto', (player, id) => {
    if(player.admin < 1) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.")
    player.outputChatBox(`!{red}[A] !{white}Вы !{dodgerblue}телепортировались !{white} к !{dodgerblue} ${target.name} !{white} [${target.id}].`);
    player.position = target.position;
});

mp.events.addCommand('slap', (player, id) => {
    if(player.admin < 1) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.")
    var pos = target.position;
		pos.z += 3.0;
		target.position = new mp.Vector3(pos.x, pos.y, pos.z);
		target.outputChatBox("!{player} Вас !{dodgerblue}пнул !{white}администратор!");
		player.outputChatBox(`!{red}[A] !{white}Вы !{dodgerblue}пнули !{white}игрока !{dodgerblue}${target.name}.`);
});

mp.events.addCommand('gethere', (player, id) => {
    if(player.admin < 1) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.")
    player.outputChatBox(`!{red}[A] !{white}Вы !{dodgerblue}телепортировали !{white}игрока !{dodgerblue} ${target.name} !{white}к себе.`);
    target.outputChatBox(`!{red}[A]!{white}Вас телепортировал администратор !{dodgerblue}${player.name}.`);
    target.position = player.position;
});

// Команды: Транспорт

mp.events.addCommand('veh', (player, model) => {
	if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
	var position = player.position;
	position.z -= 1;
	let veh = mp.vehicles.new(model, position, {
		color: [[0, 0, 0], [0, 0, 0]],
        dimension: player.dimension	
	});
	veh.numberPlate = "ADMIN";
	player.putIntoVehicle(veh,-1)
	player.outputChatBox(`!{red}[A]	 !{white}Вы !{dodgerblue}заспавнили !{white}транспорт - !{dodgerblue}${model}.`);
});

mp.events.addCommand('plate', (player, _, plate) => {
	if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    if(player.vehicle) {
        player.vehicle.numberPlate = plate;
    }
});

mp.events.addCommand('vehfix', (player, id) => {
	if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
	let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.")
	target.vehicle.repair();
    player.outputChatBox(`!{red}[A] !{white}Вы !{dodgerblue}починили !{white}автомобиль игроку !{dodgerblue} ${target.name}.`);
});

mp.events.addCommand('vehdel', (player, _,) => {
	if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    player.vehicle.destroy();
    player.outputChatBox("!{red}[A] !{white}Вы !{dodgerblue}уничтожили !{white}транспорт.");
});

mp.events.addCommand('vehcolor', (player, message) =>  {
    if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    if (typeof message === 'undefined') return player.outputChatBox("!{red}Используйте команду так: /vehcolor цвет RGB!");
    player.vehicle.setColorRGB(message); 
});

//команды чат

mp.events.addCommand('chatclear', (player) => {
    if(player.admin < 2) return player.outputChatBox('!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.');
    for(i = 0; i < 20; ++i) { mp.players.broadcast("  "); };
})


//Команды: Оружие

mp.events.addCommand('givedeagle', (player, id) => {
    if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.");
	target.outputChatBox (`!{red}[A]!{white} ${player.name} выдал вам !{dodgerblue}Desert Eagle.`);
    target.giveWeapon([0x99AEEB3B], 30);
});

mp.events.addCommand('givepistol', (player, id) => {
    if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.");
	target.outputChatBox (`!{red}[A]!{white} ${player.name} выдал вам !{dodgerblue}Пистолет.`);
    target.giveWeapon([0x1B06D571], 30);
});

mp.events.addCommand('givesmg', (player, id) => {
    if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.");
	target.outputChatBox (`!{red}[A]!{white} ${player.name} выдал вам !{dodgerblue}УЗИ.`);
    target.giveWeapon([0x13532244], 120);
});

mp.events.addCommand('giveshotgun', (player, id) => {
    if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.");
	target.outputChatBox (`!{red}[A]!{white} ${player.name} выдал вам !{dodgerblue}Дробовик.`);
    target.giveWeapon([0x1D073A89], 30);
});

mp.events.addCommand('giverifle', (player, id) => {
    if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.");
	target.outputChatBox (`!{red}[A]!{white} ${player.name} выдал вам !{dodgerblue}Автомат.`);
    target.giveWeapon([0x83BF0278], 120);
});

mp.events.addCommand('givesniper', (player, id) => {
    if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.");
	target.outputChatBox (`!{red}[A]!{white} ${player.name} выдал вам !{dodgerblue}Винтовку.`)
    target.giveWeapon([0x0C472FE2], 30);
});

mp.events.addCommand('giverpg', (player, id) => {
    if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.");
	target.outputChatBox (`!{red}[A]!{white} ${player.name} выдал вам !{dodgerblue}РПГ.`)
    target.giveWeapon([0xB1CA77B1], 10);
});

mp.events.addCommand('giveminigun', (player, id) => {
    if(player.admin < 2) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.");
	target.outputChatBox (`!{red}[A]!{white} ${player.name} выдал вам !{dodgerblue}Миниган.`)
    target.giveWeapon([0x42BF8A85], 1000);
});

mp.events.addCommand('giveweapon', (player, id) => {
    let target = mp.players.at(id);
    if(target === null) return player.outputChatBox("Игрок с таким !{dodgerblue}ID !{white}не найден.");
	target.giveWeapon([0x99AEEB3B], 30);
    player.removeWeapon(0x99AEEB3B);
});





