import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure( {
	adapter: new Adapter(),
	snapshotSerializers: [ 'enzyme-to-json/serializer' ],
} );

const Mousetrap = require( 'mousetrap' );
const lodash = require( 'lodash' );
global.Mousetrap = Mousetrap;
global.window.lodash = lodash;
global.window.matchMedia = () => ( {
	matches: true, addListener: () => {
	},
} );

const blockLibrary = require( '@wordpress/block-library' );
const blockEditor = require( '@wordpress/block-editor' );
const blocks = require( '@wordpress/blocks' );
const components = require( '@wordpress/components' );
const compose = require( '@wordpress/compose' );
const coreData = require( '@wordpress/core-data' );
const data = require( '@wordpress/data' );
const editor = require( '@wordpress/editor' );
const element = require( '@wordpress/element' );
const hooks = require( '@wordpress/hooks' );
const richText = require( '@wordpress/rich-text' );

global.wp = {
	blockLibrary,
	blockEditor,
	blocks,
	components,
	compose,
	coreData,
	data,
	editor,
	element,
	hooks,
	richText,
};

blockLibrary.registerCoreBlocks();

hooks.removeAllFilters( 'editor.BlockEdit' );
