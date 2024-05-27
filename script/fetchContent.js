// scripts/fetchContent.js
// 1. fetch my zhihu 

document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://zhuanlan.zhihu.com/p/687753209')
      .then(response => response.json())
      .then(data => {
        document.getElementById('content').innerHTML = data.content;
      })
      .catch(error => console.error('Error fetching content:', error));
  });
