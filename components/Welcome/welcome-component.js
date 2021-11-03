class WelcomeComponent extends HTMLElement {
  constructor() {
    super();
    this.timeoutSum = 0;
  }

  connectedCallback() {
    $(this).load('components/Welcome/welcome-component.html', () => {
      this.hiButtonSetup();
    });
  }

  hiButtonSetup() {
    $('.hi-button').click(() => {
      if (!$('.hi-button').hasClass('disabled-hi-button')) {
        $('.hi-button').addClass('disabled-hi-button');
        $('.arrow').remove();
        $('.hi-button').animate({ marginBottom: '1rem' }, 1800);
        $('#typing-box').animate({ height: 25 }, 1800);
        setTimeout(() => {
          this.startChat();
        }, 2000);
      }
    });
  }

  startChat() {
    const dialogueBox = $(`${ComponentNames.WELCOME} #interaction-panel #dialogue-box`);
    this.type(dialogueBox, "OH, HEY! I'M ARTHUR SUDBRACK IBARRA!", 0, 3000);
    this.type(dialogueBox, 'AND THIS IS MY PERSONAL SITE!', 2400, 5000);
    this.type(dialogueBox, "OK, SO I'LL BRIEFLY EXPLAIN WHAT YOU CAN DO HERE.", 1900, 4000);
    this.type(dialogueBox, '<br>HERE WE GO:', 1000, 2000);
    const where = screen.width <= 1023 ? 'HAMBURGER MENU' : 'NAVIGATION BAR';
    this.type(
      dialogueBox,
      `<br>MY PROJECTS - CHOOSE 'MY PROJECTS' IN THE ${where} TO CHECK OUT SOME COOL PROJECTS I'VE MADE.`,
      3400,
      6000,
    );
    this.type(
      dialogueBox,
      `<br>CURRICULUM - CHOOSE 'CURRICULUM' IN THE ${where} TO CHECK OUT MY EDUCATION, PROFESSIONAL EXPERIENCE AND SKILLS.`,
      3400,
      6000,
    );
    this.type(dialogueBox, "<br>WELL, THAT'S IT, I HOPE YOU HAVE FUN AROUND HERE! :)", 3400, 6000);
    this.endChat();
  }

  type(dialogueBox, message, t1, t2) {
    // welcomeComponentTimeouts is defined in utilities.js
    welcomeComponentTimeouts.push(
      setTimeout(() => {
        this.playAudio();
        $('#typing-box').append('<object type="image/svg+xml" data="../../assets/typing.svg" width=\'25px\'></object>');
        this.timeoutSum -= t1;
      }, this.timeoutSum + t1),
    );
    welcomeComponentTimeouts.push(
      setTimeout(() => {
        this.stopAudio();
        $('#typing-box object').remove();
        this.createDialogue(dialogueBox, message);
        this.timeoutSum -= t2;
      }, this.timeoutSum + t2),
    );
    this.timeoutSum += t2;
  }

  createDialogue(dialogueBox, message) {
    dialogueBox.append(`<h5>${message}</h5>`);
  }

  playAudio() {
    // Audios is defined in 'utilities.js'
    Audios.TYPING = new Audio('../../assets/typing.mp3');
    Audios.TYPING.volume = 0.2;
    Audios.TYPING.loop = true;
    Audios.TYPING.play();
  }

  stopAudio() {
    Audios.TYPING.volume = 0;
  }

  endChat() {
    setTimeout(() => {
      $('#typing-box').animate({ height: 0 }, 1800);
    }, 1200 + this.timeoutSum);
  }
}

// ComponentNames is defined in 'utilities.js'
customElements.define(ComponentNames.WELCOME, WelcomeComponent);
