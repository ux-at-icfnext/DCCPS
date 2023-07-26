{% assign items=include.content %}
{% assign set=include.settings %}

{% if set.grid_class %}
    {% assign grid=set.grid_class %}
{% endif %}
{% if set.group_class %}
    {% assign class=set.group_class %}
{% endif %}

<ul class="usa-card-group box-component"> 
  {% for card in items %}
    <li class="usa-card {{ grid | default:'tablet:grid-col-4'}}">
      <div class="usa-card__container {{ class | default: 'usa-card__container' }}">
        {% if card.title %}
        <div class="usa-card__header">
            {% if card.icon %}
                <div class="title_icon">
                    <img src="{{card.icon}}" alt="{{card.alt}}">
                </div>
            {%endif%}
            <h2 class="usa-card__heading">{{card.title}}</h2>
        </div>
        {% endif %}
        {% if card.media %}
            <div class="usa-card__media">
                <div class="usa-card__img">
                <img
                    src="{{card.media}}"
                />
                </div>
            </div>
        {% endif %}
        {% if card.content %}
          <div class="usa-card__body">
            <p>
              {{ card.content }}
            </p>
          </div>
        {% endif %}
        {% if card.btn %}
          <div class="usa-card__footer">
            <ul class="usa-button-group {{ class }} {{ seg }}">
              <li class="usa-button-group__item">
                <a href="{{ card.btn-link }}" class="usa-button {{ card.btn-class }}"
                  {% if btn.disabled %} disabled="disabled" {% endif %}
                  >{{ card.btn-text }}</a
                >
              </li>
            </ul>
          </div>
        {% endif %}
    </div>
  </li>
  {% endfor %}
</ul>