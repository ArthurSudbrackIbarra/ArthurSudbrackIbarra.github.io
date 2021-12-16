class LateralSectionComponent extends HTMLElement {
  // Constructor.
  constructor() {
    super();
  }

  // This method is called once this custom element has been appended to DOM.
  connectedCallback() {
    // Using JQuery to load, inside of this custom component, the contents of an HTML file.
    $(this).load('Components/LateralSection/lateral-section-component.html');
  }
}

// ComponentNames is defined in 'utilities.js'.
customElements.define(ComponentNames.LATERAL_SECTION, LateralSectionComponent);
