---
layout: right
title: Side Navigation
permalink: /patterns/sidenav
section: Patterns # initial cap required to make menu work
summary: |
  A process list displays the steps or stages of important instructions or processes. Please review the <a href="https://designsystem.digital.gov/components/process-list/">USWDS: Process List/a> for more information on how to use this component.

htmlpath: patterns/sidenav/sidenav-html.md
csspath: patterns/sidenav/index.scss

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
  {% include patterns/sidenav/sidenav.md content=page.sidenav.content settings=page.sidenav.settings %}

  Without settings - {% include patterns/sidenav/sidenav.md content=page.sidenav.content %}
---
{{ page.summary }}

## The Design
{% include patterns/sidenav/sidenav-html.md %}
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
