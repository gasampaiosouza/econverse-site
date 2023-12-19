import Image from 'next/image'
import Link from 'next/link'

import SVG from 'react-inlinesvg'
import { useTranslation } from 'src/hooks/useTranslation'

import styles from '../products.module.scss'

type ICard = {
	card: {
		title: string
		description: string
		href: string
		image: string
	}
}

const Card: React.FC<ICard> = ({ card }) => {
	const { t } = useTranslation()

	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Image
					src={card.image}
					alt={card.title}
					// width={285}
					fill
					quality={90}
					objectFit="contain"
				/>
			</div>

			<div className={styles.content}>
				<h2>{card.title}</h2>

				{/* allow tag insertion */}
				<p dangerouslySetInnerHTML={{ __html: card.description }} />

				<Link href={card.href} className="default-link">
					{t['products.more']}{' '}
					<SVG src="/icons/view-arrow.svg" className={styles['cta-arrow']} />
				</Link>
			</div>
		</div>
	)
}

export { Card }
