{% assign items=include.content %}
{% assign set=include.settings %}

{% for entry in items %}
<table class="usa-table {{entry.table_class}}">
  <caption>
    {{entry.title}}
  </caption>
  <thead>
    <tr>
    {% for subentry in entry.table_headers %}
      <th scope="col">{{subentry.label}}</th>
    {% endfor %}
    </tr>
  </thead>
  <tbody>
  {% for subentry in entry.rows %}
    <tr>
      <th scope="row">{{subentry.label}}</th>
        {% for subsubentry in subentry.row %}
            <td>
                {{subsubentry.cell}}
            </td>
        {% endfor %}
    </tr>
  {% endfor %}
  </tbody>
</table>
{%endfor%}