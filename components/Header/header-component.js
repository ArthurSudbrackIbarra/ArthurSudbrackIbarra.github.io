class HeaderComponent extends HTMLElement {
  static COMPONENT_NAME = 'header-component';

  constructor() {
    super();
    this.currentShowingComponent = 'curriculum-component';
    this.currentDesktopTimeout = null;
  }

  connectedCallback() {
    $(this).load('components/Header/header-component.html', () => {
      // Setup
      this.setupNavbarBurgerOnClick();
      this.setupMenuOptionsOnClick();
      this.setupAudio();
    });
  }

  setupNavbarBurgerOnClick() {
    // Burger menu logic.
    $('.navbar-burger').click(() => {
      $('.navbar-burger').toggleClass('is-active');
      $('.navbar-menu').toggleClass('is-active');
    });
  }

  setupMenuOptionsOnClick() {
    // Making burger menu unexpanded.
    $('.navbar-dropdown .navbar-item, #curriculum').click(() => {
      $('.navbar-burger').toggleClass('is-active');
      $('.navbar-menu').toggleClass('is-active');
    });
    // Changing the class of selected option in menu.
    $('#curriculum').click((e) => {
      $('.selected').removeClass('selected');
      $(e.target).addClass('selected');
    });
    // Rendering components on click.
    $('#curriculum').click(() => {
      this.showComponent('curriculum-component');
    });
    $('#jpc').click(() => {
      // Removing color highlight from the current selected option in menu.
      $('.selected').removeClass('selected');
      this.showComponent('jpc-component');
    });
    $('#case-changer').click(() => {
      // Removing color highlight from the current selected option in menu.
      $('.selected').removeClass('selected');
      this.showComponent('case-changer-component');
    });
    $('#magcounters').click(() => {
      // Removing color highlight from the current selected option in menu.
      $('.selected').removeClass('selected');
      this.showComponent('magcounters-component');
    });
    $('#autozoom').click(() => {
      // Removing color highlight from the current selected option in menu.
      $('.selected').removeClass('selected');
      this.showComponent('autozoom-component');
    });
  }

  setupAudio() {
    $('.navbar-item:not(.has-dropdown)').click(() => {
      new Audio('../assets/selectSound.mp3').play();
    });
  }

  showComponent(componentName) {
    // Checking if device is small.
    if (screen.width <= 1023) {
      this.mobileShow(componentName);
    } else {
      this.desktopShow(componentName);
    }
    // Updating current showing component;
    this.currentShowingComponent = componentName;
  }

  desktopShow(componentName) {
    // Fading out current custom component.
    $(`${this.currentShowingComponent} .box`).fadeOut(400);
    // This code will prevent bugs if user keeps spamming the menu items
    if (this.currentDesktopTimeout !== null) {
      clearTimeout(this.currentDesktopTimeout);
    }
    // Fading in chosen custom component.
    this.currentDesktopTimeout = setTimeout(() => {
      $(`${componentName} .box`).fadeIn(400);
      this.currentDesktopTimeout = null;
    }, 600);
  }

  mobileShow(componentName) {
    // Hiding current custom component.
    $(`${this.currentShowingComponent} .box`).hide();
    // The device is small, so also hides the lateral section component.
    $('lateral-section-component .box').hide();
    // Fading in chosen custom component.
    $(`${componentName} .box`).css('display', 'block');
    $('lateral-section-component .box').css('display', 'block');
    // index.html function. Makes main content (#main-content) come before lateral section.
    makeMainContentFirst();
  }
}

customElements.define(HeaderComponent.COMPONENT_NAME, HeaderComponent);
