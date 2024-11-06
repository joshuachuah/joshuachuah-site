import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    publicDir: 'public',
    root: path.resolve(__dirname),
    envDir: './',
    envPrefix: 'VITE_',
    define: {
      'import.meta.env.VITE_CLOUDINARY_CLOUD_NAME': JSON.stringify(env.VITE_CLOUDINARY_CLOUD_NAME),
      'import.meta.env.VITE_CLOUDINARY_API_KEY': JSON.stringify(env.VITE_CLOUDINARY_API_KEY),
      'import.meta.env.VITE_CLOUDINARY_API_SECRET': JSON.stringify(env.VITE_CLOUDINARY_API_SECRET)
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      assetsDir: 'assets',
      rollupOptions: {
        input: path.resolve(__dirname, 'index.html')
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
})