import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
    build: {
        cssCodeSplit: true,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                passes: 2,
                pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
            },
            mangle: {
                safari10: true,
            },
        },
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('@radix-ui')) {
                            return 'radix-ui';
                        }
                        if (id.includes('react') || id.includes('react-dom')) {
                            return 'vendor';
                        }
                        if (id.includes('framer-motion')) {
                            return 'animations';
                        }
                    }
                },
                experimentalMinChunkSize: 20000,
            },
        },
    },
    optimizeDeps: {
        include: ['react', 'react-dom', '@inertiajs/react'],
        exclude: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
    },
});
