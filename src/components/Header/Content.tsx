/**
 * Content with all the menu item link rules.
 *
 * @param label - Menu item text (blank if you're using translation).
 * @param href - Menu item link, where user will be redirected on click.
 * @param labelKey - Menu item translation key (blank if you're using string as text).
 *
 * @returns An array containing all the menu item link rules as an object.
 */

export const links = [
	{ label: 'Home', href: '/' },
	{ label: '', href: '/', labelKey: 'header.who-we-are' },
	{ label: '', href: '/', labelKey: 'header.platforms' },
	{ label: '', href: '/', labelKey: 'header.services' },
	{ label: 'Blog', href: '/' },
]
