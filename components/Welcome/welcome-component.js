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
      { text: "OH, HEY! I'M ARTHUR SUDBRACK IBARRA!", t1: 0, t2: 2000 },
      { text: 'AND THIS IS MY PERSONAL WEBSITE!', t1: 2400, t2: 3900 },
      { text: "OK, SO I'LL BRIEFLY EXPLAIN WHAT YOU CAN DO HERE.", t1: 1900, t2: 3000 },
      { text: 'HERE WE GO:', t1: 1000, t2: 2000, newLine: true },
      { text: 'WAIT A MINUTE!', t1: 2500, t2: 3800, color: 'red', newLine: true },
      { text: `WHERE ${where_2}??!!`, t1: 1000, t2: 3000, color: 'red' },
      {
        text: "THIS MUST BE A BUG, SILLY ARTHUR CAN'T EVEN DO HIS CODING RIGHT...",
        t1: 3000,
        t2: 5200,
        newLine: true,
      },
      { text: 'WELL, I HOPE (YOU) CAN FIX THAT...', t1: 2000, t2: 3000 },
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

  // Called once the element is appended to DOM.
  // Checks if demo should play or not.
  connectedCallback() {
    const demo = localStorage.getItem('demo');
    if (!demo) {
      $(this).load('components/Welcome/welcome-component.html', () => {
        this.hideMenu();
        this.hideMenuResizeSetup();
        this.dialogueButtonSetup_1();
      });
    } else {
      $(this).load('components/Welcome/welcome-component-2.html', () => {
        this.dialogueButtonSetupNoDemo();
      });
    }
  }

  // Hides/Shows hamburger menu or navigation bar items according to screen width.
  // Also handles situations where the screen width changes suddenly (dev tools, for example).
  hideMenu() {
    const mobileHide = $('.navbar-burger');
    const desktopHide = $('.navbar-link, #curriculum');
    if (!this.interactionEnded) {
      mobileHide.fadeOut(0);
      desktopHide.fadeOut(0);
      setTimeout(() => {
        if (screen.width <= 1023) {
          this.menuHide = mobileHide;
          desktopHide.fadeIn(0);
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

  // Calls 'hideMenu' method on screen resize.
  hideMenuResizeSetup() {
    $(window).resize(() => {
      this.hideMenu();
    });
  }

  // Shows menu hamburger or navigation bar items according to screen width.
  // Blinks the elements that were hidden 3 times.
  // Scrolls screen to the position of the elements that were hidden.
  showMenu() {
    this.menuHide.fadeIn(2000);
    this.scrollScreenTo(this.menuHide);
    let blinkingTimeout = 2200;
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        this.menuHide.toggleClass('blinkingMenu');
      }, blinkingTimeout);
      blinkingTimeout += 400;
    }
  }

  // Scrolls the screen to an element
  scrollScreenTo(element) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: element.offset().top,
      },
      1000,
    );
  }

  // Defines what the first button of the interaction will do on click.
  dialogueButtonSetup_1() {
    const dialogueButton = $('.dialogue-button');
    dialogueButton.click(() => {
      localStorage.setItem('demo', 'done');
      dialogueButton.off();
      dialogueButton.addClass('disabled-dialogue-button');
      $('.arrow').fadeOut(1000);
      dialogueButton.animate({ marginBottom: '1rem' }, 1800);
      $('#typing-box').animate({ height: 25 }, 1800);
      setTimeout(() => {
        this.startChat_1();
      }, 2000);
    });
  }

  // Defines what the second button of the interaction will do on click.
  dialogueButtonSetup_2() {
    const dialogueButton = $('.dialogue-button');
    dialogueButton.removeClass('disabled-dialogue-button');
    dialogueButton.text('CONTINUE');
    dialogueButton.click(() => {
      dialogueButton.off();
      dialogueButton.addClass('disabled-dialogue-button');
      $('.arrow').fadeOut(1000);
      setTimeout(() => {
        this.startChat_2();
      }, 2000);
    });
  }

  // Defines what the button of the interaction will do if the demo is not activated.
  dialogueButtonSetupNoDemo() {
    const dialogueButton = $('.dialogue-button');
    dialogueButton.click(() => {
      dialogueButton.addClass('disabled-dialogue-button');
      localStorage.removeItem('demo');
      location.reload();
    });
  }

  // Starts the first interaction with the user.
  startChat_1() {
    const dialogueBox = $(`#interaction-panel #dialogue-box`);
    for (const sentence of this.sentencesPartOne) {
      this.type(dialogueBox, sentence);
    }
    setTimeout(() => {
      this.dialogueButtonSetup_2();
      this.clearDialogueBox();
    }, this.timeoutSum + 4000);
  }

  // Starts the second interaction with the user.
  startChat_2() {
    this.timeoutSum = 0;
    const dialogueBox = $(`#interaction-panel #dialogue-box`);
    for (const sentence of this.sentencesPartTwo) {
      this.type(dialogueBox, sentence);
    }
    setTimeout(() => {
      // Ends interaction.
      this.interactionEnded = true;
      this.endChat();
      this.showMenu();
    }, this.timeoutSum + 1000);
  }

  // Creates the elements that will be put in the dialogue box.
  // Properties such as new lines or colors are handled here.
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

  // Types the sentences in the interaction panel.
  type(dialogueBox, sentence) {
    // Types.
    setTimeout(() => {
      this.playAudio();
      $('#typing-box').append('<object type="image/svg+xml" data="../../assets/typing.svg" width=\'25px\'></object>');
    }, this.timeoutSum + sentence.t1),
      // Stops typing.
      setTimeout(() => {
        this.stopAudio();
        $('#typing-box object').remove();
        this.createDialogue(dialogueBox, sentence);
      }, this.timeoutSum + sentence.t2),
      (this.timeoutSum += sentence.t2);
  }

  // Clears the dialogue box with a cool sliding animation.
  clearDialogueBox() {
    $('.arrow').fadeIn(1000);
    const dialogueBoxContent = $(`#interaction-panel #dialogue-box h5`);
    dialogueBoxContent.animate({ height: 0, margin: 0 }, 1800);
    this.scrollScreenTo(this.menuHide);
    setTimeout(() => {
      dialogueBoxContent.remove();
    }, 1700);
  }

  // Plays the typing audio.
  playAudio() {
    // Audios is defined in 'utilities.js'
    Audios.TYPING = new Audio('../../assets/typing.mp3');
    Audios.TYPING.volume = 0.2;
    Audios.TYPING.loop = true;
    Audios.TYPING.play();
  }

  // Stops playing the typing audio.
  stopAudio() {
    // Audios is defined in 'utilities.js'
    Audios.TYPING.volume = 0;
  }

  // Ends chat interaction with a cool sliding animation.
  endChat() {
    setTimeout(() => {
      $('#typing-box').animate({ height: 0 }, 1800);
      this.showMenu();
    }, 1200);
  }
}

// ComponentNames is defined in 'utilities.js'
customElements.define(ComponentNames.WELCOME, WelcomeComponent);
