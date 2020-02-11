import React, { useState, useRef } from 'react'
import useSwr from 'swr'
import GoogleMapReact from 'google-map-react'
import useSuperCluster from 'use-supercluster'
import Axios from 'axios'
import Navigation from './Navigation'

const fetcher = url => Axios.get(url).then(response => response.data)

const Marker = ({ children }) => children

export default function Map() {
  //   map setup
  const mapRef = useRef()
  const [zoom, setZoom] = useState(10)
  const [bounds, setBounds] = useState(null)
  //load and format data
  const url = 'http://localhost:3001/reports'
  // const url =
  //   'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10'
  const { data } = useSwr(url, fetcher)

  const reports = data ? data : []
  const points = reports.map(report => ({
    type: 'Feature',
    properties: {
      cluster: false,
      reportId: report['#'],
      category: report.CATEGORY
    },
    geometry: {
      type: 'Point',
      coordinates: [parseFloat(report.LONGITUDE), parseFloat(report.LATITUDE)]
    }
  }))

  //get clusters
  const { clusters, supercluster } = useSuperCluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  })

  //render map
  return (
    <div className="columns">
      <Navigation className="column is-1" />
      <div className="column">
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_LERN_MAP_API_KEY }}
            defaultCenter={{ lat: 6.4802, lng: -9.6728 }}
            // defaultCenter={{ lat: 52.6376, lng: -1.135171 }}
            defaultZoom={8.2}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map }) => {
              mapRef.current = map
            }}
            onChange={({ zoom, bounds }) => {
              setZoom(zoom)
              setBounds([
                bounds.nw.lng,
                bounds.se.lat,
                bounds.se.lng,
                bounds.nw.lat
              ])
            }}
          >
            {/* Markers */}
            {clusters.map(cluster => {
              const [LONGITUDE, LATITUDE] = cluster.geometry.coordinates
              const {
                cluster: isCluster,
                point_count: pointCount
              } = cluster.properties

              if (isCluster) {
                return (
                  <Marker key={cluster.id} lat={LATITUDE} lng={LONGITUDE}>
                    <div
                      className="clusterMarker"
                      style={{
                        width: `${10 + (pointCount / points.length) * 20}px`,
                        height: `${10 + (pointCount / points.length) * 20}px`,
                        borderWidth: `${(pointCount / points.length) * 5}px`
                      }}
                      onClick={() => {
                        const expansionZoom = Math.min(
                          supercluster.getClusterExpansionZoom(cluster.id),
                          20
                        )
                        mapRef.current.setZoom(expansionZoom)
                        mapRef.current.panTo({ lat: LATITUDE, lng: LONGITUDE })
                      }}
                    >
                      {pointCount}
                    </div>
                  </Marker>
                )
              }

              return (
                <Marker
                  key={cluster.properties.reportId}
                  lat={LATITUDE}
                  lng={LONGITUDE}
                >
                  <i className="material-icons mapMarker">place</i>
                </Marker>
              )
            })}
          </GoogleMapReact>
        </div>
      </div>
    </div>
  )
}
