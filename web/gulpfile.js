var gulp =        require('gulp');
var plumber =     require('gulp-plumber');
var browserSync = require('browser-sync');
var uglify =      require('gulp-uglify');
var notify =      require('gulp-notify');


//Preprocessors

gulp.task('stylus', function() {
  'use strict';
  gulp.src(['./src/sass/estilos.styl'])
  	.pipe(plumber())
    .pipe(stylus({
      'use': [nib()],
      'include css': true,
      'compress': true
    }))
    .pipe(notify({ message: 'Stylus task complete' }))
    .pipe(gulp.dest('./public/css/'));
});


gulp.task('browser-sync', function() {
      'use strict';
    browserSync.init({
        server: {
            baseDir: './public',
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
  gulp.watch(['./src/stylus/**/*.styl'],['stylus']);
});


//ToDo

gulp.task('default',['watch', 'stylus','browser-sync']);
