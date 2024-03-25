// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public:{
      apiUrl: process.env.NUXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000"
    }
  },
  devtools: { enabled: true },
  css: ['boxicons/css/boxicons.min.css'],
  modules: [
    ["@pinia/nuxt",{
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
    '@pinia-plugin-persistedstate/nuxt',
  ],  
  app: {
    
    head: {
      title: 'Home',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },
      ],
    }
  },
})
