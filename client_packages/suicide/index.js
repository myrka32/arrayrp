const localPlayer = mp.players.local;
const animDict = "MP_SUICIDE";
const fireActionHash = mp.game.joaat("Fire");

let animCheckerHandle = undefined;
let shotFired = false;

function destroyAnimChecker() {
    animCheckerHandle.destroy();
    animCheckerHandle = undefined;
}

mp.events.add("Suicide_ApplyAnimation", (player, animName, animTime) => {
    if (player.handle) {
        mp.game.streaming.requestAnimDict(animDict);
        while (!mp.game.streaming.hasAnimDictLoaded(animDict)) mp.game.wait(0);
        player.taskPlayAnim(animDict, animName, 8.0, 0.0, -1, 0, 0.0, false, false, false);

        if (player.remoteId === localPlayer.remoteId) {
            shotFired = false;
            if (animCheckerHandle) destroyAnimChecker();

            animCheckerHandle = new mp.Event("render", () => {
                if (localPlayer.isPlayingAnim(animDict, animName, 3)) {
                    if (animName === "PISTOL" && !shotFired && localPlayer.hasAnimEventFired(fireActionHash)) {
                        shotFired = true;
                        mp.events.callRemote("Suicide_Shoot");
                    }

                    if (localPlayer.getAnimCurrentTime(animDict, animName) >= animTime) {
                        destroyAnimChecker();
                        mp.events.callRemote("Suicide_Kill");
                    }
                } else {
                    destroyAnimChecker();
                }
            });
        }
    }
});