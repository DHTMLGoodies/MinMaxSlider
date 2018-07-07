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

