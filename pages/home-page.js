class HomePage extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML = `
      <div class="columns">
        <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-128x128">
                <img class="is-rounded" src="../assets/myPhoto.jpg" alt="Photo of Me">
              </figure>
              <h1>Oi!</h1>
            </div>     
        </div>
        <div class="column">
            <div class="box">
              I'm in a box.
            </div>
        </div>
      </div>
    `;
  }

}

customElements.define('home-page', HomePage);