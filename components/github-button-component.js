class GithubButtonComponent extends HTMLElement {

  constructor() {
    super();
    // Props
    this.repolink = this.attributes["repolink"].value;
  }

  connectedCallback() {
    this.innerHTML = `
      <a class="button" href=${this.repolink} target="_blank">
        <div class="icon-text">
            <span class="icon">
                <i class="fab fa-github"></i>
            </span>
            <span>Go to Repository</span>
        </div>  
      </a>
    `;
  }

}

customElements.define('github-button-component', GithubButtonComponent);