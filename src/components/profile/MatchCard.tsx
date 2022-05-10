import { Box, Stack } from '@chakra-ui/react';
import { MatchDto, SummonerDto } from '~/src/types/ProfileDto';
import { MatchesMainSummoner } from './MatchesMainSummoner';
import { MatchesParticipants } from './MatchesParticipants';

interface MatchCardProps {
	match: MatchDto;
	summoner: SummonerDto;
}

export const MatchCard = (props: MatchCardProps) => {
	const { match, summoner } = props;

	const mainSummoner = match.info.participants.find(
		it => it.summonerId === summoner.id
	)!;

	const result = match.info.teams.find(it => it.teamId === mainSummoner.teamId)
		?.win!;

	return (
		<Stack
			key={match.metadata.matchId}
			direction='row'
			bg={result ? 'blue.200' : 'red.200'}
			py={2}
			rounded={10}
			px={2}
		>
			<MatchesMainSummoner
				match={match}
				mainSummoner={mainSummoner}
				result={result}
			/>
			<Box display={{ base: 'none', md: 'flex' }}>
				<MatchesParticipants match={match} />
			</Box>
		</Stack>
	);
};
