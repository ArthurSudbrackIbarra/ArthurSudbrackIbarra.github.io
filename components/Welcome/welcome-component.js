class WelcomeComponent extends HTMLElement {
  constructor() {
    super();
    // Timeout Sum.
    this.timeoutSum = 0;
    // Sentences.
    let where_1;
    let where_2;
    let where_3;
    if (screen.width <= 1023) {
      where_1 = 'HAMBURGER MENU';
      where_2 = 'IS THE HAMBURGER MENU';
      where_3 = 'HAMBURGUR MENU IS';
    } else {
      where_1 = 'NAVIGATION BAR';
      where_2 = 'ARE THE MENU ITEMS';
      where_3 = 'MENU ITEMS ARE';
    }
    this.sentencesPartOne = [
      { text: "OH, HEY! I'M ARTHUR SUDBRACK IBARRA!", t1: 0, t2: 3000 },
      { text: 'AND THIS IS MY PERSONAL SITE!', t1: 2400, t2: 5000 },
      { text: "OK, SO I'LL BRIEFLY EXPLAIN WHAT YOU CAN DO HERE.", t1: 1900, t2: 3000 },
      { text: 'HERE WE GO:', t1: 1000, t2: 2000, newLine: true },
      {
        text: `MY PROJECTS - CHOOSE 'MY PROJECTS' IN THE ${where_1} TO CHECK OUT SOME COOL PROJECTS I'VE MADE.`,
        t1: 2400,
        t2: 4000,
        newLine: true,
      },
      {
        text: `CURRICULUM - CHOOSE 'CURRICULUM' IN THE ${where_1} TO CHECK OUT MY EDUCATION, PROFESSIONAL EXPERIENCE AND SKILLS.`,
        t1: 2400,
        t2: 5000,
        newLine: true,
      },
      { text: 'WAIT A MINUTE!', t1: 2500, t2: 3200, color: 'red', newLine: true },
      { text: `WHERE ${where_2}??!!`, t1: 2000, t2: 3000, color: 'red' },
      {
        text: "THIS IS PROBRABLY A BUG, SILLY ARTHUR CAN'T EVEN DO HIS CODING RIGHT...",
        t1: 3500,
        t2: 5200,
        newLine: true,
      },
      { text: 'WELL, NOW IT IS YOUR JOB TO FIX THAT...', t1: 2000, t2: 3000 },
    ];
    this.sentencesPartTwo = [
      { text: 'OK, SO', t1: 0, t2: 1300 },
      { text: `TO BE CONTINUED... THE ${where_3} BACK! (FOR NOW...)`, t1: 2300, t2: 4000 },
    ];
    // Menu hide.
    this.menuHide = null;
    // Interaction ended.
    this.interactionEnded = false;
  }

  connectedCallback() {
    $(this).load('components/Welcome/welcome-component.html', () => {
      this.hideMenu();
      this.hideMenuResizeSetup();
      this.hiButtonSetup_1();
    });
  }

  hideMenu() {
    const mobileHide = $('.navbar-burger');
    const desktopHide = $('.navbar-link, #curriculum');
    if (!this.interactionEnded) {
      mobileHide.fadeOut(0);
      desktopHide.fadeOut(0);
      setTimeout(() => {
        if (screen.width <= 1023) {
          this.menuHide = mobileHide;
          desktopHide.fadeIn(1000);
        } else {
          this.menuHide = desktopHide;
          desktopHide.fadeOut(0);
        }
      }, 1000);
    } else {
      setTimeout(() => {
        if (screen.width <= 1023) {
          mobileHide.fadeIn(0);
          desktopHide.fadeIn(0);
        } else {
          mobileHide.fadeOut(0);
          desktopHide.fadeIn(0);
        }
      }, 1000);
    }
  }

  hideMenuResizeSetup() {
    $(window).resize(() => {
      this.hideMenu();
    });
  }

  showMenu() {
    this.menuHide.fadeIn(3000);
  }

  hiButtonSetup_1() {
    const hiButton = $('.hi-button');
    hiButton.click(() => {
      hiButton.off();
      hiButton.addClass('disabled-hi-button');
      $('.arrow').fadeOut(1000);
      hiButton.animate({ marginBottom: '1rem' }, 1800);
      $('#typing-box').animate({ height: 25 }, 1800);
      setTimeout(() => {
        this.startChat_1();
      }, 2000);
    });
  }

  hiButtonSetup_2() {
    const hiButton = $('.hi-button');
    hiButton.removeClass('disabled-hi-button');
    hiButton.text('CONTINUE');
    hiButton.click(() => {
      hiButton.off();
      hiButton.addClass('disabled-hi-button');
      $('.arrow').fadeOut(1000);
      setTimeout(() => {
        this.startChat_2();
      }, 2000);
    });
  }

  startChat_1() {
    const dialogueBox = $(`#interaction-panel #dialogue-box`);
    for (const sentence of this.sentencesPartOne) {
      this.type(dialogueBox, sentence);
    }
    setTimeout(() => {
      this.hiButtonSetup_2();
      this.clearDialogueBox();
    }, this.timeoutSum + 4000);
  }

  startChat_2() {
    this.timeoutSum = 0;
    const dialogueBox = $(`#interaction-panel #dialogue-box`);
    for (const sentence of this.sentencesPartTwo) {
      this.type(dialogueBox, sentence);
    }
    setTimeout(() => {
      this.interactionEnded = true;
      this.endChat();
      this.showMenu();
    }, this.timeoutSum + 1000);
  }

  type(dialogueBox, sentence) {
    // welcomeComponentTimeouts is defined in utilities.js
    welcomeComponentTimeouts.push(
      setTimeout(() => {
        this.playAudio();
        $('#typing-box').append('<object type="image/svg+xml" data="../../assets/typing.svg" width=\'25px\'></object>');
      }, this.timeoutSum + sentence.t1),
    );
    welcomeComponentTimeouts.push(
      setTimeout(() => {
        this.stopAudio();
        $('#typing-box object').remove();
        this.createDialogue(dialogueBox, sentence);
      }, this.timeoutSum + sentence.t2),
    );
    this.timeoutSum += sentence.t2;
  }

  clearDialogueBox() {
    $('.arrow').fadeIn(1000);
    const dialogueBoxContent = $(`#interaction-panel #dialogue-box h5`);
    dialogueBoxContent.animate({ height: 0, margin: 0 }, 1800);
    setTimeout(() => {
      dialogueBoxContent.remove();
    }, 1700);
  }

  createDialogue(dialogueBox, sentence) {
    let dialogue = '<h5';
    if (sentence.color) {
      dialogue += ` style="color:${sentence.color};">`;
    } else {
      dialogue += '>';
    }
    if (sentence.newLine) {
      dialogue += '<br/>';
    }
    dialogue += `${sentence.text}</h5>`;
    dialogueBox.append(dialogue);
  }

  playAudio() {
    // Audios is defined in 'utilities.js'
    Audios.TYPING = new Audio('../../assets/typing.mp3');
    Audios.TYPING.volume = 0.2;
    Audios.TYPING.loop = true;
    Audios.TYPING.play();
  }

  stopAudio() {
    // Audios is defined in 'utilities.js'
    Audios.TYPING.volume = 0;
  }

  endChat() {
    setTimeout(() => {
      $('#typing-box').animate({ height: 0 }, 1800);
      this.showMenu();
    }, 1200);
  }
}

// ComponentNames is defined in 'utilities.js'
customElements.define(ComponentNames.WELCOME, WelcomeComponent);
