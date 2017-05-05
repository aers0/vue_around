module.exports = {
  build: {
    vendor: ['vuetify']
  },
  plugins: ['~plugins/vuetify.js'],
  css: [
    { src: '../css/app.styl', lang: 'styl' }
  ],
  head: {
    title: 'Auth Routes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Auth Routes example' }
    ],
	link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  }

}
