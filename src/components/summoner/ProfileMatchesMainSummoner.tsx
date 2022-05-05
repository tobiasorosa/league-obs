import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { MatchDto } from '~/src/types/ProfileDto';
import Image from 'next/image';

interface MatchesMainSummonerProps {
	match: MatchDto;
	summonerId: string;
}

export const ProfileMatchesMainSummoner = (props: MatchesMainSummonerProps) => {
	const { match, summonerId } = props;

	const summonerChampionName = match.info.participants.find(
		it => it.summonerId === summonerId
	)?.championName;

	return (
		<Stack align='center' justify='center'>
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
			<Text>{summonerChampionName}</Text>
		</Stack>
	);
};
