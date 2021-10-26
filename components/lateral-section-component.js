class LateralSectionComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="box">
        <figure class="image is-128x128">
          <img id="myPhoto" class="is-rounded" src="../assets/myPhoto.jpg" alt="Photo of Me">
        </figure>
        <h1>Arthur Sudbrack Ibarra</h1>
        <p>
          Hi! My name is Arthur and I'm a Software Engineering student at PUCRS, Porto Alegre, Brazil. Here you'll 
          find personal projects I made, as well as some personal information. I love programming in Java, however, I'm willing 
          to explore everything out there!
        </p>
      </div>
    `;
  }
}

customElements.define('lateral-section-component', LateralSectionComponent);
