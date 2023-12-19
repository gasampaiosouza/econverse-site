import React, { useState } from 'react'
import getId from 'helpers/generateUniqueID';

// import Slider from 'components/Slider'
import Title from 'components/Title'

import Image from 'next/image'

import SVG from 'react-inlinesvg'

import { useTranslation } from 'src/hooks/useTranslation'
import { getContent } from './Content'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './testimonials.module.scss'
import { motion } from 'framer-motion'
import {
	buildStyles,
	CircularProgressbarWithChildren,
} from 'react-circular-progressbar'
import { useResponsivity } from 'src/hooks/useResponsivity'

function Testimonials() {
	const AUTOPLAY_TIMER = 7000
	
	const { t } = useTranslation()
	const testimonials = getContent()
	const { isMobile } = useResponsivity()

	const [timer, setTimer] = useState(0)
	const [currentSlide, setCurrentSlide] = useState(0)
	const [customerDescriptionRef, setCustomerDescriptionRef] = useState(null)
	const [customerPictureRef, setCustomerPictureRef] = useState(null)

	const DefaultCustomerImage = ({ slide }) => (
		<div className={styles['image-container']}>
			<Image
				className={styles.image}
				src={slide.customer.image}
				alt="Customer banner"
				width={isMobile ? 75 : 100}
				height={isMobile ? 75 : 100}
				quality={100}
				objectFit="cover"
			/>
		</div>
	)

	return (
		<section className={styles.testimonials} id="testimonials">
			<div className={styles['testimonials-slider']}>
				<div className={styles['testimonials-slider__content']}>
					<Title>{t['testimonials.title']}</Title>

					{isMobile ? (
						<>
							<SVG
								src="/img/purple-dots_small.svg"
								className={`${styles['top-dots']} ${styles.mobile}`}
							/>
							<SVG
								src="/img/purple-dots_small.svg"
								className={`${styles['bottom-dots']} ${styles.mobile}`}
							/>
						</>
					) : (
						<>
							<SVG src="/img/purple-dots.svg" className={styles['top-dots']} />
							<SVG src="/img/purple-dots.svg" className={styles['bottom-dots']} />
						</>
					)}

					<Slider
						asNavFor={customerPictureRef}
						ref={(slider1) => setCustomerDescriptionRef(slider1)}
						arrows={false}
						autoplay
						pauseOnHover={false}
						autoplaySpeed={AUTOPLAY_TIMER}
						afterChange={() => setTimer(AUTOPLAY_TIMER)}
						beforeChange={(_, index) => {
							setCurrentSlide(index)
							setTimer(0)
						}}
					>
						{testimonials.map((slide, index) => {
							const isCurrentSlide = currentSlide === index

							return (
								<div
									key={getId()}
									className={`${styles['slide-content']} ${
										isCurrentSlide ? styles.active : ''
									}`}
								>
									<p>"{slide.description}"</p>

									<span
										dangerouslySetInnerHTML={{ __html: slide.customer.info }}
									/>
								</div>
							)
						})}
					</Slider>

					<button
						className={`${styles['slider-prev']} ${
							isMobile ? styles.mobile : ''
						}`}
						onClick={() => customerDescriptionRef.slickPrev()}
					>
						{isMobile ? (
							<SVG src="/icons/purple-slide-arrow.svg" />
						) : (
							<SVG src="/icons/big-slide-arrow.svg" />
						)}
					</button>

					<button
						className={`${styles['slider-next']} ${
							isMobile ? styles.mobile : ''
						}`}
						onClick={() => customerDescriptionRef.slickNext()}
					>
						{isMobile ? (
							<SVG src="/icons/purple-slide-arrow.svg" />
						) : (
							<SVG src="/icons/big-slide-arrow.svg" />
						)}
					</button>
				</div>

				<Slider
					asNavFor={customerDescriptionRef}
					ref={(slider2) => setCustomerPictureRef(slider2)}
					slidesToShow={3}
					swipeToSlide={true}
					focusOnSelect={true}
					className={styles['customers-slide']}
					centerMode
					centerPadding="0"
				>
					{testimonials.map((slide, index) => {
						const isCurrentSlide = currentSlide === index
						const variants = {
							selected: { opacity: 1, y: 0, scale: 1.2 },
							hidden: { opacity: 0.25, y: 20 },
						}
						const progressStyles = {
							pathColor: '#2C1E4A',
							trailColor: '#DFDFDF',
							pathTransitionDuration: (AUTOPLAY_TIMER - 250) / 1000,
						}

						return (
							<motion.div
								className={styles.progress}
								key={getId()}
								initial="hidden"
								animate={isCurrentSlide ? 'selected' : 'hidden'}
								variants={variants}
								transition={{ type: 'spring', duration: 1, bounce: 0.4 }}
							>
								{isCurrentSlide ? (
									<CircularProgressbarWithChildren
										value={timer}
										strokeWidth={3}
										styles={buildStyles(progressStyles)}
									>
										<DefaultCustomerImage slide={slide} />
									</CircularProgressbarWithChildren>
								) : (
									<DefaultCustomerImage slide={slide} />
								)}
							</motion.div>
						)
					})}
				</Slider>
			</div>
		</section>
	)
}

export default Testimonials;