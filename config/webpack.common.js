const paths = require("./paths");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SemiWebpackPlugin = require("@douyinfe/semi-webpack-plugin").default;

module.exports = {
    entry: [paths.src + "/index.js"],
    output: {
        path: paths.build,
        filename: "[name].bundle.js",
        publicPath: "/",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.src + "/assets",
                    to: "assets",
                    globOptions: {
                        ignore: ["*.DS_Store"],
                    },
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: "National Missing and Unidentified Persons Kenya",
            favicon: paths.src + "/assets/icons/favicon.png",
            template: paths.public + "/index.html", // template file
            filename: "index.html",
        }),
        new SemiWebpackPlugin({
            theme: "@semi-bot/semi-theme-sims",
            // include: "~@semi-bot/semi-theme-sims/scss/local.scss",
            include: paths.src + '/theme.scss',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { sourceMap: true, importLoaders: 1 },
                    },
                    { loader: "sass-loader", options: { sourceMap: true } },
                ],
            },
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },
            { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
        ],
    },
};
