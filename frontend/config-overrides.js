const { override, addBabelPresets, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addBabelPresets(
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ),
  addWebpackModuleRule({
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  }),
  addWebpackModuleRule({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
      'ts-loader'
    ]
  })
);
