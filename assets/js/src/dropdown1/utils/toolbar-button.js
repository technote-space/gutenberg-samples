const { toggleFormat } = wp.richText;

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
