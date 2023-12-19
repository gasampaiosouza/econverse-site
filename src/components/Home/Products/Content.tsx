import { useTranslation } from '~/src/hooks/useTranslation'

export function useProductsContent() {
	const { t } = useTranslation()

	return [
		{
			title: t['products.monte-seu-kit.title'],
			description: t['products.monte-seu-kit.description'],
			href: '/produtos/monte-seu-kit',
			image: '/img/products/personalize-seu-produto1.jpg',
		},
		{
			title: t['products.member-get-member.title'],
			description: t['products.member-get-member.description'],
			href: '/produtos/member-get-member',
			image: '/img/products/personalize-seu-produto1.jpg',
		},
		{
			title: t['products.personalize-seu-produto.title'],
			description: t['products.personalize-seu-produto.description'],
			href: '/produtos/personalize-seu-produto',
			image: '/img/products/personalize-seu-produto1.jpg',
		},
		{
			title: t['products.personalize-seu-ambiente.title'],
			description: t['products.personalize-seu-ambiente.description'],
			href: '/produtos/personalize-seu-ambiente',
			image: '/img/products/personalize-seu-produto1.jpg',
		},
	]
}