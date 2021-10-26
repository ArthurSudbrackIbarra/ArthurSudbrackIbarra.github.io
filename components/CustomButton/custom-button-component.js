class CustomButtonComponent extends HTMLElement {
  static COMPONENT_NAME = 'custom-button-component';

  constructor() {
    super();
    // Props
    this.text = this.attributes['text'].value;
    this.to = this.attributes['to'].value.toLowerCase();
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

customElements.define(CustomButtonComponent.COMPONENT_NAME, CustomButtonComponent);
