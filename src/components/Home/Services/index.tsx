import getId from 'helpers/generateUniqueID'

import { useRef, useState } from 'react'
import { useTranslation } from 'src/hooks/useTranslation'

import Title from 'components/Title'
import styles from './services.module.scss'

import Link from 'next/link'

import { getContent } from './Content'

import SVG from 'react-inlinesvg'

import Slider from 'react-slick'
import type { default as sliderType } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useResponsivity } from 'src/hooks/useResponsivity'
import padNumberStart from 'helpers/padNumberStart'

const Services: React.FC = () => {
	// define slide quantity
	const DESKTOP_SLIDES = 4
	const MOBILE_SLIDES = 2

	const { isMobile } = useResponsivity()
	const [currentSlideIndex, setCurrentSlideIndex] = useState('01')
	const { t } = useTranslation()
	const services = getContent()

	const totalSlides = {
		desktop: padNumberStart(Math.ceil(services.length / DESKTOP_SLIDES)),
		mobile: padNumberStart(Math.ceil(services.length / MOBILE_SLIDES)),
	}

	const sliderRef = useRef<sliderType>(null)
	const slideSettings = {
		arrows: false,
		speed: 750,
		slidesToShow: DESKTOP_SLIDES,
		slidesToScroll: DESKTOP_SLIDES,
		beforeChange: (_: number, index: number) => {
			const currentIndex = padNumberStart(
				index / (isMobile ? MOBILE_SLIDES : DESKTOP_SLIDES) + 1,
			)

			return setCurrentSlideIndex(currentIndex)
		},
		responsive: [
			{
				breakpoint: 720,
				settings: {
					slidesToShow: MOBILE_SLIDES,
					slidesToScroll: MOBILE_SLIDES,
				},
			},
		],
	}

	return (
		<section className={`${styles.services} section-container`} id="services">
			<Title isCentered>{t['services.title']}</Title>

			<p>{t['services.description']}</p>

			<Slider ref={sliderRef} className={styles.slider} {...slideSettings}>
				{services.map((customer) => {
					return (
						<div key={getId()} className={styles.box}>
							<div className={styles.icon}>{customer.icon}</div>

							<h2 className={styles.title}>{customer.title}</h2>
						</div>
					)
				})}
			</Slider>

			<div className={styles['slider-control']}>
				<button
					className={styles['slider-prev']}
					onClick={() => sliderRef.current.slickPrev()}
				>
					<SVG src="/icons/purple-slide-arrow.svg" />
				</button>

				<p className={styles.counter}>
					{currentSlideIndex}
					<span>/ {isMobile ? totalSlides.mobile : totalSlides.desktop}</span>
				</p>

				<button
					className={styles['slider-next']}
					onClick={() => sliderRef.current.slickNext()}
				>
					<SVG src="/icons/purple-slide-arrow.svg" />
				</button>
			</div>

			<Link href="/servicos" className={`default-link ${styles.more}`}>
				{t['services.more']}
			</Link>
		</section>
	)
}

export default Services
