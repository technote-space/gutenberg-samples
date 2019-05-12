require( '@technote-space/register-grouped-format-type' );

const { ToolbarButton } = wp.components;
const { toggleFormat, registerFormatTypeGroup, registerGroupedFormatType } = wp.richText;

const getProps = ( group, name ) => {
	return {
		name,
		group,
		create: ( { args, name, formatName } ) => <ToolbarButton
			icon='admin-customizer'
			title={ <div className={ name }>{ name }</div> }
			onClick={ () => args.onChange( toggleFormat( args.value, { type: formatName } ) ) }
			isActive={ args.isActive }
		/>,
	};
};

registerFormatTypeGroup( 'test1', {
	icon: 'admin-network',
} );

registerGroupedFormatType( getProps( 'test1', 'dropdown2-test1' ) );
registerGroupedFormatType( getProps( 'test2', 'dropdown2-test2' ) );
registerGroupedFormatType( getProps( 'test2', 'dropdown2-test3' ) );
