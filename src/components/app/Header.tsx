import {
	Button,
	HStack,
	Input,
	Menu,
	MenuButton,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
	Stack,
	Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const Header = () => {
	const [title, setTitle] = useState('BR');

	const handleChange = (value: string | string[]) => {
		setTitle(String(value));
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<HStack w='100%' justify='center' py={2} backgroundColor='gray.500'>
			<HStack flex={1} justify='space-between'>
				<Stack>
					<Text>f4flash.gg</Text>
				</Stack>
				<form onSubmit={handleSubmit}>
					<HStack>
						<Menu closeOnSelect={false} matchWidth>
							<MenuButton as={Button} colorScheme='blue' width='150px'>
								{title}
							</MenuButton>
							<MenuList minWidth='110px'>
								<MenuOptionGroup
									defaultValue='BR'
									title='Regions'
									type='radio'
									onChange={handleChange}
								>
									<MenuItemOption value='BR'>BR</MenuItemOption>
									<MenuItemOption value='NA'>NA</MenuItemOption>
									<MenuItemOption value='EU'>EU</MenuItemOption>
									<MenuItemOption value='LAS'>LAS</MenuItemOption>
									<MenuItemOption value='KR'>KR</MenuItemOption>
								</MenuOptionGroup>
							</MenuList>
						</Menu>
						<Input
							placeholder='Search For a Summoner'
							maxW={360}
							w='100%'
							backgroundColor='white'
						/>
					</HStack>
				</form>
				<Stack>
					<Text>Teste</Text>
				</Stack>
			</HStack>
		</HStack>
	);
};

export default Header;
