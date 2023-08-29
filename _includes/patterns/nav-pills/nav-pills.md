{% assign items=include.content %}
{% assign set=include.settings %}

<div class="nav-pills-container">
    <div class="nav-pills-row">
        <div class="nav-pills-col">
            <ul class="nav-pills">
                {% for item in items %}
                    <li class="nav-item">
                        <a href="{{item.link}}" class="nav-link">{{item.title}}</a>
                    </li>
                {% endfor %}
            </ul>
        </div>
    </div>
</div>