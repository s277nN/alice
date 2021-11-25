const CracoAlias = require('craco-alias')

module.exports = {
  eslint: {
    enable: false
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@': './src',
          '@styles': './src/assets/styles',
          '@image': './src/assets/images'
        }
      }
    }
  ]
}
