import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000',
            },
            '/media': {
                target: 'http://127.0.0.1:8000',
            }
        }
    },
    build: {
        outDir: '../server/client-dist',
    }
})
