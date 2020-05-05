var siren_start = document.getElementById("siren_start"); 
var siren_active = document.getElementById("siren_active"); 
var siren_stop = document.getElementById("siren_stop"); 

var alertTime = 0;
function siren_on(duration) {
	siren_start.play();
	for(var nb = 0; nb < duration; nb++)
	{
		setTimeout(function () { siren_active.pause(); siren_active.currentTime = 0; siren_active.play(); }, ((nb*12000)+4850));
		if(nb == (duration-1)) setTimeout(function () { siren_active.pause(); }, (((nb+1)*12000)+4850));
	}
}