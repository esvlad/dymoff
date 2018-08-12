ymaps.ready(function () {
    var myMap = new ymaps.Map("myMap", {
        center: [56.263506, 54.219972],
        zoom: 14
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: '',
        balloonContent: 'ООО «Дымофф»<br/>Удмуртския, Камбарка, ул. Маяковского, 2',
    },{
        iconLayout: 'default#image',
        iconImageHref: '/sites/all/themes/dymoff/img/icons/map_pin.svg',
        iconImageSize: [22, 36],
        iconImageOffset: [-15, -35]
    });

    myMap.behaviors.disable(['scrollZoom']);
    myMap.geoObjects.add(myPlacemark);
});