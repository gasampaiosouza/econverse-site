/** @type {import('next').NextConfig} */
module.exports = {
	// language handle
	i18n: {
		localeDetection: false,

		locales: ['pt', 'en'],
		defaultLocale: 'pt',
	},

	images: {
		domains: ['random.imagecdn.app'],
	},

	// redirects
	async redirects() {
		return [
			{ source: '/sobre', destination: '/contato', permanent: false },
			{ source: '/sobre-nos', destination: '/contato', permanent: false },
			{ source: '/fale-conosco', destination: '/contato', permanent: false },
		]
	},
}
