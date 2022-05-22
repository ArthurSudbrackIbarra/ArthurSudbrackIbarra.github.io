// TerminalCommandComponent class.
class TerminalCommandComponent extends HTMLElement {
  // Constructor.
  constructor(command, onComplete) {
    super();
    this.command = command;
    this.elements = null;
    this.count = 0;
    this.onComplete = onComplete;
    this.blinkingInterval = null;
  }

  // This method is called once this custom element has been appended to DOM.
  connectedCallback() {
    this.innerHTML = `
      <div id='terminal-box'>
        <p id='user'>asi@asi-desktop:~$ </p>
      </div>
    `;
    const terminalBox = $('#terminal-box');
    terminalBox.fadeOut(0);
    terminalBox.fadeIn(1000);
    this.createSpanTags();
    this.elements = $('#terminal-box span');
    this.setupKeyboardListening();
    this.startBlinkingAnimation();
  }

  // Makes each individual characters in the command have its own span tag.
  createSpanTags() {
    for (let i = 0; i < this.command.length; i++) {
      if (i === 0) {
        $('#terminal-box').append(
          `<span class='blinking-character' data-original_value='${this.command[i]}'>${this.command[i]}</span>`,
        );
      } else {
        $('#terminal-box').append(`<span data-original_value='${this.command[i]}'>${this.command[i]}</span>`);
      }
    }
  }

  // Starts the blinking animation in a span tag.
  startBlinkingAnimation() {
    clearInterval(this.blinkingInterval);
    if (this.elements[this.count]) {
      this.blinkingInterval = setInterval(() => {
        this.elements[this.count].classList.toggle('blinking-character');
      }, 500);
    }
  }

  // Stops the blinking animation in any span tag.
  stopBlinkingAnimation() {
    clearInterval(this.blinkingInterval);
    $('.blinking-character').removeClass('blinking-character');
  }

  // Changes the span tag that will blink.
  changeBlinkingCharacter() {
    $('.blinking-character').removeClass('blinking-character');
    if (this.elements[this.count]) {
      this.elements[this.count].classList.add('blinking-character');
    }
  }

  // Handles keyboard/touch events.
  setupKeyboardListening() {
    // isMobile function is defined in 'utilities.js'.
    if (isMobile()) {
      const terminalBox = $('#terminal-box');
      terminalBox.click(() => {
        if (this.count <= this.elements.length) {
          if (this.count >= this.elements.length - 1) {
            this.elements[this.count].style.color = 'white';
            this.stopBlinkingAnimation();
            this.onComplete();
            terminalBox.off();
            this.playSuccessAudio();
          } else {
            this.elements[this.count].style.color = 'white';
            this.count++;
            this.changeBlinkingCharacter();
            this.startBlinkingAnimation();
          }
        }
      });
    } else {
      $(document).keyup((event) => {
        const key = event.originalEvent.key;
        switch (key.toLowerCase()) {
          case 'enter':
            {
              if (this.count === this.elements.length && this.checkCommand()) {
                this.stopBlinkingAnimation();
                this.onComplete();
                $(document).off();
                this.playSuccessAudio();
              }
            }
            break;
          case 'backspace':
            this.playKeyPressedAudio();
            {
              if (this.elements[this.count - 1]) {
                this.elements[this.count - 1].innerText = this.elements[this.count - 1].dataset.original_value;
                this.elements[this.count - 1].style.color = 'gray';
                if (this.elements[this.count]) {
                  this.elements[this.count].classList.remove('blinking-character');
                }
                this.count--;
              }
            }
            break;
          default: {
            if (this.elements[this.count] && key.length === 1) {
              if (this.elements[this.count].dataset.original_value === key) {
                this.elements[this.count].style.color = 'white';
              } else {
                this.elements[this.count].style.color = 'red';
                this.elements[this.count].innerText = key;
              }
              this.count++;
              this.playKeyPressedAudio();
              this.changeBlinkingCharacter();
              this.startBlinkingAnimation();
            }
          }
        }
      });
    }
  }

  // This function checks if the command was typed correctly.
  checkCommand() {
    for (const element of this.elements) {
      if (element.dataset.original_value !== element.innerText) {
        return false;
      }
    }
    return true;
  }

  // Plays the key pressed audio.
  playKeyPressedAudio() {
    if (Audios.KEY_PRESSED) {
      Audios.KEY_PRESSED.currentTime = 0;
    } else {
      Audios.KEY_PRESSED = new Audio('../Assets/Audios/keyPressed.mp3');
      Audios.KEY_PRESSED.volume = 0.2;
    }
    Audios.KEY_PRESSED.play();
  }

  // Plays the success audio.
  playSuccessAudio() {
    Audios.SUCCESS = new Audio('../Assets/Audios/success.mp3');
    Audios.SUCCESS.volume = 0.5;
    Audios.SUCCESS.play();
  }
}

// ComponentNames is defined in 'utilities.js'.
customElements.define(ComponentNames.TERMINAL_COMMAND, TerminalCommandComponent);

// Demo Component class.
class DemoComponent extends HTMLElement {
  // Constructor.
  constructor() {
    super();
    // Timeout Sum.
    this.timeoutSum = 0;
    // Sentences.
    let where_1;
    let where_2;
    let typeOrTouch;
    let command;
    if ($(document).width() <= 1023) {
      where_1 = 'HAMBURGER MENU';
      where_2 = 'IS THE HAMBURGER MENU';
      typeOrTouch = 'TOUCHING THE COMMAND MULTIPLE TIMES';
      command = 'create-hamburger-menu --color white --placement top-right';
    } else {
      where_1 = 'NAVIGATION BAR';
      where_2 = 'ARE THE MENU ITEMS';
      typeOrTouch = 'TYPING THE COMMAND AND THEN PRESS ENTER';
      command = 'create-menu-items my-projects curriculum --include-social-media';
    }
    this.sentencesPartOne = [
      { text: "OH, HEY! I'M ARTHUR SUDBRACK IBARRA!", t1: 0, t2: 2400 },
      { text: 'AND THIS IS MY PERSONAL WEBSITE!', t1: 1000, t2: 3400 },
      { text: "OK, SO I'LL BRIEFLY EXPLAIN WHAT YOU CAN DO HERE.", t1: 1900, t2: 3000 },
      { text: 'WAIT A MINUTE!', t1: 2500, t2: 3800, color: 'red', newLine: true },
      { text: `WHERE ${where_2}??!!`, t1: 1000, t2: 2000, color: 'red' },
      {
        text: "THIS MUST BE A BUG, SILLY ARTHUR CAN'T EVEN DO HIS CODING RIGHT...",
        t1: 1500,
        t2: 4200,
        newLine: true,
      },
      { text: 'WELL, I HOPE (YOU) CAN FIX THAT...', t1: 2000, t2: 3000 },
    ];
    this.sentencesPartTwo = [
      { text: 'OK SO, MAYBE YOU COULD USE A COMMAND, LIKE PEOPLE DO IN TERMINALS, YOU KNOW?', t1: 300, t2: 2000 },
      {
        text: `HERE, I FOUND THIS IN STACKOVERFLOW, THERE'S NO WAY IT WON'T WORK. MAYBE TRY ${typeOrTouch}?`,
        t1: 2000,
        t2: 4000,
      },
    ];
    this.sentencesPartThree = [
      { text: "NICE! THAT WAS IT! YOU'RE SUCH A TALENTED DEV AND A BEAST AT DEBUGGING!", t1: 0, t2: 1400 },
      { text: 'AND WITH THAT WE END THIS SHORT INTERACTION...', t1: 2000, t2: 3500, newLine: true },
      {
        text: `THANKS FOR PLAYING! IF YOU LIKED THIS EXPERIENCE MAKE SURE TO CHECK OUT SOME OF MY PROJECTS OR MY CURRICULUM WITH YOUR NEWLY FIXED ${where_1}!`,
        t1: 3000,
        t2: 6000,
      },
    ];
    // The menu components/parts that will be hidden.
    this.menuHide = null;
    // The original screen width.
    this.originalScreenWidth = $(document).width();
    // Boolean indicating if the interaction has ended or not.
    this.interactionEnded = false;
    // Terminal Command component.
    this.terminalCommand = new TerminalCommandComponent(command, () => {
      this.startChat_3();
    });
  }

  // This method is called once this custom element has been appended to DOM.
  connectedCallback() {
    // Checks if the demo interaction should happen or not by consulting the local storage object.
    const demo = localStorage.getItem('demo');
    if (!demo) {
      // Using JQuery to load, inside of this custom component, the contents of an HTML file.
      $(this).load('Components/Demo/demo-component.html', () => {
        this.setupClosePopupButton();
        this.setupSkipDemoButton();
        this.hideMenu();
        this.dialogueButtonSetup_1();
      });
    } else {
      // Using JQuery to load, inside of this custom component, the contents of an HTML file.
      $(this).load('Components/Demo/demo-component-no-demo.html', () => {
        this.dialogueButtonSetupNoDemo();
      });
    }
  }

  // Setting up the button to close the demo popup.
  setupClosePopupButton() {
    $('#close-demo-popup').click(() => {
      $('#demo-popup').css('display', 'none');
      $('#program-bar').toggleClass('program-bar-jointed');
    });
  }

  // Setting up the button to skip the demo interaction.
  setupSkipDemoButton() {
    $('#skip').click(() => {
      localStorage.setItem('demo', 'done');
      location.reload();
    });
  }

  // Hides/Shows hamburger menu or navigation bar items according to screen width.
  // Also handles situations where the screen width changes suddenly (dev tools, for example).
  hideMenu() {
    const mobileHide = $('.navbar-burger');
    const desktopHide = $('.navbar-link, #curriculum, #my-github, #my-linkedin');
    if (!this.interactionEnded) {
      if ($(document).width() <= 1023) {
        desktopHide.fadeIn(0);
        this.menuHide = mobileHide;
      } else {
        this.menuHide = desktopHide;
      }
      this.menuHide.fadeOut(0);
    } else {
      if ($(document).width() <= 1023) {
        mobileHide.fadeIn(0);
        desktopHide.fadeIn(0);
      } else {
        mobileHide.fadeOut(0);
        desktopHide.fadeIn(0);
      }
    }
    // Calls the method again on screen resize.
    $(window).resize(() => {
      clearTimeout(window.resizedFinishedHideMenu);
      window.resizedFinishedHideMenu = setTimeout(() => {
        if ($(document).width() !== this.originalScreenWidth) {
          this.originalScreenWidth = $(document).width();
          this.hideMenu();
        }
      }, 500);
    });
  }

  // Shows menu hamburger or navigation bar items according to screen width.
  // Blinks the elements that were hidden 3 times.
  // Scrolls screen to the position of the elements that were hidden.
  showMenu() {
    this.menuHide.fadeIn(2000);
    this.scrollScreenTo(this.menuHide);
    let blinkingTimeout = 2200;
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        this.menuHide.toggleClass('blinkingMenu');
      }, blinkingTimeout);
      blinkingTimeout += 400;
    }
    this.timeoutSum = blinkingTimeout;
  }

  // Scrolls the screen to an element.
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
      this.timeoutSum = 0;
      this.startTerminalCommandPart();
    }, this.timeoutSum + 2000);
  }

  // Appends the terminal-command-component element to the dialogue box and starts the terminal part of the interaction.
  startTerminalCommandPart() {
    $('#dialogue-box').append(this.terminalCommand);
  }

  // Starts the third interaction with the user.
  startChat_3() {
    this.showMenu();
    const dialogueBox = $(`#interaction-panel #dialogue-box`);
    for (const sentence of this.sentencesPartThree) {
      this.type(dialogueBox, sentence);
    }
    setTimeout(() => {
      // Ends interaction.
      this.interactionEnded = true;
      this.endChat();
    }, this.timeoutSum + 3500);
  }

  // Creates the elements that will be put in the dialogue box.
  // Properties such as new lines or colors are handled here.
  createDialogue(dialogueBox, sentence) {
    const dialogue = document.createElement('h5');
    dialogue.innerText = sentence.text;
    if (sentence.color) {
      dialogue.style.color = sentence.color;
    }
    if (sentence.newLine) {
      dialogue.style.marginTop = '1.3rem';
    }
    dialogueBox.append(dialogue);
  }

  // Types the sentences in the interaction panel.
  type(dialogueBox, sentence) {
    // Types.
    setTimeout(() => {
      this.playTypingAudio();
      $('#typing-box').append(
        '<object type="image/svg+xml" data="../../Assets/General/typing.svg" width=\'25px\'></object>',
      );
    }, this.timeoutSum + sentence.t1),
      // Stops typing.
      setTimeout(() => {
        this.stopTypingAudio();
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
  playTypingAudio() {
    // Audios is defined in 'utilities.js'.
    Audios.TYPING = new Audio('../../Assets/Audios/typing.mp3');
    Audios.TYPING.volume = 0.2;
    Audios.TYPING.loop = true;
    Audios.TYPING.play();
  }

  // Stops playing the typing audio.
  stopTypingAudio() {
    // Audios is defined in 'utilities.js'.
    Audios.TYPING.pause();
  }

  // Ends chat interaction.
  endChat() {
    setTimeout(() => {
      this.showMenu();
    }, 2200);
  }
}

// ComponentNames is defined in 'utilities.js'.
customElements.define(ComponentNames.DEMO, DemoComponent);
