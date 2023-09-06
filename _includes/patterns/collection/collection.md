{% assign items=include.content %}
{% assign set=include.settings %}

<ul class="usa-collection">
    {% for item in items %}
        <li class="usa-collection__item">
            <div class="collection-icon">
                <img src="{{item.icon}}"/>
            </div>
            <div class="usa-collection__body">
                <span class="type">{{item.type}}</span>
                <span class="usa-collection__heading">
                    <a
                    class="usa-link"
                    href="https://trumpadministration.archives.performance.gov/presidents-winners-press-release/"
                    >{{item.title}}</a
                    >
                </span>
                <p class="usa-collection__description">
                    {{item.description}}
                </p>
            </div>
        </li>
    {%endfor%}
</ul>