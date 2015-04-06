// ============ ogden ==============

// Include gulp
var gulp = require('gulp');

// Include Plugins
var ftp = require('vinyl-ftp');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

// Compile Sass
gulp.task('sass', function() {
  return sass('scss/main.scss', { sourcemap: true })
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

// Concatenate JS
gulp.task('scripts', function() {
  gulp.src('scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js/'))
});

// Dev FTP: Sass and CSS
gulp.task('ftp-dev', function() {

    var connDev = ftp.create({
      host: '66.241.194.6',
      user: 'chrisd',
      pass: 'aachrisd',
    });

    var globsDev = [
      'css/**',
      'scss/**'
    ]

    return gulp.src( globsDev, { base: '.', buffer: false } )
        .pipe( connDev.newer( '/ogden' ) ) // only upload newer files 
        .pipe( connDev.dest( '/ogden' ) );

});

// Prod FTP: Sass and CSS
gulp.task('ftp-prod', function() {

    var connProd = ftp.create({
      host: '66.241.194.5',
      user: 'chrisd',
      pass: 'G00berz',
    });

    var globsProd = [
      'css/**',
      'scss/**'
    ]

    return gulp.src( globsProd, { base: '.', buffer: false } )
        .pipe( connProd.newer( '/Atlas/Sites/KenticoCMS 7.0.103/ogden' ) ) // only upload newer files 
        .pipe( connProd.dest( '/Atlas/Sites/KenticoCMS 7.0.103/ogden' ) );

});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('css/*.css', ['ftp-dev','ftp-prod']);
});

// Default Task
gulp.task('default', ['watch']);