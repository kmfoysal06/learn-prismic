
/**
 * Webpack configuration.
 */
const path                    = require('path')
const MiniCssExtractPlugin    = require('mini-css-extract-plugin')

// JS Directory path.
const JS_DIR    = path.resolve(__dirname, 'src/js')
const BUILD_DIR = path.resolve(__dirname, 'build')

const entry = {
    main: JS_DIR + '/main.js',
}
const output = {
  path: BUILD_DIR,
  filename: 'js/[name].js'
}

const plugins = (argv) => [
  new MiniCssExtractPlugin({
    filename: 'css/[name].css'
  }),
]

const rules = [
  {
    test: /\.(js|jsx)$/,
    include: [JS_DIR],
    exclude: /node_modules/,
    use: 'babel-loader'
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ]
  },
{
    test: /\.css$/,
    exclude: /node_modules\/(?!driver\.js)/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
    ]
  },
]

/**
 * Since you may have to disambiguate in your webpack.config.js between development and production builds,
 * you can export a function from your webpack configuration instead of exporting an object
 *
 * @param {string} env environment ( See the environment options CLI documentation for syntax examples. https://webpack.js.org/api/cli/#environment-options )
 * @param argv options map ( This describes the options passed to webpack, with keys such as output-filename and optimize-minimize )
 * @return {{output: *, devtool: string, entry: *, optimization: {minimizer: [*, *]}, plugins: *, module: {rules: *}, externals: {jquery: string}}}
 *
 * @see https://webpack.js.org/configuration/configuration-types/#exporting-a-function
 */
module.exports = (env, argv) => ({

  entry: entry,

  output: output,

  /**
   * A full SourceMap is emitted as a separate file ( e.g.  main.js.map )
   * It adds a reference comment to the bundle so development tools know where to find it.
   * set this to false if you don't need it
   */
  devtool: 'source-map',

  module: {
    rules: rules
  },


  plugins: plugins(argv),

  externals: {
    jquery: 'jQuery'
  }
})

