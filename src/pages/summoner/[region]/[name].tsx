import {
	GetServerSideProps,
	GetStaticPaths,
	GetStaticProps,
	NextPage,
} from 'next';
import client from '~src/utils/apollo-client';
import axios from 'axios';
import React from 'react';
import { Box, Container, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { GET_PROFILE } from '~/src/queries/profile/get-profile';
import { ProfileDto } from '~/src/types/ProfileDto';
import Header from '~/src/components/app/Header';
import * as Summoner from '~src/components/summoner';

export const getStaticProps: GetStaticProps = async context => {
	const name = context.params?.name;
	const region = context.params?.region;
	const regionUpper = region?.toString().toUpperCase();

	// const apiUrl = process.env.LEAGUE_API_URL;
	// const apiUrlPath = `${apiUrl}/profile/${name}/${region
	// 	?.toString()
	// 	.toUpperCase()}`;

	// let profileData = null;
	// try {
	// 	const { data } = await axios.get(apiUrlPath);
	// 	profileData = data;
	// } catch (err) {
	// 	console.log(err);
	// }

	let profileData = null;
	try {
		const { data, loading, error } = await client.query({
			query: GET_PROFILE,
			variables: { name, region: regionUpper },
		});
		profileData = data.profile;
	} catch (err) {
		console.log(err);
	}

	return {
		props: {
			profileData,
		},
	};
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [
			{
				params: {
					name: 'Tobbs',
					region: 'BR',
				},
			},
		],
		fallback: 'blocking',
	};
};

interface SummonerResultProps {
	profileData: ProfileDto;
}

const PageResultPage: NextPage<SummonerResultProps> = props => {
	const { profileData } = props;
	console.log(profileData);
	return (
		<>
			<Header />

			<Container maxW='container.xl' m='auto' mt={10}>
				<Stack direction='column'>
					<Summoner.ProfileCard
						iconId={profileData.summoner.profileIconId}
						name={profileData.summoner.name}
						level={profileData.summoner.summonerLevel}
					/>

					<Stack direction='row' gap={4}>
						<Box w='240px' bg='gray.400' py={2} rounded={2} px={2}>
							<Text>Box w/ total matches</Text>
						</Box>
						<Summoner.ProfileMatches
							firstMatches={profileData.firstMatchesData}
							summoner={profileData.summoner}
						/>
					</Stack>
				</Stack>
			</Container>
		</>
	);
};

export default PageResultPage;
