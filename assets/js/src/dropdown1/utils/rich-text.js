const { Fragment } = wp.element;

import { PLUGIN_NAME } from '../../common/constant';
import MyDropdown from '../components/my-dropdown';
import MyDropdownControls from '../components/my-dropdown-controls';

/**
 * @param {string} name name
 * @param {number} index index
 * @param {function} create create component function
 * @param {object} setting setting
 * @returns {array} setting
 */
export const getRichTextSetting = ( { name, create, setting = {} }, index ) => {
	const formatName = PLUGIN_NAME + '/' + name;
	const component = args => <MyDropdownControls>
		{ create( { args, name, formatName } ) }
	</MyDropdownControls>;

	setting.title = setting.title || name;
	setting.tagName = setting.tagName || 'span';
	setting.className = setting.className || name;
	setting.edit = args => {
		if ( ! index ) {
			return <Fragment>
				{ component( args ) }
				<MyDropdown/>
			</Fragment>;
		}
		return component( args );
	};
	return [ formatName, setting ];
};
