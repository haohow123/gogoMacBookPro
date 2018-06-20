# gogoMacBookPro
WaitAndGet

## Step 0

- require at least Node v6.4.0 (use **node -v** to check) 

---
## Step 1
- Clone this Project
- open cmd cd to the project file
- run **npm install** or **yarn install**

---
## Step 2
- When **npm install**/**yarn install**,it downloads a recent version of Chromium at path/to/project/node_modules/puppeteer/.local-chromium/win64-564778/chrome-win32/chrome.exe
- Open it and log in to https://shopee.tw/ , and close it
- Open terminal and run **node shopee.js**.

※付款方式請選擇轉帳，及地址也已有預設，程式會一路點按鈕點下去，及不要同時開2個Chromium，確認Chromium都已關閉後，再下此指令

- Please **keep opening chromium,don't close it** until 12:00 it will start do what it should do!!

---
## Thanks to
- [puppeteer](https://github.com/GoogleChrome/puppeteer)
- [nodejs](https://nodejs.org/en/)