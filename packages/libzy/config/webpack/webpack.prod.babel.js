import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';	
import path from 'path';

import paths from './paths';
import rules from './rules';

module.exports = {
    mode: 'production',
    output: {
        filename: `${paths.jsFolder}/[name].[hash].js`,
        path: paths.outputPath,
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
          { from: path.resolve(paths.publicPath, 'assets'), to: path.resolve(paths.outputPath, 'assets') }	
        ]),
    ],
    devtool: 'source-map'
};