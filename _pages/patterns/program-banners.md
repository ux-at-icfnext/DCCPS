---
layout: right
title: Program Banners
permalink: /patterns/program-banners
section: Patterns # initial cap required to make menu work
summary: |
  Each Program Area for DCCPS has a program banner under the DCCPS logo and above the main navigation. The Office of Director (OD) site does not have a program banner.

htmlpath: patterns/program-banners/program-banners-html.md
csspath: patterns/program-banners/index.scss

program-banner-brp:
  settings:
    banner-class: brp-banner
  content:
    - title: Behavioral Research Program

program-banner-egrp:
  settings:
    banner-class: egrp-banner
  content:
    - title: Epidemiology and Genomics Research Program

program-banner-hdrp:
  settings:
    banner-class: hdrp-banner
  content:
    - title: Healthcare Delivery Research Program

program-banner-srp:
  settings:
    banner-class: srp-banner
  content:
    - title: Surveillance Research Program

program-banner-is:
  settings:
    banner-class: is-banner
  content:
    - title: Implementation Science

program-banner-ocs:
  settings:
    banner-class: ocs-banner
  content:
    - title: Office of Cancer Survivorship

program-banner-hdhe:
  settings:
    banner-class: hdhe-banner
  content:
    - title: Health Disparities and Health Equality

jekyll: |
  {% include patterns/program-banners/program-banners.md content=page.program-banners.content settings=page.program-banners.settings %}

  Without settings - {% include patterns/program-banners/program-banners.md content=page.program-banners.content %}
---
{{ page.summary }}

## The Design
{% include patterns/program-banners/program-banners.md content=page.program-banner-brp.content settings=page.program-banner-brp.settings %}
<br>
{% include patterns/program-banners/program-banners.md content=page.program-banner-egrp.content settings=page.program-banner-egrp.settings %}
<br>
{% include patterns/program-banners/program-banners.md content=page.program-banner-hdrp.content settings=page.program-banner-hdrp.settings %}
<br>
{% include patterns/program-banners/program-banners.md content=page.program-banner-srp.content settings=page.program-banner-srp.settings %}
<br>
{% include patterns/program-banners/program-banners.md content=page.program-banner-is.content settings=page.program-banner-is.settings %}
<br>
{% include patterns/program-banners/program-banners.md content=page.program-banner-ocs.content settings=page.program-banner-ocs.settings %}
<br>
{% include patterns/program-banners/program-banners.md content=page.program-banner-hdhe.content settings=page.program-banner-hdhe.settings %}
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
