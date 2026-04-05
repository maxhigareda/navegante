import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.svg', 'favicon.svg', 'covers/*.png', 'covers/*.jpg'],
      manifest: {
        name: 'Navegante Lector',
        short_name: 'Navegante',
        description: 'Plataforma de lectura guiada cognitivamente',
        theme_color: '#1a1a2e',
        background_color: '#f7f7f7',
        display: 'standalone',
        icons: [
          {
            src: 'logo.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'logo.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ],
});
