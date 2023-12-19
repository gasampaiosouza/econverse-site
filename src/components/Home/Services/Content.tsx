import SVG from 'react-inlinesvg';

import { useTranslation } from '~/src/hooks/useTranslation'

export function getContent() {
	const { t } = useTranslation()

	return [
		{
			icon: <SVG src="/icons/services/criacao-ux-ui.svg" />,
			title: t['services.cards.ux.title'],
			description: t['services.cards.ux.description'],
		},
		{
			icon: <SVG src="/icons/services/marketing-digital.svg" />,
			title: t['services.cards.marketing.title'],
			description: t['services.cards.marketing.description'],
		},
		{
			icon: <SVG src="/icons/services/implantacao-vtex.svg" />,
			title: t['services.cards.vtex.title'],
			description: t['services.cards.vtex.description'],
		},
		{
			icon: <SVG src="/icons/services/implantacao-shopify.svg" />,
			title: t['services.cards.management.title'],
			description: t['services.cards.management.description'],
		},
		{
			icon: <SVG src="/icons/services/criacao-ux-ui.svg" />,
			title: t['services.cards.ux.title'],
			description: t['services.cards.ux.description'],
		},
		{
			icon: <SVG src="/icons/services/marketing-digital.svg" />,
			title: t['services.cards.marketing.title'],
			description: t['services.cards.marketing.description'],
		},
		{
			icon: <SVG src="/icons/services/implantacao-vtex.svg" />,
			title: t['services.cards.vtex.title'],
			description: t['services.cards.vtex.description'],
		},
		{
			icon: <SVG src="/icons/services/implantacao-shopify.svg" />,
			title: t['services.cards.management.title'],
			description: t['services.cards.management.description'],
		},
		{
			icon: <SVG src="/icons/services/criacao-ux-ui.svg" />,
			title: t['services.cards.ux.title'],
			description: t['services.cards.ux.description'],
		},
		{
			icon: <SVG src="/icons/services/marketing-digital.svg" />,
			title: t['services.cards.marketing.title'],
			description: t['services.cards.marketing.description'],
		},
		{
			icon: <SVG src="/icons/services/implantacao-vtex.svg" />,
			title: t['services.cards.vtex.title'],
			description: t['services.cards.vtex.description'],
		},
		{
			icon: <SVG src="/icons/services/implantacao-shopify.svg" />,
			title: t['services.cards.management.title'],
			description: t['services.cards.management.description'],
		},
	]
}
