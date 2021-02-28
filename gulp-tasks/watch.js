const gulp = require( 'gulp' );
const pkg = require( '../package.json' );

module.exports = {
	main() {
		// watch main plugin postcss

		gulp.watch( [
			`${ pkg.gravityflow.paths.css_src }admin/**/*.pcss`,
		], gulp.parallel( 'postcss:adminCss' ) );

		gulp.watch( [
			`${ pkg.gravityflow.paths.css_src }theme/**/*.pcss`,
		], gulp.parallel( 'postcss:themeCss' ) );
	},
};
