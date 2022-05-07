import { Divider, Flex, Stack, Text } from '@chakra-ui/react';
import { getQueueType } from '~/src/utils/get-queue-type';
import { formatDistanceToNow } from 'date-fns';

interface MathGameInfoProps {
	result: boolean;
	gameInfo: {
		mode: number;
		endTime: number;
		duration: number;
	};
}

export const ProfileMatchGameInfo = (props: MathGameInfoProps) => {
	const { result } = props;
	const { mode, endTime, duration } = props.gameInfo;

	const minutes = (duration / 60).toFixed(0);
	const seconds = (duration % 60).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
	});

	const endedGame = formatDistanceToNow(new Date(endTime), { addSuffix: true });

	return (
		<Flex
			justify='center'
			direction='column'
			display={{ base: 'none', md: 'flex' }}
		>
			<Text textAlign='center' fontSize='14px' isTruncated>
				{getQueueType(mode)}
			</Text>
			<Text textAlign='center' fontSize='14px'>
				{endedGame.replace('about', '')}
			</Text>
			<Divider />
			<Text textAlign='center' color={result ? 'blue.500' : 'red.500'}>
				{result ? 'Victory' : 'Defeat'}
			</Text>
			<Text textAlign='center' fontSize='14px'>
				{minutes}:{seconds}
			</Text>
		</Flex>
	);
};
