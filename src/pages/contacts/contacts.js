var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.880259, 74.588977],
        zoom: 18
    });
    var myIcon = DG.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
        iconSize: [40, 40,]
    });
    DG.marker([42.880259, 74.588977], {icon: myIcon}).addTo(map).bindPopup('Манаса, 91/1');
});