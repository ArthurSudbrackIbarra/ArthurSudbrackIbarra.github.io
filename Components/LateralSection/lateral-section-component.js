class LateralSectionComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('Components/LateralSection/lateral-section-component.html');
  }
}

// ComponentNames is defined in 'utilities.js'
customElements.define(ComponentNames.LATERAL_SECTION, LateralSectionComponent);
