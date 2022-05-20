import { Stack, Text } from '@chakra-ui/react';
import { PerkStyleDto } from '~/src/types/ProfileDto';
import { getRuneImg } from '~/src/utils/get-rune-img';
import { getRuneStyleImg } from '~/src/utils/get-rune-style-img';
import ChakraNextImage from '../app/ChakraNextImage';

interface ChampionInfoProps {
	championName: string;
	firstSpellName: string;
	secondSpellName: string;
	runes: PerkStyleDto[];
}

export const MatchChampionInfo = (props: ChampionInfoProps) => {
	const { championName, firstSpellName, runes, secondSpellName } = props;

	const firstRune = getRuneStyleImg(runes[0].style);
	const firstMainRune = getRuneImg(runes[0].selections[0].perk, runes[0].style);
	const secondRune = getRuneStyleImg(runes[1].style);

	return (
		<Stack align='center' justify='center'>
			<Stack direction={{ base: 'column', md: 'row' }}>
				<ChakraNextImage
					src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${
						championName === 'FiddleSticks' ? 'Fiddlesticks' : championName
					}.png`}
					alt={championName}
					width='46px'
					height='46px'
					rounded={50}
				/>
				<Stack gap={1} direction={{ base: 'row', md: 'column' }}>
					<ChakraNextImage
						src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/spell/Summoner${firstSpellName}.png`}
						alt={firstSpellName}
						width='20px'
						height='20px'
						rounded={4}
					/>
					<ChakraNextImage
						src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/spell/Summoner${secondSpellName}.png`}
						alt={secondSpellName}
						width='20px'
						height='20px'
						rounded={4}
					/>
				</Stack>

				<Stack
					gap={1}
					direction={{ base: 'row', md: 'column' }}
					display={{ base: 'none', md: 'flex' }}
				>
					<ChakraNextImage
						src={`https://ddragon.canisback.com/img/${firstMainRune.spellImg}`}
						alt={firstMainRune.style?.name}
						width='20px'
						height='20px'
						rounded={50}
						bg='black'
					/>
					<ChakraNextImage
						src={`https://ddragon.canisback.com/img/${secondRune.icon}`}
						alt={secondRune.name}
						width='20px'
						height='20px'
						rounded={4}
					/>
				</Stack>
			</Stack>
			<Text as='span' fontSize={14} display={{ base: 'none', md: 'block' }}>
				{championName}
			</Text>
		</Stack>
	);
};
