class HeaderComponent extends HTMLElement {

  constructor() {
    super();
    // Setup
    this.setup();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar is-link" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
                <h1>Arthur</h1>
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        My Projects
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Java Project Creator
                            <i class="fab fa-java my-projects-icon"></i>
                        </a>
                        <a class="navbar-item">
                            Case Changer
                            <i class="fab fa-python my-projects-icon"></i>
                        </a>
                        <a class="navbar-item">
                            MagCounters
                            <i class="fab fa-js-square my-projects-icon"></i>
                        </a>
                        <a class="navbar-item">
                            Autozoom
                            <i class="fab fa-java my-projects-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <a class="navbar-item" href="https://github.com/ArthurSudbrackIbarra" target="_blank">
                    <div class="icon-text">
                        <span class="icon">
                            <i class="fab fa-github"></i>
                        </span>
                        <span>My GitHub</span>
                    </div>                  
                </a>
                <a class="navbar-item" href="https://www.youtube.com/channel/UCiwtjyDM24QHYw1YkewsSfQ" target="_blank">
                    <div class="icon-text">
                        <span class="icon">
                            <i class="fab fa-youtube"></i>
                        </span>
                        <span>My Youtube</span>
                    </div>
                </a>
            </div>
        </div>
    </nav>
    `;
  }

  setup(){
    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });
  }
}

customElements.define('header-component', HeaderComponent);