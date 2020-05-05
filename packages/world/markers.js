//Gang (Ballas)
mp.markers.new(1, new mp.Vector3(107.43, -1975.22, 19.96), 1,
{
    direction: 0,
    color: [0, 255, 255, 200],
    visible: true,
    dimension: 0
});

mp.markers.new(2, new mp.Vector3(449.89, -993.05, 30.69), 0.5,
{
    direction: 0,
    color: [255, 211, 0, 255],
    visible: true,
    dimension: 0
});

//Label

mp.labels.new(`Storage`,new mp.Vector3(107.43, -1975.22, 19.96+1),{
    "color": [0, 206, 209],
    "dimension": 0,
    "drawDistance": 100.0,
	"font": 10
});	
    
mp.markers.new(1, new mp.Vector3(-36.00, -1102.14, 26.42),1.0,{
    "color": [0, 255, 0, 0],
    "direction": 0,
    "dimension": 0,
    "visible": true
    });
// Government
mp.markers.new(1, new mp.Vector3(238.25, -413.24, 48.11), 1,
{
    direction: 0,
    color: [0, 255, 255, 200],
    visible: true,
    dimension: 0
});

mp.labels.new(`Мэрия`,new mp.Vector3(238.25, -413.24, 48.11),{
    "color": [255,255,0,255],
    "dimension": 0,
    "drawDistance": 100.0,
	"font": 4
});