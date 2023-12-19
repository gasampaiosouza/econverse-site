import Contact from './components/Contact'
import styles from './footer.module.scss'

import Link from 'next/link'

import SVG from 'react-inlinesvg'

import { useTranslation } from '~/src/hooks/useTranslation'
import FooterContentBlock from './components/FooterContentBlock'

type IFooter = { includeContact?: boolean }

const Footer: React.FC<IFooter> = ({ includeContact = true }) => {
	const { t } = useTranslation()

	return (
		<>
			{includeContact && <Contact />}

			<footer className={styles.footer}>
				<div className={styles['footer-content']}>
					<div className={styles.left}>
						<SVG src="/img/logo-white.svg" />

						<div className={styles.social}>
							<h3>{t['footer.social']}</h3>

							<div className={styles['social-icons']}>
								<Link
									className={styles.icon}
									target="_blank"
									href="https://www.linkedin.com/company/econverse/"
								>
									<SVG src="/icons/linkedin-white.svg" />
								</Link>

								<Link
									href="https://www.facebook.com/agenciaeconverse/"
									target="_blank"
									className={styles.icon}
								>
									<SVG src="/icons/facebook-white.svg" />
								</Link>

								<Link
									target="_blank"
									className={styles.icon}
									href="https://www.instagram.com/econverse.ag/"
								>
									<SVG src="/icons/instagram-white.svg" />
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.middle}>
						<div className={styles.institutional}>
							<FooterContentBlock
								contentKey={'institutional'}
								title={t['footer.institutional.title']}
							/>
						</div>

						<div className={styles.institutional}>
							<FooterContentBlock
								contentKey={'platforms'}
								title={t['footer.platforms.title']}
							/>
						</div>
					</div>

					<div className={styles.right}>
						<div className={styles.institutional}>
							<FooterContentBlock
								contentKey={'services'}
								title={t['footer.services.title']}
							/>
						</div>
					</div>
				</div>

				<div className={styles.rights}>
					<p>
						&copy; {new Date().getFullYear()} Econverse.{' '}
						<span>{t['footer.copyright']}</span>
					</p>
				</div>
			</footer>
		</>
	)
}

export default Footer
