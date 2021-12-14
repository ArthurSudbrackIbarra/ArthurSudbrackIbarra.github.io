class MagcountersComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('Components/MagCounters/magcounters-component.html', () => {
      // Hiding this custom component once it has been loaded.
      $(`${ComponentNames.MAGCOUNTERS}`).children().first().hide();
      // Utilities.
      loadingImages(2, ComponentNames.MAGCOUNTERS);
      // Telling the header component this component has loaded.
      const headerComponent = $('header-component')[0];
      headerComponent.showComponent(ComponentNames.MAGCOUNTERS);
    });
  }
}

// ComponentNames is defined in 'utilities.js'.
customElements.define(ComponentNames.MAGCOUNTERS, MagcountersComponent);
