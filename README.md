## Features

-   Quick prototyping with everything ready for Bootstrap 5.
-   No more headache configuring laravel-mix/webpack to work with Bootstrap 5.
-   No more clicking refresh button eveytime you make changes (BrowserSync)
-   No more slow website because of big css and js file size. (PurgeCss and Minify)
-   Organized view's folder structure.
-   No more configuring blueprint to change layout of page.
- 

## Quick Start

You can create a new site using the [Statamic CLI Tool](https://github.com/statamic/cli):

```
statamic new your-site lynnx/bootstrap-starter-kit
```

Or you can install manually into a fresh [Statamic installation](https://statamic.dev/installation) by running:

```php please starter-kit:install bootstrap-starter-kit --clear-site```

## Using BrowserSync

- Auto reload when you run ```npm run watch```. Change the browsersync configuration (host, port and proxy) in the webpack.mix.js based on your development environment.
