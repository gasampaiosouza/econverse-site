import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'src/hooks/useTranslation'

import styles from './hero.module.scss'

import SVG from 'react-inlinesvg'

const Hero: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section className={styles.hero} id="hero">
			<div className={styles['hero-content']}>
				<h1 dangerouslySetInnerHTML={{ __html: t['hero.title'] }} />

				<p>{t['hero.description']}</p>

				<div className={styles.buttons}>
					<Link href="/contato" className="button">
						{t['hero.contact']}
					</Link>

					<Link href="#" className={`default-link ${styles.explore}`}>
						{t['hero.explore']}
					</Link>
				</div>

				<div className={styles.customers}>
					<SVG src="/img/duratex-logo.svg" uniquifyIDs />
					<SVG src="/img/heinz-logo.svg" uniquifyIDs />
					<SVG src="/img/farmax-logo.svg" uniquifyIDs />
					<SVG src="/img/puket-logo.svg" uniquifyIDs />
				</div>
			</div>

			{/* right side */}
			<div className={styles['hero-banner']}>
				<Image
					src="/img/hero-client-banner.jpg"
					alt="Customer called 'Camu Camu' website image"
					width={734}
					height={595}
					objectFit="cover"
					quality={100}
					priority
				/>
			</div>
		</section>
	)
}

export default Hero
