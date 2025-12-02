import { defineConfig } from 'vite'

export default defineConfig({
    // base: './', // Removed to use default '/' which is better for Cloudflare Pages root deployment
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    }
})
