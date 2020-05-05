ballasCars = function() {
	{
	let veh = mp.vehicles.new(mp.joaat("speedo"), new mp.Vector3(85.96, -1971.15, 20.75), );
	veh.ballas = true
	veh.setColorRGB(255, 0, 0, 255, 0, 0);
	veh.rotation = new mp.Vector3(0, 0, 311); }
	{
	let veh = mp.vehicles.new(mp.joaat("primo"), new mp.Vector3(104.54, -1957.47, 20.30), );
	veh.ballas = true
	veh.setColorRGB(255, 0, 0, 255, 0, 0);
	veh.rotation = new mp.Vector3(0, 0, 356.12); }
	{
	let veh = mp.vehicles.new(mp.joaat("primo"), new mp.Vector3(101.47, -1957.12, 20.30), );
	veh.ballas = true
	veh.setColorRGB(255, 0, 0, 255, 0, 0);
	veh.rotation = new mp.Vector3(0, 0, 352); }
	{
	let veh = mp.vehicles.new(mp.joaat("buccaneer"), new mp.Vector3(95.04, -1960.02, 20.10), );
	veh.ballas = true
	veh.setColorRGB(255, 0, 0, 255, 0, 0);
	veh.rotation = new mp.Vector3(0, 0, 315); }
}

mp.events.addCommand('bc', (model) => {
	ballasCars();
});

ballasCars();
//Vagos
VagosCars = function() {
	{
	let veh = mp.vehicles.new(mp.joaat("speedo"), new mp.Vector3(985.47, -1809.73, 30.70), );
	veh.vagos = true;
	veh.setColorRGB(255, 255, 0, 255, 255, 0);
	veh.rotation = new mp.Vector3(0, 0, 173); }
	{
	let veh = mp.vehicles.new(mp.joaat("primo"), new mp.Vector3(969.44, -1823.22, 30.63), );
	veh.vagos = true;
	veh.setColorRGB(255, 255, 0, 255, 255, 0);
	veh.rotation = new mp.Vector3(0, 0, 354.71); }
	{
	let veh = mp.vehicles.new(mp.joaat("primo"), new mp.Vector3(964.91, -1822.49, 30.60), );
	veh.vagos = true;
	veh.setColorRGB(255, 255, 0, 255, 255, 0);
	veh.rotation = new mp.Vector3(0, 0, 354); }
	{
	let veh = mp.vehicles.new(mp.joaat("buccaneer"), new mp.Vector3(976.26, -1815.58, 30.50), );
	veh.vagos = true;
	veh.setColorRGB(255, 255, 0, 255, 255, 0);
	veh.rotation = new mp.Vector3(0, 0, 87.10); }
}

mp.events.addCommand('vc', (model) => {
	VagosCars();
});

VagosCars();

GrandeCars = function() {
	{
	let veh = mp.vehicles.new(mp.joaat("speedo"), new mp.Vector3(1456.87, -1692.97, 66.52), );
	veh.actec = true;
	veh.setColorRGB(0, 128, 128, 0, 128, 128);
	veh.rotation = new mp.Vector3(0, 0, 348.60); }
	{
	let veh = mp.vehicles.new(mp.joaat("primo"), new mp.Vector3(1457.70, -1684.80, 65.73), );
	veh.actec = true;
	veh.setColorRGB(0, 128, 128, 0, 128, 128);
	veh.rotation = new mp.Vector3(0, 0, 170.54); }
	{
	let veh = mp.vehicles.new(mp.joaat("primo"), new mp.Vector3(1449.92, -1693.36, 66.03), );
	veh.actec = true;
	veh.setColorRGB(0, 128, 128, 0, 128, 128);
	veh.rotation = new mp.Vector3(0, 0, 300.69); }
	{
	let veh = mp.vehicles.new(mp.joaat("buccaneer"), new mp.Vector3(1444.78, -1684.16, 65.10), );
	veh.numberPlate = "AU954FH";
	veh.setColorRGB(0, 128, 128, 0, 128, 128);
	veh.rotation = new mp.Vector3(0, 0, 66.38); }
}

mp.events.addCommand('gc', (model) => {
	GrandeCars();
});

GrandeCars();

//emergyncu
PoliceCars = function() {
	{
	let veh = mp.vehicles.new(mp.joaat("polmav"), new mp.Vector3(449.83, -980.62, 44.08), );
	veh.police = true;
	veh.setColorRGB(0, 0, 0, 0, 0, 0);
	veh.rotation = new mp.Vector3(0, 0, 348.60); }
	{
	let veh = mp.vehicles.new(mp.joaat("police"), new mp.Vector3(445.14, -1024.91, 28.25), );
	veh.police = true;
	veh.setColorRGB(0, 0, 0, 1, 1, 1);
	veh.rotation = new mp.Vector3(0, 0, 170.54); }
	{
	let veh = mp.vehicles.new(mp.joaat("police2"), new mp.Vector3(440.95, -1026.36, 28.36), );
	veh.police = true;
	veh.setColorRGB(0, 0, 0, 1, 1, 1);
	veh.rotation = new mp.Vector3(0, 0, 47.72); }
	{
	let veh = mp.vehicles.new(mp.joaat("police2"), new mp.Vector3(437.10, -1026.94, 28.43), );
	veh.police = true;
	veh.setColorRGB(0, 0, 0, 1, 1, 1);
	veh.rotation = new mp.Vector3(0, 0, 47.72); }
}

mp.events.addCommand('pc', (model) => {
	PoliceCars();
});

// Чтобы не могли другие сесть.

mp.events.add("playerStartEnterVehicle", (player, vehicle, seat)=>{
	if(vehicle.vagos){
		if(player.fraction !== 19){
			player.notify('Вы не можете сесть в данный автомобиль!')
			player.stopAnimation();
		}
	}
 });

 mp.events.add("playerStartEnterVehicle", (player, vehicle, seat)=>{
	if(vehicle.police){
		if(player.fraction !== 1){
			player.notify('Вы не можете сесть в данный автомобиль!')
			player.stopAnimation();
		}
	}
 });

