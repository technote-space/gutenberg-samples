import {Common, RichText } from '@technote-space/register-grouped-format-type';

const { registerFormatTypeGroup, registerGroupedFormatType, getRemoveFormatButton } = RichText;
const { getToolbarButtonProps, getColorButtonProps, getFontSizesButtonProps } = Common.Helpers;

registerFormatTypeGroup( 'test2', {
	icon: 'admin-network',
} );
registerFormatTypeGroup( 'inspector', {
	toolbarGroup: 'inspector',
	inspectorSettings: {
		title: 'test inspector',
		initialOpen: true,
	},
	useContrastChecker: true,
	additionalInspectors: [ getRemoveFormatButton( 'remove all formats' ) ],
} );

registerGroupedFormatType( getToolbarButtonProps( 'test1', 'dropdown2-test1', 'admin-customizer' ) );
registerGroupedFormatType( getToolbarButtonProps( 'test2', 'dropdown2-test2', 'admin-customizer' ) );
registerGroupedFormatType( getToolbarButtonProps( 'test2', 'dropdown2-test3', 'admin-customizer' ) );

registerGroupedFormatType( getColorButtonProps( 'font-color', 'Font Color', 'admin-site', 'color' ) );
registerGroupedFormatType( getColorButtonProps( 'background-color', 'Background Color', 'editor-textcolor', 'background-color' ) );
registerGroupedFormatType( getFontSizesButtonProps( 'font-size', 'Font Size', 'edit' ) );
