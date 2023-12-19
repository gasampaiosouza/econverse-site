import getId from 'helpers/generateUniqueID'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'src/hooks/useTranslation'
import Slider from 'react-slick'

import styles from '../cases.module.scss'
import { useCasesContent } from '../Content'

import Image from 'next/image'
import Link from 'next/link'
import SVG from 'react-inlinesvg'
import Title from 'components/Title'
import { useResponsivity } from 'src/hooks/useResponsivity'

const SlideSection = () => {
	const { slides } = useCasesContent()
	const { t } = useTranslation()
	const { isMobile } = useResponsivity()
	const [currentSlide, setCurrentSlide] = useState(0)
	const [casesSliderRef, setCasesSliderRef] = useState<Slider | null>(null)

	return (
		<div className={styles['cases-slider']}>
			<div className={styles['cases-slider__content']}>
				<Title isWhite modules={styles}>
					Cases
				</Title>

				<div className={styles['slide-container']}>
					<Slider
						ref={(slider) => setCasesSliderRef(slider)}
						slidesToShow={1}
						arrows={false}
						beforeChange={(_, index) => setCurrentSlide(index)}
					>
						{slides.map((slide, index) => {
							const isCurrentSlide = currentSlide === index

							return (
								<div
									key={getId()}
									className={`${styles['slide-content']} ${
										isCurrentSlide ? styles.active : ''
									}`}
								>
									<Image
										src={slide.logo}
										alt="Customer logo"
										width={195}
										height={40}
										quality={90}
									/>

									<p>{slide.description}</p>

									<Link
										// href={`/clientes/${slide.link}`}
										href="#"
									>
										{t['cases.carousel.view']}{' '}
										<SVG
											src="/icons/view-arrow.svg"
											className={styles['cta-arrow']}
										/>
									</Link>
								</div>
							)
						})}
					</Slider>

					<div className={styles.arrows}>
						<button
							// @ts-ignore
							onClick={() => casesSliderRef.slickPrev()}
							className={styles['arrow-prev']}
						>
							<SVG src="/icons/slide-arrow.svg" />
						</button>

						<button
							// @ts-ignore
							onClick={() => casesSliderRef.slickNext()}
							className={styles['arrow-next']}
						>
							<SVG src="/icons/slide-arrow.svg" />
						</button>
					</div>
				</div>
			</div>

			<div className={`${styles['slide-banner']}`}>
				{isMobile ? (
					<SVG
						src="/img/dots-top_mobile.svg"
						className={`${styles['top-dots']} ${styles.mobile}`}
					/>
				) : (
					<>
						<SVG src="/img/cases-dots-top.svg" className={styles['top-dots']} />
						<SVG
							src="/img/cases-dots-bottom.svg"
							className={styles['bottom-dots']}
						/>
					</>
				)}

				{slides.map((slide, index) => {
					const isCurrentSlide = currentSlide === index

					return (
						<motion.div
							key={`banner-${getId()}`}
							initial="hidden"
							animate={isCurrentSlide ? 'visible' : 'hidden'}
							variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
							transition={{ type: 'spring', duration: 1 }}
							className={`${styles.image} ${
								isCurrentSlide ? styles.active : ''
							}`}
						>
							<Image
								src={slide.banner}
								alt="Cases banner"
								width={762}
								height={760}
								quality={100}
								objectFit="cover"
								priority
							/>
						</motion.div>
					)
				})}
			</div>

			<SVG
				src="/img/cases-dots-divider.svg"
				className={styles['divider-dots']}
			/>
		</div>
	)
}

export { SlideSection }
