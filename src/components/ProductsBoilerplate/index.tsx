import { ReactElement } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'
import SVG from 'react-inlinesvg'

import ProductsSection from 'components/Home/Products'

import generateUniqueID from 'helpers/generateUniqueID'
import styles from './products-boilerplate.module.scss'
import { useTranslation } from 'src/hooks/useTranslation'
import { useResponsivity } from '~/src/hooks/useResponsivity'

type IProducts = {
	title: string
	description: string
	images_path: string[]
	available_vtex?: boolean
	available_shopify?: boolean
	additional_content?: ReactElement
}

const ProductsBoilerplate: React.FC<IProducts> = ({
	title,
	description,
	images_path,
	available_shopify = true,
	available_vtex = true,
	additional_content,
}) => {
	const { t } = useTranslation()
	const { isMobile } = useResponsivity()
	const customPagination = (index: number) => {
		const key = generateUniqueID()

		// thumbnails
		return (
			<Image
				className={styles.thumbnail}
				alt="Product thumbnail"
				key={key}
				priority
				src={images_path[index]}
				width={468}
				height={274}
			/>
		)
	}

	return (
		<main className={styles['products-boilerplate']}>
			<h1 className={styles.title}>{title}</h1>

			{isMobile ? (
				<>
					<SVG
						src="/img/purple-dots_medium.svg"
						className={`${styles['top-dots']} ${styles.mobile}`}
					/>

					<SVG
						src="/img/purple-dots_medium.svg"
						className={`${styles['bottom-dots']} ${styles.mobile}`}
					/>
				</>
			) : (
				<SVG src="/img/purple-dots.svg" className={styles['top-dots']} />
			)}

			<section className={styles.content}>
				<div className={styles['slider-section']}>
					<Slider
						dotsClass={styles['pagination-images']}
						customPaging={customPagination}
						slidesToScroll={1}
						slidesToShow={1}
						arrows={false}
						dots
						fade
					>
						{images_path.map((path) => {
							const key = generateUniqueID()

							// main image
							return (
								<Image
									className={styles.mainImage}
									alt="Product main image"
									key={key}
									priority
									src={path}
									width={468}
									height={274}
									quality={100}
								/>
							)
						})}
					</Slider>
				</div>

				<div className={styles['description-section']}>
					<div className={styles.availability}>
						<h3>{t['products.available']}:</h3>

						{available_vtex && <SVG src="/img/vtex-logo.svg" />}
						{available_shopify && <SVG src="/img/shopify-logo.svg" />}
					</div>

					<p
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: description }}
					/>

					<button className={`default-link ${styles.more}`}>
						{t['products.more']} +
					</button>

					<button className={`button ${styles.budget}`}>
						{t['products.request-budget']}
					</button>
				</div>

				{!isMobile && (
					<SVG src="/img/purple-dots.svg" className={styles['bottom-dots']} />
				)}
			</section>

			{/* additional description or section */}
			<div className={styles['additional-content']}>
				{additional_content ? additional_content : null}
			</div>

			<ProductsSection />
		</main>
	)
}

export default ProductsBoilerplate
