import React, { useState, useEffect, useRef } from 'react'
import {
  Map,
  TileLayer,
  ZoomControl,
  SVGOverlay,
  Popup,
  Marker
} from 'react-leaflet'
import L, { CRS } from 'leaflet'
import MapExtended from './MapExtended'

import 'leaflet/dist/leaflet.css'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DefaultIcon
const App = () => {
  // <Map center={[0, 0]} zoom={4} doubleClickZoom={false}>
  //   <TileLayer
  //     url="//dx3fr5lp3xon.cloudfront.net/lg/maps/{z}/{x}/{y}.png"
  //     noWrap={true}
  //   />
  // </Map>
  // const [viewport, setViewport] = useState({
  //   center: [location.lat, location.lng],
  //   zoom: location.zoom,
  // });
  // const [currentClick, setCurrentClick] = useState(null)
  // const map = useRef(null)
  // const handleClick = e => setCurrentClick(e.latlng)
  const position = [51.505, -0.09]
  const rectangle = [[51.49, -0.08], [51.5, -0.06]]

  return (
    <MapExtended
      minZoom={2}
      maxZoom={7}
      style={{ width: '100%', height: '1000px' }}>
      <TileLayer
        url="//dx3fr5lp3xon.cloudfront.net/lg/maps/{z}/{x}/{y}.png"
        noWrap={true}
      />
      <SVGOverlay bounds={rectangle} viewBox={`0 0 200 200`}>
        <foreignObject x="0" y="0" width={200} height={200}>
          <div class="z4 avatar">
            <img
              alt="Petersen Games"
              src="https://d2lkgynick4c0n.cloudfront.net/avatars/17/original.png"
            />
          </div>
        </foreignObject>
      </SVGOverlay>
      <SVGOverlay bounds={rectangle} viewBox="0 0 80 80">
        <rect x="0" y="0" width="100%" height="100%" fill="blue" />
        <circle r="5" cx="10" cy="10" fill="red" />
        <text x="50%" y="50%" fill="white">
          text
        </text>
      </SVGOverlay>
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapExtended>
  )
}

export default App
