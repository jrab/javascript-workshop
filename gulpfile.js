var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass 		= require('gulp-sass');

var vendorFiles = [ 'bower_components/angular/angular.min.js' ];

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
});

gulp.task('styles', function () {
	gulp.src('src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('templates', function () {

	gulp.src('src/templates/**/*.html')
		.pipe(gulp.dest('dist/'));
});

gulp.task('javascript', function () {

	gulp.src('src/javascript/**/*.js')
		.pipe(gulp.dest('dist/assets/js/'));
});

gulp.task('bower', function () {

	gulp.src(vendorFiles)
		.pipe(gulp.dest('dist/assets/js/vendor/'));
});

gulp.task('watch', function () {

	gulp.watch('src/sass/**/*', ['styles']);
	gulp.watch('src/templates/**/*', ['templates']);
	gulp.watch('src/javascript/**/*', ['javascript']);
});

gulp.task('default', ['bower', 'styles', 'javascript', 'templates', 'watch', 'browser-sync']);
