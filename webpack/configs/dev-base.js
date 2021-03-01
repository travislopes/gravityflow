/**
 * External Dependencies
 */
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );

/**
 * Internal Dependencies
 */
const base = require( './base.js' );
const sc = require( '../optimization/split-chunks' );
const splitChunks = process.env.NODE_ENV === 'themedev' ? sc.scTheme : sc.scAdmin;

module.exports = merge.strategy( {
	plugins: 'append',
} )( base, {
	cache: true,
	mode: 'development',
	output: {
		filename: '[name].js',
		chunkFilename: '[name].[chunkhash].js',
	},
	devtool: 'eval-source-map',
	plugins: [
		new webpack.LoaderOptionsPlugin( {
			debug: true,
		} ),
	],
	optimization: {
		splitChunks,
		noEmitOnErrors: true, // NoEmitOnErrorsPlugin
		concatenateModules: true, //ModuleConcatenationPlugin
	},
} );
