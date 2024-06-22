import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'EventPulse',
        short_name: 'EventP',
        start_url: '/eventpulse/',
        scope: '/eventpulse/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4DBA87',
        icons: [
          {
            src: '/public/EventPluse_icone.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/public/EventPluse_icone.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/public/EventPluse_icone.png',
            sizes: '32x32',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})




