import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import LocationPin from './LocationPin'

const Map = () => {
    const location = {
        address: 'Bosanska 2, Fojnica 71270',
        lat: 43.9647145,
        lng: 17.8918606,
    }


    return (
        <div className="map">
            <h2 className="map-h2">Pronađite nas na mapi!</h2>

            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{key: ''}}
                    defaultCenter={location}
                    defaultZoom={17}
                >
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default Map;