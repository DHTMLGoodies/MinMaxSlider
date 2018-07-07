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

