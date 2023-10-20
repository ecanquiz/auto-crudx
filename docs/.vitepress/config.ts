import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PWA",
  description: "Aprende",
  base: '/auto-crudx/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/mylogo.png',  
    siteTitle: 'Aprende PWA',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Tutorial', link: '/overview' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' }
    ],

    sidebar: [
      {      
        path: '/',      // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        items: [
          { text: 'Visión General', link: '/overview' },
          { text: 'Progressive Web Apps', link: '/pwa' },
          { text: 'Empezando', link: '/getting-started' },
          { text: 'Fundamentos', link: '/foundations' },          
        ]
      }      
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/learn-pwa' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Ernesto Canquiz'
    }    
  }
})

 
