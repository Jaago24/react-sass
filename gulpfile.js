const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const path = require('path');

// Paths
const scssPath = path.join(__dirname, 'scss', 'index.scss'); // SCSS entry file
const cssDest = path.join(__dirname, 'public', 'css'); // Destination for compiled CSS

// Compile SCSS to CSS
function buildStyles() {
  return src(scssPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(cssDest));
}

// Watch SCSS files for changes
function watchTask() {
  watch([scssPath], buildStyles);
}

// Default task
exports.default = series(buildStyles, watchTask);
