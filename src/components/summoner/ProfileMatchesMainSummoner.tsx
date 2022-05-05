import React from 'react';
import { HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { MatchDto } from '~/src/types/ProfileDto';
import Image from 'next/image';
import { getSpellName } from '~/src/utils/get-spell-name';

interface MatchesMainSummonerProps {
	match: MatchDto;
	summonerId: string;
}

export const ProfileMatchesMainSummoner = (props: MatchesMainSummonerProps) => {
	const { match, summonerId } = props;

	const mainSummoner = match.info.participants.find(
		it => it.summonerId === summonerId
	);

	const firstSpellName = getSpellName(mainSummoner?.summoner1Id!);
	const secondSpellName = getSpellName(mainSummoner?.summoner2Id!);

	const summonerChampionName = mainSummoner?.championName;

	return (
		<Stack align='center' justify='center'>
			<HStack>
				<Image
					src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${
						summonerChampionName === 'FiddleSticks'
							? 'Fiddlesticks'
							: summonerChampionName
					}.png`}
					alt={summonerChampionName}
					width='46px'
					height='46px'
				/>
				<VStack gap={1}>
					<Image
						src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/spell/Summoner${firstSpellName}.png`}
						alt={firstSpellName}
						width='20px'
						height='20px'
					/>
					<Image
						src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/spell/Summoner${secondSpellName}.png`}
						alt={secondSpellName}
						width='20px'
						height='20px'
					/>
				</VStack>
			</HStack>
			<Text>{summonerChampionName}</Text>
		</Stack>
	);
};
