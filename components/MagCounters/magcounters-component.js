class MagcountersComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('components/MagCounters/magcounters-component.html', () => {
      // Hiding this custom component once it has been loaded
      $(`${ComponentNames.MAGCOUNTERS}`).children().first().hide();
      // Utilities
      loadingImages(2, ComponentNames.MAGCOUNTERS);
    });
  }
}

// ComponentNames is defined in 'utilities.js'
customElements.define(ComponentNames.MAGCOUNTERS, MagcountersComponent);
