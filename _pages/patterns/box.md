---
layout: large-pattern
title: Box
permalink: /patterns/box
section: Patterns # initial cap required to make menu work
summary: |
  Boxes are primarily information which may contain links. Boxes may or may not contain links (and may contain multiple links). Boxes represents a portion of a document whose content is only indirectly related to the document's main content. If the box is a sidebar box, then it is often created using the HTML aside tag

htmlpath: patterns/box/box-html.md
csspath: patterns/box/index.scss

card:
  settings:
    grid_class: "desktop: grid-col-6"
    group_class: usa-card--header-first
  content:
    - content: |
        Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <a href="">ad minim veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      bg-color: light-background
    - bg-color: dark-background
      content: |
        Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <a href="">ad minim veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

card-2:
  settings:
    grid_class: "desktop: grid-col-6"
    group_class: usa-card--header-first sidebar
  content:
    - title: Sidebar Title
      bg-color: light-background
      content: |
        Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <a href="">ad minim veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      type: standard
    - title: Sidebar Title 2
      bg-color: dark-background
      content: |
        Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <a href="">ad minim veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

card-3:
  settings:
    grid_class: "tablet:grid-col-4"
    group_class: usa-card--header-first sidebar
  content:
    - title: Sidebar Title
      bg-color: light-background
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - title: Sidebar Title 2
      bg-color: light-background
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      footer: true
      btn: button
      btn-text: Button
      btn-link: Link
    - title: Sidebar Title 3
      bg-color: light-background
      icon: /assets/icons/sidebar-box-icons_2x.png
      icon-label: Funding
      desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - title: Sidebar Title
      bg-color: light-background
      icon: /assets/icons/sidebar-box-icons_2x.png
      icon-label: News and Highlights
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - title: Sidebar Title 2
      bg-color: light-background
      icon: /assets/icons/sidebar-box-icons_2x.png
      icon-label: Contact
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      footer: true
      btn: button
      btn-text: Button
      btn-link: Link
    - title: Sidebar Title 3
      bg-color: light-background
      icon: /assets/icons/sidebar-box-icons_2x.png
      icon-label: Webinar
      desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - title: Sidebar Title
      bg-color: light-background
      icon: /assets/icons/sidebar-box-icons_2x.png
      icon-label: Get Help
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - title: Sidebar Title 2
      bg-color: light-background
      icon: /assets/icons/sidebar-box-icons_2x.png
      icon-label: Stories
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      footer: true
      btn: button
      btn-text: Button
      btn-link: Link
    - title: Sidebar Title 2
      bg-color: light-background
      icon: /assets/icons/sidebar-box-icons_2x.png
      icon-label: Feature
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      footer: true
      btn: button
      btn-text: Button
      btn-link: Link
    - title: Sidebar Title 3
      bg-color: light-background
      icon: /assets/icons/sidebar-box-icons_2x.png
      icon-label: Fact Sheet
      desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - title: Sidebar Title 3
      bg-color: light-background
      icon: /assets/icons/sidebar-box-icons_2x.png
      icon-label: Event Series
      desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

card-4:
  settings:
    grid_class: "tablet:grid-col-4"
    group_class: usa-card--header-first sidebar
  content:
    - title: Sidebar Title
      bg-color: gray-background
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - title: Sidebar Title 2
      bg-color: gray-background
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      footer: true
      btn: button
      btn-text: Button
      btn-link: Link
    - title: Sidebar Title 3
      bg-color: gray-background
      icon: /assets/icons/sidebar-box-icons_2x.png
      icon-label: Icon Label
      desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

card-4-2:
  settings:
    grid_class: "tablet:grid-col-4"
    group_class: usa-card--header-first sidebar
  content:
    - title: Sidebar Title
      bg-color: gray-background
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    - title: Sidebar Title 2
      bg-color: gray-background
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      footer: true
      btn: button
      btn-text: Button
      btn-link: Link
    - title: Sidebar Title 3
      bg-color: gray-background
      icon: /assets/icons/sidebar-box-icons_2x.png
      icon-label: Icon Label
      desc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      content: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

card-5:
  settings:
    grid_class: "desktop: grid-col-12"
    group_class: profile-card
    bg-color_class:
    media_class: usa-card__media--inset
  content:
    - name: <a href="">David Chambers, DPhil</a>
      type: profile
      profile: true
      role: DEPUTY DIRECTOR FOR IMPLEMENTATION SCIENCE
      link: dchamber@mail.nih.gov
      media: /assets/images/chambers-cropped.jpg
      content: |
        <ul class="content-list">
        <span class="content-header">Interests:</span>
        <li>Intervention adaptation/evolvability</li>
        <li>Sustainability</li>
        <li>Learning healthcare systems</li>
        <li>Implementation research networks</li>
        <li>De-implementation</li>
        </ul>
      btn-text: Follow on Twitter

card-6:
  settings:
    grid_class: "desktop: grid-col-6"
    group_class: profile-card
    bg-color_class: light-background
    media_class: usa-card__media--inset
  content:
    - name: <a href="">Ali Abazeed, MPH, MPP</a>
      profile: true
      role: PUBLIC HEALTH ADVISOR
      email: ali.abazeed@nih.gov
      media: /assets/images/abazeed.jpg
      content: ""
    - name: <a href="">Sarah Bruce Bernal, MA</a>
      profile: true
      role: PROGRAM ANALYST
      email: sarah.bernal@nih.gov
      media: /assets/images/bernal.jpg
      content: ""

card-7:
  settings:
    grid_class: "desktop: grid-col-6"
    group_class: profile-card round-img
    bg-color_class: light-background
    media_class: usa-card__media--inset
  content:
    - name: Ali Abazeed, MPH, MPP
      profile: true
      subtitle: Institute
      email: ali.abazeed@nih.gov
      media: /assets/images/abazeed.jpg
      content: ""
    - name: Ali Abazeed, MPH, MPP
      profile: true
      subtitle: Institute
      email: ali.abazeed@nih.gov
      media: /assets/images/abazeed.jpg
      content: ""

card-8:
  settings:
    grid_class: "desktop: grid-col-6"
    group_class: usa-card__media center-image
    bg-color_class: light-background
  content:
    - title: <a href="">Robert T. Croyle, PhD</a>
      sidebar-image: true
      role: DIRECTOR, DCCPS
      media: /assets/images/robert_croyle.png
      content: |
        Robert Croyle, Ph.D., was appointed director of the Division of Cancer Control and Population Sciences (DCCPS) at the National Cancer Institute (NCI) in July 2003. In this role, he oversees a research portfolio and operating budget of nearly half a billion dollars and serves on NCI’s Scientific Program Leaders governance group.

card-9:
  settings:
    grid_class: "desktop: grid-col-6"
    group_class: usa-card--header-first sample-app
    bg-color_class: light-background
    media_class: usa-card__media--inset
  content:
    - title: |
        Sexual Health Empowerment for Cervical Health Literacy and    Cancer Prevention
      sample-app: true
      principal-investigator: Megha Ramaswamy, Ph.D. Exit Disclaimer
      type: sample-app
      location: UNIVERSITY OF KANSAS SCHOOL OF MEDICINE
      media: /assets/images/ramaswamy-megha.jpg
      content: ""
      award-number: 1R01CA181047-01A1
      footer: true
    - title: |
        Vegetable Garden Feasibility Trial to Promote Function in      Older Cancer Survivors
      sample-app: true
      principal-investigator: Wendy Demark-Wahnefried, Ph.D.
      type: sample-app
      location: UNIVERSITY OF ALABAMA AT BIRMINGHAM
      media: /assets/images/wendy-demark-wahnefried.jpg
      content: ""
      award-number: 1R21CA182508-01
      footer: true

card-10:
  settings:
    grid_class: "desktop: grid-col-12"
    group_class: profile-card
    bg-color_class: light-background
  content:
    - name: Amanda Fallin-Bennett, Ph.D., R.N.
      featured: true
      location: UNIVERSITY OF KENTUCKY
      role: PSYCHOLOGIST AND HEALTH DISPARITIES RESEARCHER
      media: /assets/images/amanda-fallinbennett.jpg
      content: |
        After growing up in rural Kentucky, I moved to 
        California and was struck by the stark geographic 
        disparity in tobacco control policies, and became 
        passionate about closing the gap in rural, southern 
        states.
      flag-btn: Other TRCB Grantees
      quote: Amanda Fallin-Bennett, Ph.D., R.N.

card-11:
  settings:
    grid_class: "desktop: grid-col-6"
    group_class: profile-card
    bg-color_class: light-background
    media_class: usa-card__media--inset
  content:
    - name: Claire Spears, Ph.D.
      featured: true
      role: PSYCHOLOGIST AND HEALTH DISPARITIES RESEARCHER
      location: GEORGIA STATE UNIVERSITY
      media: /assets/images/claire-spears.jpg
      content: ""
      flag-btn: Other TRCB Grantees
    - name: Olivia Wackowski, Ph.D., M.P.H.
      featured: true
      role: PROGRAM ANALYST
      location: |
                RUTGERS UNIVERSITY — SCHOOL OF PUBLIC HEALTH AND CANCER INSTITUTE OF NEW JERSEY
      media: /assets/images/olivia-wackowski.jpg
      content: ""
      flag-btn: Other TRCB Grantees

card-12:
  settings:
    grid_class: "desktop: grid-col-6"
    group_class: usa-card--header-first blog-box
    bg-color_class: light-background
    media_class: usa-card__media--inset
  content:
    - title: |
        Understanding Context: Learning How Organizations Affect Healthcare Delivery
      banner: true
      blog: true
      name: Sarah Kobrin
      date: February, 2020
      media: /assets/images/kobrin.jpg
      content: Healthcare delivery settings influence every step of how care is given, yet far more work is needed to effectively describe characteristics of these settings; to link those characteristics to outcomes; and to develop setting-changing interventions to improve care quality.
    - title: |
        Reflections on D&I Measurement Challenges, Progress, and Next Steps
      name: Gila Neta
      blog: true
      date: January, 2019
      media: /assets/images/neta.jpg
      content: On the heels of the <a href="">12th Annual Conference on the Science of Dissemination and Implementation Exit Disclaimer</a>, I find myself reflecting on the essential topic of measurement.

card-13:
  settings:
    grid_class: "desktop: grid-col-12"
    group_class: usa-card--header-first monograph
    bg-color_class: light-background
    media_class: usa-card__media--inset
  content:
    - monograph: MONOGRAPH 22
      title: A Socioecological Approach to Addressing Tobacco-Related Health Disparities
      banner: true
      date: September, 2017
      media: /assets/images/m22_cover.jpg
      content: Examines the current evidence surrounding tobacco-related health disparities across the tobacco use continuum–initiation, secondhand smoke exposure, current use, frequency and intensity, cessation, relapse, morbidity, and mortality–and the implications for future research and implementation of effective strategies.

card-14:
  settings:
    grid_class: "tablet:grid-col-6"
    group_class: usa-card--header-first search-box
    bg-color_class: light-background
  content:
    - title: Find Cancer Control Funding Opportunities
      search: true
      icon: /assets/icons/sidebar-box-icons_2x.png
      icon-label: Funding
      search: true
      search-placeholder: Search for Funding
      link: View all DCCPS Funding Opportunities
      content: ""

jekyll: |
  {% include patterns/box/box.md content=page.card.content settings=page.card.settings %}

  Without settings - {% include patterns/box/box.md content=page.card.content %}

---
{{ page.summary }}

## The Design
### Box: Standard and Alternate

{% include patterns/box/box.md content=page.card.content settings=page.card.settings %}

{% include patterns/box/box.md content=page.card-2.content settings=page.card-2.settings %}

### Box: Sidebar box

{% include patterns/box/box.md content=page.card-3.content settings=page.card-3.settings %}
<div style="background-color: #f2f2f2; padding: 2rem;">
{% include patterns/box/box.md content=page.card-4.content settings=page.card-4.settings %}
</div>
<div style="background-color: #183A57; padding: 2rem;">
{% include patterns/box/box.md content=page.card-4-2.content settings=page.card-4-2.settings %}
</div>

### Box: Profile (staff information with headeshot image shown in LG, MD, & SM)
{% include patterns/box/box.md content=page.card-5.content settings=page.card-5.settings %}

{% include patterns/box/box.md content=page.card-6.content settings=page.card-6.settings %}

{% include patterns/box/box.md content=page.card-7.content settings=page.card-7.settings %}

{% include patterns/box/box.md content=page.card-8.content settings=page.card-8.settings %}

### Box: Sample Application
{% include patterns/box/box.md content=page.card-9.content settings=page.card-9.settings %}
### Box: Featured Grantees & Feature Fellows (Large with Quote, Medium with No Quote, and Carousel)
{% include patterns/box/box.md content=page.card-10.content settings=page.card-10.settings %}

{% include patterns/box/box.md content=page.card-11.content settings=page.card-11.settings %}

### Box: Blog (Current and Past)

{% include patterns/box/box.md content=page.card-12.content settings=page.card-12.settings %}

### Box: Featured Monograph

{% include patterns/box/box.md content=page.card-13.content settings=page.card-13.settings %}

### Box: Search Funding Opportunities

{% include patterns/box/box.md content=page.card-14.content settings=page.card-14.settings %}

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
