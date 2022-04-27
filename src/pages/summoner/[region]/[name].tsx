import {
	GetServerSideProps,
	GetStaticPaths,
	GetStaticProps,
	NextPage,
} from 'next';
import axios from 'axios';
import React from 'react';
import { Text } from '@chakra-ui/react';

export const getStaticProps: GetStaticProps = async context => {
	const name = context.params?.name;
	const region = context.params?.region;

	const apiUrl = process.env.LEAGUE_API_URL;
	const apiUrlPath = `${apiUrl}/profile/${name}/${region
		?.toString()
		.toUpperCase()}`;

	let profileData = null;
	try {
		const { data } = await axios.get(apiUrlPath);
		profileData = data;
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
	profileData: any;
}

const PageResultPage: NextPage<SummonerResultProps> = props => {
	const { profileData } = props;
	console.log(profileData);
	return (
		<>
			<Text>Teste</Text>
		</>
	);
};

export default PageResultPage;
