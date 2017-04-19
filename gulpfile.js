var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var imagemin = require('gulp-imagemin');

gulp.task('live-server',function(){
  var server = new LiveServer('server/main.js');
  server.start();
})

gulp.task('serve',['live-server'],function(){
  browserSync.init(null,{
    proxy:"http://localhost:7779",
    port: 8001
  });

  gulp.watch(['app/*.html',],reload);
  //can't be used as STATIC DIR is ./.tmp
  gulp.watch(['app/css/*.css'],reload);
  gulp.watch(['app/*.js'],reload);

  //watch for changes from .tmp/ directory
  //and make changes to their respective app/ files
  gulp.watch(['./.tmp/css/*.css'],reload);
  gulp.watch(['./.tmp/*.js'],reload);
})

/////////////////////////////////////////
gulp.task('images',function(){
  gulp.src('app/images/**')
  .pipe(imagemin({optimizationLevel:5}))
  .pipe(gulp.dest('./.tmp/img'))
})

gulp.task('copy',function(){
  gulp.src(['app/css/*.css','node_modules/toastr/build/toastr.css','node_modules/bootstrap/dist/css/bootstrap.css','node_modules/toastr/build/toastr.css'])
  .pipe(gulp.dest('./.tmp/css'));

  gulp.src(['app/*.js','node_modules/bootstrap/dist/js/bootstrap.js'])
  .pipe(gulp.dest('./.tmp'))

  gulp.src(['app/raw/*.mp3'])
  .pipe(gulp.dest('./.tmp/raw'))


})

gulp.task('bundle',['images','copy'],function(){
    return browserify({
          entries: 'app/main.jsx',
          debug:true
        })
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./.tmp'))
})
//////////////////////////////////////////


gulp.task('default',['serve','bundle']);
