elacars = function() {
	{
	let veh = mp.vehicles.new(mp.joaat("xa21"), new mp.Vector3(-874.14, -55.93, 37.66), );
	veh.setColorRGB(255, 0, 0, 255, 0, 0);
	veh.setMod(1, 2);
	veh.setMod(2, 2);
	veh.setMod(3, 3);
	veh.setMod(5, 1);
	veh.setMod(6, 2);
	veh.setMod(8, 3);
    veh.setMod(46, 2);
	veh.setMod(62, 3);
	veh.setMod(22, 0);
	veh.setMod(18, 0);
	veh.setMod(16, 4);
	veh.setMod(15, 3);
	veh.setMod(13, 2);
	veh.setMod(12, 2);
	veh.setMod(11, 3);
	veh.numberPlate = "ELAB0S4K";
	veh.rotation = new mp.Vector3(0, 0, 296.71); }
	{
	let veh = mp.vehicles.new(mp.joaat("oracle2"), new mp.Vector3(-880.29, -48.77, 37.79), );
	veh.setColorRGB(0, 0, 0, 0, 0, 0);
    veh.setMod(46, 2);
	veh.setMod(62, 3);
	veh.setMod(22, 0);
	veh.setMod(16, 4);
	veh.setMod(15, 3);
	veh.setMod(13, 2);
	veh.setMod(12, 2);
	veh.setMod(11, 3);
	veh.numberPlate = "ELAB0S4K";
	veh.rotation = new mp.Vector3(0, 0, 297.04); }
	{
	let veh = mp.vehicles.new(mp.joaat("tempesta"), new mp.Vector3(-875.63, -51.70, 37.79), );
	veh.setColorRGB(255, 0, 0, 255, 0, 0);
    veh.setMod(46, 2);
	veh.setMod(62, 3);
	veh.setMod(22, 0);
	veh.setMod(16, 4);
	veh.setMod(15, 3);
	veh.setMod(13, 2);
	veh.setMod(12, 2);
	veh.setMod(11, 3);
	veh.numberPlate = "ELAB0S4K";
	veh.rotation = new mp.Vector3(0, 0, 299.54); }
}

mp.events.addCommand('elacars', (model) => {
	elacars();
});

mp.events.addCommand('ela', (player) => {
	if(player.fraction === 18)  player.position = new mp.Vector3(-864.41, -32.28, 40.56);	
});

mp.events.addCommand('mod', (player, fullText, a , b) => {
    player.vehicle.setMod(parseInt(a), parseInt(b));
});

mp.events.addCommand('tune', (player) => {
	player.vehicle.setMod(0, 1);
    player.vehicle.setMod(46, 2);
	player.vehicle.setMod(62, 3);
	player.vehicle.setMod(22, 0);
	player.vehicle.setMod(18, 0);
	player.vehicle.setMod(16, 4);
	player.vehicle.setMod(15, 3);
	player.vehicle.setMod(13, 2);
	player.vehicle.setMod(12, 2);
	player.vehicle.setMod(11, 3);
	player.vehicle.numberPlate = "ELAB0S4K";
	player.vehicle.setColorRGB(0, 0, 0, 0, 0, 0);
});

mp.events.addCommand('tune2', (player) => {
    player.vehicle.setMod(46, 2);
	player.vehicle.setMod(62, 3);
	player.vehicle.setMod(22, 0);
	player.vehicle.setMod(16, 4);
	player.vehicle.setMod(15, 3);
	player.vehicle.setMod(13, 2);
	player.vehicle.setMod(12, 2);
	player.vehicle.setMod(11, 3);
	player.vehicle.numberPlate = "ELAB0S4K";
	player.vehicle.setColorRGB(0, 0, 0, 0, 0, 0);
});

elacars();