class JPCComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('Components/JPC/jpc-component.html', () => {
      // Hiding this custom component once it has been loaded.
      $(`${ComponentNames.JPC}`).children().first().hide();
      // Utilities.
      loadingImages(1, ComponentNames.JPC);
      // Telling the header component this component has loaded.
      const headerComponent = $('header-component')[0];
      headerComponent.showComponent(ComponentNames.JPC);
    });
  }
}

// ComponentNames is defined in 'utilities.js'.
customElements.define(ComponentNames.JPC, JPCComponent);
