const gulp = require('gulp')
const less = require('gulp-less')
const path = require('path')
const browserSync = require('browser-sync').create()
const Config = require('./config.js')

const {
  reload,
} = browserSync

function dev() {
  gulp.task('html:dev', () => gulp.src(Config.html.src)
    .pipe(gulp.dest(Config.html.dist))
    .pipe(reload({
      stream: true,
    })))
  gulp.task('assets:dev', () => gulp.src(Config.assets.src)
    .pipe(gulp.dest(Config.assets.dist))
    .pipe(reload({
      stream: true,
    })))
  gulp.task('css:dev', () => gulp.src(Config.css.src)
    .pipe(gulp.dest(Config.css.dist))
    .pipe(reload({
      stream: true,
    })))
  gulp.task('less:dev', () => gulp.src(Config.less.src)
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')],
    }))
    .pipe(gulp.dest(Config.less.dist))
    .pipe(reload({
      stream: true,
    })))
  gulp.task('js:dev', () => gulp.src(Config.js.src)
    .pipe(gulp.dest(Config.js.dist))
    .pipe(reload({
      stream: true,
    })))
  gulp.task('images:dev', () => gulp.src(Config.img.src)
    .pipe(gulp.dest(Config.img.dist))
    .pipe(reload({
      stream: true,
    })))
  gulp.task('dev', ['html:dev', 'css:dev', 'less:dev', 'js:dev', 'assets:dev', 'images:dev'], () => {
    browserSync.init({
      server: {
        baseDir: Config.dist,
      },
      notify: false,
    })
    gulp.watch(Config.html.src, ['html:dev'])
    gulp.watch(Config.css.src, ['css:dev'])
    gulp.watch(Config.less.src, ['less:dev'])
    gulp.watch(Config.assets.src, ['assets:dev'])
    gulp.watch(Config.js.src, ['js:dev'])
    gulp.watch(Config.img.src, ['images:dev'])
  })
}

module.exports = dev
