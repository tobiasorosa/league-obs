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
		<Stack align='center' direction='row'>
			<Stack width='70px'>
				<HStack justify='center'>
					<Text as='span' fontSize='14px'>
						{kills} /{' '}
					</Text>
					<Text as='span' color='red' fontSize='14px'>
						{deaths}
					</Text>{' '}
					<Text as='span' fontSize='14px'>
						/ {assists}
					</Text>
				</HStack>
				<HStack mt='0 !important' justify='center'>
					<Text as='span' fontSize='12px' fontWeight='500'>
						{kda}:1
					</Text>
					<Text as='span' fontSize='12px' color='gray.500'>
						KDA
					</Text>
				</HStack>
			</Stack>
			<Stack align='center' width={90}>
				<Text as='span' fontSize='12px'>
					Level {level}
				</Text>
				<Text as='span' fontSize='12px' mt='0 !important'>
					{cs} CS ({csPerMinute})
				</Text>
				<Text as='span' fontSize='12px' color='red.700' mt='0 !important'>
					K/Part. {participation}%
				</Text>
			</Stack>
		</Stack>
	);
};
