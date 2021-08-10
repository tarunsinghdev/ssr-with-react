// import 'ignore-styles';
require('ignore-styles');
require('@babel/register')({
  ignore: [/node_modules/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

// import babelRegister from '@babel/register';
// babelRegister({
//   ignore: [/node_modules/],
//   presets: ['@babel/preset-env', '@babel/preset-react'],
// });
// import './server.js';
require('./server');
