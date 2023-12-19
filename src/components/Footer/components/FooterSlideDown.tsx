import { motion, useCycle } from 'framer-motion'
import SVG from 'react-inlinesvg'
import styles from '../footer.module.scss'
import { ContentTitle } from './FooterContentBlock'

interface Props {
	title: string
	children: React.ReactNode
}

export const FooterSlideDown: React.FC<Props> = ({ title, children }) => {
	const [cycle, cycleHeight] = useCycle(
		{ height: 0, rotation: '0deg' },
		{ height: 'auto', rotation: '-180deg' },
	)

	return (
		<motion.div className={styles['slide-down']} onTap={() => cycleHeight()}>
			<header className={styles['slide-down_header']}>
				{/* @ts-ignore */}
				<ContentTitle>{title}</ContentTitle>

				<motion.div
					className={styles.arrow}
					initial={false}
					transition={{ type: 'spring', bounce: 0.4 }}
					animate={{
						transform: `rotate(${cycle.rotation})`,
					}}
				>
					<SVG src="/icons/white-arrow.svg" />
				</motion.div>
			</header>

			<motion.div
				className={styles['slide-down_content']}
				animate={{ height: cycle.height }}
			>
				{children}
			</motion.div>
		</motion.div>
	)
}
