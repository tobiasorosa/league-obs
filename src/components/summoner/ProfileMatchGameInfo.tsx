import { Stack, Text } from '@chakra-ui/react';

interface MathGameInfoProps {
	result: boolean;
	gameDuration: number;
}

export const ProfileMatchGameInfo = (props: MathGameInfoProps) => {
	const { result, gameDuration } = props;

	const minutes = (gameDuration / 60).toFixed(0);
	const seconds = (gameDuration % 60).toLocaleString('en-US', {
		minimumIntegerDigits: 2,
	});

	return (
		<Stack justify='center'>
			<Text textAlign='center' color={result ? 'blue.500' : 'red.500'}>
				{result ? 'Victory' : 'Defeat'}
			</Text>
			<Text textAlign='center'>
				{minutes}:{seconds}
			</Text>
		</Stack>
	);
};
