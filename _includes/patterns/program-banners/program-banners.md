{% assign items=include.content %}
{% assign set=include.settings %}

{% if set.banner-class %}
    {% assign banner-class=set.banner-class %}
{% endif %}

{%for item in items %}
<div class="title-banner {{ banner-class }}">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="program-name">{{item.title}}</div>
            </div>
        </div>
    </div>
</div>
{% endfor %}