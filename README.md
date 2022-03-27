<img src="https://user-images.githubusercontent.com/28453847/160145495-e4d54605-db62-4a4e-af6b-20b356d4f897.png" width="600" height="350">

# bootstrap-starter-kit

## Features

-   Quick prototyping with everything ready for Bootstrap 5.
-   No more headache configuring laravel-mix/webpack to work with Bootstrap 5.
-   No more clicking refresh button eveytime you make changes (BrowserSync)
-   No more slow website because of big css and js file size. (PurgeCss and Minify)
-   Organized view's folder structure.
-   No more configuring blueprint to change layout of page.
-   jQuery boilerplate in webpack.

## Quick Start

You can create a new site using the [Statamic CLI Tool](https://github.com/statamic/cli):

```
statamic new your-site lynnx/bootstrap-boilerplate
```

Or you can install manually into a fresh [Statamic installation](https://statamic.dev/installation) by running:

`php please starter-kit:install bootstrap-boilerplate --clear-site`

## Using BrowserSync

-   Auto reload when you run `npm run watch`. Change the browsersync configuration (host, port and proxy) in the webpack.mix.js based on your development environment.

<img src="https://user-images.githubusercontent.com/28453847/160145558-a831180d-f2f3-48ab-b575-6b3addfd9120.png" width="600" height="500">
