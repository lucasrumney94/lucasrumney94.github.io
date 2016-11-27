---
layout: page
title: Hardware
permalink: /hardware/
---

This is a collection of all my hardware related posts

<ul>
{% for post in site.categories.hardware %}
	<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>