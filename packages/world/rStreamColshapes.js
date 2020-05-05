  let x = 0;
  let y = 0;
  let z = 0;
  let range = 0;
let rStreamColshape = mp.colshapes.newSphere(109.45, -1288.69, 28.86, 50, 0);

function playerEnterColshapeHandler(player, shape) {
	if(shape == rStreamColshape) {
		player.notify(`Radio stream started`);
	}
}
mp.events.add("playerEnterColshape", playerEnterColshapeHandler);

function playerExitColshapeHandler(player, shape) {
	if(shape == rStreamColshape) {
		player.notify(`Radio stream stoped`);
	}
}
mp.events.add("playerExitColshape", playerExitColshapeHandler);


//optional
mp.markers.new(0, new mp.Vector3(109.45, -1288.69, 28.86), 2.0,{
	"color": [255, 255, 0, 150],
	"direction": 0,
	"dimension": 0,
	"visible": true
});