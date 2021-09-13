const path = require('path');
// importuję bibliotekę [path] z [node.js]
const HtmlWebpackPlugin = require('html-webpack-plugin');
// importuję plugin [html-webpack-plugin]
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// importuję plugin [clean-webpack-plugin]
module.exports = function(env = {}) {

    const {production: isProd = false} = env;
    // w zmiennej [isProd] przechowuję informację
    // w jakim trybie uruchomić webpack-a

    return  {
        entry: './src/app.js',
        // definiuję plik wejściowy
        mode: isProd ? 'production' : 'development',
        // definiuję tryb pracy webpack-a
        devtool: isProd ? 
            'none' : 'eval-cheap-module-source-map',
        // definiuję identyfikację kodu źródłowego
        output: {
            path: path.resolve(__dirname, 'build'),
            // definiuję ścieżką wyjściową
            filename: 'app.[hash].js',
            // definiuję nazwę pliku wyjściowego
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    // określam jakie pliki 
                    // będą brane pod uwagę
                    exclude: /node_modules/,
                    // określam wykluczenia
                    use: 'babel-loader',
                    // określam jaki [loader]
                    // ma być wykorzystany
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    // dodaję rozszerzenia obrazów
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            // ustawiam nazwę pliku
                            outputPath: 'images',
                            // ustawiam nazwę katalogu, do którego
                            // będą kopiowane obrazy
                        }
                    }
                    // tym razem tylko jeden loader
                },
                {
                    test: /\.(ttf|otf|woff|woff2)$/,
                    // dodaję rozszerzenia obrazów
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            // ustawiam nazwę pliku
                            outputPath: 'fonts',
                            // ustawiam nazwę katalogu, do którego
                            // będą kopiowane font-y
                        }
                    }
                    // tym razem tylko jeden loader
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                // wskazuję plik źródłowy
                filename: 'index.html'
                // określam nazwę dla pliku
            }),
            new CleanWebpackPlugin(),
            // uruchamiam czyszczenie katalogu [build]
        ]
    }
}
// eksportuję ustawienia dla webpack-a