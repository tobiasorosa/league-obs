import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import client from '~src/utils/apollo-client';
import React from 'react';
import { Box, Container, Stack, Text } from '@chakra-ui/react';
import { GET_PROFILE } from '~/src/queries/profile/get-profile';
import { ProfileDto } from '~/src/types/ProfileDto';
import Header from '~/src/components/app/Header';
import * as Summoner from '~src/components/summoner';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async context => {
	const name = context.params?.name;
	const region = context.params?.region;
	const regionUpper = region?.toString().toUpperCase();

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
			<Head>
				<title>{profileData.summoner.name} - Summoner</title>
			</Head>
			<Header />

			<Container maxW='container.lg' m='auto' mt={10}>
				<Stack direction='column'>
					<Summoner.ProfileCard
						iconId={profileData.summoner.profileIconId}
						name={profileData.summoner.name}
						level={profileData.summoner.summonerLevel}
					/>

					<Stack direction={{ base: 'column', lg: 'row' }} gap={2}>
						<Box w='300px' bg='gray.400' py={2} rounded={2} px={2}>
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
