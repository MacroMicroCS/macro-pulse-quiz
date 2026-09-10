# MacroMicro 總經時事力測驗

一個不需要後端服務的互動式總經小測驗，包含 6 題由淺入深的時事題目、四種得分結果、答題解析，以及 Career Festival 活動兌換資訊。

公開網址：<https://macromicrocs.github.io/macro-pulse-quiz/>

## 本機預覽

在此資料夾執行：

```bash
python3 -m http.server 8765
```

再開啟 `http://127.0.0.1:8765/`。

## 發布

推送到 GitHub 的 `main` 分支後，專案內的 GitHub Actions 會將網站部署到 GitHub Pages。
