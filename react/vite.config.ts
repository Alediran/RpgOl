import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslint from 'vite-plugin-eslint';
import mkcert from 'vite-plugin-mkcert'

const oneYearInSeconds = 60 * 60 * 24 * 365;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), eslint(), 
    mkcert({
      force: true, 
      autoUpgrade: true
    })
  ],
  envDir: "./env",
  server: {
    port: 4200,
    https: true,
    headers: {
      'Strict-Transport-Security': `max-age=${oneYearInSeconds}`
    }
  }
})
