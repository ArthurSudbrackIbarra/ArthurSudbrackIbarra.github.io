class LateralSectionComponent extends HTMLElement {
  static COMPONENT_NAME = 'lateral-section-component';

  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('components/LateralSection/lateral-section-component.html');
  }
}

customElements.define(LateralSectionComponent.COMPONENT_NAME, LateralSectionComponent);
