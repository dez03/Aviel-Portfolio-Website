import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      fastRefresh: false, // Disable Fast Refresh
    }),
    NodeGlobalsPolyfillPlugin({
      buffer: true,
    }),
  ],
  server: {
    open: true,
  },
});