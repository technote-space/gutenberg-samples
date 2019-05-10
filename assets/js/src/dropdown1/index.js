const { registerFormatType } = wp.richText;
const { ToolbarButton } = wp.components;

import { getToolbarButtonProps, getRichTextSetting } from './utils';

[
	{
		name: 'test1',
		create: ( { args, name, formatName } ) => <ToolbarButton
			{ ...getToolbarButtonProps( { args, name, formatName } ) }
		/>,
	},
	{
		name: 'test2',
		create: ( { args, name, formatName } ) => <ToolbarButton
			{ ...getToolbarButtonProps( { args, name, formatName } ) }
		/>,
	},
	{
		name: 'test3',
		create: ( { args, name, formatName } ) => <ToolbarButton
			{ ...getToolbarButtonProps( { args, name, formatName } ) }
		/>,
	},
].forEach( ( { name, create, setting = {} }, index ) => registerFormatType( ...getRichTextSetting( { name, create, setting }, index ) ) );
