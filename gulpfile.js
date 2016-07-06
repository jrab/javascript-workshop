var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass 		= require('gulp-sass');
var concat 		= require('gulp-concat');
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
	gulp.src('src/app/**/*.scss')
		.pipe(concat('main.scss'))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('templates', function () {

	gulp.src('src/*.html')
		.pipe(gulp.dest('dist/'));

	gulp.src('src/app/components/**/views/*.html')
		.pipe(gulp.dest('dist/partials/'));
});

gulp.task('javascript', function () {

	gulp.src(['src/app/*.js', 'src/app/**/*.js'])
		.pipe(concat('app.js'))
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

	gulp.watch('src/app/**/*.scss', ['styles']);
	gulp.watch('src/**/*.html', ['templates']);
	gulp.watch('src/app/**/*.js', ['javascript']);
});

gulp.task('default', ['clean', 'bower', 'data-files', 'styles', 'javascript', 'templates', 'watch', 'browser-sync']);
