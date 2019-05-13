require( 'should' );

import { getRichTextSetting } from '../../src/dropdown1/utils';

describe( 'getRichTextSetting test', () => {
	it( 'should get setting', () => {
		let calledCreate = false;
		const setting = getRichTextSetting( {
			name: 'test1', create: () => {
				calledCreate = true;
			},
		}, 1 ); // eslint-disable-line no-magic-numbers
		setting.should.have.length( 2 ); // eslint-disable-line no-magic-numbers
		setting[ 0 ].should.type( 'string' );
		setting[ 1 ].should.ownProperty( 'title' );
		setting[ 1 ].should.ownProperty( 'tagName' );
		setting[ 1 ].should.ownProperty( 'className' );
		setting[ 1 ].should.ownProperty( 'edit' );
		setting[ 1 ].title.should.type( 'string' );
		setting[ 1 ].tagName.should.type( 'string' );
		setting[ 1 ].className.should.type( 'string' );
		setting[ 1 ].edit.should.type( 'function' );
		setting[ 1 ].edit();
		calledCreate.should.equal( true );
	} );
} );
