import { Box, Stack } from '@chakra-ui/react';
import { MatchDto, SummonerDto } from '~/src/types/ProfileDto';
import { ProfileMatchesMainSummoner } from './ProfileMatchesMainSummoner';
import { ProfileMatchesParticipants } from './ProfileMatchesParticipants';

interface ProfileCardProps {
	firstMatches: MatchDto[];
	summoner: SummonerDto;
}

export const ProfileMatches = (props: ProfileCardProps) => {
	const { firstMatches, summoner } = props;

	return (
		<Stack flex={1}>
			{firstMatches.map(match => (
				<Stack
					key={match.metadata.matchId}
					direction='row'
					bg='gray.400'
					py={2}
					rounded={2}
					px={2}
				>
					<ProfileMatchesMainSummoner match={match} summonerId={summoner.id} />
					<Box display={{ base: 'none', md: 'flex' }}>
						<ProfileMatchesParticipants match={match} />
					</Box>
				</Stack>
			))}
		</Stack>
	);
};
