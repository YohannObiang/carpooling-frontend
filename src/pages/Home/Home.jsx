import * as React from 'react';
import "../../App.css";
import Mestrajets from '../../compmonents/Mestrajets';
import Newdemand from '../../compmonents/Newdemand';
import Map from '../../compmonents/Map';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet';




export default function Home() {

   
      return (
        <>
        <div className='Home'>
            <Mestrajets/>
            <Newdemand/>
            
        </div>
        <div>
        <MapContainer center={[40.505, -100.09]} zoom={13} >
  
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
   />
 <Marker position={[40.505, -100.09]}>
      <Popup>
        I am a pop-up!
      </Popup>
  </Marker>
</MapContainer>
        </div>
        </>
      )
};