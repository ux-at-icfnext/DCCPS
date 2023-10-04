---
layout: default
breadcrumb: "off"

card:
  headings:
    title: Library
    link: "/"
  settings:
    grid_class: tablet:grid-col-3
    special: 
    grid_special: tablet:grid-col-12
    class_special: usa-card--flag
  list: 
    - title: Styles
      content: Lorem stuff that takes up a bunch of space that might be a few lines
      btn:
        - link: "/styles"
          text: View
    - title: Patterns
      content: Lorem stuff that takes up a bunch of space that might be a few lines
      btn:
        - link: "/patterns"
          text: View
---

{% include patterns/card/card-group.md headings=page.card.headings content=page.card.list settings=page.card.settings %}
