import ProductsBoilerplate from 'src/components/ProductsBoilerplate'
import { useTranslation } from 'src/hooks/useTranslation'

const PersonalizeSeuProduto = () => {
	const { t } = useTranslation()

	const title = 'Personalize seu produto'
	const description = t['products.personalize-seu-produto.description']
	const images = [
		'personalize-seu-produto1',
		'personalize-seu-produto2',
		'personalize-seu-produto3',
	].map((path) => `/img/products/${path}.jpg`)

	const additional_content = (
		<p>{t['products.personalize-seu-produto.additional-content']}</p>
	)

	return (
		<>
			<ProductsBoilerplate
				title={title}
				description={description}
				images_path={images}
				additional_content={additional_content}
			/>
		</>
	)
}

export default PersonalizeSeuProduto
