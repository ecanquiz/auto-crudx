import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Auto-CRUD",
  description: "Aprende",
  base: '/auto-crudx/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/mylogo.png',  
    siteTitle: 'Auto-CRUD',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Comenzar', link: '/get-start' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' }
    ],

    sidebar: [
      {      
        path: '/',      // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        items: [
          { text: 'Comenzar', link: '/get-start' },
          { text: 'Instalación', link: '/install' },
          { text: 'Carpeta config', link: '/config-folder' },
          { text: 'Archivo app.ts', link: '/app-ts-file' },          
          { text: 'Carpeta stack', link: '/stack-folder' },          
          { text: 'Auto CRUDx Tool', link: '/autocrudx-tool' },
        ]
      }      
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/auto-crudx' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Ernesto Canquiz'
    }    
  }
})

 
