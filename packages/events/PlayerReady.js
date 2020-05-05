mp.events.add("playerReady", (player) => {
    player.respawnTimer = null;
	player.call("crPed", [mp.joaat('s_f_y_cop_01'),440.8958435058594,-978.852294921875,30.68958854675293, 200.0]);
    player.call("crPed", [mp.joaat('csb_cop'),1831.9384765625,2602.87646484375,45.889102935791016, 200.0]);
});