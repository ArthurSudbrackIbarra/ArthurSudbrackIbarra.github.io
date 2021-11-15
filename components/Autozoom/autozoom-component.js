class AutozoomComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('components/Autozoom/autozoom-component.html', () => {
      // Hiding this custom component once it has been loaded
      $(`${ComponentNames.AUTOZOOM}`).children().first().hide();
      // Utilities
      loadingImages(1, ComponentNames.AUTOZOOM);
    });
  }
}

// ComponentNames is defined in 'utilities.js'
customElements.define(ComponentNames.AUTOZOOM, AutozoomComponent);
