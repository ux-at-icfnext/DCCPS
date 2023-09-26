---
layout: right
title: Timeline
permalink: /patterns/timeline
section: Patterns # initial cap required to make menu work
summary: |
  A process list displays the steps or stages of important instructions or processes. Please review the <a href="https://designsystem.digital.gov/components/process-list/">USWDS: Process List/a> for more information on how to use this component.

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
