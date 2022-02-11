import L from 'leaflet';

const icon = new L.Icon({
    iconUrl: require('../imgs/red_dot.png'),
    iconRetinaUrl: require('../imgs/red_dot.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: 'leaflet-div-icon'
});

export { icon };