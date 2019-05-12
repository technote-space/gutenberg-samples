const webpack = require( 'webpack' );
const p = require( './package' );
const target = 'dropdown1';

const banner = `${ target } ${ p.version }\nCopyright (c) ${ new Date().getFullYear() } ${ p.author }\nLicense: ${ p.license }`;

const webpackConfig = {
	context: __dirname + `/src/${ target }`,
	entry: './index.js',
	output: {
		path: __dirname,
		filename: `${ target }.min.js`,
		library: `${ target }`,
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	externals: {
		lodash: 'lodash',
	},
	plugins: [
		new webpack.BannerPlugin( banner ),
	],
};

module.exports = webpackConfig;