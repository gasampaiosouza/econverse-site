import getId from 'helpers/generateUniqueID'
import { useTranslation } from 'src/hooks/useTranslation'

import { Card } from './components/Card'
import Title from 'components/Title'
import styles from './products.module.scss'

import { useProductsContent } from './Content'

const Products: React.FC = () => {
	const cardsToShow = 4

	const cards = useProductsContent()
	const { t } = useTranslation()

	return (
		<section className={`${styles.products} section-container`} id="products">
			<Title isCentered>{t['products.title']}</Title>

			<div className={styles.cards}>
				{cards.slice(0, cardsToShow).map((card) => {
					const key = getId()

					return <Card key={key} card={card} />
				})}
			</div>
		</section>
	)
}

export default Products
