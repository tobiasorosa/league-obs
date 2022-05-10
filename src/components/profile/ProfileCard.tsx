import { Divider, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

interface ProfileCardProps {
	iconId: number;
	name: string;
	level: number;
}

export const SummonerCard = (props: ProfileCardProps) => {
	return (
		<HStack align='flex-start'>
			<Image
				alt='Summoner Icon'
				src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${props.iconId}.png`}
				width='110px'
				height='110px'
			/>
			<Stack>
				<Text fontSize='2rem' fontWeight='500' lineHeight='2rem'>
					{props.name}
				</Text>
				<Divider />
				<Text>Level: {props.level}</Text>
			</Stack>
		</HStack>
	);
};
