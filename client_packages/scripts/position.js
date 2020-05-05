mp.events.add('render', (nametags) => {
	var player = mp.players.local;
	
	let pos = player.position;
	mp.game.graphics.drawText(` ${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}, R: ${player.getHeading().toFixed(2)}`, [0.50, 0.955], {
		font: 4,
		color: [255, 255, 255, 255],
		scale: [1,0.5],
		outline: true
	});
});

mp.events.add('render', (nametags) => {
	var player = mp.players.local;
	if (player.vehicle) {
	let pos = player.vehicle.position;
	mp.game.graphics.drawText(` ${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}`, [0.50, 0.925], {
		font: 4,
		color: [30, 144, 255, 255],
		scale: [1,0.5],
		outline: true
	});
	}
});

mp.events.add('render', (nametags) => {
	mp.game.graphics.drawText(`Array RolePlay`, [0.5, 0.005], {
		font: 4,
		color: [255, 255, 255, 255],
		scale: [1,0.5],
		outline: true
	});
});

mp.events.add('render', () => {
	const player = mp.players.local;
	if (mp.game.controls.isControlJustPressed(2, 51)) {
		if (player.vehicle)
		player.vehicle.setMaxSpeed(22.3);
	}
});

mp.events.add('render', () => {
	const player = mp.players.local;
	if (mp.game.controls.isControlJustPressed(0, 326)) {
		if (player.vehicle)
		player.vehicle.setMaxSpeed(70);
	}
});