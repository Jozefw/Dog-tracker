rules: [
    {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
    },
    {
        test: /\.(woff|woff2|ttf|svg|eot)$/,
        use: [
            {
                loader: 'file-loader',
                options: {}
            }
        ]
    }]