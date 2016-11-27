---
layout: page
title: Music
permalink: /music/
---

This is a collection of all my music related posts

<ul>
{% for post in site.categories.music %}
	<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>