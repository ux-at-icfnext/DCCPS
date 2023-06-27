<form class="usa-form">
  <label class="usa-label" for="example-input-prefix">{{page.label}}</label>
  <div class="usa-input-group">
    <div class="usa-input-prefix" aria-hidden="true">
      <svg aria-hidden="true" role="img" focusable="false" class="usa-icon">
        <use xlink:href="{{page.icon}}"></use>
      </svg>
    </div>
    <input
      id="example-input-prefix"
      class="usa-input"
      pattern="[0-9]*"
      inputmode="numeric"
    />
  </div>
</form>