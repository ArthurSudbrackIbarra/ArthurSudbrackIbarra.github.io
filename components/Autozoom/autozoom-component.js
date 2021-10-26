class AutozoomComponent extends HTMLElement {
  static COMPONENT_NAME = 'autozoom-component';

  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('components/Autozoom/autozoom-component.html', () => {
      // Hiding this custom component once it has been loaded
      $(`${AutozoomComponent.COMPONENT_NAME} .box`).hide();
      // Utilities
      loadingImages(1, AutozoomComponent.COMPONENT_NAME);
    });
  }
}

customElements.define(AutozoomComponent.COMPONENT_NAME, AutozoomComponent);
