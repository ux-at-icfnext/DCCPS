---
layout: right
title: Tabs
permalink: /patterns/tabs
section: Patterns # initial cap required to make menu work
summary: |
  The tab component consists of two distinct zones: selected and unselected. There are always at least two tabs and one is selected by default. Tabs are used to make it easy to explore and switch between different views.

htmlpath: patterns/tabs/tabs-html.md
csspath: patterns/tabs/index.scss

tabs:
  content:
    - title: Tab 1
      header: Tab Content 1
      tabContent: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    - title: Tab 2
      header: Tab Content 2
      tabContent: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

jekyll: |
  {% include patterns/tabs/tabs.md content=page.tabs.content settings=page.tabs.settings %}

  Without settings - {% include patterns/tabs/tabs.md content=page.tabs.content %}

---

{{ page.summary }}

## The Design
{% include patterns/tabs/tabs.md content=page.tabs.content %}