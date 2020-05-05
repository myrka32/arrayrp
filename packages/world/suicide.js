const pistolHashes = [
    mp.joaat("WEAPON_PISTOL"), mp.joaat("WEAPON_COMBATPISTOL"), mp.joaat("WEAPON_APPISTOL"), mp.joaat("WEAPON_PISTOL50"), mp.joaat("WEAPON_REVOLVER"),
    mp.joaat("WEAPON_SNSPISTOL"), mp.joaat("WEAPON_HEAVYPISTOL"), mp.joaat("WEAPON_DOUBLEACTION"), mp.joaat("WEAPON_REVOLVER_MK2"), mp.joaat("WEAPON_SNSPISTOL_MK2"),
    mp.joaat("WEAPON_PISTOL_MK2"), mp.joaat("WEAPON_VINTAGEPISTOL"), mp.joaat("WEAPON_MARKSMANPISTOL")
];

mp.events.add({
    "Suicide_Shoot": (shooter) => {
        mp.players.forEachInRange(shooter.position, mp.config["stream-distance"], (player) => {
            player.invoke("0x96A05E4FB321B1BA", shooter, 0.0, 0.0, 0.0, false); // SET_PED_SHOOTS_AT_COORD
        });
    },

    "Suicide_Kill": (player) => {
        player.health = 0;
    }
});

mp.events.addCommand("suicide", (player) => {
	if(player.admin < 1) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
    let usePistol = pistolHashes.includes(player.weapon); // "&& player.weaponAmmo > 0" once existed here but didn't work...
    let animName = usePistol ? "PISTOL" : "PILL";
    let animTime = usePistol ? 0.365 : 0.536;
    mp.players.callInRange(player.position, mp.config["stream-distance"], "Suicide_ApplyAnimation", [player, animName, animTime]);
});