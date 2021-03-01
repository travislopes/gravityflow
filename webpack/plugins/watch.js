const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	theme: [
		new MiniCssExtractPlugin( {
			filename: '../../../css/[name].css',
		} ),
	],
	admin: [
		new MiniCssExtractPlugin( {
			filename: '../../../css/[name].css',
		} ),
	],
};
