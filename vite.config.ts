import { readFileSync } from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 8443,
  //   host: "0.0.0.0",
  //   hmr: {
  //       host: 'tg-mini-app.local',
  //       port: 8443,
  //   },
  //   https: {
  //     key: readFileSync('./.cert/localhost-key.pem'),
  //     cert: readFileSync('./.cert/localhost.pem'),
  //   },
  // },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src") 
      }
    ],
  },
})
