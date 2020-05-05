function show(state){
    if(!state){
        $('body').hide();
    } else {
        $('body').show();
    }
}

let sirenalert = null; 
let sirenalertoff = null;

mp.events.add('amberalertp', (message) => {
	var amberalert = mp.browsers.new('package://Browsers/alert/amber.html');
	setTimeout(function () { amberalert.execute(`amberalert_message(${JSON.stringify(message)});`); }, 150);
	//mp.gui.chat.push(`Amber alert: ${message}`);
	amberalert.execute(`show(${true});`);
	amberalert.execute(`amber_on(${JSON.stringify(30)});`);
})

mp.events.add('sirenalertp', (duration) => {
	sirenalert = mp.browsers.new('package://Browsers/alert/siren.html');
	sirenalert.execute(`show(${true});`);
	sirenalert.execute(`siren_on(${JSON.stringify(duration)});`);
	sirenalertoff = setTimeout(function () {
		mp.events.call('sirenalertoff');
	}, ((duration * 12000)+4900));
})

mp.events.add('sirenalertoff', () => {
	if(sirenalert != null) 
	{
		clearTimeout(sirenalertoff);
		sirenalertoff = mp.browsers.new('package://Browsers/alert/siren_off.html');
		setTimeout(function () { sirenalertoff.destroy(); }, 15000);
		//setTimeout(function () { sirenalert.destroy() }, 200);
	}
})

mp.events.add('tornadoalert', (duration) => {
	var tornadoalert = mp.browsers.new('package://Browsers/alert/tornado.html');
	tornadoalert.execute(`show(${true});`);
	tornadoalert.execute(`tornado_on(${JSON.stringify(duration)});`);
})