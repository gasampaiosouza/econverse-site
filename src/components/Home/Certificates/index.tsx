import Title from 'components/Title'
import { useTranslation } from 'src/hooks/useTranslation'
import styles from './certificates.module.scss'

import SVG from 'react-inlinesvg';

const Certificates: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section
			className={`${styles.certificates} section-container`}
			id="certificates"
		>
			<Title isCentered>{t['certificates.title']}</Title>

			<div className={styles.container}>
				<h2 className={styles['horizontal-title']}>
					{t['certificates.title']}
				</h2>

				<div className={`${styles.box} ${styles.vtex}`}>
					<SVG src="/img/vtex-partner.svg" />

					<h3>{t['certificates.vtex.title']}</h3>
					<p>{t['certificates.vtex.description']}</p>
				</div>

				<div className={`${styles.box} ${styles.shopify}`}>
					<img src="/img/shopify-partner.png" />

					<h3>{t['certificates.shopify.title']}</h3>
					<p>{t['certificates.shopify.description']}</p>
				</div>

				<SVG src="/img/certificates-dots.svg" className={styles.dots} />
			</div>
		</section>
	)
}

export default Certificates
