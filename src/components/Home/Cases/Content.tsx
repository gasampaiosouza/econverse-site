import { useTranslation } from '~/src/hooks/useTranslation'

import SVG from 'react-inlinesvg'

export function getContent() {
	const { t } = useTranslation()

	return {
		slides: [
			{
				logo: '/img/valisere-logo.png',
				description: t['cases.carousel.valisere'],
				link: 'valisere',
				// banner: '/img/cases-valisere_banner.jpg',
				banner: 'https://random.imagecdn.app/828/1031',
			},
			{
				logo: '/img/valisere-logo.png',
				description: t['cases.carousel.valisere'],
				link: 'cia-maritima',
				// banner: '/test/panda.jpg',
				banner: 'https://random.imagecdn.app/828/1032',
			},
			{
				logo: '/img/valisere-logo.png',
				description: t['cases.carousel.valisere'],
				link: 'aleatory',
				// banner: '/test/husky.jpg',
				banner: 'https://random.imagecdn.app/828/1033',
			},
			{
				logo: '/img/valisere-logo.png',
				description: t['cases.carousel.valisere'],
				link: 'puket',
				// banner: '/test/tree.jpg',
				banner: 'https://random.imagecdn.app/828/1034',
			},
		],

		cards: [
			{
				logo: <SVG src="/img/shopify-logo.svg" />,
				description: t['cases.cards.shopify'],
				link: '/',
			},
			{
				logo: <SVG src="/img/vtex-logo.svg" />,
				description: t['cases.cards.vtex'],
				link: '/',
			},
			{
				logo: <SVG src="/img/vtexio-logo.svg" />,
				description: t['cases.cards.vtexio'],
				link: '/',
			},
		],
	}
}
