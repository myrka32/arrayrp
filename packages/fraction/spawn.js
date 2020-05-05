const civil = new mp.Vector3(217.86, -334.77, 45.68); 
const lspdSpawn = new mp.Vector3(459.25, -990.76, 30.69);
const shpdSpawn = new mp.Vector3(1849.04, 3689.97, 34.27);
const fibSpawn = new mp.Vector3(117.64, -627.82, 206.05);
const chSpawn = new mp.Vector3(-537.01, -218.18, 37.65);
const emsSpawn = new mp.Vector3(-537.01, -218.18, 37.65);
const dmvSpawn = new mp.Vector3(-537.01, -218.18, 37.65);
const newsSpawn = new mp.Vector3(-1051.72, -232.18, 44.02);
const armySpawn = new mp.Vector3(-537.01, -218.18, 37.65);
const ballasSpawn = new mp.Vector3(100.07, -1980.50, 20.68);
const elaSpawn = new mp.Vector3(-864.41, -32.28, 40.56);
const vagosSpawn = new mp.Vector3(977.6222534179688, -1822.917724609375, 30.161462783813477);
const grandeSpawn = new mp.Vector3(1450.15, -1673.25, 66.13);



mp.events.add("playerJoin", (player) => {
    spawnAtFrac = function() {
		if(player.fraction === 0) player.position = civil;
        if(player.fraction === 1) player.position = lspdSpawn;
        if(player.fraction === 2) player.position = shpdSpawn;
        if(player.fraction === 3) player.position = fibSpawn;
		if(player.fraction === 4) player.position = chSpawn;
		if(player.fraction === 5) player.position = emsSpawn;
		if(player.fraction === 6) player.position = dmvSpawn;
		if(player.fraction === 7) player.position = newsSpawn;
		if(player.fraction === 8) player.position = armySpawn;
        if(player.fraction === 9) player.position = ballasSpawn;
    if(player.fraction === 18) player.position = elaSpawn;
    if(player.fraction === 19) player.position = vagosSpawn;
    if(player.fraction === 20) player.position = grandeSpawn;
    }
});

// Makeleader
mp.events.addCommand('makecivil', (player, id) =>  {
  if(player.admin < 5) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
  let target = mp.players.at(id);
  gm.mysql.handle.query('UPDATE `accounts` SET fraction = ? WHERE username = ?', [0, target.name], function(err, res, row){
      if(err) console.log(err);
  });
  target.fraction = 0;
  target.position = civil; player.heading = 325;
});



mp.events.addCommand('makegrande', (player, id) =>  {
  if(player.admin < 5) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
  let target = mp.players.at(id);
  gm.mysql.handle.query('UPDATE `accounts` SET fraction = ? WHERE username = ?', [19, target.name], function(err, res, row){
      if(err) console.log(err);
  });
  target.fraction = 20;
  player.position = vagosSpawn; player.heading = 5;
  gm.mysql.handle.query('UPDATE `accounts` SET rank = ? WHERE username = ?', [10, target.name], function(err, res, row){
      if(err) console.log(err);
  });
  target.rank = 10;
  player.outputChatBox(`!{red}[A]!{white} Вы назначили!{dodgerblue} ${target.name} !{white}на пост лидера !{dodgerblue}Marabunta Grande.`);
  target.outputChatBox(`!{red}[А]!{white} ${player.name} назначил вас на пост лидера !{dodgerblue}Marabunta Grande.`);
  mp.players.broadcast(`!{red}[A] !{white}${player.name} назначил на пост лидера !{dodgerblue}Marabunta Grande!{white}игрока !{dodgerblue} ${target.name}.`);
});

mp.events.addCommand('makevagos', (player, id) =>  {
  if(player.admin < 5) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
  let target = mp.players.at(id);
  gm.mysql.handle.query('UPDATE `accounts` SET fraction = ? WHERE username = ?', [19, target.name], function(err, res, row){
      if(err) console.log(err);
  });
  target.fraction = 19;
  player.position = vagosSpawn; player.heading = 5;
  gm.mysql.handle.query('UPDATE `accounts` SET rank = ? WHERE username = ?', [10, target.name], function(err, res, row){
      if(err) console.log(err);
  });
  target.rank = 10;
  player.outputChatBox(`!{red}[A]!{white} Вы назначили!{dodgerblue} ${target.name} !{white}на пост лидера !{dodgerblue}Los Santos Vagos.`);
  target.outputChatBox(`!{red}[А]!{white} ${player.name} назначил вас на пост лидера !{dodgerblue}Los Santos Vagos.`);
  mp.players.broadcast(`!{red}[A] !{white}${player.name} назначил на пост лидера !{dodgerblue}Los Santos Vagos !{white}игрока !{dodgerblue} ${target.name}.`);
});

mp.events.addCommand('makeballas', (player, id) =>  {
  if(player.admin < 5) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
  let target = mp.players.at(id);
  gm.mysql.handle.query('UPDATE `accounts` SET fraction = ? WHERE username = ?', [9, target.name], function(err, res, row){
      if(err) console.log(err);
  });
  target.fraction = 9;
  player.position = ballasSpawn; player.heading = 5;
  gm.mysql.handle.query('UPDATE `accounts` SET rank = ? WHERE username = ?', [10, target.name], function(err, res, row){
      if(err) console.log(err);
  });
  target.rank = 10;
  player.outputChatBox(`!{red}[A]!{white} Вы назначили!{dodgerblue} ${target.name} !{white}на пост лидера !{dodgerblue}The Ballas.`);
  target.outputChatBox(`!{red}[А]!{white} ${player.name} назначил вас на пост лидера !{dodgerblue}The Ballas.`);
  mp.players.broadcast(`!{red}[A] !{white}${player.name} назначил на пост лидера !{dodgerblue}The Ballas !{white}игрока !{dodgerblue} ${target.name}.`);
});

mp.events.addCommand('makelspd', (player, id) =>  {
  if(player.admin < 5) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
  let target = mp.players.at(id);
  gm.mysql.handle.query('UPDATE `accounts` SET fraction = ? WHERE username = ?', [1, target.name], function(err, res, row){
      if(err) console.log(err);
  });
  target.fraction = 1;
  target.position = lspdSpawn; player.heading = 87;
  player.outputChatBox(`!{red}[A]!{white} Вы назначили!{dodgerblue} ${target.name} !{white}на пост лидера !{dodgerblue}LSPD.`);
  target.outputChatBox(`!{red}[А]!{white} ${player.name} назначил вас на пост лидера !{dodgerblue}LSPD.`);
  mp.players.broadcast(`!{red}[A] !{white}${player.name} назначил на пост лидера !{dodgerblue}LSPD !{white}игрока !{dodgerblue} ${target.name}.`);
});

mp.events.addCommand('makeshpd', (player, id) =>  {
  if(player.admin < 5) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
  let target = mp.players.at(id);
  gm.mysql.handle.query('UPDATE `accounts` SET fraction = ? WHERE username = ?', [2, target.name], function(err, res, row){
      if(err) console.log(err);
  });
  target.fraction = 2;
  target.position = shpdSpawn; player.heading = 206.52;
  player.outputChatBox(`!{red}[A]!{white} Вы назначили!{dodgerblue} ${target.name} !{white}на пост лидера !{dodgerblue}SHPD.`);
  mp.players.broadcast(`!{red}[A] !{white}${player.name} назначил на пост лидера !{dodgerblue}SHPD !{white}игрока !{dodgerblue} ${target.name}.`);
});

mp.events.addCommand('makefib', (player, id) =>  {
  if(player.admin < 5) return player.outputChatBox("!{dodgerblue}[ОШИБКА] !{white}Вы не являетесь администратором.");
  let target = mp.players.at(id);
  gm.mysql.handle.query('UPDATE `accounts` SET fraction = ? WHERE username = ?', [3, target.name], function(err, res, row){
      if(err) console.log(err);
  });
  target.fraction = 3;
  target.position = fibSpawn; player.heading = 325;
  player.outputChatBox(`!{red}[A]!{white} Вы назначили!{dodgerblue} ${target.name} !{white}на пост лидера !{dodgerblue}FIB.`);
  target.outputChatBox(`!{red}[А]!{white} ${player.name} назначил вас на пост лидера !{dodgerblue}FIB.`);
  mp.players.broadcast(`!{red}[A] !{white}${player.name} назначил на пост лидера !{dodgerblue}FIB !{white}игрока !{dodgerblue} ${target.name}.`);
});