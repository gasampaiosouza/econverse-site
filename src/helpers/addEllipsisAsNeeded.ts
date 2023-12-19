export default function addEllipsisAsNeeded(phrase: string, quantity: number) {
	if (phrase.length <= quantity) return phrase;

	const subString = phrase.substr(0, quantity - 1);

	return subString.substr(0, subString.lastIndexOf(' ')) + '&hellip;';
};
