// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // 정적 파일 경로 문제 방지
  server: {
    host: '0.0.0.0',
    port: 10000
  },
  preview: {
    port: 10000,
    allowedHosts: ['stock-strategy-app.onrender.com'] // Render 호스트 허용
  }
})
