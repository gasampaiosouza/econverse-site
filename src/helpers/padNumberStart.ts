export default function padNumberStart(
	string: string | number,
	padQuantity = 2,
	replaceWith = '0',
) {
	return String(string).padStart(padQuantity, replaceWith)
}
