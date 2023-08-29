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
  {% include patterns/nav-pills/nav-pills.md content=page.nav-pills.content settings=page.nav-pills.settings %}

  Without settings - {% include patterns/nav-pills/nav-pills.md content=page.nav-pills.content %}
---
{{ page.summary }}

## The Design
{% include patterns/nav-pills/nav-pills-html.md %}
---

## Theme Settings
- $theme-process-list-counter-background-color - The background color of the counter circle.
- $theme-process-list-counter-border-color - Color of the border around the counter circle.
- $theme-process-list-counter-border-width - Size of the border around the counter circle.
- $theme-process-list-counter-font-family - Font family of the counter text.
- $theme-process-list-counter-font-size - Font size of the counter text.
- $theme-process-list-counter-gap-color - Color of gap between counter and connector. This should the the same as the background color behind the component.
- $theme-process-list-counter-gap-width - Size of gap between counter and connector.
- $theme-process-list-counter-size - Size of the counter circle.
- $theme-process-list-counter-text-color - Color of the number text inside the counter circle.
- $theme-process-list-connector-color - Color of the connector line between counter circles.
- $theme-process-list-connector-width - Width of the connector line between counter circles.
- $theme-process-list-font-family - Font family of the content text.
- $theme-process-list-font-size - Font size of the content text.
- $theme-process-list-heading-color - Color of the heading text.
- $theme-process-list-heading-font-family - Font family of the heading text.
- $theme-process-list-heading-font-size - Font size of the heading text.

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