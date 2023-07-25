---
layout: right
title: Card
permalink: /patterns/card
section: Patterns # initial cap required to make menu work
summary: |
  A card is often a subset or summary of a larger idea. It acts as an entry point to more detailed information. This summary can contain a variety of content types, such as text, images and multimedia, or buttons and links.

htmlpath: patterns/card/card-html.md
csspath: patterns/card/index.scss

card:
  content:
    - title: Card Title
      content: |
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
      btn: button
      btn-text: Button
      btn-link: Link
    - title: Card Title 2
      content: |
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    - title: Card Title 3
      icon: /assets/icons/apply-icon.png
      desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      content: |
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
    - title: Card Title 4
      media: https://placehold.co/400
      desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      content: |
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.

jekyll: |
  {% include patterns/card/card.md content=page.card.content settings=page.card.settings %}

  Without settings - {% include patterns/card/card.md content=page.card.content %}

---
{{ page.summary }}

## The Design
{% include patterns/card/card.md content=page.card.content settings=page.card.settings %}
---

## Theme Settings
- $theme-accordion-border-width - Border width of the bordered accordion.
- $theme-accordion-border-color - Border color of the bordered accordion.
- $theme-accordion-font-family - Font family of the accordion.

## Variations
Add class `.usa-accordion--bordered` to display a border around the content.

## Code Examples
{% include partials/code-accordion.md %}

## Library & Prototyping
To implement accordion into the page you first need to create the content and settings. This can be done through the front matter or by using data files. (*read more about using data files and [Contentful](docs/contentful)*)

### Settings
Settings are optional parameters that can be added to control styling and to set a reference. The reference is needed for using multiple groups if accordions on a page.

| setting | value |
| bordered | true/false (defaults to false)|
| multiselect | true/false (defaults to false)|
| ref | allows any letter (defaults to a)|
{: .usa-table}

### Content
For authoring environments, it recommended that this is created as a list.

| name |  |
| title | <i class="fa-solid fa-check"></i> required |
| header | *optional* - displays an h2 element over the accordion body content |
| content | <i class="fa-solid fa-check"></i> required |
{: .usa-table }

### Front matter example
this example uses a multi-level array for using both content and settings. For settings, only add the items you want to change.
{% highlight yaml %}
accordion:
  settings:
    bordered: true
    multiselect: true
    ref: "z"
  list:
    - title: Accordion item 1
      header: item 1 header
      content: accordion item 1 content
    - title: Accordion item 2
      content: accordion item 2 content
    - title: Accordion item 3
      content: accordion item 3 content
{% endhighlight %}

### Add pattern to page
{% highlight liguid %}
  {{ page.jekyll }}
{% endhighlight %}
