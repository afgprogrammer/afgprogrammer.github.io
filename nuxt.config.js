export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  server: {
    host: '172.30.11.64'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Afgprogrammer - Mohammad Rahmani',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-126624955-3'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-lazy-load',
    '@nuxt/content',
    '@nuxtjs/axios',
    ['@openafg/nuxt-fullpage', {
      showIndicators: false
    }],
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-2490274469917078',
      includeQuery: true,
      onPageLoad: false,
      analyticsDomainName: 'afgprogrammer.com',
      overlayBottom: true,
      pageLevelAds: false
    }]
  ],

  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css'
      }
    }
  },

  publicRuntimeConfig: {
    'google-adsense': {
      id: process.env.GOOGLE_ADSENSE_ID,
      test: process.env.GOOGLE_ADSENSE_TEST_MODE === 'true',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
