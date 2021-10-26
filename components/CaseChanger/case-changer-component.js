class CaseChangerComponent extends HTMLElement {
  static COMPONENT_NAME = 'case-changer-component';

  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('components/CaseChanger/case-changer-component.html', () => {
      // Hiding this custom component once it has been loaded
      $(`${CaseChangerComponent.COMPONENT_NAME} .box`).hide();
    });
  }
}

customElements.define(CaseChangerComponent.COMPONENT_NAME, CaseChangerComponent);
