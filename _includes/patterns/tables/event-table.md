{% assign items=include.content %}
{% assign set=include.settings %}

{% for entry in items %}
<table class="usa-table event-table">
  <caption>
    {{entry.title}}
  </caption>
  <tbody>
    {% for subentry in entry.rows %}
        <tr>
            <th scope="row" class="date">{{subentry.date}}</th>
            <td>
                <img src="{{subentry.icon}}"/>
                <span class="series-type">{{subentry.type}}</span>
            </td>
            <td><a href="{{series-link}}">{{subentry.series}}</a></td>
        </tr>
    {% endfor %}
  </tbody>
</table>
{% endfor %}