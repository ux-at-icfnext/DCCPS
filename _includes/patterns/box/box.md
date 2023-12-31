{% assign items=include.content %}
{% assign set=include.settings %}

{% if set.grid_class %}
    {% assign grid=set.grid_class %}
{% endif %}
{% if set.group_class %}
    {% assign class=set.group_class %}
{% endif %}
{% if set.bg-color_class %}
    {% assign bg-color_class=set.bg-color_class %}
{% endif %}
{% if set.media_class %}
    {% assign media_class=set.media_class %}
{% endif %}

<ul class="usa-card-group box-component"> 
  {% for card in items %}
    <li class="usa-card {{ grid | default:'tablet:grid-col-4'}}">
      <div class="usa-card__container {{ class | default: 'usa-card__container' }} {{ bg-color_class}}">
        {% if card.title %}
            {% if card.icon %}
                <div class="usa-card__header">
                        <div class="title_icon">
                            <img src="{{card.icon}}" alt="{{card.alt}}">
                        </div>
                    <div>
                        <span>{{card.icon-label}}</span>
                        <h2 class="usa-card__heading">{{card.title}}</h2>
                    </div>
                </div>
            {% else %}
            <div class="usa-card__header">
                <div>
                  {% if card.blog-title %}
                    <h2 class="usa-card__heading"><a href="">{{card.blog-title}}</a></h2>
                  {% endif %}
                    <h2 class="usa-card__heading">{{card.title}}</h2>
                    {% if card.subtitle %}
                        <span>{{card.subtitle}}</span>
                    {% endif %}
                </div>
             </div>
            {%endif%}
        {% endif %}
        {% if card.blog-title %}
          {% if card.top-banner %}
            <span class="dark-banner">RECENT DISPATCH FROM IMPLEMENTATION SCIENCE AT NCI</span>
          {% endif %}
            <div class="usa-card__header">
              <div>
                <h2 class="usa-card__heading"><a href="">{{card.blog-title}}</a></h2>
              </div>
              <div class="name_date">
                <span>{{card.author}}</span><span> | </span><span>{{card.date}}</span>
              </div>
            </div>
        {% endif %}
        {% if card.monograph %}
          {% if card.top-banner %}
            <span class="dark-banner">Featured Monograph</span>
          {% endif %}
            <div class="usa-card__header">
              <div class="name_date">
                <span>{{card.monograph}}</span><span> : </span><span>{{card.date}}</span>
              </div>
              <div>
                <h2 class="usa-card__heading"><a href="">{{card.monograph-title}}</a></h2>
              </div>
            </div>
        {% endif %}
        {% if card.media %}
            <div class="usa-card__media {{media_class}}">
                <div class="usa-card__img">
                <img
                    src="{{card.media}}"
                />
                </div>
            </div>
        {% endif %}
        {% if card.content %}
          <div class="usa-card__body">
            <div class="link-button">
              {% if card.name %}
                <span class="name"><a href="">{{card.name}}</a></span>
                {% if card.location %}
                  <span class="location">{{card.location}}</span>
                {% endif %}
              {% endif %}
              {% if card.role %}
                <span class="role">{{card.role}}</span>
              {% endif %}
              {% if card.link %}
                <span class="email"><a href="{{card.href}}">{{card.link}}</a></span>
              {% endif %}
              {%if card.flag-btn %}
              <ul class="usa-button-group {{ class }} {{ seg }}">
                <li class="usa-button-group__item">
                  <a href="{{ card.btn-link }}" class="usa-button {{ card.btn-class }}"
                    {% if btn.disabled %} disabled="disabled" {% endif %}
                    >{{ card.flag-btn }}</a
                  >
                </li>
              </ul>
              {% endif %}
            </div>
            {%if card.principal-investigator %}
              <div class="sample-app__content">
                <div>
                  <h4>Principal Investigator</h4>
                  <div class="principal-investigator">
                    <div class="usa-card__media {{media_class}}">
                        <div class="usa-card__img">
                        <img
                            src="{{card.profile}}"
                        />
                        </div>
                    </div>  
                    <div>
                      <a href="">{{card.principal-investigator}} <i class="fas fa-external-link-alt"></i></a>
                      <span class="location">{{card.location}}</span>
                    </div>                
                  </div>
                </div>
                <div>
                  <h4>Grant Mechanism & Award Number</h4>
                  <span>{{card.award-number}}</span>
                </div>
              </div>
            {%endif%}
            {% if card.blog-title %}
              <div class="blog-box__content">
                <div class="blog-profile">
                  <div class="usa-card__img">
                    <img src="{{card.profile-picture}}"/>
                  </div>
                </div>
                <div class="blurb">
                  <p>{{card.blog-blurb}}</p>
                </div>
              </div>
            {% endif %}
            {% if card.monograph %}
              <div class="blog-box__content">
                <div class="blog-profile">
                  <div class="usa-card__img">
                    <img src="{{card.profile-picture}}"/>
                  </div>
                </div>
                <div class="blurb">
                  <p>{{card.blurb}}</p>
                  {% if card.monograph-buttons %}
                    <div>
                      <ul class="usa-button-group {{ class }} {{ seg }}">
                        <li class="usa-button-group__item">
                          <a href="{{ card.btn-link }}" class="usa-button {{ card.btn-class }}"
                            {% if btn.disabled %} disabled="disabled" {% endif %}
                            >{{ card.btn-text }}</a
                          >
                        </li>
                        {% if card.btn-2 %}
                          <li class="usa-button-group__item">
                            <a href="{{ card-btn-2-link }}" class="usa-button {{ card.btn-2-class }}"
                              {% if btn-2.disabled %} disabled="disabled" {% endif %}
                              >{{ card.btn-2-text }}</a
                            >
                          </li>
                        {% endif %}
                        {% if card.btn-3 %}
                          <li class="usa-button-group__item">
                            <a href="{{ card-btn-3-link }}" class="usa-button {{ card.btn-3-class }}"
                              {% if btn-3.disabled %} disabled="disabled" {% endif %}
                              >{{ card.btn-3-text }}</a
                            >
                          </li>
                        {% endif %}
                      </ul>
                    </div>
                  {% endif %}
                </div>
              </div>
            {% endif %}
            {% if card.search %}
              <section aria-label="Search component">
                <form class="usa-search" role="search">
                  <label class="usa-sr-only" for="search-field">Search</label>
                  <input class="usa-input" id="search-field" type="search" name="search" placeholder="{{card.search-placeholder}}"/>
                  <button class="usa-button" type="submit">
                    <span class="usa-search__submit-text">Search </span
                    ><img
                      src="/assets/img/usa-icons-bg/search--white.svg"
                      class="usa-search__submit-icon"
                      alt="Search"
                    />
                  </button>
                </form>
              </section>
              <a href="" class="search-link">{{card.search-link}}</a>
            {% endif %}
            <p>
              {{ card.content }}
            </p>
          </div>
        {% endif %}
        {% if card.footer %}
          <div class="usa-card__footer">
            <ul class="usa-button-group {{ class }} {{ seg }}">
              <li class="usa-button-group__item">
                <a href="{{ card.btn-link }}" class="usa-button {{ card.btn-class }}"
                  {% if btn.disabled %} disabled="disabled" {% endif %}
                  >{{ card.btn-text }}</a
                >
              </li>
              {% if card.btn-2 %}
                <li class="usa-button-group__item">
                  <a href="{{ card-btn-2-link }}" class="usa-button {{ card.btn-2-class }}"
                    {% if btn-2.disabled %} disabled="disabled" {% endif %}
                    >{{ card.btn-2-text }}</a
                  >
                </li>
              {% endif %}
            </ul>
          </div>
        {% endif %}
    </div>
  </li>
  {% endfor %}
</ul>