const gulp = require('gulp')
const mkdirp = require('mkdirp')
const path = require('path')
const rename = require('gulp-rename')
const {
  dependencies,
} = require('../package.json')
const Config = require('./config.js')


const nodeModules = path.resolve(__dirname, '../node_modules')
const htmlTemplatePath = path.resolve(__dirname, './')

function create() {
  gulp.task('create', () => {
    [
      Config.html.dir,
      Config.assets.dir,
      Config.css.dir,
      Config.less.dir,
      Config.js.dir,
      Config.img.dir,
    ].forEach((dir) => {
      mkdirp.sync(dir)
    })

    Object.keys(dependencies).forEach((item) => {
      gulp.src([
        `${nodeModules}/${item}/dist/${item}.js`,
        `${nodeModules}/${item}/dist/js/${item}.js`,
      ])
        .pipe(gulp.dest(Config.js.dir))

      gulp.src([
        `${nodeModules}/${item}/dist/css/${item}.css`,
        `${nodeModules}/${item}/${item}`,
      ])
        .pipe(gulp.dest(Config.css.dir))
    })

    gulp.src(`${htmlTemplatePath}/html-template.html`)
      .pipe(rename('index.html'))
      .pipe(gulp.dest(Config.html.dir))
  })
}

module.exports = create
