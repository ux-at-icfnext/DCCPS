---
layout: right
title: Nav Pills
permalink: /patterns/nav-pills
section: Patterns # initial cap required to make menu work
summary: |
  Nav pills are a grouping of navigation links within the main content of a page. The difference between buttons and the nav pills is the a button is a singular action whereas the nav pills are a grouping of navigation links. Visually the nav pills are slightly larger, are flat (no shadow), and have a defined border.

htmlpath: patterns/nav-pills/nav-pills-html.md
csspath: patterns/nav-pills/index.scss

nav-pills:
  content:
    - title: Overview and History
      link: ""
    - title: Vision and Mission
      link: ""
    - title: Leadership at a Glance
      link: ""
    - title: Meet the DCCPS Staff
      link: ""
    - title: Fellowships and Training (PDF, 200KB)
      link: ""
jekyll: |
  {% include patterns/nav-pills/nav-pills.md content=page.nav-pills.content settings=page.nav-pills.settings %}

  Without settings - {% include patterns/nav-pills/nav-pills.md content=page.nav-pills.content %}
---
{{ page.summary }}

## The Design
{% include patterns/nav-pills/nav-pills.md content=page.nav-pills.content settings=page.nav-pills.settings %}
---

## Theme Settings

N/A

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