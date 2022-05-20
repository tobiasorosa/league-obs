import { ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import { generateKey } from '~/src/utils/generate-key';
import ChakraNextImage from '../app/ChakraNextImage';

interface MathItemsProps {
	items: number[];
	trincket: number;
}

export const MatchItems = (props: MathItemsProps) => {
	const { items, trincket } = props;

	return (
		<>
			<Stack justify='center'>
				<UnorderedList styleType='none' w='80px' lineHeight='12px' ml={0}>
					{items.map((item, i) =>
						item !== 0 ? (
							<ListItem display='inline-block' mr={1} key={generateKey(item)}>
								<ChakraNextImage
									src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/${item}.png`}
									alt={`Item ${i}`}
									width='22px'
									height='22px'
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
								mr={1}
								key={item}
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
