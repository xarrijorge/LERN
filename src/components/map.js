import React, { useState, useRef } from 'react'
// import useSwr from 'swr'
import GoogleMapReact from 'google-map-react'
// import useSuperCluster from 'use-supercluster'

export default function Map() {
  //   map setup
  const mapRef = useRef()
  const [zoom, setZoom] = useState(10)
  const [bounds, setBounds] = useState(null)
  //load and format data
  //get clusters
  //render map
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_LERN_MAP_API_KEY }}
        defaultCenter={{ lat: 6.4802, lng: -9.6728 }}
        defaultZoom={8.2}
      >
        {/* Markers */}
      </GoogleMapReact>
    </div>
  )
}
