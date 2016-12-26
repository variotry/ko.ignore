let gulp = require( "gulp" ),
	sourcemaps = require( "gulp-sourcemaps" ),
	gutil = require( "gulp-util" ),
	rename = require( "gulp-rename" ),
	uglify = require( "gulp-uglify" );

module.exports = {
	minifyJavaScript : ( src, dest, options ) =>
	{
		options = options || {};

		if ( Array.isArray( src ) === false )
		{
			src = [src];
		}

		return gulp.src( src )
			.pipe( options.sourceMap ? sourcemaps.init() : gutil.noop() )
			.pipe( uglify( {
				preserveComments: "some"
			} ) )
			.pipe( rename( { extname: ".min.js" } ) )
			.pipe( options.sourceMap ? sourcemaps.write( "../sourcemaps/js" ) : gutil.noop() )
			.pipe( gulp.dest( dest ) );
	}
}