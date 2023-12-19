import getId from 'helpers/generateUniqueID'
import { useTranslation } from 'src/hooks/useTranslation'

import SVG from 'react-inlinesvg'

import styles from '../cases.module.scss'
import { getContent } from '../Content'
import { useCycle, motion } from 'framer-motion'
import Link from 'next/link'

export const WhatWeDo = () => {
	const { cards } = getContent()
	const { t } = useTranslation()

	interface ICard {
		active?: boolean
		card: (typeof cards)[0]
	}

	const Card: React.FC<ICard> = ({ card, active }) => {
		const activeObject = [
			{ height: 'auto', rotation: '-45deg' },
			{ height: 0, rotation: '0deg' },
		]

		const [cycle, cycleHeight] = useCycle(
			...(active ? activeObject : activeObject.reverse()),
		)

		return (
			<motion.div className={styles.card}>
				<header>
					{card.logo}

					<motion.div
						className={styles.plus}
						onTap={() => cycleHeight()}
						initial={false}
						transition={{ type: 'spring', bounce: 0.4 }}
						animate={{
							transform: `rotate(${cycle.rotation})`,
						}}
					>
						<SVG src="/icons/cases-card_plus.svg" />
					</motion.div>
				</header>

				<motion.div
					className={styles['card-content']}
					animate={{ height: cycle.height }}
				>
					<p>{card.description}</p>

					<Link className="default-link" href={card.link}>
						{t['cases.cards.more']}{' '}
						<SVG src="/icons/view-arrow.svg" className={styles['cta-arrow']} />
					</Link>
				</motion.div>
			</motion.div>
		)
	}

	return (
		<div className={styles['what-we-do']}>
			<h1>{t['cases.title']}</h1>

			<div className={styles.content}>
				<div className={styles.box}>
					<SVG src="/icons/ecommerce-icon.svg" />

					<h2>{t['cases.ecommerce.title']}</h2>
					<p>{t['cases.ecommerce.description']}</p>
				</div>

				<div className={styles.box}>
					<SVG src="/icons/support-icon.svg" />

					<h2>{t['cases.support.title']}</h2>
					<p>{t['cases.support.description']}</p>
				</div>
			</div>

			<div className={styles.cards}>
				{cards.map((card, index) => (
					<Card
						key={getId()}
						card={card}
						active={index == Math.floor(cards.length / 2)}
					/>
				))}
			</div>
		</div>
	)
}
