// TRONG FILE: vite.config.js

import { defineConfig } from 'vite' // <--- DÒNG BỊ THIẾU ĐÃ ĐƯỢC THÊM
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Đảm bảo base path là đúng theo tên Repository hiện tại
  base: "/PDong.Bcons/", 
});