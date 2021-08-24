var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-image-optimize');
var watch = require('gulp-watch');

gulp.task('concat', function() {
  return gulp.src([
    'src/css/normalize.css',
    'src/css/style.css',
    'src/css/header.css',
    'src/css/main.css',
    'src/css/footer.css'
  ])
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('app/css'));
});

gulp.task('cleanCss', function() {
  return gulp.src('app/css/style.min.css')

  .pipe(cleanCss())
  .pipe(gulp.dest('app/css'));
});

gulp.task('uglify', function() {
  return gulp.src([
    'src/js/jquery-3.4.1.min.js',
    'src/js/jquery-migrate-3.1.0.min.js',
    'src/js/jquery.breakpoints.min.js',
    'src/js/script.js'
  ])
  .pipe(concat('libs-min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});

gulp.task('imagemin', function() {
  return gulp.src('src/img/*')

  .pipe(imagemin())
  .pipe(gulp.dest('app/img'));
});

gulp.task('watch', function() {
  gulp.watch('src/css/*.css', gulp.series('concat', 'cleanCss'));
  gulp.watch('src/js/*.js', gulp.series('uglify'));
});
