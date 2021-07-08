
import {useState, useEffect} from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

import logo from '../../assets/svg/icon.svg';

import './styles.css';

var greenIcon = L.icon({
    iconUrl: logo,
    shadowUrl: null,

    iconSize: [64, 64], // size of the icon
    shadowSize: null, // size of the shadow
    iconAnchor: [0, 64], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [30, -64] // point from which the popup should open relative to the iconAnchor
});



export default function Map({latitude, longetude}) {

    return (
        <div className="container-map">
          
            <MapContainer style={{ width: '100vw', height:'100vh'}}  center={ [-23.5292585,-46.3336866] } zoom={15} scrollWheelZoom={false} >
                <TileLayer
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    
                />
                {
                    posi.map((item, idex) => {
                        return (
                            <Marker icon={greenIcon} position={[item.lat, item.log]}>
                                <Popup>
                                    {item.message
                                    }
                                </Popup>
                            </Marker>
                        )
                    })
                }

            </MapContainer>
        </div>
    )
}

const posi = [
    {
        message: 'Célula do Iago',
        lat: -23.536557,
        log: -46.330408
    },
    {
        message: 'Célula da Monique',
        lat: -23.537049,
        log: -46.329313
    },
    {
        message: 'Célula do Pedro',
        lat: -23.5362744,
        log: -46.330162
    },
    {
        message: 'Célula do Pedro',
        lat: -23.5446041,
        log: -46.3339377
    },
    {
        message: 'Célula do Pedro',
        lat: -23.5365959,
        log: -46.3305548
    },
    {
        message: 'Célula Nagumo',
        lat: -23.5344998,
        log: -46.3396922
    },
    
];