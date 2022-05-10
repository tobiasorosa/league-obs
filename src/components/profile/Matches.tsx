import { Box, Stack } from '@chakra-ui/react';
import { MatchDto, SummonerDto } from '~/src/types/ProfileDto';
import { MatchCard } from './MatchCard';
import { MatchesMainSummoner } from './MatchesMainSummoner';
import { MatchesParticipants } from './MatchesParticipants';

interface ProfileCardProps {
	firstMatches: MatchDto[];
	summoner: SummonerDto;
}

export const Matches = (props: ProfileCardProps) => {
	const { firstMatches, summoner } = props;

	return (
		<Stack flex={1}>
			{firstMatches.map(match => (
				<MatchCard
					match={match}
					summoner={summoner}
					key={match.metadata.matchId}
				/>
			))}
		</Stack>
	);
};
