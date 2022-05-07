import { Center, Stack } from '@chakra-ui/react';
import { MatchDto } from '~/src/types/ProfileDto';
import Image from 'next/image';
import { getSpellName } from '~/src/utils/get-spell-name';
import { ProfileMatchChampionInfo } from './ProfileMatchChampionInfo';
import { ProfileMatchStats } from './ProfileMatchStats';
import { ProfileMatchItems } from './ProfileMatchItems';

interface MatchesMainSummonerProps {
	match: MatchDto;
	summonerId: string;
}

export const ProfileMatchesMainSummoner = (props: MatchesMainSummonerProps) => {
	const { match, summonerId } = props;

	const mainSummoner = match.info.participants.find(
		it => it.summonerId === summonerId
	)!;

	const firstSpellName = getSpellName(mainSummoner?.summoner1Id);
	const secondSpellName = getSpellName(mainSummoner?.summoner2Id);

	const summonerChampionName = mainSummoner?.championName;

	const stats = {
		kills: mainSummoner?.kills,
		deaths: mainSummoner?.deaths,
		assists: mainSummoner?.assists,
		cs: mainSummoner?.totalMinionsKilled,
		level: mainSummoner?.champLevel,
	};

	const totalKillsTeam = match.info.teams.find(
		it => it.teamId === mainSummoner?.teamId
	)?.objectives.champion.kills!;

	const items = [
		mainSummoner?.item0,
		mainSummoner?.item1,
		mainSummoner?.item2,
		mainSummoner?.item3,
		mainSummoner?.item4,
		mainSummoner?.item5,
	];

	return (
		<Stack direction='row'>
			<ProfileMatchChampionInfo
				championName={summonerChampionName}
				firstSpellName={firstSpellName}
				secondSpellName={secondSpellName}
			/>

			<ProfileMatchStats
				stats={stats}
				totalKillsTeam={totalKillsTeam}
				matchDuration={match.info.gameDuration}
			/>

			<ProfileMatchItems items={items} trincket={mainSummoner?.item6} />
		</Stack>
	);
};
