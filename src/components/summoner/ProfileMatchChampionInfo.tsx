import { HStack, Stack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import ChakraNextImage from '../app/ChakraNextImage';

interface ChampionInfoProps {
	championName: string;
	firstSpellName: string;
	secondSpellName: string;
}

export const ProfileMatchChampionInfo = (props: ChampionInfoProps) => {
	const { championName, firstSpellName, secondSpellName } = props;

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
			</Stack>
		</Stack>
	);
};
