---
layout: large-pattern
title: Timeline
permalink: /patterns/timeline
section: Patterns # initial cap required to make menu work
summary: |
  A timeline component is a responsive list of events that animate in on scroll. The divider should be the largest unit (either years or months) and the cells should be the smaller unit (months or days). Whenever possible the timeline should be over the light gray background to separate it from other content.

htmlpath: patterns/timeline/timeline-html.md
csspath: patterns/timeline/index.scss

timeline:
  content:
    - title: Process List Item 1
      content: |
        Process List Content
      detail-list:
        - text: Detail List Text Goes Here
        - text: Text
        - text: Text
    - title: Process List Item 2
      content: |
        Process List Content

jekyll: |
  {% include patterns/timeline/timeline.md content=page.timeline.content settings=page.timeline.settings %}

  Without settings - {% include patterns/timeline/timeline.md content=page.timeline.content %}
---
{{ page.summary }}

## The Design
{% include patterns/timeline/timeline-html.md %}
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
