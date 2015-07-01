var gulp = require('gulp');
var runseq = require('run-sequence');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var assign = require('lodash.assign');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var shell = require('gulp-shell');
var $ = require('gulp-load-plugins')();

var paths = {
  scripts: {
    src: ['app/src/app.js'],
    map: 'app/src',
    dest: 'app/build'
  }
};

gulp.task('default', ['lint', 'buildrun']);

// ** Running ** //

gulp.task('run', shell.task([
  'node app/build/app.js'
]));

// ** Compilation ** //

var browserifyOpts = {
  debug: true,
  entries: [paths.scripts.src],
  transform: [babelify.configure({
    sourceMapRelative: paths.scripts.map
  })]
};
var opts = assign({}, watchify.args, browserifyOpts);
var b = watchify(browserify(opts));

var bundle = function () {
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(paths.scripts.dest));
};

gulp.task('build', bundle);
b.on('update', bundle);
b.on('log', $.util.log);

// ** Linting ** //

gulp.task('lint', ['lint:default']);
gulp.task('lint:default', function () {

});

// ** Testing ** //

gulp.task('karma', function () {
  var karma = require('gulp-karma');

  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});
