import {
	Center,
	Input,
	InputGroup,
	InputRightAddon,
	Stack,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Formik } from 'formik';

interface IInput {
	name: string;
}

const Home: NextPage = () => {
	const searchSummoner = (values: IInput) => {};

	return (
		<>
			<Head>
				<title>League Observer</title>
				<meta name='description' content='Prototype' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Center height='100vh' bgColor='#2D3748'>
					<Stack>
						<Formik
							initialValues={{
								name: '',
							}}
							onSubmit={searchSummoner}
						>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting,
								/* and other goodies */
							}) => (
								<form onSubmit={handleSubmit}>
									<InputGroup>
										<Input
											id='summoner-name'
											placeholder='Search for a Summoner'
											bgColor='white'
										/>
										<InputRightAddon>
											<SearchIcon />
										</InputRightAddon>
									</InputGroup>
								</form>
							)}
						</Formik>
					</Stack>
				</Center>
			</main>
		</>
	);
};

export default Home;
