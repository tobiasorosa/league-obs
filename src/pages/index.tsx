import { Center, Input, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>League Observer</title>
				<meta name='description' content='Prototype' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Center flex={1}>
					<Input />
					<Text>Teste</Text>
				</Center>
			</main>
		</>
	);
};

export default Home;
