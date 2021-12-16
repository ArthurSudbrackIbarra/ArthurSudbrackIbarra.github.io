class ContactComponent extends HTMLElement {
  // Constructor.
  constructor() {
    super();
  }

  // This method is called once this custom element has been appended to DOM.
  connectedCallback() {
    $(this).load('Components/Contact/contact-component.html');
  }
}

// ComponentNames is defined in 'utilities.js'.
customElements.define(ComponentNames.CONTACT, ContactComponent);
