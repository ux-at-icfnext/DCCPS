---
layout: right
title: Hero
permalink: /patterns/hero
section: Patterns # initial cap required to make menu work
summary: |
  A large banner, usually appearing as one of the first items on a page; it often contains a full-width image.


htmlpath: patterns/hero/hero-html.md
csspath: patterns/hero/index.scss
---

{{ page.summary }}

## The Design
{% include patterns/hero/hero-html.md %}
--- 

## Theme Settings
N/A


## Search
Please see the [search](/patterns/search) documentation for more information on how search works in the header

## Code Examples
{% include partials/code-accordion.md %}

## Library & Prototyping
The library and prototype use the same header which is set in the `_layouts/default.html` file. At default it's using the regular jekyll partial header, this can be updated to use the extended header by changing `header.md` to `header-ext.md`.

The navigation for the library is in `_data/lib-nav.yml` and for the prototype in `_data/nav.yml`. Settings for the logo and site name are in the `_data/settings.yml` file.