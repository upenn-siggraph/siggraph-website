/* eslint-disable unicorn/prefer-module */

// const isProd = api.cache(() => process.env.NODE_ENV === 'production')
/** @type import("@babel/core").TransformOptions */
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    // isProd && 'uglify:after',
  ],
}
