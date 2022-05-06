import { HStack, Stack, Text, VStack } from '@chakra-ui/react';

interface IStats {
	kills: number;
	deaths: number;
	assists: number;
	cs: number;
	level: number;
}

interface MatchStatsProps {
	stats: IStats;
	totalKillsTeam: number;
	matchDuration: number;
}

export const ProfileMatchStats = ({
	stats,
	totalKillsTeam,
	matchDuration,
}: MatchStatsProps) => {
	const { kills, deaths, assists, cs, level } = stats;

	const kda = ((kills + assists) / deaths).toFixed(2);
	const participation = (((kills + assists) / totalKillsTeam) * 100).toFixed(0);
	const csPerMinute = (cs / (matchDuration / 60)).toFixed(1);

	return (
		<Stack pt={{ base: 1, md: 4 }} direction='row'>
			<Stack width={100}>
				<HStack justify='center'>
					<Text as='span'>{kills} / </Text>
					<Text as='span' color='red'>
						{deaths}
					</Text>{' '}
					<Text as='span'>/ {assists}</Text>
				</HStack>
				<HStack mt='0 !important' justify='center'>
					<Text as='span' fontSize='14px' fontWeight='500'>
						{kda}:1
					</Text>
					<Text as='span' fontSize='14px' color='gray.500'>
						KDA
					</Text>
				</HStack>
			</Stack>
			<Stack align='center' width={90}>
				<Text as='span' fontSize='14px'>
					Level {level}
				</Text>
				<Text as='span' fontSize='14px' mt='0 !important'>
					{cs} CS ({csPerMinute})
				</Text>
				<Text as='span' fontSize='14px' color='red.700' mt='0 !important'>
					Kills Part. {participation}%
				</Text>
			</Stack>
		</Stack>
	);
};
