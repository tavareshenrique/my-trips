import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import { IMapProps } from './@interfaces'

export type MapProps = IMapProps

export default function Map({ places }: IMapProps) {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map((place) => {
        const { latitude, longitude } = place.location

        return (
          <Marker
            key={`place-${place.id}`}
            position={[latitude, longitude]}
            title={place.name}
          />
        )
      })}
    </MapContainer>
  )
}
