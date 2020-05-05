require('./admins.js');
require('./commands.js');
require('../events/index.js');
require('./tp.js');

global.gm = {};

gm.mysql = require('./mysql.js');
gm.auth = require('./auth.js');

gm.mysql.connect(function() { });

module.exports = {
   
    // settings
    startingMoney: 10000, // how much money players start with
    autoSaveInterval: 5, // minutes, 0 to disable
    
    // messages
    infoPre: "\x1b[92m[MoneyAPI]\x1b[0m",
    initErrorPre: "\x1b[91m[MoneyAPI Init Error] \x1b[0m",
    eventErrorPre: "\x1b[91m[MoneyAPI Event Error] \x1b[0m",
    autoSaveErrorPre: "\x1b[91m[MoneyAPI Autosave Error] \x1b[0m",
    
    }