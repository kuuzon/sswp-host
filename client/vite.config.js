import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [
      react(),
      vanillaExtractPlugin() // https://vanilla-extract.style/documentation/integrations/vite/
    ],
    server: {
      // https://vitejs.dev/config/server-options.html#server-port
      port: env.VITE_PORT,
  
      // https://vitejs.dev/config/server-options.html#server-proxy
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        }
      }
    }
  }
})
