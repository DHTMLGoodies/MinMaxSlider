# ts loader webpack

Experienced some problems with ts-loader, so using awesome-typescript-loader instead


https://github.com/s-panferov/awesome-typescript-loader

```
module: {
    rules: [
        {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/
        }
    ]
},
```

awesome-typescript-loader options can be specified in tsconfig.json

```
"awesomeTypescriptLoaderOptions": {}
```

# Sass

Using the min-css-extract-plugin

```
npm install --save-dev mini-css-extract-plugin
```

In webpack.config.js

```
{
    test: /\.scss$/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {}
        },
        "css-loader", // translates CSS into 
        {
            loader: "sass-loader",
            options: {
                includePaths: [path.resolve(__dirname, 'scss/**/*.scss')]
            }
        }
    ]
}
```

First the sass-loader, then the css-loader, and finally the MinCssExtractPlugin loader.

## Clean directory before Webpack build

```
npm install clean-webpack-plugin --save-dev
```

Usage in webpack.config.js

```
const CleanWebpackPlugin = require('clean-webpack-plugin');
...
    plugins: [
        new CleanWebpackPlugin(['dist']),
        ...
```

## Testing with karma

Install types
```
npm install @types/chai --save-dev
npm install @types/mocha --save-dev
npm install @types/sinon --save-dev
```

Install karma and testing frameworks

```
npm install chai --save-dev
npm install karma --save-dev
npm install karma-chai --save-dev
npm install karma-chrome-launcher --save-dev
npm install karma-mocha --save-dev
npm install karma-mocha-reporter --save-dev
npm install karma-phantomjs-launcher --save-dev
npm install karma-sinon --save-dev
npm install karma-webpack --save-dev
npm install mocha --save-dev
```

Pre-process typescript in karma.conf.js

```
preprocessors: {
    "test/**/*.ts": ["webpack"] // Using karma-webpack npm module
},
```

Add mime type to karma.conf.js

```
mime: {
    'text/x-typescript': ['ts']
},
```

Entire karma.conf.js

```
var webpackConfig = require("./webpack.config");

module.exports = function (config) {
    config.set({
        /*
         * Enable or disable watching files and executing the tests whenever
         * one of the files in the "files" field is changed.
         */
        autoWatch: true,

        /*
         * The root path location that will be used to resolve all relative
         * paths defined in "files" and "exclude".
         */
        basePath: "",

        /*
         * List of browsers to launch and capture tests in. In order to use a
         * specified browser, you must npm install the corresponding
         * karma-***-launcher.
         * http://karma-runner.github.io/0.13/config/browsers.html
         */
        browsers: ["Chrome"],

        // Enable or disable colors in the output (reporters and logs)
        colors: true,

        // List of files/patterns to exclude from loaded files
        exclude: [],

        /*
         * The files array determines which files are included in the browser
         * and which files are watched and served by Karma. The order of patterns
         * determines the order in which files are included in the browser.
         * http://karma-runner.github.io/0.13/config/files.html
         */
        files: [
            "test/**/*.ts"
        ],
        mime: {
            'text/x-typescript': ['ts']
        },
        /*
         * List of test frameworks you want to use. For example, if you want to
         * use mocha, chai, and sinon, you'll need to npm install their
         * corresponding karma-*** modules and include them in the list of plugins
         * as well as below.
         */
        frameworks: ["mocha", "chai", "sinon"],

        logLevel: config.LOG_INFO,

        /*
         * By default, Karma loads all sibling NPM modules which have a name
         * starting with karma-*. You can also explicitly list plugins you want
         * to load via the plugins configuration setting.
         */
        plugins: [
            "karma-*"
        ],

        // The port where the Karma web server will be listening.
        port: 9876,

        /*
         * A map of preprocessors to use. Requires the corresponding karma-*
         * npm module to be npm installed and added to the "plugins" field.
         */
        preprocessors: {
            "test/**/*.ts": ["webpack"] // Using karma-webpack npm module
        },

        /*
         * A list of reporters to use to display the test results. In order to
         * use the karma-mocha-reporter, you must npm install the module and
         * include it in the list of plugins.
         */
        reporters: ["mocha"],

        /*
         * If true, Karma will start and capture all configured browsers, run
         * tests and then exit with an exit code of 0 or 1 depending on whether
         * all tests passed or any tests failed.
         */
        singleRun: false,

        /*
         * This field is necessary because we are using webpack as a preprocessor.
         * You will need to specify the webpack configuration (although in this
         * case, we are simply leveraging the existing webpack.config.js file).
         *
         * If you have a different webpack.config.js file that's used for testing
         * purposes, you can specify that here.
         */
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },

    });
};
```


## Exclude jquery from build

webpack.config.js:

```
externals: {
    jquery: 'jQuery'
},
```
