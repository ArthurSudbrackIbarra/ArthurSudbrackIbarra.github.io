class AutozoomComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('Components/Autozoom/autozoom-component.html', () => {
      // Hiding this custom component once it has been loaded.
      $(`${ComponentNames.AUTOZOOM}`).children().first().hide();
      // Utilities
      loadingImages(1, ComponentNames.AUTOZOOM);
      // Telling the header component this component has loaded.
      const headerComponent = $('header-component')[0];
      headerComponent.showComponent(ComponentNames.AUTOZOOM);
    });
  }
}

// ComponentNames is defined in 'utilities.js'.
customElements.define(ComponentNames.AUTOZOOM, AutozoomComponent);
