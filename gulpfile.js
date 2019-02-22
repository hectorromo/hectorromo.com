var gulp = require('gulp')
var browserSync = require('browser-sync')
var cp = require('child_process')
var browserify = require('gulp-browserify')
var unassert = require('gulp-unassert');
var rename = require('gulp-rename')
// var connect = require('gulp-connect-php')

// gulp.task('connect', function() {
//     browserSync({
//         server: {
//             baseDir: '/'
//         }
//     });
// });
// gulp.task('connect', function() {
//     connect.server({}, function() {
//         browserSync({
//             proxy: '127.0.0.1:8000'
//         })
//     })
// })

// gulp.task('browser-reload', browserSync.reload);







var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit', JEKYLL_ENV:'development'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});
/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['scripts', 'jekyll-rebuild'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});





gulp.task('scripts', function() {
    var stream = gulp.src('js/app.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .pipe(unassert())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./js'));

    stream.on('end', browserSync.reload);
});





// gulp.task('watch', function () {
//     gulp.watch(['js/*.js', 'js/*/*.js'], ['scripts']);
//     gulp.watch(['index.html', 'api.php'], ['browser-reload']);
// })

// gulp.task('default', ['connect', 'watch']);





gulp.task('watch', function () {
    gulp.watch(['js/*.js', 'js/*/*.js'], ['scripts']);
    gulp.watch(['index.html', '*/*.html', '*/*.md', 'en/**/*', '_layouts/*.html', '_includes/*.html', '_posts/*', '_data/*', '_config.yml', 'js/*.js', 'sitemap.xml',], ['jekyll-rebuild']);
});


/**
 * Default task, running just `gulp` will compile the less,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
// gulp.task('prod', ['browser-sync', 'production']);
gulp.task('build', ['scripts', 'jekyll-build']);
