class MagcountersComponent extends HTMLElement {
  // Constructor.
  constructor() {
    super();
  }

  // This method is called once this custom element has been appended to DOM.
  connectedCallback() {
    // Using JQuery to load, inside of this custom component, the contents of an HTML file.
    $(this).load('Components/MagCounters/magcounters-component.html', () => {
      // Hiding this custom component once it has been loaded.
      $(`${ComponentNames.MAGCOUNTERS}`).children().first().hide();
      // loadingImages function is defined in 'utilities.js'.
      loadingImages(2, ComponentNames.MAGCOUNTERS);
      // Telling the header component that this component has loaded.
      const headerComponent = $('header-component')[0];
      headerComponent.showComponent(ComponentNames.MAGCOUNTERS);
    });
  }
}

// ComponentNames is defined in 'utilities.js'.
customElements.define(ComponentNames.MAGCOUNTERS, MagcountersComponent);
