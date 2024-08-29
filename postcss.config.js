const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [ require('autoprefixer')]
},
module.exports = {
    plugins: [
      purgecss({
        content: ['./**/*.html']
      })
    ]
  }