{% assign items=include.content %}
{% assign set=include.settings %}

<div class="resource-group">
  <div class="resource-media grid-row grid-gap-lg">
    <div class="desktop:grid-col-6" style="width: 50%;">
      <iframe width="100%" height="300px" src="{{ items.episode_link }}" title="{{ items.episode_name}}" frameborder="no" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
    </div>
  </div>
  <div class="resource-info">
    Transcript: <a href="{{ items.transcript_url }}">{{ items.episode_name}}</a> [PDF, 4kb] | Audio Description:  <a href="{{items.transcript_url}}">{{ items.episode_name}}</a> [PDF, 5kb]
  </div>
</div>