class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    // ComponentNames is defined in 'utilities.js'
    this.currentShowingComponent = ComponentNames.DEMO;
    this.currentDesktopTimeout = null;
  }

  connectedCallback() {
    $(this).load('Components/Header/header-component.html', () => {
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
    $('.navbar-dropdown .navbar-item, .navbar-link, #curriculum').click(() => {
      $('.navbar-burger').toggleClass('is-active');
      $('.navbar-menu').toggleClass('is-active');
    });
    // Changing the class of selected option in menu.
    $('#curriculum, #jpc, #case-changer, #magcounters, #autozoom').click((e) => {
      $('.selected').removeClass('selected');
      $(e.target).addClass('selected');
    });
    // Rendering components on click.
    $('#curriculum').click(() => {
      this.showComponent(ComponentNames.CURRICULUM);
    });
    $('#jpc').click(() => {
      this.showComponent(ComponentNames.JPC);
    });
    $('#case-changer').click(() => {
      this.showComponent(ComponentNames.CASE_CHANGER);
    });
    $('#magcounters').click(() => {
      this.showComponent(ComponentNames.MAGCOUNTERS);
    });
    $('#autozoom').click(() => {
      this.showComponent(ComponentNames.AUTOZOOM);
    });
  }

  setupAudio() {
    $('.navbar-item:not(.has-dropdown)').click(() => {
      // Audios is defined in 'utilities.js'
      Audios.SELECT = new Audio('../Assets/Audios/selectSound.mp3');
      Audios.SELECT.play();
    });
    // isMobile function is defined in 'utilities.js'
    if (!isMobile()) {
      $('.navbar-item').mouseenter(() => {
        if (Audios.HOVER) {
          Audios.HOVER.currentTime = 0;
        } else {
          Audios.HOVER = new Audio('../Assets/Audios/hover.mp3');
        }
        Audios.HOVER.play().catch((error) => {
          console.log('User must interact with the document first for the hover audio to play!');
        });
      });
    }
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
    $(`${this.currentShowingComponent}`).children().first().fadeOut(400);
    // This code will prevent bugs if user keeps spamming the menu items
    if (this.currentDesktopTimeout !== null) {
      clearTimeout(this.currentDesktopTimeout);
    }
    // Fading in chosen custom component.
    this.currentDesktopTimeout = setTimeout(() => {
      $(`${componentName}`).children().first().fadeIn(400);
      // Erasing demo component.
      this.eraseDemoComponent();
      this.currentDesktopTimeout = null;
    }, 600);
  }

  mobileShow(componentName) {
    // Hiding current custom component.
    $(`${this.currentShowingComponent}`).children().first().hide();
    // Erasing demo component.
    this.eraseDemoComponent();
    // The device is small, so also hides the lateral section component.
    $(`${ComponentNames.LATERAL_SECTION}`).children().first().hide();
    // Fading in chosen custom component.
    $(`${componentName}`).children().first().css('display', 'block');
    $(`${ComponentNames.LATERAL_SECTION} .box`).css('display', 'block');
  }

  eraseDemoComponent() {
    // Removing demo component.
    $(`${ComponentNames.DEMO}`).remove();
  }
}

// ComponentNames is defined in 'utilities.js'
customElements.define(ComponentNames.HEADER, HeaderComponent);
