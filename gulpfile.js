var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass 		= require('gulp-sass');

var vendorJSFiles = [ 	'bower_components/angular/angular.min.js',
						'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js' ];
var vendorCSSFiles = [ 'bower_components/bootstrap/dist/css/bootstrap.min.css' ];

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

	gulp.src(vendorJSFiles)
		.pipe(gulp.dest('dist/assets/js/vendor/'));

	gulp.src(vendorCSSFiles)
		.pipe(gulp.dest('dist/assets/css/vendor/'));
});

gulp.task('watch', function () {

	gulp.watch('src/sass/**/*', ['styles']);
	gulp.watch('src/templates/**/*', ['templates']);
	gulp.watch('src/javascript/**/*', ['javascript']);
});

gulp.task('default', ['bower', 'styles', 'javascript', 'templates', 'watch', 'browser-sync']);
