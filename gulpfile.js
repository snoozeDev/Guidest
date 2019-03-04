var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
// var watch = require( 'gulp-watch' );

var cfg = require( './gulpconfig.json' );
var paths = cfg.paths;

gulp.task( 'sass', function() {
    return stream = gulp.src( paths.sass + '/*.scss' )
        .pipe( plumber( {
            errorHandler: function( err ) {
                console.log( err );
                this.emit( 'end' );
            }
        } ) )
        .pipe( sass( { errLogToConsole: true } ) )
        .pipe( autoprefixer( 'last 2 versions' ) )
        .pipe( gulp.dest( paths.css ) );
    //.pipe( rename( 'custom-editor-style.css' ) );
});

gulp.task( 'watch', function() {
    gulp.watch( paths.sass + '/**/*.scss', ['styles'] );
});
