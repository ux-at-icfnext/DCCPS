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
    <li class="usa-card {{ grid | default:'desktop: grid-col-6}}">
        <div class="usa-card__container {{ class | default: 'usa-card__container' }} {{ card.bg-color}}">
          {% if card.banner %}
            {% if card.monograph %}
              <span class="dark-banner">Featured Monograph</span>
            {% else %}
              <h4 class="dark-banner">RECENT DISPATCH FROM IMPLEMENTATION SCIENCE AT NCI</h4>
            {% endif %}
          {% endif %}
          {% if card.title %}
            <div class="usa-card__header icon-header">
              {% if card.icon %}
                <div class="title_icon">
                    <img src="{{card.icon}}" alt="{{card.icon-alt}}">
                </div>
                <div class="icon-label-header">
                  <span class="icon-label">{{card.icon-label}}</span>
                  <h2 class="usa-card__heading">{{card.title}}</h2>
                </div>
              {% else %}
                <div>
                  {% if card.monograph %}
                    <div class="name_date">
                      <span>{{card.monograph}}</span><span> : </span><span>{{card.date}}</span>
                    </div>
                  {% endif %}
                  {% if card.blog %}
                    <h3 class="blog-title"><a>{{card.title}}</a></h3>
                  {% elsif card.monograph %}
                    <h2 class="monograph-title"><a>{{card.title}}</a></h2>
                  {% else %}
                    <h2 class="usa-card__heading">{{card.title}}</h2>
                  {% endif %}
                </div>
                {% if card.blog %}
                <div class="name_date">
                  <span>{{card.name}}</span><span> | </span><span>{{card.date}}</span>
                </div>
                {% endif %}
              {% endif %}
                {% if card.sidebar-image %}
                  <div>
                    <h2 class="usa-card__heading"><a href="">{{card.name}}</a></h2>
                    <span class="subtitle">{{card.role}}</span>
                  </div>
                {% endif %}
            </div>
          {% endif %}
          {% if card.sidebar-image %}
            <div class="usa-card__media">
                <div class="usa-card__img">
                  <img src="{{card.media}}"/>
                </div>
            </div>
          {% endif %}
          <div class="usa-card__body">
            {% if card.profile %}
              <div class="usa-card__media {{media_class}}">
                <div class="usa-card__img">
                  <img src="{{card.media}}"/>
                </div>
              </div>
              <div class="link-button">
                <span class="name"><a href="">{{card.name}}</a></span>
                <span class="role">{{card.role}}</span>
                <p class="email"><a href="dchamber@mail.nih.gov">{{card.email}}</a></p>
                {% if card.btn-text %}
                  <ul class="usa-button-group">
                    <li class="usa-button-group__item flag-button">
                      <a href="" class="usa-button">{{card.btn-text}}</a>
                      <a href="" class="usa-button semi-button">
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                    </li>
                  </ul>
                {% endif %}
              </div>
            {% endif %}
            {% if card.sample-app %}
              <div class="sample-app__content">
                <div>
                  <h4>Principal Investigator</h4>
                    <div class="principal-investigator">
                      <div class="usa-card__media {{media_class}}">
                        <div class="usa-card__img">
                            <img src="{{card.media}}"/>
                        </div>
                      </div>  
                      <div>
                          <span><a href="" class="investigator">{{card.principal-investigator}}<i class="fas fa-external-link-alt"></i></a></span>
                          <span class="location">{{card.location}}</span>
                      </div>                
                    </div>
                </div>
                <div>
                    <h4>Grant Mechanism & Award Number</h4>
                    <span>{{card.award-number}}</span>
                </div>
              </div>
            {% endif %}
            {% if card.featured %}
              <div class="usa-card__media {{media_class}}">
                <div class="usa-card__img">
                  <img src="{{card.media}}"/>
                </div>
              </div>
              <div class="link-button">
                <span class="name"><a href="">{{card.name}}</a></span>
                <p class="location">{{card.location}}</p>
                <p class="role">{{card.role}}</p>
                <ul class="usa-button-group">
                  <li class="usa-button-group__item flag-button">
                    <a href="" class="usa-button">Other TCRB Grantees</a>
                  </li>
                </ul>
              </div>
            {% endif %}
            {% if card.blog %}
              <div class="blog-box__content">
                <div class="blog-profile">
                  <div class="usa-card__img">
                    <img src="{{card.media}}"/>
                  </div>
                </div>
                <div class="blurb">
                    <p>
                        {{card.content}}
                    </p>
                </div>
              </div>
            {% elsif card.monograph %}
              <div class="monograph__content">
                <div class="blog-profile">
                    <div class="usa-card__img">
                        <img src="{{card.media}}"/>
                    </div>
                </div>
                <div class="text-buttons">
                  <div class="blurb">
                      <p>
                          {{card.content}}
                      </p>
                  </div>
                  <ul class="usa-button-group">
                    <li class="usa-button-group__item">
                        <a href="" class="usa-button">View {{card.monograph}} (PDF, 12.8 MB)</a>
                    </li>
                    <li class="usa-button-group__item">
                        <a href="" class="usa-button">View Executive Summary (PDF, 1.1 MB)</a>
                    </li>
                    <li class="usa-button-group__item">
                        <a href="" class="usa-button">View Overview Presentation (PDF, 2.8 MB)</a>
                    </li>
                  </ul>
                </div>
              </div>
            {% elsif card.search %}
              <section aria-label="Search component">
                <form class="usa-search" role="search">
                    <label class="usa-sr-only" for="search-field">Search</label>
                    <input class="usa-input" id="search-field" type="search" name="search" placeholder="Search for Funding"/>
                    <button class="usa-button" type="submit">
                        <span class="usa-search__submit-text">Search </span>
                        <img src="/assets/img/usa-icons-bg/search--white.svg" class="usa-search__submit-icon" alt="Search"/>
                    </button>
                </form>
              </section>
              <a href="" class="search-link">{{card.link}}</a>
            {% else %}
              <div class="content-area">
                {% if card.quote %}
                  <blockquote>"{{card.content}}"</blockquote>
                  <cite>- {{card.quote}}</cite>
                  {% else %}
                  <div>{{card.content}}</div>
                {% endif %}
              </div>
            {% endif %}
          </div>
          {% if card.footer %}
            {% if card.sample-app %}
                <div class="usa-card__footer">
                  <ul class="usa-button-group">
                      <li class="usa-button-group__item">
                          <a href="{{ card.btn-link }}" class="usa-button">View Abstract</a>
                      </li>
                      <li class="usa-button-group__item">
                          <a href="" class="usa-button">View Grant Application (PDF, 100KB)</a>
                      </li>
                  </ul>
                </div>
            {% else %}
            <div class="usa-card__footer">
              <ul class="usa-button-group">
                <li class="usa-button-group__item">
                  <a href="" class="usa-button">{{card.btn}}</a>
                </li>
              </ul>
            </div>
          {% endif %}
        {% endif %}
        </div>
    </li>
  {% endfor %}
</ul>