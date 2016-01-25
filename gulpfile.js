var gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	bourbone = require('node-bourbon').includePaths;

gulp.task('sass',function(){
	gulp.src('development/style.scss')
		.pipe(sass({
			includePaths: require('node-bourbon').includePaths
		}))
		.pipe(gulp.dest('development/css'))
		.pipe(connect.reload())
});	

gulp.task('connect',function(){
	connect.server({
		root : 'development/',
		livereload : true
	})
});

gulp.task('html',function(){
	gulp.src('development/index.html')
		.pipe(connect.reload())
});
gulp.task('watch',function(){
	gulp.watch('development/index.html',['html']);
	gulp.watch('development/style.scss',['sass']);
});

gulp.task('default',['connect','watch']);