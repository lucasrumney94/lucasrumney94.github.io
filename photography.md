---
layout: page
title: Photography
permalink: /photography/
---

This is a collection of all my photography related posts

<ul>
{% for post in site.categories.photography %}
	<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>