class ContactComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('components/Contact/contact-component.html');
  }
}

// ComponentNames is defined in 'utilities.js'
customElements.define(ComponentNames.CONTACT, ContactComponent);
