import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,           // 設定端口號
    host: '0.0.0.0',      // 設定主機，'0.0.0.0' 允許外部訪問，'localhost' 僅本地訪問
    open: false,          // 是否自動打開瀏覽器
    // strictPort: true,  // 如果端口被占用，是否退出而不是嘗試下一個可用端口
  },
  base: '/yima-pdfword/',  // GitHub Pages 基礎路徑（倉庫名稱）
                           // 如果使用 Netlify，請改為 base: '/'
})

