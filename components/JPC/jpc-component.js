class JPCComponent extends HTMLElement {
  static COMPONENT_NAME = 'jpc-component';

  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('components/JPC/jpc-component.html', () => {
      // Hiding this custom component once it has been loaded
      $(`${JPCComponent.COMPONENT_NAME} .box`).hide();
      // Utilities
      loadingImages(1, JPCComponent.COMPONENT_NAME);
    });
  }
}

customElements.define(JPCComponent.COMPONENT_NAME, JPCComponent);
