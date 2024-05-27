---
layout: default
title: 知乎内容
---


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <div class="container mt-5">
    <h1>实时更新的内容</h1>
    <p id="dynamic-content">加载中...</p>
  </div>

  <script>
    async function fetchContent() {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        document.getElementById('dynamic-content').textContent = data.content;
      } catch (error) {
        console.error('Error fetching content:', error);
        document.getElementById('dynamic-content').textContent = '加载失败';
      }
    }

    // 初次加载时调用
    fetchContent();

    // 设置定时器，每10秒更新一次内容
    setInterval(fetchContent, 10000);
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


<div class="container">
  <h1 class="mt-4">{{ page.title }}</h1>
  


- [返回主页](index.md)
