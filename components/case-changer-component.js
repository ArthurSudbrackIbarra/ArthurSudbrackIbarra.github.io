class CaseChangerComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="box">
        <div class="content">     
          <h1 id="case-changer">Case Changer</h1>
          <p class="descriptionOrLanguage"><strong>Description: </strong>Turn your text into uppercase, lowercase ou titlecase by simply spelling voice commands. (Windows only).</p> 
          <p class="descriptionOrLanguage"><strong>Language used: </strong>Python</p> 
          <custom-button-component text = "Go to Repository" to = "github" href = "https://github.com/ArthurSudbrackIbarra/Case-Changer"></custom-button-component>
          <h3 id="setting-up-the-environment">Setting up the environment:</h3>
          <ol>
            <li>Open a command prompt terminal and go to the folder of this project.</li>
            <li>Enter the following commands:</li>
            <li>pip install SpeechRecognition</li>
            <li>pip install pipwin</li>
            <li>pipwin install pyaudio</li>
            <li>pip install pyautogui</li>
            <li>pip install pyperclip</li>
          </ol>
          <h3 id="languages">Supported Languages:</h3>
          <ul>
            <li>English (USA)</li>
            <li>Portuguese (Brazil)</li>
          </ul>
          <h3 id="commands">Commands:</h3>
          <ul>
            <li>UPPERCASE: uppercase (en) | maiúsculo (pt)</li>
            <li>LOWERCASE: lowercase (en) | minúsculo (pt)</li>
            <li>TITLECASE: title (en) | título (pt)</li>
          </ul>
          <h3 id="demonstration-video">Demonstration:</h3>
          <iframe src="https://www.youtube.com/embed/hUE3wNpmA1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    `;
  }
}

customElements.define('case-changer-component', CaseChangerComponent);
