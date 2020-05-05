let colshape = mp.colshapes.newRectangle(449.89, -993.05, 30.69, 0.3);

function playerEnterColshapeHandler(player, shape) {
	if(shape == colshape) 
	{
		console.log(`${player.name} goto colpshape!`);
		player.giveWeapon(0x678B81B1, 1);
		player.giveWeapon(0x3656C8C1, 1);
		player.giveWeapon( 0x8BB05FD7, 1);
		player.setClothes(3, 1, 39, 1)
		player.health = 100;
		player.armour = 100;
	}
}
mp.events.add("playerEnterColshape", playerEnterColshapeHandler);

function playerExitColshapeHandler(player, shape) {
  if(shape == colshape) {
    console.log(`${player.name} exit to colpshape!`);
  }
}


//Вход в мэрию
let colshapegov = mp.colshapes.newRectangle(238.25, -413.24, 48.11, 0.3);

function playerEnterColshapeHandler(player, shape) {
	if(shape == colshapegov) 
	{
		console.log(`${player.name} Вошел в колшейп!`);
		player.position = new mp.Vector3(-75.8466, -826.9893, 243.3859);
	}
}
mp.events.add("playerEnterColshape", playerEnterColshapeHandler);

function playerExitColshapeHandler(player, shape) {
  if(shape == colshapegov) {
    console.log(`${player.name} Вышел с колшейпа!`);
  }
}

mp.events.add("playerExitColshape", playerExitColshapeHandler);

