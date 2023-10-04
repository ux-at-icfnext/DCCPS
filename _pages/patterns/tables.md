---
layout: right
title: Tables
permalink: /patterns/tables
section: Patterns # initial cap required to make menu work
summary: |
  A table shows information in columns and rows.

htmlpath: patterns/tables/tables-html.md
csspath: patterns/tables/index.scss

tables:
  content:
    - title: Bordered Table
      table_class: usa-table--striped
      table_headers:
        - label: Title
        - label: Announcement Num. / Mechanism
        - label: Code
        - label: Clinical Research
        - label: Expires
        - label: Contact
      rows:
        - label: <a href="">Notice of intent to Publish a Funding Opportunity Announcement for Maximizing the Scientific Value of Existing Biospecimen Collections</a>
          more-info: true
          row:
            - cell: NOT-OD-21-044
            - cell: R21
            - cell: Clinical Trial Not Allowed
            - cell: ""
            - cell: <a href="">Rachel Grana Mayne</a> <br>240-276-5899<br><a href="">rachel.mayne@nih.gov</a>
        - label: <a href=""> Notice of Intent to Publish a Funding Opportunity Announcement for Secondary Analyses of Existing Datasets of Tobacco Use and Health </a>
          more-info: true
          row:
            - cell: NOT-OD-21-045
            - cell: R21
            - cell: Clinical Trial Not Allowed
            - cell: ""
            - cell: <a href="">Rachel Grana Mayne</a> <br>240-276-5899<br><a href="">rachel.mayne@nih.gov</a>
        - label: <a href=""> Notice of NIH Participation in Smart Health and Biomedical Research in the Era of Artificial Intelligence and Advanced Data Science </a>
          row:
            - cell: NOT-OD-21-011
            - cell: ""
            - cell: ""
            - cell: ""
            - cell: <a href="">Robin Vanderpool</a> <br>240-276-6558<br><a href="">robin.vanderpool@nih.gov</a>
        - label: <a href=""> Notice of Amendment of NCI Participation in PAR-20-164, Mechanisms and Consequences of Sleep Disparities in the U.S.</a>
          row:
            - cell: NOT-CA-20-075
            - cell: ""
            - cell: ""
            - cell: ""
            - cell: <a href="">Kara Hall</a> <br>240-276-6831<br><a href="">hallka@mail.nih.gov</a><br><br><a href="">Todd Horowitz</a> <br>240-276-6963<br><a href="">horowitzts@mail.nih.gov</a>

tables-2:
  content:
    - title: Multi Header Table
      column_num: 2
      link_table: true
      sections:
        - header: Biobehavioral Mechanisms of Prognosis
          rows:
           - label: Paige Green, PhD, MPH
             cell: paige.green@nih.gov
           - label: Frank Perna, EdD, PhD
             cell: pernafm@mail.nih.gov
        - header: Biomarkers of Survival
          rows:
           - label: Mukesh Verma, PhD
             cell: vermam@mail.nih.gov
        - header: Comorbidities and Survival
          rows:
           - label: Joanne Elena, PhD, MPH
             cell: elenajw@mail.nih.gov
           - label: Lisa Gallicchio, PhD
             cell: lisa.gallicchio@nih.gov
           - label: Ashley Wilder Smith, PhD, MPH
             cell: smithas@mail.nih.gov

tables-3:
  content:
    - title: Event Table
      rows:
        - date: January 1, 2021
          icon: /assets/icons/event-webinar-icon.png
          type: Webinar
          series: Webinar Title Goes Here
        - date: January 1, 2021
          icon: /assets/icons/event-meeting-icon.png
          type: Meeting
          series: Meeting Title Goes Here
        - date: January 1, 2021
          icon: /assets/icons/event-conference-icon.png
          type: Conference
          series: Conference Title Goes Here
        - date: January 1, 2021
          icon: /assets/icons/event-workshop-icon.png
          type: Workshop
          series: Workshop Title Goes Here
        - date: January 1, 2021
          icon: /assets/icons/event-training-icon.png
          type: Training
          series: Training Title Goes Here
        - date: January 1, 2021
          icon: /assets/icons/event-virtual-icon.png
          type: Virtual Meeting
          series: Virtual Meeting Title Goes Here

jekyll: |
  {% include patterns/tables/tables.md content=page.tables.content settings=page.tables.settings %}

  Without settings - {% include patterns/tables/tables.md content=page.tables.content %}

---

{{ page.summary }}

## The Design
{% include patterns/tables/tables.md content=page.tables.content %}

{% include patterns/tables/tables-multi.md content=page.tables-2.content %}

{% include patterns/tables/event-table.md content=page.tables-3.content %}
---

## Theme Settings
- $theme-table-border-color - Defines a border color for table cells. A value of default uses either the default text or reverse text color depending on the site background color.
- $theme-table-header-background-color - Defines a background color for header cells.
- $theme-table-header-text-color - Defines a text color for header cells. A value of default uses either the default text or reverse text color depending on the header background color.
- $theme-table-sorted-background-color - Defines a background color for the cells of the sorted column.
- $theme-table-sorted-header-background-color - Defines a background color for the sorted column header.
- $theme-table-sorted-icon-color - Defines a fill color for the activated sort button in a sortable column header. A value of default uses either the default text or reverse text color depending on the sorted column header background color.
- $theme-table-sorted-stripe-background-color - Defines a background color for the alternating horizontal stripes applied to cells of the sorted column.
- $theme-table-stripe-background-color - Defines a background color for alternating horizontal stripes in the striped table variant.
- $theme-table-stripe-text-color - Defines a text color for alternating horizontal stripes in the striped table variant. A value of default uses either the default text or reverse text color depending on the stripe background color.
- $theme-table-text-color - Defines a text color for table cells. A value of default uses either the default text or reverse text color depending on the site background color.
- $theme-table-unsorted-icon-color - Defines a fill color for the unactivated sort button in a sortable column header.

## Variations
- usa-table--borderless - Removes the outer table borders, retaining only a single bottom border on each row. Best for tables with more text than numbers.
- usa-table--compact - Reduces the row height and vertical spacing to display more table rows within a limited space. Should only be used with dense, numerical data, not text content. Pairs well with scrollable and striped variants, but is not suitable for use with stacked variants.
- .usa-table-container--scrollable > .usa-table - Add the usa-table-container--scrollable class to a container around any usa-table to apply a horizontal scrollbar if the columns exceed the available width. Ideal for dense tables with many columns.
- usa-table--stacked - Stacks the table cells on narrow screens. Ideal for tables that contain more text information than numerical data. If you use this variant, you must ensure there is a data-label attribute on each cell of the table that matches the column header.
- usa-table--stacked-header - Stacks the table cells on narrow screens and visually promotes the first cell of every row into a “header” for that group. Preferred for directories and other lists where the first cell of every row is a name. If you use this variant, you must ensure there is a data-label attribute on each cell of the table that matches the column header.
- usa-table--striped - Applies alternating horizontal striping to help the eye track across table rows. Pairs well with the scrollable variant for tables with many columns.

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
