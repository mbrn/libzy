import path from 'path';

module.exports = {
    root: path.resolve(__dirname, '../', '../'),
    outputPath: path.resolve(__dirname, '../', '../', 'docs'),
    entryPath: path.resolve(__dirname, '../', '../', 'src/index.js'),
    publicPath: path.resolve(__dirname, '../', '../', 'public'),
    templatePath: path.resolve(__dirname, '../', '../', 'public/index.html'),
    imagesFolder: 'images',
    fontsFolder: 'fonts',
    cssFolder: 'css',
    jsFolder: 'js'
};