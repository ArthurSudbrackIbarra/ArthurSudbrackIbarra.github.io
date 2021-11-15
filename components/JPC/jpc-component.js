class JPCComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('components/JPC/jpc-component.html', () => {
      // Hiding this custom component once it has been loaded
      $(`${ComponentNames.JPC}`).children().first().hide();
      // Utilities
      loadingImages(1, ComponentNames.JPC);
    });
  }
}

// ComponentNames is defined in 'utilities.js'
customElements.define(ComponentNames.JPC, JPCComponent);
