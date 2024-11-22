import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  
  build: {
    outDir: 'dist', // Directorio de salida
    assetsDir: 'assets', // Carpeta dentro de dist donde se guardarán los assets
  },
  
});
