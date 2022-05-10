import * as spellJson from '~public/json/runes.json';

export function getRuneImg(spellId: number, styleId: number) {
	const style = spellJson.find(it => it.id === styleId);

	if (!style) {
		console.log(style);
	}

	const spellImg = style?.slots.map(
		it => it.runes.find(it => it.id === spellId)?.icon
	)[0];

	return {
		style,
		spellImg,
	};
}
