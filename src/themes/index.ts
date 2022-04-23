import { extendTheme } from '@chakra-ui/react';
import { ChakraTheme } from '@chakra-ui/theme';

import { fonts } from './foundations/fonts';
import { config } from './foundations/config';

export const extensions: Partial<ChakraTheme> = Object.freeze({
	config,
	fonts,
});

export const theme = extendTheme(extensions);
