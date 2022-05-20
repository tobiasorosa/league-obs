import { Text } from '@chakra-ui/react';
import { RankDto } from '~/src/types/ProfileDto';

interface ProfileRankProps {
	rank: RankDto[];
}

export const ProfileRank = (props: ProfileRankProps) => {
	const { rank } = props;

	const flexRank = rank.find(it => {
		return it.queueType === 'RANKED_FLEX_SR';
	});

	const soloRank = rank.find(it => {
		return it.queueType === 'RANKED_SOLO_5x5';
	});

	return (
		<>
			<Text>
				{flexRank?.tier} {flexRank?.rank}
			</Text>
			<Text>
				{soloRank?.tier} {soloRank?.rank}
			</Text>
		</>
	);
};
