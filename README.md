### gulp-merge-css (css合并)

```
    const
        gulp = require('gulp'),
        mergeCSS = require('../index');
    
    gulp.task('default', () => {
        gulp.src('assets/css/*.css')
            .pipe(mergeCSS({ name: 'app.css' }))
            .pipe(gulp.dest('dist'));
    });

```
## options
```name || fileName``` merges file name\
other options see [gulp-concat-css](https://www.npmjs.com/package/gulp-concat-css) options

### Listen
ISC