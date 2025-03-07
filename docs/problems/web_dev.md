# 🛠️ Web 开发遇到的问题

## ❌ React useEffect 死循环
### 📌 问题描述：
当 `useEffect()` 依赖项错误时，页面陷入无限渲染循环。

### 🔍 解决方案：
```js
useEffect(() => {
  fetchData();
}, [dependency]); // 这里要确保 dependency 不是动态变化的值
```
