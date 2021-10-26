class MagcountersComponent extends HTMLElement {
  static COMPONENT_NAME = 'magcounters-component';

  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('components/MagCounters/magcounters-component.html', () => {
      $(`${MagcountersComponent.COMPONENT_NAME} .box`).hide();
      // Utilities
      loadingImages(2, MagcountersComponent.COMPONENT_NAME);
    });
  }
}

customElements.define(MagcountersComponent.COMPONENT_NAME, MagcountersComponent);
