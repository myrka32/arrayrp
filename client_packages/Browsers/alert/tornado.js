var tornado = document.getElementById("tornado"); 

function tornado_on(times) {
	for(var nb = 0; nb < times; nb++)
	{
		setTimeout(function () { tornado.currentTime=0; tornado.play(); }, nb*8700);
	}
}