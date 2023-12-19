import { useTranslation } from '~/src/hooks/useTranslation'

export function footerContent() {
	const { t } = useTranslation()

	return {
		institutional: [
			{ label: t['footer.home'], link: '/' },
			{ label: t['footer.agency'], link: '/' },
			{ label: t['footer.cases'], link: '/' },
			{ label: t['footer.services'], link: '/' },
		],

		platforms: [
			{ label: 'VTEX', link: '/' },
			{ label: 'Shopify', link: '/' },
			{ label: 'Magento', link: '/' },
		],

		services: [
			{ label: t['footer.vtex-catalog'], link: '/' },
			{ label: t['footer.ecommerce-catalog'], link: '/' },
			{ label: t['footer.work-with-us'], link: '/' },
			{ label: t['footer.jobs'], link: '/' },
			{ label: t['footer.glassdoor'], link: '/' },
			{ label: t['footer.development'], link: '/' },
			{ label: t['footer.shipping'], link: '/' },
			{ label: t['footer.projects'], link: '/' },
		],
	}
}
