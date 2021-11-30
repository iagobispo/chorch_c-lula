
import { useState, useEffect } from 'react';

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




export default function Map({props}) {
    const [coordinates, setCoordinates] = useState({
        latitude: false,
        longetude: false
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setCoordinates({
                latitude: position.coords.latitude,
                longetude: position.coords.longitude
            })
        });

    }, [coordinates])

    return (
        <div className="container-map">

            {coordinates.latitude ? <MapContainer style={{ width: '100vw', height: '100vh' }} center={[coordinates.latitude, coordinates.longetude]} zoom={15} scrollWheelZoom={false} >
                <TileLayer
                    //  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}

                />
                {
                    props.map((item, idex) => {
                        return (
                            <Marker icon={greenIcon} position={[item.position.lat, item.position.log]}>
                                <Popup>
                                    {item.position.message
                                    }
                                </Popup>
                            </Marker>
                        )
                    })
                }

            </MapContainer> : <label>Carregando...</label>}
        </div>
    )
}

