const mix = require("laravel-mix");
require("laravel-mix-purgecss");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/site.js", "public/js")
    //Uncomment this if you require jQuery

    // .autoload({
    //     jquery: ['$', 'window.jQuery', 'jQuery', 'jquery']
    // })
    .sass("resources/sass/styles.scss", "public/css")
    .purgeCss({
        extend: {
            content: [
                "./resources/**/*.antlers.html",
                "./resources/**/*.blade.php",
                "./resources/**/*.vue",
                "./content/**/*.md",
            ],
        },
    });

if (mix.inProduction()) {
    mix.version();
}

//Setting based-on Homestead configuration.
mix.browserSync({
    host: '192.68.56.10',
    port: 3000,
    proxy: 'http://domain.test',
    files: [
        './**/*.css',
        './app/**/*',
        './config/**/*',
        './resources/views/**/*',
        './routes/**/*'
    ],
    open: false,
    watchOptions: {
        usePolling: true,
        interval: 200
    }
});
/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .postCss('resources/css/cp.css', 'public/vendor/app/css', [
//     require('postcss-import'),
//     require('tailwindcss/nesting'),
//     require('tailwindcss'),
// ])
