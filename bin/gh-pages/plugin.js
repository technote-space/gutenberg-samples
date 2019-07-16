const { Fragment } = wp.element;
const { addFilter } = wp.hooks;

import './plugin.scss';

window.cbkParams = window.cbkParams || {};

addFilter( 'gh-pages.renderContent', 'plugin/renderContent', () => <Fragment>
	<p>This page is demonstration of <a href="https://github.com/technote-space/gutenberg-samples">Gutenberg Samples</a></p>
	<img className='playground__content__screenshot' src='./screenshot.png'/>
</Fragment> );
