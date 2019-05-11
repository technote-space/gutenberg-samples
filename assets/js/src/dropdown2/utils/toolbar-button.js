const { registerFormatType, toggleFormat } = wp.richText;
const { Fragment } = wp.element;
const addFilter = wp.hooks.addFilter;

import { PLUGIN_NAME } from '../constant';
import MyDropdownControls from '../components/my-dropdown-controls';
import MyDropdown from '../components/my-dropdown';

/**
 * @param {object} args args
 * @param {string} name name
 * @param {string} formatName format name
 * @returns {{onClick: onClick, icon: *, title: *, isActive: boolean}} toolbar button properties
 */
export const getToolbarButtonProps = ( { args, name, formatName } ) => {
	return {
		icon: 'admin-customizer',
		title: <div className={ name }>
			{ name }
		</div>,
		onClick: () => {
			args.onChange( toggleFormat( args.value, {
				type: formatName,
			} ) );
		},
		isActive: args.isActive,
	};
};

const groups = {};

/**
 * @param {string} name name
 * @param {string} title title
 * @param {string} tagName tag name
 * @param {string} className class name
 * @param {function} create create component function
 * @param {string} group group
 */
export const registerGroupedFormatType = ( {
	name,
	title = name,
	tagName = 'span',
	className = name,
	create,
	group,
} ) => {
	const formatName = PLUGIN_NAME + '/' + name;
	if ( ! ( group in groups ) ) {
		const dropdownControls = MyDropdownControls( group );
		groups[ group ] = {
			Slot: dropdownControls.Slot,
			Fill: dropdownControls,
		};
	}

	const { Fill } = groups[ group ];
	registerFormatType( formatName, {
		title,
		tagName,
		className,
		edit: args => <Fill>
			{ create( { args, name, formatName } ) }
		</Fill>,
	} );
};

addFilter(
	'editor.BlockEdit',
	PLUGIN_NAME + '/render-dropdown',
	BlockEdit => props => <Fragment>
		<BlockEdit { ...props } />
		{ props.isSelected && Object.keys( groups ).map( key => MyDropdown( groups[ key ].Slot ) ) }
	</Fragment>,
);
