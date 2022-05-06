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
			<HStack>
				<ChakraNextImage
					src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${
						championName === 'FiddleSticks' ? 'Fiddlesticks' : championName
					}.png`}
					alt={championName}
					width='46px'
					height='46px'
					rounded={50}
				/>
				<VStack gap={1}>
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
				</VStack>
			</HStack>
			<Text fontSize='14px'>{championName}</Text>
		</Stack>
	);
};
