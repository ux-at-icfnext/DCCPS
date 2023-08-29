{% assign items=include.content %}
{% assign set=include.settings %}

{% for entry in items %}
<table class="usa-table">
  <caption>
    {{entry.title}}
  </caption>
  {% for subentry in entry.sections %}
    <thead>
        <tr>
            <th scope="col" colspan="{{entry.column_num}}">{{subentry.header}}</th>
        </tr>
    </thead>
    <tbody>
        {% for subsubentry in subentry.rows %}
        <tr>
        {% if entry.link_table %}
            <th scope="row"><a href="">{{subsubentry.label}}</a></th>
            <td>
                <a href="">{{subsubentry.cell}}</a>
            </td>
        {% else %}
            <th scope="row">{{subsubentry.label}}</th>
            <td>
                {{subsubentry.cell}}
            </td>
        {% endif %}
        </tr>
        {% endfor %}
    </tbody>
  {% endfor %}
</table>
{% endfor %}