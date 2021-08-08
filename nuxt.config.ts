import { NuxtWebpackEnv } from '@nuxt/types/config/build';
import RemarkHTML from 'remark-html';
import { resolve } from 'path';

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '포트폴리오',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // alias: {
  //   '~~': resolve(__dirname, './'),
  //   '@@': resolve(__dirname, './'),
  //   '~': resolve(__dirname, './'),
  //   '@': resolve(__dirname),
  //   static: resolve(__dirname, 'static'), // (unless you have set a custom `dir.static`)
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
  ],

  static: {
    prefix: false,
  },

  bootstrapVue: {
    icons: false,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
    // extend(config: any, ctx: NuxtWebpackEnv) {
    //   config.module.rules.push({
    //     test: /\.md$/,
    //     use: [
    //       {
    //         loader: 'html-loader',
    //       },
    //       {
    //         loader: 'remark-loader',
    //         options: {
    //           remarkOptions: {
    //             plugins: [RemarkHTML],
    //           },
    //         },
    //       },
    //     ],
    //   });
    // },
  },
  devtools: true,
  target: 'server',
};
