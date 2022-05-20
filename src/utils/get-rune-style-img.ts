import spellJson from '~public/json/runes.json';

export function getRuneStyleImg(styleId: number) {
	const style = spellJson.find(it => it.id === styleId);

	if (!style) {
		throw new Error('Could not find spell');
	}

	return style;
}
