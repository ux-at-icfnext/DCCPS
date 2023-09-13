---
layout: right
title: Jump Links
permalink: /patterns/jump-links
section: Patterns # initial cap required to make menu work
summary: |
  Jump Links, in-page links, or anchor links are links that lead users to content further down on the same page, rather than taking the user to a different page. Jump links are not usually recommended because they do not meet a users' mental model for how a link should work. When the link does not take them to a new page; users can get disoriented. Jump links can be useful in certain situations such as; table of contents, and discoverability of content that requires a long scroll.

htmlpath: patterns/jump-links/jump-links-html.md
csspath: patterns/jump-links/index.scss

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
  {% include patterns/jump-links/jump-links.md content=page.jump-links.content settings=page.jump-links.settings %}

  Without settings - {% include patterns/jump-links/jump-link.md content=page.jump-links.content %}
---
{{ page.summary }}

## The Design

### Jump Links
{% include patterns/jump-links/jump-links-html.md %}

### Jump Links Small
{% include patterns/jump-links/jump-links-small-html.md %}

### Jump Links w/ Icon
{% include patterns/jump-links/jump-links-with-icon-html.md %}
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