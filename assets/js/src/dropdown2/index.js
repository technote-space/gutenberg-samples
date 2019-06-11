import { Common, RichText } from '@technote-space/register-grouped-format-type';

const { registerFormatTypeGroup, registerGroupedFormatType } = RichText;
const { getToolbarButtonProps, getColorButtonProps, getFontSizesButtonProps } = Common.Helpers;

registerFormatTypeGroup( 'test2', {
	icon: 'admin-network',
} );
registerFormatTypeGroup( 'inspector', {
	inspectorSettings: {
		title: 'test inspector',
		initialOpen: true,
	},
} );

registerGroupedFormatType( getToolbarButtonProps( 'test1', 'dropdown2-test1', 'admin-customizer' ) );
registerGroupedFormatType( getToolbarButtonProps( 'test2', 'dropdown2-test2', 'admin-customizer' ) );
registerGroupedFormatType( getToolbarButtonProps( 'test2', 'dropdown2-test3', 'admin-customizer' ) );

registerGroupedFormatType( getColorButtonProps( 'inspector', 'font-color', 'Font Color', 'admin-site', 'color' ) );
registerGroupedFormatType( getColorButtonProps( 'inspector', 'background-color', 'Background Color', 'editor-textcolor', 'background-color' ) );
registerGroupedFormatType( getFontSizesButtonProps( 'inspector', 'font-size', 'Font Size', 'edit' ) );
