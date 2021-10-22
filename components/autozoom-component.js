class AutozoomComponent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="box">
        <div class="content">     
          <h1 id="autozoom">Autozoom</h1>
          <p class="descriptionOrLanguage"><strong>Description: </strong>
            Designed to automate access to Zoom lessons links. I was tired of having to log into Moodle every time to get the links to my classes, so I decided to create this.
            You can set your lessons/classes names in the left and the zoom links in the right, so whenever you need to access your meetings your only job is to press the corresponding button.
            </p> 
          <p class="descriptionOrLanguage"><strong>Language used: </strong>Java</p> 
          <custom-button-component
            text = "Go to Repository"
            to = "github"
            href = "https://github.com/ArthurSudbrackIbarra/AutoZoom"
          ></custom-button-component>
          <h3 id="installation">Installation:</h3>
          <ul>
            <li>Download the .jar file available on Autozoom's Github repository</li>
            <li>Please, after you extract the application zip, DO NOT DELETE dados-autozoom.txt file, since all of your classes names and zoom links are saved there. In case you delete that file, it will be created again when you run Autozoom, however, you are going to lose all the information that you had previously typed.</li>
          </ul>
          <h3 id="demonstration">Demonstration:</h3>
          <img src="../assets/autozoom.png">       
        </div>
      </div>
    `;
  }

}

customElements.define('autozoom-component', AutozoomComponent);