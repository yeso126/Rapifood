var gulp =        require('gulp');
var plumber =     require('gulp-plumber');
var browserSync = require('browser-sync');
var uglify =      require('gulp-uglify');
var notify =      require('gulp-notify');
var sass =        require('gulp-sass');


//Preprocessors


gulp.task('sass', function () {
  gulp.src('./src/sass/estilos.sass')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(notify({ message: 'Sass task complete' }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('browser-sync', function() {
      'use strict';
    browserSync.init({
        server: {
            baseDir: './dist',
            index: 'index.html'
        }
    });
    gulp.watch('dist/*.html').on('change', browserSync.reload);
    gulp.watch('dist/css/*.css').on('change', browserSync.reload);
    gulp.watch('dist/js/*.js').on('change', browserSync.reload);
  });

// WatchTask

gulp.task('watch', function(){
  'use strict';
  gulp.watch(['./src/sass/estilos.sass', './src/sass/*/**'], ['sass']);
});


//ToDo

gulp.task('default',['watch', 'sass','browser-sync']);
