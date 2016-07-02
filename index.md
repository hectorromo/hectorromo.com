---
layout: default
---

<div class="intro">
	<p class="intro-text editable">
		Based in Gijón, Spain, I'm focused on developing and designing simple-to-use, human-centered websites. I believe in doing good work without rushing, working withinstead of for clients and putting quality over quantity.
	</p>
</div>

<ul class="portfolio">
	{% for project in site.projects | sort:'date' %}
		<li class="portfolio-item">
			<a href="{{ project.url }}">
				<video poster="{{ project.featured_image_path }}" preload="none" loop muted>
					<source type="video/mp4" src="{{ project.featured_video_path }}">
				</video>
				<div class="portfolio-itemBackground" style="background-image: url('{{ project.featured_image_path }}');"></div>
			</a>
		</li>
	{% endfor %}
</ul>



    