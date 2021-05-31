# 使用
```bash
npm i @friendlyjesse/uni-extract
```

## 第一步，添加配置文件
在项目根目录加入`.router.json`配置文件
```json
{
  "input": "./pages.json",
  "output": "./router/pages.json",
  "exclude": [
    "style"
  ]
}
```
`exclude`排除字段，不再生成

## 第二步，在`package.json`中添加`script`运行项
```json
"scripts": {
  "router": "router ./.router.json"
}
```

## 第三步，运行

```bash
npm run router
```