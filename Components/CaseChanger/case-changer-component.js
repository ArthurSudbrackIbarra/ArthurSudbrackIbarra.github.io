class CaseChangerComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('Components/CaseChanger/case-changer-component.html', () => {
      // Hiding this custom component once it has been loaded
      $(`${ComponentNames.CASE_CHANGER}`).children().first().hide();
    });
  }
}

// ComponentNames is defined in 'utilities.js'
customElements.define(ComponentNames.CASE_CHANGER, CaseChangerComponent);
