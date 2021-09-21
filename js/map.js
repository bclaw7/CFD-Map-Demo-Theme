// var map = new L.map('map').setView([0, 0], 1);

// L.tileLayer('CFD-tiles/{z}/{x}/{y}.png', {
//     center: [0, 0],
//     minZoom: 2,
//     maxZoom: 3,
//     noWrap: true,
//     cursor: true,
// }).addTo(map);

var imageUrl = 'http://cfdmapdemo.local/wp-content/uploads/2021/09/2021-CFD-MAP.jpeg',
    imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

var marker = L.marker([0, 0], {
    draggable: true,
}).addTo(map);
marker.on('click', function (ev) {
    alert(ev.latlng); // ev is an event object (MouseEvent in this case)
});

var marker1 = L.marker([1, 100]).addTo(map);
marker1.bindPopup('<h2 class="text-info">Play Area</h2>').openPopup();

var marker2 = L.marker([-50, -40]).addTo(map);
marker2.bindPopup('<h2 class="text-info">Horses & Shit</h2>').openPopup();