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
    sidebar: [{      
      path: '/',      // optional, link of the title, which should be an absolute path and must exist
      sidebarDepth: 1,    // optional, defaults to 1
      items: [
        { text: 'Comenzar', link: '/get-start' },
        { text: 'Instalación', link: '/install' },
        { text: 'Configurar Entorno', link: '/env-config' },
        { text: 'Archivo App.ts', link: '/app-ts-file' },
        { text: 'Depurar Código', link: '/code-debugging' }
      ]}, {
      text: 'AutoCRUDx Tools',   // required
      path: '/autocrudx-tools/',
      collapsible: true,
      collapsed: false,
      items: [
        { text: 'Importar AutoCRUDx Tools', link: '/autocrudx-tools/import-autocrudx-tools' },
        { text: 'Herramientas Funcionales', link: '/autocrudx-tools/functional-tools' },
        { text: 'Información de Tablas', link: '/autocrudx-tools/table-information' }
      ]}, {
        text: 'Stack',   // required
        path: '/stack/',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Carpeta Stack', link: '/stack/folder' },
          { text: 'Renderizaciones', link: '/stack/renderings' },
          { text: 'Proceso', link: '/stack/process' },
          { text: 'Plantillas', link: '/stack/templates' }
        ]
    },{      
      path: '/',      // optional, link of the title, which should be an absolute path and must exist
      sidebarDepth: 1,    // optional, defaults to 1
      items: [
        { text: 'Contribución', link: '/contribution' }
      ]}],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/auto-crudx' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Ernesto Canquiz'
    }    
  }
})

 
