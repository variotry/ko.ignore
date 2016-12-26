let gulp = require( "gulp" );

gulp.task( "minify:js", () =>
{
	let build = require( "./gulpfiles/JavaScript" ).minifyJavaScript;
	return build( "src/**/*.js", "dist" );
} );