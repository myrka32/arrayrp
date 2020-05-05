mp.events.add("playerDeath", (player) => {
	const hospitalCoords = [
    new mp.Vector3(340.64, -1396.09, 32.50),
    new mp.Vector3(-450.00, -340.59, 32.51),
	new mp.Vector3(1839.69, 3672.30, 34.28)
];

const respawnTime = 8888; // milliseconds

function respawnAtHospital(player) {
    let closestHospital = 0;
    let minDist = 9999.0;

    for (let i = 0, max = hospitalCoords.length; i < max; i++) {
        let dist = player.dist(hospitalCoords[i]);
        if (dist < minDist) {
            minDist = dist;
            closestHospital = i;
        }
    }

    player.spawn(hospitalCoords[closestHospital]);
    player.health = 100;

    clearTimeout(player.respawnTimer);
    player.respawnTimer = null;
}
    if (player.respawnTimer) clearTimeout(player.respawnTimer);
    player.respawnTimer = setTimeout(respawnAtHospital, respawnTime, player);
    player.outputChatBox(`!{dodgerblue} Вы в агонии, в скором времени вас доставят в ближайший госпиталь.`);
});