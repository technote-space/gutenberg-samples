const { ToolbarButton } = wp.components;

import { PLUGIN_NAME } from './constant';
import { registerGroupedFormatType, getToolbarButtonProps } from './utils';

[
	{
		name: 'test1',
		create: ( { args, name, formatName } ) => <ToolbarButton
			{ ...getToolbarButtonProps( { args, name, formatName } ) }
		/>,
		group: 'test1',
	},
	{
		name: 'test2',
		create: ( { args, name, formatName } ) => <ToolbarButton
			{ ...getToolbarButtonProps( { args, name, formatName } ) }
		/>,
		group: 'test1',
	},
	{
		name: 'test3',
		create: ( { args, name, formatName } ) => <ToolbarButton
			{ ...getToolbarButtonProps( { args, name, formatName } ) }
		/>,
		group: 'test2',
	},
].forEach( ( { name, create, group } ) => registerGroupedFormatType( { name, className: PLUGIN_NAME + '-' + name, create, group: PLUGIN_NAME + '/' + group } ) );
