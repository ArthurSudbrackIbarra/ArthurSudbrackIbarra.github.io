class TechCardComponent extends HTMLElement {
  // Constructor.
  constructor() {
    super();
    // Props.
    this.imageSrc = this.attributes['image-src'].value;
    this.cardTitle = this.attributes['card-title'].value;
  }

  // This method is called once this custom element has been appended to DOM.
  connectedCallback() {
    this.innerHTML = `
      <div class="tech-card-box hvr-float">
        <img src="${this.imageSrc}" alt="${this.cardTitle}">
        <p>${this.cardTitle}</p>
      </div>
    `;
  }
}

// ComponentNames is defined in 'utilities.js'.
customElements.define(ComponentNames.TECH_CARD, TechCardComponent);
