// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Render가 포트를 감지할 수 있게 함
    port: 10000      // 혹은 생략하면 기본 포트 사용 (3000)
  }
})
