function playerEnteredVehicleHandler(player, vehicle) {
   const playerName = player.name
   const vehicleID = vehicle.id
   const srt = playerName + "  ID: " + vehicleID
   mp.players.broadcast(str)
}

mp.events.add("playerEnteredVehicle", playerEnteredVehicleHandler);