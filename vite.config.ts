import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import purgecss from 'vite-plugin-purgecss';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig(({ isSsrBuild }) => ({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        purgecss({
            content: [
                './resources/**/*.tsx',
                './resources/**/*.ts',
                './resources/**/*.js',
                './resources/**/*.jsx',
                './resources/**/*.html',
                './resources/**/*.blade.php',
            ],
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    build: {
        target: 'es2017',
        cssCodeSplit: true,
        sourcemap: false,
        rollupOptions: {
            output: !isSsrBuild ? {
                manualChunks: {
                    vendor: [
                        'react',
                        'react-dom',
                        'lucide-react',
                    ],
                    'radix-ui': [
                        '@radix-ui/react-separator',
                        '@radix-ui/react-dialog',
                        '@radix-ui/react-dropdown-menu',
                        '@radix-ui/react-slot',
                    ],
                },
            } : undefined,
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
}));
