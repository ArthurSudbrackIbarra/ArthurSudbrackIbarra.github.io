class JPCComponent extends HTMLElement {
  static COMPONENT_NAME = 'jpc-component';

  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('components/JPC/jpc-component.html', () => {
      $(`${JPCComponent.COMPONENT_NAME} .box`).hide();
      // Utilities
      loadingImages(1, JPCComponent.COMPONENT_NAME);
    });
  }
}

customElements.define(JPCComponent.COMPONENT_NAME, JPCComponent);
