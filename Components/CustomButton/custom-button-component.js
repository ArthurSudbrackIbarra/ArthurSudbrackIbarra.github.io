class CustomButtonComponent extends HTMLElement {
  // Constructor.
  constructor() {
    super();
    // Props.
    this.text = this.attributes['text'].value;
    this.to = this.attributes['to'].value.toLowerCase();
    // Customizing the button depending on the 'to' attribute, which can assume
    // the values 'github', 'discord' or any other value for default configurations.
    switch (this.to) {
      case 'github':
        this.class = 'github-button';
        this.icon = 'fab fa-github';
        break;
      case 'discord':
        this.class = 'discord-button';
        this.icon = 'fab fa-discord';
        break;
      default:
        this.class = 'default-button';
        this.icon = 'fas fa-link';
    }
    this.href = this.attributes['href'].value;
  }

  // This method is called once this custom element has been appended to DOM.
  connectedCallback() {
    this.innerHTML = `
      <a class="button ${this.class}" href=${this.href} target="_blank">
        <div class="icon-text">
          <span class="icon">
            <i class="${this.icon}"></i>
          </span>
          <span>${this.text}</span>
        </div>  
      </a>
    `;
  }
}

// ComponentNames is defined in 'utilities.js'.
customElements.define(ComponentNames.CUSTOM_BUTTON, CustomButtonComponent);
