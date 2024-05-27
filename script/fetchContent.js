// scripts/fetchContent.js
// 1. fetch my zhihu 

document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://api.zhihu.com/articles/12345678')
      .then(response => response.json())
      .then(data => {
        document.getElementById('content').innerHTML = data.content;
      })
      .catch(error => console.error('Error fetching content:', error));
  });