require( 'should' );

import { getToolbarButtonProps } from '../../src/dropdown2/utils';

describe( 'getToolbarButtonProps test', () => {
	it( 'should has properties', () => {
		const props = getToolbarButtonProps( { args: { isActive: false }, name: 'test1', formatName: 'test2' } );
		props.should.ownProperty( 'icon' );
		props.should.ownProperty( 'title' );
		props.should.ownProperty( 'onClick' );
		props.should.ownProperty( 'isActive' );
		props.isActive.should.equal( false );
	} );
} );
