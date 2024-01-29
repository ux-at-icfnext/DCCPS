{% assign color = include.content %}

<style>
  .box {
    width: 20px;
    height: 20px;
  }
</style>


<table class="usa-table">
  <tr>
    <td>color</td>
    <td>hex</td>
    <td>name</td>
    <td>RGB</td>
    <td>token</td>
  </tr>
  {% for c in color %}
  <tr>
    <td><div class="box" style="background-color: {{ c.value }}"></div></td>
    <td>{{c.value}}</td>
    {% if c.short %}
      <td>{{ c.short }}</td>
    {% else %}
      <td>{{ c.name }}</td>
    {% endif %}
    <td>{{ c.rgb }}</td>
    <td>{{ c.token }}</td>
  </tr>
  {% endfor %}
</table>