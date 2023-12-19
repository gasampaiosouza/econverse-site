import { memo } from 'react'
import styles from '../contact.module.scss'

import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const AgencyLocation = () => {
	const Map = () => {
		const { isLoaded, loadError } = useLoadScript({
			googleMapsApiKey: process.env.GOOGLE_MAPS_KEY as string,
		})

		const ErrorMessage = () => (
			<div className={styles['map-error']}>
				<p className={styles.info}>
					Não conseguimos carregar o mapa com a localização da Econverse :(
				</p>

				<p className={styles.cta}>
					Mas você pode visualizar ele{' '}
					<a
						target="_blank"
						href="https://www.google.com/maps/place/Av.+Copacabana,+325+-+Empresarial+18+do+Forte,+Barueri+-+SP,+13104-082/@-23.4850044,-46.8567709,17z/data=!3m1!4b1!4m5!3m4!1s0x94cf024f59c02013:0xcd820d117f7f7c13!8m2!3d-23.4850093!4d-46.8545822"
					>
						clicando aqui!
					</a>
				</p>
			</div>
		)

		const mapContainerStyle = {
			width: '100%',
			height: '100%',
			borderRadius: '8px 8px 0 0',
		}
		const initialCenter = { lat: -23.48497485866931, lng: -46.8545929289945 }
		const markerCenter = { lat: -23.48497485866931, lng: -46.8545929289945 }

		if (loadError) {
			console.error('error when loading google maps')

			return <ErrorMessage />
		}

		if (!isLoaded) return <p>Carregando...</p>

		return (
			<GoogleMap
				zoom={18}
				mapContainerStyle={mapContainerStyle}
				center={initialCenter}
			>
				<Marker position={markerCenter} />
			</GoogleMap>
		)
	}

	return (
		<div className={styles.location}>
			<div className={styles['location-map']}>
				<Map />
			</div>

			<div className={styles['location-info']}>
				<h2>Alphaville</h2>

				<p className={styles.address}>Avenida Copacabana, 325 - Empresarial</p>
				<p className={styles.town}>18 do Forte - Barueri - SP</p>
			</div>
		</div>
	)
}

export default memo(AgencyLocation)
