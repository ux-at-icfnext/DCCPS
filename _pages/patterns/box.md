---
layout: right
title: Box
permalink: /patterns/box
section: Patterns # initial cap required to make menu work
summary: |
  A card is often a subset or summary of a larger idea. It acts as an entry point to more detailed information. This summary can contain a variety of content types, such as text, images and multimedia, or buttons and links.

htmlpath: patterns/box/box-html.md
csspath: patterns/box/index.scss

card:
  settings:
    grid_class: "desktop: grid-col-6"
    group_class: usa-card--header-first
    bg-color_class: light-background
  content:
    - content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - title: Sidebar Title 2
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

card-2:
  settings:
    grid_class: "desktop: grid-col-6"
    group_class: usa-card--header-first
    bg-color_class: dark-background
  content:
    - content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - title: Sidebar Title 2
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

card-3:
  settings:
    grid_class: "tablet:grid-col-4"
    group_class: usa-card--header-first
    bg-color_class: light-background
  content:
    - title: Sidebar Title
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - title: Sidebar Title 2
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      btn: button
      btn-text: Button
      btn-link: Link
    - title: Sidebar Title 3
      icon: /assets/icons/sidebar-box-icons_2x.png
      desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

card-4:
  settings:
    grid_class: "tablet:grid-col-4"
    group_class: usa-card--header-first
    bg-color_class: dark-background
  content:
    - title: Sidebar Title
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - title: Sidebar Title 2
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      btn: button
      btn-text: Button
      btn-link: Link
    - title: Sidebar Title 3
      icon: /assets/icons/sidebar-box-icons_2x.png
      desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

card-5:
  settings:
    grid_class: "desktop: grid-col-12"
    group_class: usa-card--flag
    bg-color_class: light-background
  content:
    - title: <a href="">David Chambers, DPhil</a>
      subtitle: DEPUTY DIRECTOR FOR IMPLEMENTATION SCIENCE
      link: dchamber@mail.nih.gov
      media: /assets/images/chambers-cropped.jpg
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      btn: button
      btn-text: Follow on Twitter
      btn-link: Link

card-6:
  settings:
    grid_class: "desktop: grid-col-6"
    group_class: usa-card--flag
    bg-color_class: light-background
  content:
    - title: <a href="">Ali Abazeed, MPH, MPP</a>
      subtitle: PUBLIC HEALTH ADVISOR
      link: Email  <i class="fa-solid fa-up-right-from-square"></i>
      media: /assets/images/abazeed.jpg
      content: ""
    - title: <a href="">Sarah Bruce Bernal, MA</a>
      subtitle: PROGRAM ANALYST
      link: Email  <i class="fa-solid fa-up-right-from-square"></i>
      media: /assets/images/bernal.jpg
      content: ""

card-7:
  settings:
    grid_class: "desktop: grid-col-12"
    group_class: usa-card--flag
    bg-color_class: light-background
  content:
    - title: David Chambers, DPhil
      subtitle: DEPUTY DIRECTOR FOR IMPLEMENTATION SCIENCE
      link: dchamber@mail.nih.gov
      media: /assets/images/chambers-cropped.jpg
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      btn: button
      btn-text: Follow on Twitter
      btn-link: Link
    - title: David Chambers, DPhil
      subtitle: DEPUTY DIRECTOR FOR IMPLEMENTATION SCIENCE
      link: dchamber@mail.nih.gov
      media: /assets/images/chambers-cropped.jpg
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      btn: button
      btn-text: Follow on Twitter
      btn-link: Link
    - title: David Chambers, DPhil
      subtitle: DEPUTY DIRECTOR FOR IMPLEMENTATION SCIENCE
      link: dchamber@mail.nih.gov
      media: /assets/images/chambers-cropped.jpg
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      btn: button
      btn-text: Follow on Twitter
      btn-link: Link

jekyll: |
  {% include patterns/box/box.md content=page.card.content settings=page.card.settings %}

  Without settings - {% include patterns/box/box.md content=page.card.content %}

---
{{ page.summary }}

## The Design
{% include patterns/box/box.md content=page.card.content settings=page.card.settings %}

{% include patterns/box/box.md content=page.card-2.content settings=page.card-2.settings %}

{% include patterns/box/box.md content=page.card-3.content settings=page.card-3.settings %}

{% include patterns/box/box.md content=page.card-4.content settings=page.card-4.settings %}

{% include patterns/box/box.md content=page.card-5.content settings=page.card-5.settings %}

{% include patterns/box/box.md content=page.card-6.content settings=page.card-6.settings %}
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
