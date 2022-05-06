import { Box, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
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
		<Stack>
			{firstMatches.map(match => (
				<Stack key={match.metadata.matchId} direction='row'>
					<ProfileMatchesMainSummoner match={match} summonerId={summoner.id} />
					<Box display={{ base: 'none', md: 'flex' }}>
						<ProfileMatchesParticipants match={match} />
					</Box>
				</Stack>
			))}
		</Stack>
	);
};
