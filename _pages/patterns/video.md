---
layout: right
title: Video
permalink: /patterns/video
section: Patterns # initial cap required to make menu work
summary: |
  

htmlpath: patterns/video/video-html.md
csspath: patterns/video/index.scss

episode_link:
episode_name:
transcript_url:

jekyll: |
  {% include patterns/video/video.md content=page.video.content settings=page.video.settings%}
---
{{ page.summary }}

## The Design
{% include patterns/video/video-html.md %}
---

## Theme Settings
- $theme-tooltip-background-color - Background color of tooltip.
- $theme-tooltip-font-color - Text color of tooltip.
- $theme-tooltip-font-size - Font size of tooltip.

## Variations
None

## Code Examples
{% include partials/code-accordion.md %}

## Library & Prototyping


### Settings


### Content


### Front matter example


### Add pattern to page
{% highlight liguid %}
  {{ page.jekyll }}
{% endhighlight %}
---
