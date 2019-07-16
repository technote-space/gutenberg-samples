const { registerFormatType } = wp.richText;

import { createToolbarButton, getRichTextSetting } from './utils';

[
	{
		name: 'test1',
		create: createToolbarButton,
	},
	{
		name: 'test2',
		create: createToolbarButton,
	},
	{
		name: 'test3',
		create: createToolbarButton,
	},
].forEach( ( { name, create, setting = {} }, index ) => registerFormatType( ...getRichTextSetting( { name, create, setting }, index ) ) );
