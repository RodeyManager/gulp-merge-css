/**
 * Created by Rodey on 2017/4/7.
 */

const
    gulp = require('gulp'),
    mergeCSS = require('../index');


gulp.task('default', () => {
    gulp.src('assets/css/*.css')
        .pipe(mergeCSS({ name: 'app.css' }))
        .pipe(gulp.dest('dist'));
});