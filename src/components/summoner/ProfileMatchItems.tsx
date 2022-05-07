import {
	Box,
	ListItem,
	SimpleGrid,
	Stack,
	UnorderedList,
	VStack,
} from '@chakra-ui/react';
import ChakraNextImage from '../app/ChakraNextImage';

interface MathItemsProps {
	items: number[];
	trincket: number;
}

export const ProfileMatchItems = (props: MathItemsProps) => {
	const { items, trincket } = props;

	console.log(items);
	return (
		<>
			<Stack justify='center'>
				<UnorderedList styleType='none' w='80px' lineHeight='12px' ml={0}>
					{items.map((item, i) =>
						item !== 0 ? (
							<ListItem display='inline-block' mr={1}>
								<ChakraNextImage
									src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${items[i]}.png`}
									alt={`Item ${i}`}
									width='22px'
									height='22px'
									key={item}
									rounded={2}
								/>
							</ListItem>
						) : (
							<ListItem
								w='22px'
								h='22px'
								bg='gray.500'
								rounded={2}
								mt='0 !important'
								display='inline-block'
							/>
						)
					)}
				</UnorderedList>
			</Stack>
			<Stack ml='0 !important' justify='center'>
				<ChakraNextImage
					src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${trincket}.png`}
					alt={`Trincket`}
					width='22px'
					height='22px'
					rounded={2}
				/>
			</Stack>
		</>
	);
};
