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

<!-- Standard Box -->

  <ul class="usa-card-group box-component"> 
    {% for card in items %}
    {% if card.type == "standard" %}
      <li class="usa-card {{ grid | default:'desktop: grid-col-6}}">
          <div class="usa-card__container {{ class | default: 'usa-card__container' }} {{ bg-color_class}}">
              <div class="usa-card__body">
                  <p>
                      {{card.content}}
                  </p>
              </div>
          </div>
      </li>
    {% endif %}
    {% endfor %}
  </ul>

<!-- Standard Alternate Box -->

{% if card.type == "standard-alternate" %}
<ul class="usa-card-group box-component"> 
  {% for card in items %}
    <li class="usa-card {{ grid | default:'desktop: grid-col-6}}">
      <div class="usa-card__container {{ class | default: 'usa-card__container' }} {{ bg-color_class}}">
            <div class="usa-card__header icon-header">
                <div class="title_icon">
                    <img src="{{card.icon}}" alt="{{card.alt}}">
                </div>
                <div>
                    <h2 class="usa-card__heading">{{card.title}}</h2>
                </div>
            </div>
            <div class="usa-card__body">
                {{card.content}}
            </div>
        </div>
    </li>
  {% endfor %}
</ul>
{% endif %}

<!-- Sidebar Box -->

{% if card.type == "sidebar" %}
<ul class="usa-card-group box-component"> 
  {% for card in items %}
      <li class="usa-card {{ grid | default:'tablet:grid-col-4'}}">
        <div class="usa-card__container {{ class | default: 'usa-card__container' }} {{ bg-color_class}}">
            <div class="usa-card__header icon-header">
              {% if card.icon %}
                <div class="title_icon">
                    <img src="{{card.icon}}" alt="{{card.icon-alt}}">
                </div>
                <div>
                  <span class="icon-label">{{card.icon-label}}</span>
                  <h2 class="usa-card__heading">{{card.title}}</h2>
                </div>
              {% else %}
                <h2 class="usa-card__heading">{{card.title}}</h2>
              {% endif %}
            </div>
            <div class="usa-card__body">
              <p>
                {{card.content}}
              </p>
            </div>
            {% if card.footer %}
              <div class="usa-card__footer">
                <ul class="usa-button-group">
                  <li class="usa-button-group__item">
                    <a href="" class="usa-button">{{card.btn}}</a>
                  </li>
                </ul>
              </div>
            {% endif %}
        </div>
    </li>
  {% endfor %}
</ul>
{% endif %}

<!-- Profile Box -->

{% if card.type == "profile" %}
<ul class="usa-card-group box-component">
{% for card in items %}
  <li class="usa-card {{ grid | default:'desktop: grid-col-12'}}">
    <div class="usa-card__container {{ class | default: 'usa-card__container' }} {{ bg-color_class}}">
      <div class="usa-card__body">
        <div class="usa-card__media usa-card__media--inset">
          <div class="usa-card__img">
            <img src="{{card.media}}"/>
          </div>
        </div>
        <div class="link-button">
          <span class="name"><a href="">{{card.name}}</a></span>
          <span class="role">{{card.role}}</span>
          <p class="email"><a href="dchamber@mail.nih.gov">{{card.email}}</a></p>
          <ul class="usa-button-group">
            <li class="usa-button-group__item flag-button">
              <a href="" class="usa-button">{{card.btn-text}}</a>
              <a href="" class="usa-button semi-button">
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="content-area">
          {{card.content}}
        </div>
      </div>
    </div>
  </li>
  {% endfor %}
</ul>
{% endif %}

<!-- Profile Box Small -->
{% if card.type == "profile-small" %}
<ul class="usa-card-group box-component"> 
  {% for card in items %}
    <li class="usa-card {{ grid | default:'desktop:grid-col-6'}}">
      <div class="usa-card__container {{ class | default: 'usa-card__container' }} {{ bg-color_class}}">
        <div class="usa-card__body">
          <div class="usa-card__media {{media_class}}">
            <div class="usa-card__img">
              <img src="{{card.media}}"/>
            </div>
          </div>
          <div class="link-button">
            <span class="name"><a href="">{{card.name}}</a></span>
            <span class="role">{{card.role}}</span>
            <p class="email"><a href="{{card.email-link}}">{{card.email}}</a></p>
          </div>
        </div>
      </div>
    </li>
  {% endfor %}
</ul>
{% endif %}

<!-- Profile Circle -->

{% if card.type == "profile-circle" %}
<ul class="usa-card-group box-component">
  {% for card in items %}
    <li class="usa-card {{ grid | default:'desktop:grid-col-6'}}">
      <div class="usa-card__container {{ class | default: 'usa-card__container' }} {{ bg-color_class}}">
        <div class="usa-card__body">
          <div class="usa-card__media {{media_class}}">
            <div class="usa-card__img">
              <img src="{{card.media}}"/>
            </div>
          </div>
          <div class="link-button">
            <span class="name"><a href="">{{card.name}}</a></span>
            <span class="role">{{card.role}}</span>
            <p class="email"><a href="{{card.email-link}}">{{card.email}}</a></p>
          </div>
        </div>
      </div>
    </li>
  {% endfor %}
</ul>
{% endif %}

<!-- Sidebar Image -->

{% if card.type == "sidebar-image" %}
<ul class="usa-card-group box-component"> 
  {% for card in items %}
    <li class="usa-card {{ grid | default:'desktop:grid-col-6'}}">
        <div class="usa-card__container {{ class | default: 'usa-card__container' }} {{ bg-color_class}}">
            <div class="usa-card__header">
              <div>
                  <h2 class="usa-card__heading"><a href="">{{card.name}}</a></h2>
                  <span class="subtitle">{{card.role}}</span>
              </div>
            </div>
            <div class="usa-card__media">
                <div class="usa-card__img">
                  <img src="{{card.media}}"/>
                </div>
            </div>
            <div class="usa-card__body">
                {{card.content}}
            </div>
        </div>
    </li>
  {% endfor %}
</ul>
{% endif %}

<!-- Sample App -->

{% if card.type == "sample-app" %}
<ul class="usa-card-group box-component"> 
  {% for card in items %}
    <li class="usa-card {{ grid | default:'desktop:grid-col-6'}}">
        <div class="usa-card__container {{ class | default: 'usa-card__container' }} {{ bg-color_class}}">
            <div class="usa-card__header">
                <div>
                    <h2 class="usa-card__heading">{{card.title}}</h2>
                 </div>
            </div>
            <div class="usa-card__body">
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
                               <span><a href="" class="investigator">{{card.name}}<i class="fas fa-external-link-alt"></i></a></span>
                                <span class="location">{{card.location}}</span>
                            </div>                
                        </div>
                    </div>
                    <div>
                        <h4>Grant Mechanism & Award Number</h4>
                        <span>{{card.award-number}}</span>
                    </div>
                </div>
            </div>        
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
        </div>
    </li>
  {% endfor %}
</ul>
{% endif %}

<!-- Featured -->

{% if card.type == "featured" %}
<ul class="usa-card-group box-component"> 
  {% for card in items %}
    <li class="usa-card {{ grid | default:'desktop:grid-col-12'}}">
      <div class="usa-card__container {{ class | default: 'usa-card__container' }} {{ bg-color_class}}">
        <div class="usa-card__body">
          <div class="usa-card__media {{media_class}}">
            <div class="usa-card__img">
              <img src="{{card.media}}"/>
            </div>
          </div>
          <div class="link-button">
            <span class="name"><a href="">{{card.name}}</a></span>
            <span class="location">{{card.location}}</span>
            <p class="role">{{card.role}}</p>
            <ul class="usa-button-group">
              <li class="usa-button-group__item flag-button">
                <a href="" class="usa-button">Other TCRB Grantees</a>
              </li>
            </ul>
          </div>
          <div class="content-area">
            <p>
                {{card.content}}
            </p>
            <span>- {{card.quote}}</span>
          </div>
        </div>
      </div>
    </li>
  {% endfor %}
</ul>
{% endif %}

<!-- Featured Small -->

{% if card.type == "featured-small" %}
<ul class="usa-card-group box-component"> 
  {% for card in items %}
    <li class="usa-card {{ grid | default:'desktop:grid-col-6'}}">
      <div class="usa-card__container profile-card">
        <div class="usa-card__body">
          <div class="usa-card__media usa-card__media--inset">
            <div class="usa-card__img">
              <img src="{{card.media}}"/>
            </div>
          </div>
          <div class="link-button">
            <span class="name"><a href="">{{card.name}}</a></span>
            <span class="location">{{card.location}}</span>
            <p class="role">{{card.role}}</p>
            <ul class="usa-button-group">
              <li class="usa-button-group__item flag-button">
                <a href="" class="usa-button">Other TCRB Grantees</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  {% endfor %}
</ul>
{% endif %}

<!-- Blog -->

{% if card.type == "blog" %}
<ul class="usa-card-group box-component"> 
  {% for card in items %}
    <li class="usa-card {{ grid | default:'desktop:grid-col-6'}}">
      <div class="usa-card__container usa-card--header-first blog-box light-background">
            <span class="dark-banner">RECENT DISPATCH FROM IMPLEMENTATION SCIENCE AT NCI</span>
            <div class="usa-card__header">
              <div>
                <h2 class="usa-card__heading"><a href="">{{card.title}}</a></h2>
              </div>
              <div class="name_date">
                <span>{{card.name}}</span><span> | </span><span>{{card.date}}</span>
              </div>
            </div>
          <div class="usa-card__body">
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
        </div>
    </div>
  </li>
  {% endfor %}
</ul>
{% endif %}

<!-- Monograph -->

{% if card.type == "mongraph" %}
<ul class="usa-card-group box-component">
  {% for card in items %}
    <li class="usa-card {{ grid | default:'desktop:grid-col-12'}}">
        <div class="usa-card__container usa-card--header-first monograph light-background">
            <span class="dark-banner">Featured Monograph</span>
            <div class="usa-card__header">
                <div class="name_date">
                    <span>{{card.monograph-number}}</span><span> : </span><span>{{card.date}}</span>
                </div>
                <div>
                    <h2 class="usa-card__heading"><a href="">{{card.title}}</a></h2>
                </div>
            </div>
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
                            <a href="" class="usa-button">View {{card.monograph-number}} (PDF, 12.8 MB)</a>
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
        </div>
    </li>
  {% endfor %}
</ul>
{% endif %}

<!-- Search -->

{% if card.type == "search" %}
<ul class="usa-card-group box-component">
  {% for card in items %}
    <li class="usa-card {{ grid | default:'desktop:grid-col-6'}}">
        <div class="usa-card__container usa-card--header-first search-box light-background">
            <div class="usa-card__header icon-header">
                    <div class="title_icon">
                        <img src="{{card.icon}}" alt="">
                    </div>
                <div>
                    <span class="icon-label">{{card.icon-label}}</span>
                    <h2 class="usa-card__heading">{{card.title}}</h2>
                </div>
            </div>
            <div class="usa-card__body">
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
            </div>
        </div>
    </li>
  {% endfor %}
</ul>
{% endif %}