export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: true,
  srcDir: '.',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],

  components: [{ path: '~/components', pathPrefix: false }],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'ko' },
      title: '어진석의 포트폴리오',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          hid: 'description',
          name: 'description',
          content:
            '어떤 프로젝트를 진행했는지 알려주는 저의 포트폴리오 사이트입니다.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          innerHTML:
            "if (!window.wcs_add) window.wcs_add = {}; window.wcs_add['wa'] = '15960f98fc7584'; if (window.wcs) { window.wcs_do(); }",
          type: 'text/javascript',
          tagPosition: 'bodyClose',
        },
        {
          src: '//wcs.naver.net/wcslog.js',
          type: 'text/javascript',
          tagPosition: 'bodyClose',
        },
      ],
    },
  },

  googleFonts: {
    families: {
      'Noto+Sans+KR': [100, 300, 400, 500, 700],
      Montserrat: [400, 700],
      'Droid+Serif': [400, 700],
      'Roboto+Slab': [100, 300, 400, 700],
    },
    display: 'swap',
    preload: true,
  },

  nitro: {
    preset: 'static',
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark-dimmed',
          langs: [
            'js',
            'jsx',
            'json',
            'ts',
            'tsx',
            'vue',
            'css',
            'scss',
            'html',
            'bash',
            'sh',
            'md',
            'mdc',
            'yaml',
            'sql',
            'java',
            'kotlin',
            'cpp',
            'lua',
          ],
        },
      },
    },
  },

  typescript: {
    strict: true,
  },
})
