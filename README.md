# YIMA Mobile Protect - 隱私政策網頁

這是一個使用 React 建立的隱私政策閱讀網頁。

## 安裝

```bash
npm install
```

## 開發

```bash
npm run dev
```

開發伺服器會在 `http://localhost:3002` 啟動。

## 建置

```bash
npm run build
```

建置後的檔案會在 `dist` 目錄中。

## 預覽建置結果

```bash
npm run preview
```

## GitHub Pages 部署

### 自動部署（推薦）

1. 前往 GitHub 倉庫的 **Settings** > **Pages**
2. 在 **Source** 選擇 **GitHub Actions**
3. 當您推送代碼到 `main` 分支時，GitHub Actions 會自動建置並部署
4. 部署完成後，網頁將可在以下網址訪問：
   ```
   https://InterSense-Inc.github.io/yima-pdfword/
   ```

### 手動設定

如果自動部署未啟用，可以手動設定：

1. 前往 GitHub 倉庫的 **Settings** > **Pages**
2. 在 **Source** 選擇 **Deploy from a branch**
3. 選擇分支：`main` 或 `gh-pages`
4. 選擇資料夾：`/ (root)` 或 `/docs`（如果建置檔案在 docs 目錄）
5. 點擊 **Save**

**注意**：`vite.config.js` 中的 `base` 路徑必須與倉庫名稱一致（`/yima-pdfword/`）

