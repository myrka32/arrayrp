var loginBrowser = mp.browsers.new("package://login/index.html");
mp.gui.cursor.show(true, true);
mp.game.ui.displayRadar(false);
mp.gui.chat.show(false);
mp.players.local.freezePosition(true);
mp.events.add("loginDataToServer", (user, pass, state) => {
    mp.events.callRemote("sendDataToServer", user, pass, state);
});

mp.events.add("loginHandler", (handle) => {
    switch(handle){
        case "success":
        {
			loginBrowser.destroy();
            mp.gui.chat.push("Вы !{dodgerblue}присоединились.");
            mp.gui.chat.activate(true);
            mp.gui.cursor.show(false, false);
			mp.game.cam.renderScriptCams(false, false, 0, true, false);
            mp.players.local.freezePosition(false);
            mp.game.ui.displayRadar(true);
            break;
        }
        case "registered":
        {
            loginBrowser.destroy();
            mp.gui.chat.push("Регистрация !{dodgerblue}завершена.");
            mp.gui.chat.activate(true);
            mp.gui.cursor.show(false, false);
			mp.game.cam.renderScriptCams(false, false, 0, true, false);
            mp.players.local.freezePosition(false);
            mp.game.ui.displayRadar(true);
            break;
        }
        case "incorrectinfo":
        {
            loginBrowser.execute(`$(".incorrect-info").show(); $("#loginBtn").show();`);
            break;
        }
        case "takeninfo":
        {
            loginBrowser.execute(`$(".taken-info").show(); $("#registerBtn").show();`);
            break;
        }
        case "tooshort":
        {
            loginBrowser.execute(`$(".short-info").show(); $("#registerBtn").show();`);
            break;
        }
        case "logged":
        {
            loginBrowser.execute(`$(".logged").show(); $("#loginBtn").show();`);
            break;
        }
        default:
        {
            break;
        }
    }
});