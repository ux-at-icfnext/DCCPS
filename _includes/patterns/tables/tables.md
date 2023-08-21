{% assign items=include.content %}
{% assign set=include.settings %}

{% for item in page.tables.content %}
<table class="usa-table">
  <caption>
    {{item.title}}
  </caption>
  <thead>
    <tr>
    {% for entry in item.table_headers %}
      <th scope="col">{{entry.label}}</th>
    {% endfor %}
    </tr>
  </thead>
  <tbody>
  {% for entry in item.rows %}
    <tr>
      <th scope="row">{{entry.label}}</th>
      <td>
        {{entry.desc}}
      </td>
      <td>{{entry.year}}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
{%endfor%}