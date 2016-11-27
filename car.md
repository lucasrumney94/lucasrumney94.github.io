---
layout: page
title: Car
permalink: /car/
---

This is a collection of all my car related posts

<ul>
{% for post in site.categories.car %}
	<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>