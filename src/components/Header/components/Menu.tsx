import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'src/hooks/useTranslation'
import { links } from '../Content'
import SVG from 'react-inlinesvg'
import styles from '../header.module.scss'
import { useResponsivity } from 'src/hooks/useResponsivity'
import Image from 'next/image'

const Menu: React.FC = () => {
	const { isMobile } = useResponsivity()
	const { t } = useTranslation()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const getPathname = () => {
		if (typeof window !== 'undefined') {
			// FIXME: can broken if any other language is added
			const parsedPathnameLocale = window.location.pathname.replace(
				/\/(pt|en)/,
				'',
			)

			return parsedPathnameLocale
		}

		return useRouter().pathname
	}

	const pathname = getPathname()
	const hasPathname = pathname != '/'
	const URL = hasPathname ? pathname : '/'

	const toggleMenuState = () => setIsMenuOpen(!isMenuOpen)

	const BurgerMenu = () => (
		<SVG
			src="/icons/burger-menu.svg"
			className={styles['burger-menu']}
			onClick={toggleMenuState}
		/>
	)

	return (
		<div className={styles.menu}>
			{isMobile ? (
				<BurgerMenu />
			) : (
				<button className={styles.link} onClick={toggleMenuState}>
					Menu
				</button>
			)}

			<div className={`${styles.content} ${isMenuOpen ? styles.active : ''}`}>
				<button className={styles.close} onClick={toggleMenuState}>
					X
				</button>

				<Link href={URL} locale="pt">
					<Image
						width={32}
						height={20}
						priority={false}
						alt="Bandeira do Brasil"
						src="/img/brazilian-flag.png"
						className={`${styles.flag} ${styles.brazilian}`}
					/>
				</Link>

				<Link href={URL} locale="en">
					<Image
						width={32}
						height={20}
						priority={false}
						alt="Bandeira Americana"
						src="/img/american-flag.png"
						className={`${styles.flag} ${styles.american}`}
					/>
				</Link>

				{/* LINKS - map */}
				<div className={styles.links}>
					{links.map((link, index) => (
						<Link
							className={styles['content-link']}
							href={link.href}
							key={`link-${index}`}
						>
							{link.label || t[link.labelKey]}
						</Link>
					))}

					<Link className={`${styles.contact} button`} href="/contato">
						{t['header.contact']}
					</Link>

					<div className={styles.social}>
						<span>{t['header.social']}</span>

						<div>
							<Link
								target="_blank"
								href="https://www.linkedin.com/company/econverse/"
							>
								<SVG
									src="/icons/linkedin-gray.svg"
									className={styles.linkedin}
								/>
							</Link>

							<Link
								target="_blank"
								href="https://www.facebook.com/agenciaeconverse/"
							>
								<SVG
									src="/icons/facebook-gray.svg"
									className={styles.facebook}
								/>
							</Link>

							<Link
								target="_blank"
								href="https://www.instagram.com/econverse.ag/"
							>
								<SVG
									src="/icons/instagram-gray.svg"
									className={styles.instagram}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Menu
