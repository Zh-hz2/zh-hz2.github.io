---
layout: default
title: 博客
---

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
