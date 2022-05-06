import { Link, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { MatchDto } from '~/src/types/ProfileDto';

interface MatchesParticipantsProps {
	match: MatchDto;
}

export const ProfileMatchesParticipants = (props: MatchesParticipantsProps) => {
	const { match } = props;

	return (
		<>
			<UnorderedList listStyleType='none'>
				{match.info.participants.map(participant => {
					if (participant.teamId === 100) {
						return (
							<ListItem w='100px' h='18px' isTruncated>
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${
										participant.championName === 'FiddleSticks'
											? 'Fiddlesticks'
											: participant.championName
									}.png`}
									alt={participant.championName}
									width='16px'
									height='16px'
								/>
								<Link
									href={`${participant.summonerName}`}
									target='_blank'
									fontSize='13px'
									pl={1}
								>
									{participant.summonerName}
								</Link>
							</ListItem>
						);
					}
				})}
			</UnorderedList>

			<UnorderedList listStyleType='none'>
				{match.info.participants.map(participant => {
					if (participant.teamId === 200) {
						return (
							<ListItem w='100px' h='18px' isTruncated>
								<Image
									src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${
										participant.championName === 'FiddleSticks'
											? 'Fiddlesticks'
											: participant.championName
									}.png`}
									alt={participant.championName}
									width='16px'
									height='16px'
								/>
								<Link
									href={`${participant.summonerName}`}
									target='_blank'
									fontSize='13px'
									pl={1}
								>
									{participant.summonerName}
								</Link>
							</ListItem>
						);
					}
				})}
			</UnorderedList>
		</>
	);
};
