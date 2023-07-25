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
  settings:
    group_class: usa-card--header-first
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
- $theme-card-border-color - Stroke color of card.
- $theme-card-border-radius - Border radius of card.
- $theme-card-border-width - Stroke thickness of card.
- $theme-card-gap - Gap between cards in a card group.
- $theme-card-flag-min-width - Width at which flag cards change to horizontal layout.
- $theme-card-flag-image-width - Fixed image width in the card flag variant.
- $theme-card-font-family - Font family for card body.
- $theme-card-header-typeset - Family, size, and line height of the heading.
- $theme-card-margin-bottom - Bottom margin for card.
- $theme-card-padding-perimeter - Padding between card elements and card border.
- $theme-card-padding-y - Vertical padding between card elements.

## Variations
- .usa-card--flag - Display in a horizontal (“flag”) orientation at a specified width ($theme-card-flag-min-width).
- .usa-card--header-first - Displays the header element before the media element.
- .usa-card--media-right - In combination with usa-card--flag, sets the media element on the right. (Flag cards display media on the left by default.)
- .usa-card__media--inset - Indents the media element so it doesn’t extend to the edge of the card.
- .usa-card__media--exdent - Extends the media element out over the card border. Useful for light-bordered cards.
- .usa-card__body--exdent - Extends the body element out over the card border. Useful for light-bordered cards.
- .usa-card__footer--exdent - Extends the footer element out over the card border. Useful for light-bordered cards.

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
