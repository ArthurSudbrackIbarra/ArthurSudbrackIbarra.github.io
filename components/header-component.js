class HeaderComponent extends HTMLElement {

  constructor() {
    super();
    // Setup
    this.setupNavbarBurgerOnClick();
    this.setupMyProjectsOnClick();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href=".">
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
                        <a id="jpc" class="navbar-item">
                            Java Project Creator
                            <i class="fab fa-java my-projects-icon"></i>
                        </a>
                        <a id="case-changer" class="navbar-item">
                            Case Changer
                            <i class="fab fa-python my-projects-icon"></i>
                        </a>
                        <a id="magcounters" class="navbar-item">
                            MagCounters
                            <i class="fab fa-js-square my-projects-icon"></i>
                        </a>
                        <a id="autozoom" class="navbar-item">
                            Autozoom
                            <i class="fab fa-java my-projects-icon"></i>
                        </a>
                    </div>
                </div>
                <a class="navbar-item">
                    Curriculum
                </a>
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

  setupNavbarBurgerOnClick() {
    $(document).ready(() => {
      $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
      });
    });
  }

  setupMyProjectsOnClick() {
    $(document).ready(() => {
      $(".navbar-dropdown .navbar-item").click(() => {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
      });
      $("#jpc").click(() => {
        if(screen.width <= 1023){
          makeMainContentFirst();
        }
        $("#main-content").html("<jpc-component></jpc-component>");
        $("jpc-component *").hide();
        $("jpc-component *").fadeIn(800);
      });
    });
  }
}

customElements.define('header-component', HeaderComponent);