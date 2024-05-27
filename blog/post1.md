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

    <div class="container mt-5">
    <h1>实时更新内容</h1>
    <div id="content">加载中...</div>
  </div>

  <script>
    async function fetchContent() {
      try {
        const response = await fetch('http://localhost:3000/fetch-zhihu');
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const content = doc.querySelector('#root > div > main > div > article > div:nth-child(1) > div > div > div').innerText;
        document.getElementById('content').innerText = content;
      } catch (error) {
        document.getElementById('content').innerText = '无法获取内容';
      }
    }

    fetchContent();
    setInterval(fetchContent, 60000); // 每分钟刷新一次
  </script>

    <div class="container mt-5">
    <h1>实时更新内容</h1>
    <div id="content">加载中...</div>
  </div>

  <script>
    async function fetchRSS() {
      try {
        const response = await fetch('https://zhuanlan.zhihu.com/rss');
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'application/xml');
        const items = doc.querySelectorAll('item');
        let content = '';
        items.forEach(item => {
          const title = item.querySelector('title').textContent;
          const description = item.querySelector('description').textContent;
          content += `<h2>${title}</h2><p>${description}</p>`;
        });
        document.getElementById('content').innerHTML = content;
      } catch (error) {
        document.getElementById('content').innerText = '无法获取内容';
      }
    }

    fetchRSS();
    setInterval(fetchRSS, 60000); // 每分钟刷新一次
  </script>


  


- [返回主页](index.md)
