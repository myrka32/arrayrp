mp.events.add("playerChat", (player, message) => {
    let name = player.name.replace("_"," ");
	let id = `[${player.id}]`
    let str = "!{white}" + name + " " + "!{dodgerblue}" + id + "!{white}" + " говорит: " + message;
    mp.players.broadcastInRange(player.position, 10, str);
});

mp.events.addCommand("me", (player, message) => {	
    if (typeof message === 'undefined') return player.outputChatBox("!{red}Используйте команду так: /me действие!");
    let name = player.name.replace("_"," ");
	let id = `[${player.id}]`
    let str = "!{violet}" + name + " " + message+ "";
    mp.players.broadcastInRange(player.position, 10, str);
});

mp.events.addCommand("b", (player, message) => {	
    let name = player.name.replace("_"," ");
	let id = `[${player.id}]`
    let str = "!{gray}" + "(("+ name + id +  ": " +  message + "))";
    mp.players.broadcastInRange(player.position, 10, str);
});

mp.events.addCommand("do", (player, message) => {	
    let name = player.name.replace("_"," ");
	let id = `[${player.id}]`
    let str = "!{violet}" + message + " (" + name + ")";
    mp.players.broadcastInRange(player.position, 10, str);
});

mp.events.addCommand("", (player) => {	
    player.outputChatBox("Команда !{red}не найдена!");
});

mp.events.addCommand("try", (player, message) => {	
    let name = player.name.replace("_"," ");
	let id = `[${player.id}]`
    let random = Math.floor(Math.random() * 2); 
    if(random === 1){
        let tryResult = "!{green}Удачно";
        let str = "!{violet}" + name + id + " " + message + " | " + tryResult;
        mp.players.broadcastInRange(player.position, 10, str);
    }    
    else if(random === 0){
        let tryResult = "!{red}Неудачно";
        let str = "!{violet}" + name + id + " " + message + " | " + tryResult;
        mp.players.broadcastInRange(player.position, 10, str);
    }
});

mp.events.addCommand("s", (player, message) => {	
    let name = player.name.replace("_"," ");    
	let id = `[${player.id}]`
    let str = "!{white}" + name + id + " кричит: " + message;
    mp.players.broadcastInRange(player.position, 25, str);
});

mp.events.addCommand("w", (player, message) => {	
    let name = player.name.replace("_"," ");    
	let id = `[${player.id}]`
    let str = "!{lightslategray}" + name + id + " шепчет: " + message;
    mp.players.broadcastInRange(player.position, 5, str);
});

//команды

mp.events.addCommand("money", (player, _, money) => {
    // set the player's money to the specified amount
    money = parseInt(money);

    if (!isNaN(money)) {
        player.data.money = money;
    } else {
        player.outputChatBox("Invalid amount specified.");
    }
});

mp.events.addCommand("buyhp", (player) => {
    // refill a player's health for $100
    if (player.data.money >= 100) {
        player.health = 100;
        player.data.money -= 100;
        player.outputChatBox("Refilled health for $100.");
    } else {
        player.outputChatBox("You don't have $100.");
    }
});

mp.events.addCommand('pay', (player, _, id, money) =>  {
	let target = mp.players.at(id);
	money = parseInt(money);
		if (player.data.money >= money) {
			player.data.money -= money;
			target.data.money += money;
			player.outputChatBox(`Вы !{dodgerblue}дали !{white}игроку !{dodgerblue}${target.name} - !{white}${money}!{limegreen}$.`);
			target.outputChatBox(`${player.name} !{dodgerblue}дал !{white}вам - ${money}!{limegreen}$`);
			mp.players.broadcast(`!{violet}${player.name} передал ${target.name} денежную сумму в размере - !{white}${money}!{limegreen}$`);
		} else {
			player.outputChatBox(`У вас нет !{dodgerblue}${money}!{limegreen}$.`);
		}
});

mp.events.add("playerEnterVehicle", (player) =>  {
	function playerEnterVehicleHandler(player, vehicle, seat) {
		player.vehicle.engine = false;
	}
});

mp.events.addCommand("smoney", (player, _, money) => {
    // set the player's money to the specified amount
    money = parseInt(money);

    if (!isNaN(money)) {
        player.data.customMoney = money;
    } else {
        player.outputChatBox("Invalid amount specified.");
    }
});

mp.events.addCommand("cmoney", (player, _, amount) => {
    // change the player's money by the specified amount
    amount = parseInt(amount);

    if (!isNaN(amount)) {
        player.data.customMoney += amount;
    } else {
        player.outputChatBox("Invalid amount specified.");
    }
});

mp.events.addCommand("buyhp", (player) => {
    // refill a player's health for $100
    if (player.data.customMoney >= 100) {
        player.health = 100;
        player.data.customMoney -= 100;
        player.outputChatBox("Refilled health for $100.");
    } else {
        player.outputChatBox("You don't have $100.");
    }
});