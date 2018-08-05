const SRC_DIR = './src/'
const DIST_DIR = './dist/'

const Config = {
  src: SRC_DIR,
  dist: DIST_DIR,
  html: {
    dir: SRC_DIR,
    src: `${SRC_DIR}*.html`,
    dist: DIST_DIR,
  },
  assets: {
    dir: `${SRC_DIR}assets`,
    src: `${SRC_DIR}assets/**/*`,
    dist: `${DIST_DIR}assets`,
  },
  css: {
    dir: `${SRC_DIR}css`,
    src: `${SRC_DIR}css/**/*.css`, // CSS目录：./src/css/
    dist: `${DIST_DIR}css`, // CSS文件build后存放的目录：./dist/css
  },
  less: {
    dir: `${SRC_DIR}less`,
    src: `${SRC_DIR}less/**/*.less`,
    dist: `${DIST_DIR}css`,
  },
  js: {
    dir: `${SRC_DIR}js`,
    src: `${SRC_DIR}js/**/*.js`,
    dist: `${DIST_DIR}js`,
    build_name: 'build.js',
  },
  img: {
    dir: `${SRC_DIR}images`,
    src: `${SRC_DIR}images/**/*`,
    dist: `${DIST_DIR}images`,
  },
}

module.exports = Config
