export default {
  lang: 'fr',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GES-POF',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    port: 4000,
  },

  env: {
    name: "GES-PSYOFLIFE ",
    API_BASE_URL: process.env.API_BASE_URL,
    POF_API_PUBLIC: process.env.API_KEY_PUBLIC,
    POF_API_PRIVATE: process.env.API_KEY_PRIVATE,
    POF_API_VERSION: process.env.API_VERSION,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style.scss"],

  // Color loading line
  loading: { color: "#090913" },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui', '~/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/moment", "@nuxtjs/dotenv"],

  moment: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/
    "@nuxtjs/auth-next",

  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL,
  },

  auth: {
    plugins: ['~/plugins/axios'],
    strategies: {
      local: {
        token: {
          property: "body.token",
          global: true,
          required: true,
          type: "Bearer",
        },
        user: {
          property: "body",
          autoFetch: true
        },
        endpoints: {
          login: { url: '/sessions', method: 'post' },
          logout: { url: '/sessions', method: 'delete' },
          user: { url: "/psys", method: "get" },
        },
      },
    },
    redirect: {
      login: "/",
      logout: "/",
      callback: "/",
      home: "/dashboard",
    },
  },

  router: {
    middleware: ["auth"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
}
