import { extendTheme } from '@chakra-ui/react';
import { ChakraTheme } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';

import { fonts } from './foundations/fonts';
import { config } from './foundations/config';

export const extensions: Partial<ChakraTheme> = Object.freeze({
	config,
	fonts,
	styles: {
		global: props => ({
			body: {
				bg: mode('gray.100', 'gray.900')(props),
			},
		}),
	},
});

export const theme = extendTheme(extensions);
