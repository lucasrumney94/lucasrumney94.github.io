---
layout: page
title: Art
permalink: /art/
---

This is a collection of all my art related posts

<ul>
{% for post in site.categories.art %}
	<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>