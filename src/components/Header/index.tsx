import SVG from 'react-inlinesvg'

import Link from 'next/link'
import { useTranslation } from 'src/hooks/useTranslation'
import { useResponsivity } from 'src/hooks/useResponsivity'

import styles from './header.module.scss'
import Menu from './components/Menu'

function Header() {
	const { isMobile } = useResponsivity()
	const { t } = useTranslation()

	return (
		<header className={styles.container}>
			<Link href="/">
				<SVG src="/img/econverse-logo.svg" />
			</Link>

			<nav className={styles.nav}>
				{!isMobile && (
					<>
						<Link href="/#" className={styles['nav-link']}>
							{t['header.agency']}
						</Link>

						<Link href="/#customers" className={styles['nav-link']}>
							{t['header.client']}
						</Link>

						<Link
							href="/#contact"
							className={`${styles['nav-link']} ${styles.highlight}`}
						>
							{t['header.contact']}
						</Link>
					</>
				)}

				<Menu />
			</nav>
		</header>
	)
}

export default Header
