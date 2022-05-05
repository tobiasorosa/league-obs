export function getSpellName(spellId: number): string {
	let spellName;
	switch (spellId) {
		case 1:
			spellName = 'Boost';
			break;
		case 3:
			spellName = 'Exhaust';
			break;
		case 4:
			spellName = 'Flash';
			break;
		case 6:
			spellName = 'Haste';
			break;
		case 7:
			spellName = 'Heal';
			break;
		case 11:
			spellName = 'Smite';
			break;
		case 12:
			spellName = 'Teleport';
			break;
		case 13:
			spellName = 'Mana';
			break;
		case 14:
			spellName = 'Dot';
			break;
		case 21:
			spellName = 'Barrier';
			break;
		case 30:
			spellName = 'PoroRecall';
			break;
		case 31:
			spellName = 'PoroThrow';
			break;
		case 32:
		case 39:
			spellName = 'Snowball';
			break;
		default:
			spellName = 'Unknown';
			break;
	}

	return spellName;
}
