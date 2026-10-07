import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base = nombre de tu repositorio en GitHub Pages
export default defineConfig({ plugins: [react()], base: '/gabywakil-portafolio/' });
