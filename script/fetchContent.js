// scripts/fetchContent.js
// 1. fetch my zhihu 

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
