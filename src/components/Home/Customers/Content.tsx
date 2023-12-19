// Custom SVG logos
import SVG from 'react-inlinesvg'
import LogoNobel from 'public/img/customers/logo-nobel.svg'

const parseWebsiteName = (name: string) => `https://www.${name}.com.br/`

export const customers = [
	{
		logo: <SVG src="/img/customers/logo-valisere.svg" uniquifyIDs />,
		website: parseWebsiteName('valisere'),
	},
	{
		logo: <SVG src="/img/customers/logo-ciaMaritima.svg" uniquifyIDs />,
		website: parseWebsiteName('ciamaritima'),
	},
	{
		logo: <SVG src="/img/customers/logo-puket.svg" uniquifyIDs />,
		website: parseWebsiteName('puket'),
	},
	{
		logo: <SVG src="/img/customers/logo-biossance.svg" uniquifyIDs />,
		website: parseWebsiteName('biossance'),
	},
	{
		logo: <SVG src="/img/customers/logo-lexmark.svg" uniquifyIDs />,
		website: 'http://lexmark.com.br/',
	},
	{
		logo: <SVG src="/img/customers/logo-farmax.svg" uniquifyIDs />,
		website: parseWebsiteName('farmax'),
	},
	{
		logo: <SVG src="/img/customers/logo-aleatory.svg" uniquifyIDs />,
		website: parseWebsiteName('aleatorystore'),
	},
	{
		logo: <SVG src="/img/customers/logo-imaginarium.svg" uniquifyIDs />,
		website: 'https://loja.imaginarium.com.br/',
	},
	{
		logo: <SVG src="/img/customers/logo-fitleve.svg" uniquifyIDs />,
		website: parseWebsiteName('fitleve'),
	},
]
