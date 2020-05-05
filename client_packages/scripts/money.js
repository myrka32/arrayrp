/*
    MoneyAPI Game HUD Version

    Replace the contents of client_packages/moneyapi/index.js with this file.
 */

const HUD_CASH = 3;

mp.events.addDataHandler("customMoney", (entity, value) => {
    if (entity.handle === mp.players.local.handle) mp.game.stats.statSetInt(mp.game.joaat("SP0_TOTAL_CASH"), value, false);
});

mp.events.add("render", () => {
    // always display the money hud, if you comment this out it will only be displayed for a certain time when the players money changes
    mp.game.ui.showHudComponentThisFrame(HUD_CASH);
});