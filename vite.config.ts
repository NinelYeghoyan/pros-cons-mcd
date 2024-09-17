import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    base: '/pros-cons-mcd/',
    build: {
        outDir: 'build',
    },
    plugins: [react(), svgr()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@layout', replacement: path.resolve(__dirname, 'src/layout') },
            { find: '@style', replacement: path.resolve(__dirname, 'src/style') },
            { find: '@type', replacement: path.resolve(__dirname, 'src/type') },
        ],
    },
});
