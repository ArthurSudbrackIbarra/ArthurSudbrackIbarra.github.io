class MagcountersComponent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="box">
        <div class="content">     
          <h1 id="magcounters-site">MagCounters Site</h1>
          <p class="descriptionOrLanguage"><strong>Description: </strong>
            Official MagCounters Site. Find out the best counters against any Pokemon present in Sword and Shield game series.
          </p> 
          <p class="descriptionOrLanguage"><strong>Language used: </strong>Javascript</p> 
          <p><strong>Framework used: </strong>Node.js (Express)</p> 
          <custom-button-component text = "Go to Repository" to = "github" href = "https://github.com/ArthurSudbrackIbarra/MagCounters-Site"></custom-button-component>
          <custom-button-component text="Go to Site" to="default" href="http://www.magcounters.com"></custom-button-component>
          <h3 id="demonstration-1">Demonstration: </h3>
          <div id="sc-1" class="spinner-container">
            <img class="spinner" src="../assets/spinner.gif" title="Loading...">
          </div>  
          <a href="https://drive.google.com/uc?export=view&id=1eY_eKwbHqc_j5eitYUZr8qikO16zMgTp" target="_blank">            
              <img id="demo-gif-1" class="loading-image" src="https://drive.google.com/uc?export=view&id=1eY_eKwbHqc_j5eitYUZr8qikO16zMgTp" title="Click to enlarge gif"/>
          </a>
          <h1 id="magcounters-bot" style="margin-top: 1.5rem">MagCounters Discord Bot</h1>
          <p style="margin-bottom: 0.25rem"><strong>Description: </strong>Official MagCounters Discord Bot. Use MagCounters site functionalities through bot commands in Discord.</p> 
          <p style="margin-bottom: 0.25rem"><strong>Language used: </strong>Javascript</p> 
          <p><strong>Framework used: </strong>Node.js</p>
          <custom-button-component text = "Go to Repository" to = "github" href = "https://github.com/ArthurSudbrackIbarra/MagCounters-Site"></custom-button-component>
          <custom-button-component text="Invite Bot To Your Server" to="discord" href="https://discord.com/api/oauth2/authorize?client_id=808576823569940492&permissions=2148006976&scope=bot"></custom-button-component>
          <h3 id="demonstration-2">Demonstration: </h3>
          <div id="sc-2" class="spinner-container">
            <img class="spinner" src="../assets/spinner.gif" title="Loading...">
          </div>       
          <a href="https://drive.google.com/uc?export=view&id=1n1wHTIM-uqzAHfJQvpFPQwtiJRdEQowg" target="_blank">           
            <img id="demo-gif-2" class="loading-image" src="https://drive.google.com/uc?export=view&id=1n1wHTIM-uqzAHfJQvpFPQwtiJRdEQowg" title="Click to enlarge gif"/>
          </a>
        </div>     
      </div>
    `;
    // Utilities
    loadingImages(2, "magcounters-component");
  }

}

customElements.define('magcounters-component', MagcountersComponent);