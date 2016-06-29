var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass 		= require('gulp-sass');
var del 		= require('del');

var vendorJSFiles = [ 	'bower_components/angular/angular.min.js',
						'bower_components/angular-ui-router/release/angular-ui-router.min.js',
						'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js' ];

var vendorCSSFiles = [ 	'bower_components/bootstrap/dist/css/bootstrap.min.css',
						'bower_components/components-font-awesome/css/font-awesome.min.css' ];

var vendorFontFiles = [ 'bower_components/components-font-awesome/fonts/*' ];

var dataFiles = [ 'data/*' ];

// clear dist folder

gulp.task('clean', function (cb) {
	del.sync(['dist'], cb);
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);
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

	gulp.src(vendorFontFiles)
		.pipe(gulp.dest('dist/assets/css/fonts/'));
});

gulp.task('data-files', function () {

	gulp.src(dataFiles)
		.pipe(gulp.dest('dist/data/'));
});

gulp.task('watch', function () {

	gulp.watch('src/sass/**/*', ['styles']);
	gulp.watch('src/templates/**/*', ['templates']);
	gulp.watch('src/javascript/**/*', ['javascript']);
});

gulp.task('default', ['clean', 'bower', 'data-files', 'styles', 'javascript', 'templates', 'watch', 'browser-sync']);
