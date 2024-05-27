---
layout: default
title: 首页
---

# 欢迎来到我的博客

这是我的博客主页。点击上方的链接来浏览不同的页面。



<div class="container">
  <h1 class="mt-4">博客文章列表</h1>
  <ul class="list-group">
    {% for post in site.posts %}
      <li class="list-group-item">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
</div>
