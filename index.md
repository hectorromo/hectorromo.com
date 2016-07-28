---
layout: default
---


<div class="intro"><p class="intro-text">I'm focused on developing and designing simple-to-use, human-centered websites. I believe in doing good work without rushing, working withinstead of for clients and putting quality over quantity.</p></div>

* {% assign projects = site.projects | sort:"published_date" | reverse %} {% for project in projects %}
* <!-- <a href="{{ project.url }}"> -->

  <video poster="{{ project.featured_image_path }}" preload="none" loop="" muted=""><source type="video/mp4" src="{{ project.featured_video_path }}" /></video>

  <div class="portfolio-itemBorder">&nbsp;</div>

  <div class="portfolio-itemImage" style="background-image: url('{{ project.featured_image_path }}');">&nbsp;</div><!-- <div class="portfolio-itemImage">
  					<img src="{{ project.featured_image_path }}" alt="">				 --> ![]({{ project.featured_image_path }}){: .portfolio-itemImage-touch} [{{ project.site.url_title }}]({{ project.site.url }}){: .portfolio-itemExternalLink} <!-- <p>{{project.title}}

   --> <!-- </a> -->{: .portfolio-item}
* {% endfor %}
{: .portfolio}