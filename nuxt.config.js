module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Telegram Form – отправляем данные формы с сайта в Telegram',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
		'~/assets/css/global.css'
	],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
		'@nuxtjs/pwa',
	],
	manifest: {
		name: 'Telegram Form',
		short_name: 'Telegram Form',
		description: 'Отправляем данные формы с сайта в Telegram',
		start_url: '/',
		lang: 'ru',
		display: 'fullscreen',
		theme_color: '#096dd9',
		background_color: '#f2f2f2'
	},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
