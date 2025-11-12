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

## 部署選項

### 選項 1：GitHub Pages（需要公開倉庫）

**注意**：GitHub Pages 免費方案僅支援公開倉庫。如果倉庫是私有的，請使用 Netlify（選項 2）。

#### 啟用步驟：

1. 將倉庫設為公開：
   - 前往 **Settings** > **General** > **Danger Zone**
   - 點擊 **Change repository visibility** > **Make public**

2. 啟用 GitHub Pages：
   - 前往 **Settings** > **Pages**
   - 在 **Source** 選擇 **GitHub Actions**
   - 當您推送代碼到 `main` 分支時，GitHub Actions 會自動建置並部署

3. 部署完成後，網頁將可在以下網址訪問：
   ```
   https://InterSense-Inc.github.io/yima-pdfword/
   ```

**注意**：`vite.config.js` 中的 `base` 路徑必須與倉庫名稱一致（`/yima-pdfword/`）

### 選項 2：Netlify（支援私有倉庫，推薦）

Netlify 支援私有倉庫，且提供免費的自動部署。

#### 部署步驟：

1. 前往 [Netlify](https://www.netlify.com/) 並登入（可使用 GitHub 帳號）
2. 點擊 **Add new site** > **Import an existing project**
3. 選擇 **GitHub** 並授權
4. 選擇倉庫 `InterSense-Inc/yima-pdfword`
5. 設定建置選項：
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. 點擊 **Deploy site**

部署完成後，Netlify 會提供一個網址（例如：`https://yima-pdfword.netlify.app`）

**優點**：
- 支援私有倉庫
- 自動部署（每次推送自動更新）
- 免費 SSL 證書
- 自訂網域名稱

