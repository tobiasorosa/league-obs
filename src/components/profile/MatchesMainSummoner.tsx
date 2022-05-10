import { Stack } from '@chakra-ui/react';
import { MatchDto, ParticipantDto } from '~/src/types/ProfileDto';
import { getSpellName } from '~/src/utils/get-spell-name';
import { MatchChampionInfo } from './MatchChampionInfo';
import { MatchGameInfo } from './MatchGameInfo';
import { MatchItems } from './MatchItems';
import { MatchStats } from './MatchStats';

interface MatchesMainSummonerProps {
	match: MatchDto;
	mainSummoner: ParticipantDto;
	result: boolean;
}

export const MatchesMainSummoner = (props: MatchesMainSummonerProps) => {
	const { match, mainSummoner, result } = props;

	const firstSpellName = getSpellName(mainSummoner.summoner1Id);
	const secondSpellName = getSpellName(mainSummoner.summoner2Id);

	const runes = mainSummoner.perks.styles;

	const summonerChampionName = mainSummoner.championName;

	const stats = {
		kills: mainSummoner.kills,
		deaths: mainSummoner.deaths,
		assists: mainSummoner.assists,
		cs: mainSummoner.totalMinionsKilled,
		level: mainSummoner.champLevel,
	};

	const totalKillsTeam = match.info.teams.find(
		it => it.teamId === mainSummoner.teamId
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
			<MatchGameInfo
				result={result}
				gameInfo={{
					mode: match.info.queueId,
					endTime: match.info.gameEndTimestamp,
					duration: match.info.gameDuration,
				}}
			/>

			<MatchChampionInfo
				championName={summonerChampionName}
				firstSpellName={firstSpellName}
				secondSpellName={secondSpellName}
				runes={runes}
			/>

			<MatchStats
				stats={stats}
				totalKillsTeam={totalKillsTeam}
				matchDuration={match.info.gameDuration}
			/>

			<MatchItems items={items} trincket={mainSummoner?.item6} />
		</Stack>
	);
};
