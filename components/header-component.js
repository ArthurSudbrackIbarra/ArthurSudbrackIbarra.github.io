class HeaderComponent extends HTMLElement {

  constructor() {
    super();
    this.currentShowingComponent = "curriculum-component";
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a id="logo" class="navbar-item selected" href=".">
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
                <a id="curriculum" class="navbar-item">
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
    // Setup
    this.setupNavbarBurgerOnClick();
    this.setupMenuOptionsOnClick();
  }

  setupNavbarBurgerOnClick() {
    // Burger menu logic.
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });
  }

  setupMenuOptionsOnClick() {
    // Making burger menu unexpanded.
    $(".navbar-dropdown .navbar-item, #curriculum").click(() => {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });
    // Changing the class of selected option in menu.
    $("#logo, #curriculum").click(e => {
      $(".selected").removeClass("selected");
      $(e.target).addClass("selected");
    });
    // Rendering components on click.
    $("#curriculum").click(() => {
      this.showComponent("curriculum-component");
    });
    $("#jpc").click(() => {
      // Removing color highlight from the current selected option in menu.
      $(".selected").removeClass("selected");
      this.showComponent("jpc-component");
    });
    $("#case-changer").click(() => {
      // Removing color highlight from the current selected option in menu.
      $(".selected").removeClass("selected");
      this.showComponent("case-changer-component");
    });
    $("#magcounters").click(() => {
      // Removing color highlight from the current selected option in menu.
      $(".selected").removeClass("selected");
      this.showComponent("magcounters-component");
    });
  }

  showComponent(componentName){
    // Checking if device is small.
    let isDeviceSmall = false;
    if(screen.width <= 1023){ isDeviceSmall = true; }
    // Fading off current custom component.
    $(`${this.currentShowingComponent} .box`).fadeOut(400);
    if(isDeviceSmall) { $("lateral-section-component .box").fadeOut(400); }
    // Fading in chosen custom component.
    setTimeout(() => {
      $(`${componentName} .box`).fadeIn(400);
      if(isDeviceSmall) {
        $("lateral-section-component .box").fadeIn(400);
        makeMainContentFirst();
      }
    }, 600);
    // Updating current showing component;
    this.currentShowingComponent = componentName;
  }

}

customElements.define('header-component', HeaderComponent);