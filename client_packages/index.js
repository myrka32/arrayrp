require("login.js");
require('charcreator');
require('suicide');
require('interior-browser');
require('./nativeui/index.js');
require("./scripts/authcam.js");
require('./scripts/fly.js');
require('./scripts/money.js');
require('./scripts/nametag.js');
require("./scripts/playerlocation.js");
require('./scripts/position.js');
require('./noclip');
require('./phone.js');
require('VehManager/vehicleManager.js');
require('./Alert/cAlert');
require('./rStream');
require('./cDoors');
mp.game.streaming.requestIpl("ex_dt1_11_office_02b");
mp.gui.chat.show(true);
mp.gui.chat.activate(false);

mp.events.add('crPed', function (model, x, y, z, rotation) {
    let Ped = mp.peds.new(model, new mp.Vector3(x, y, z), rotation, (streamPed) => {
        streamPed.taskGoToCoordAnyMeans(x + 40.0, y, z, 5.0, 0, 0, 786603, 0xbf800000);
    }, 0);
});

/*mp.game.ped.removeScenarioBlockingArea();
mp.game.streaming.setPedPopulationBudget(3);
mp.game.ped.setCreateRandomCops(false);
mp.game.vehicle.setRandomBoats(true);
mp.game.vehicle.setRandomTrains(true);
mp.game.vehicle.setGarbageTrucks(true);
mp.game.streaming.setVehiclePopulationBudget(3);
mp.game.invoke('0x34AD89078831A4BC'); // SET_ALL_VEHICLE_GENERATORS_ACTIVE
mp.game.vehicle.setAllLowPriorityVehicleGeneratorsActive(true);
mp.game.vehicle.setNumberOfParkedVehicles(-1);
mp.game.vehicle.displayDistantVehicles(true);
mp.game.graphics.disableVehicleDistantlights(false); */ // до лучших времен