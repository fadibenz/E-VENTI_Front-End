import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
        // sassOptions: {
        //   fiber: require('fibers'),
        // },
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
});
