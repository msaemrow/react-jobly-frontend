import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Defaults to 'localhost'. Change this to '0.0.0.0' to make your server accessible externally.
    port: 3000,      // Specify the port you want to use.
    open: true       // Opens the server URL in the default browser.
  }
})
