export default function generateUniqueId() {
	const fullID = Math.random().toString(36)

	return `__${fullID.substring(2, 9)}`
}
