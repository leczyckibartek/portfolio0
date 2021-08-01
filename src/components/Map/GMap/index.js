import React from 'react'

import GoogleMapReact from 'google-map-react'
import Marker from '../../Map/Marker'

import './style.scss'

function GMap(props) {

	const gMapKey = process.env.GATSBY_GOOGLE_API_KEY

	const defaultProps = {
		center: {
			lat: props.latitude,
			lng: props.longitude,
		},
		zoom: parseInt(props.zoom),
	}

	return (
		<GoogleMapReact
			bootstrapURLKeys={{ key: gMapKey }}
			defaultCenter={defaultProps.center}
			defaultZoom={defaultProps.zoom}
			options={
				{
					styles: [
						{
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#1d2c4d"
								}
							]
						},
						{
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#8ec3b9"
								}
							]
						},
						{
							"elementType": "labels.text.stroke",
							"stylers": [
								{
									"color": "#1a3646"
								}
							]
						},
						{
							"featureType": "administrative.country",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#4b6878"
								}
							]
						},
						{
							"featureType": "administrative.land_parcel",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#64779e"
								}
							]
						},
						{
							"featureType": "administrative.province",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#4b6878"
								}
							]
						},
						{
							"featureType": "landscape.man_made",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#334e87"
								}
							]
						},
						{
							"featureType": "landscape.natural",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#023e58"
								}
							]
						},
						{
							"featureType": "road",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#304a7d"
								}
							]
						},
						{
							"featureType": "road",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#98a5be"
								}
							]
						},
						{
							"featureType": "road",
							"elementType": "labels.text.stroke",
							"stylers": [
								{
									"color": "#1d2c4d"
								}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#2c6675"
								}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#255763"
								}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#b0d5ce"
								}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "labels.text.stroke",
							"stylers": [
								{
									"color": "#023e58"
								}
							]
						},
						{
							"featureType": "transit",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#98a5be"
								}
							]
						},
						{
							"featureType": "transit",
							"elementType": "labels.text.stroke",
							"stylers": [
								{
									"color": "#1d2c4d"
								}
							]
						},
						{
							"featureType": "transit.line",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#283d6a"
								}
							]
						},
						{
							"featureType": "transit.station",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#3a4762"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#0e1626"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"color": "#4e6d70"
								}
							]
						}
					]
				}
			}
		>
			<Marker
				lat={props.latitude}
				lng={props.longitude}
				text={'...'}
			/>
		</GoogleMapReact>
	)
}

export default GMap