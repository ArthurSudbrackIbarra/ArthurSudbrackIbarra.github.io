class CaseChangerComponent extends HTMLElement {
  // Constructor.
  constructor() {
    super();
  }

  // This method is called once this custom element has been appended to DOM.
  connectedCallback() {
    // Using JQuery to load, inside of this custom component, the contents of an HTML file.
    $(this).load('Components/CaseChanger/case-changer-component.html', () => {
      // Hiding this custom component once it has been loaded.
      $(`${ComponentNames.CASE_CHANGER}`).children().first().hide();
      // Telling the header component that this component has loaded.
      const headerComponent = $('header-component')[0];
      headerComponent.showComponent(ComponentNames.CASE_CHANGER);
    });
  }
}

// ComponentNames is defined in 'utilities.js'.
customElements.define(ComponentNames.CASE_CHANGER, CaseChangerComponent);
