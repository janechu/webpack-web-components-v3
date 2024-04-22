/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ResolveTypeScriptPlugin = require("resolve-typescript-plugin");

const srcDir = path.resolve(__dirname, "./src");
const publicDir = path.resolve(__dirname, "./public");
const outDir = path.resolve(__dirname, "./www");

module.exports = {
    entry: {
        main: path.resolve(srcDir, "index.ts"),
    },
    resolve: {
        extensions: [".ts", ".js"],
        plugins: [new ResolveTypeScriptPlugin()],
    },
    output: {
        path: outDir,
        publicPath: "/",
    },
    devServer: {
        port: 7776,
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
            {
              test: /\.css$/,
              use: [
                  {
                      loader: "css-loader",
                  },
              ],
            },
            {
                test: /\.(svg|png|jpe?g|gif|ttf)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                    },
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Test application",
            template: path.resolve(publicDir, "index.html")
        }),
    ],
};