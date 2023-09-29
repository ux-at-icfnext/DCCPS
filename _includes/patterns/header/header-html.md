<header class="usa-header usa-header--basic upper-header">
  <div class="usa-nav-container">
    <div class="usa-navbar">
      <div class="usa-logo" id="-logo">
        <em class="usa-logo__text"><a href="/" title="Home">
        <img src="/assets/icons/nci-dccps-logo_2x.png" />
       </a></em>
      </div>
      <button type="button" class="usa-menu-btn">Menu</button>
    </div>
    <nav aria-label="Primary navigation" class="usa-nav">
      <button type="button" class="usa-nav__close">
        <img src="/assets/img/usa-icons/close.svg" role="img" alt="Close" />
      </button>
      <ul class="usa-nav__primary usa-accordion">
      {% for item in nav %}
        <li class="usa-nav__primary-item">
        {% if item.subnav %}
          {% if page.section == item.title or page.title == item.title %}
          <button
            type="button"
            class="usa-accordion__button usa-nav__link usa-current"
            aria-expanded="false"
            aria-controls="basic-nav-section-one"
            onclick="window.location.href='{{ item.href }}';"
          >
          {% else %}
          <button
            type="button"
            class="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-one"
            onclick="window.location.href='{{ item.href }}';"
          >
          {% endif %}
            <a href="{{ item.href }}"><span>{{ item.title }}</span></a>
          </button>
          <ul id="basic-nav-section-one" class="usa-nav__submenu">
            {% for sub in item.subnav %}
            <li class="usa-nav__submenu-item">
              <a href="{{ sub.href }}"><span>{{ sub.title }}</span></a>
            </li>
            {% endfor %}
          </ul>
          {% else %}
            {% if page.section == item.title or page.title == item.title %}
            <a href="{{ item.href}}" class="usa-current">{{ item.title }}</a>
            {% else %}
            <a href="{{ item.href}}">{{ item.title }}</a>
            {% endif %}
          {% endif %}
        </li>
        {% endfor %}
      </ul>
      <section aria-label="Search component">
        <form class="usa-search" role="search">
          <label class="usa-sr-only" for="search-field">Search</label>
          <input class="usa-input" id="search-field" type="search" name="search" />
          <button class="usa-button" type="submit">
            <span class="usa-search__submit-text">Search </span
            ><img
              src="/assets/img/usa-icons-bg/search--white.svg"
              class="usa-search__submit-icon"
              alt="Search"
            />
          </button>
        </form>
        <a href="" class="search-link">DCCPS Employee Intranet</a>
      </section>
    </nav>
  </div>
</header>
<div class="title-banner brp-banner usa-nav-container">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="program-name">Program Area Name </div>
            </div>
        </div>
    </div>
</div>
<header class="usa-header usa-header--basic">
  <div class="usa-nav-container">
    <div class="usa-navbar">
      <div class="usa-logo" id="-logo">
        <em class="usa-logo__text"><a href="/" title="Home">Home</a></em>
      </div>
      <button type="button" class="usa-menu-btn">Menu</button>
    </div>
    <nav aria-label="Primary navigation" class="usa-nav">
      <button type="button" class="usa-nav__close">
        <img src="/assets/img/usa-icons/close.svg" role="img" alt="Close" />
      </button>
      <ul class="usa-nav__primary usa-accordion">
        <li class="usa-nav__primary-item">
          <button
            type="button"
            class="usa-accordion__button usa-nav__link usa-current"
            aria-expanded="false"
            aria-controls="basic-nav-section-one"
          >
            <span>Subpage 1</span>
          </button>
          <ul id="basic-nav-section-one" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
          </ul>
        <li class="usa-nav__primary-item">
          <button
            type="button"
            class="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-two"
          >
            <span>Subpage 2</span>
          </button>
          <ul id="basic-nav-section-two" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
          </ul>
        </li>
        </li>
        <li class="usa-nav__primary-item">
          <button
            type="button"
            class="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-three"
          >
            <span>Subpage 3</span>
          </button>
          <ul id="basic-nav-section-three" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
          </ul>
        </li>
        <li class="usa-nav__primary-item">
          <button
            type="button"
            class="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-four"
          >
            <span>Subpage 4</span>
          </button>
          <ul id="basic-nav-section-four" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
          </ul>
        </li>
        <li class="usa-nav__primary-item">
          <button
            type="button"
            class="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-five"
          >
            <span>Subpage 5</span>
          </button>
          <ul id="basic-nav-section-five" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
          </ul>
        </li>
        <li class="usa-nav__primary-item">
          <button
            type="button"
            class="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-six"
          >
            <span>Subpage 6</span>
          </button>
          <ul id="basic-nav-section-six" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
          </ul>
        </li>
        <li class="usa-nav__primary-item">
          <button
            type="button"
            class="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-seven"
          >
            <span>Special Focus Areas</span>
          </button>
          <ul id="basic-nav-section-seven" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href=""><span>&lt;Navigation link&gt;</span></a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</header>