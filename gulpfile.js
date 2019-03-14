var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
// var watch = require( 'gulp-watch' );
// var gulpSequence = require('gulp-sequence');
var sourcemaps = require( 'gulp-sourcemaps' );
var cleanCSS = require( 'gulp-clean-css' );
var autoprefixer = require( 'gulp-autoprefixer' );
var rename = require( 'gulp-rename' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );

var cfg = require( './gulpconfig.json' );
var paths = cfg.paths;

// Sass task
gulp.task( 'sass', function() {
    return stream = gulp.src( paths.sass + '/*.scss' )
        .pipe( sass( { errLogToConsole: true } ) )
        .pipe( autoprefixer( 'last 2 versions' ) )
        .pipe( gulp.dest( paths.css ) );
    //.pipe( rename( 'custom-editor-style.css' ) );
});

// MinifyCSS Task
gulp.task( 'minifycss', function() {
    return gulp.src( paths.css + '/style.css' )
        .pipe( sourcemaps.init( { loadMaps: true } ) )
        .pipe( cleanCSS( { compatibility: '*' } ) )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( sourcemaps.write( './' ) )
        .pipe( gulp.dest( paths.css ) );
});

// TODO Minifyjs
gulp.task( 'scripts', async function() {
    var scripts = [

        // Start - All BS4 stuff
        paths.dev + '/js/bootstrap.js',

        // End - All BS4 stuff

        // Adding currently empty javascript file to add on for your own themes´ customizations
        // Please add any customizations to this .js file only!
        paths.dev + '/js/custom-javascript.js'
    ];
    var cookieconsent = paths.dev + '/js/cookies.js';
    gulp.src( scripts )
        .pipe( concat( 'scripts.min.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( paths.js ) );

    gulp.src( scripts )
        .pipe( concat( 'scripts.js' ) )
        .pipe( gulp.dest( paths.js ) );

    gulp.src( cookieconsent )
        .pipe( concat( 'cookies.min.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( paths.js ) );

});

// Run gulp watch
gulp.task( 'watch', function() {
    gulp.watch( paths.sass + '/*.scss', gulp.series('sass', 'minifycss') );
    gulp.watch( [paths.devjs + '/*.js'], gulp.series('scripts') );
});
