const gulp = require('gulp')
const path = require('path')
const RevAll = require('gulp-rev-all')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const less = require('gulp-less')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')
const Config = require('./config.js')

const plugins = [
  autoprefixer({
    browsers: ['last 3 version'],
  }),
  cssnano({
    reduceIdents: false,
    zindex: false,
  }),
]

function prod() {
  gulp.task('html', () => gulp.src(Config.html.src)
    .pipe(htmlmin({
      removeComments: true, // 清除HTML注释
      // collapseWhitespace: true,//压缩HTML
      collapseBooleanAttributes: true, // 省略布尔属性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true, // 删除所有空格作属性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true, // 删除<script>的type="text/javascript"
      removeStyleLinkTypeAttributes: true, // 删除<style>和<link>的type="text/css"
      // minifyJS: true,//压缩页面JS
      minifyCSS: true, // 压缩页面CSS
    }))
    .pipe(gulp.dest(Config.html.dist)))

  gulp.task('assets', () => gulp.src(Config.assets.src).pipe(gulp.dest(Config.assets.dist)))

  gulp.task('css', () => gulp.src(Config.css.src)
    .pipe(postcss(plugins))
    .pipe(gulp.dest(Config.css.dist)))

  gulp.task('less', () => gulp
    .src(Config.less.src).pipe(postcss(plugins))
    .pipe(less())
    .pipe(gulp.dest(Config.less.dist)))

  gulp.task('js', () => gulp
    .src(Config.js.src)
    .pipe(uglify()).pipe(gulp.dest(Config.js.dist)))

  gulp.task('images', () => gulp.src(Config.img.src).pipe(imagemin({
    optimizationLevel: 3,
    progressive: true,
    interlaced: true,
  })).pipe(gulp.dest(Config.img.dist)))

  gulp.task('build', ['html', 'css', 'less', 'js', 'assets', 'images'], () => {
    gulp.src([path.resolve(__dirname, '../dist/**')])
      .pipe(RevAll.revision({
        dontRenameFile: ['.html'], // 不给 html 文件添加版本号
        dontUpdateReference: ['.html'], // 不给文件里链接的html加版本号
      }))
      .pipe(gulp.dest(path.resolve(__dirname, '../cdn')))
  })
}

module.exports = prod
