import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_BE_API_URL': JSON.stringify(env.REACT_BE_API_URL),
      'process.env.REACT_GITHUB_API_URL': JSON.stringify(env.REACT_GITHUB_API_URL),
    },
    plugins: [react()],
  }
})
