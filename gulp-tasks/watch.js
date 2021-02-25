const gulp = require( 'gulp' );
const pkg = require( '../package.json' );

module.exports = {
	main() {
		// watch main plugin postcss

		gulp.watch( [
			`${ pkg.gravityflow.paths.css_src }admin/admin.pcss`,
			`${ pkg.gravityflow.paths.css_src }admin/base/**/*.pcss`,
			`${ pkg.gravityflow.paths.css_src }admin/components/**/*.pcss`,
			`${ pkg.gravityflow.paths.css_src }admin/deprecated/**/*.pcss`,
			`${ pkg.gravityflow.paths.css_src }admin/global/**/*.pcss`,
			`${ pkg.gravityflow.paths.css_src }admin/mixins/**/*.pcss`,
			`${ pkg.gravityflow.paths.css_src }admin/pages/**/*.pcss`,
			`${ pkg.gravityflow.paths.css_src }admin/variables/**/*.pcss`,
		], gulp.parallel( 'postcss:adminCss' ) );

		gulp.watch( [
			`${ pkg.gravityflow.paths.css_src }admin/editor.pcss`,
			`${ pkg.gravityflow.paths.css_src }admin/editor/**/*.pcss`,
		], gulp.parallel( 'postcss:editorCss' ) );

		gulp.watch( [
			`${ pkg.gravityflow.paths.css_src }admin/settings.pcss`,
			`${ pkg.gravityflow.paths.css_src }admin/settings/**/*.pcss`,
		], gulp.parallel( 'postcss:settingsCss' ) );

		gulp.watch( [
			`${ pkg.gravityflow.paths.css_src }theme/**/*.pcss`,
		], gulp.parallel( ['postcss:baseCss', 'postcss:themeCss', 'postcss:adminThemeCss'] ) );
	},
};
