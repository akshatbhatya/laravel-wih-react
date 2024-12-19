import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { accepts } from 'express/lib/request';


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
        headers:{
          accepts:"application/json",
          'content-type':"application/json",
        }
      },
    },
  },
});
