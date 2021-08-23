require('@babel/register')({
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: '> 0.25%, not dead'
      }
    ],
    '@babel/preset-react'
  ]
})
require('global-jsdom/register')
