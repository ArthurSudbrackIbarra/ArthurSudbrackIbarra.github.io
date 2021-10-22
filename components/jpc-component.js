class JPCComponent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="box">
          <div class="content">
              <h1 id="java-project-creator">Java Project Creator</h1>
              <p class="descriptionOrLanguage"><strong>Description: </strong>Automatically create Java projects and open them in Visual Studio Code. (Windows and Linux Ubuntu only).</p>
              <p class="descriptionOrLanguage"><strong>Language used: </strong>Java</p>  
              <custom-button-component text = "Go to Repository" to = "github" href = "https://github.com/ArthurSudbrackIbarra/Java-Project-Creator"></custom-button-component>                
              <h3 id="setting-up-the-environment">Setting up the environment:</h3>
              <h4 id="windows">Windows:</h4>
              <ol>
                <li>Clone my GitHub repository anywhere you wish.</li>
                <li>Copy the path of the &#39;bin&#39; folder you cloned. (Example: C:\\Users\\Arthur\\Desktop\\Java-Project-Creator\\windows\\bin).</li>
                <li>Create a path environment variable in your computer with the path you copied. More on how to do that here: <a href="https://www.computerhope.com/issues/ch000549.htm">https://www.computerhope.com/issues/ch000549.htm</a></li>
              </ol>
              <p><strong>NOTE:</strong> jpc.bat and jpc.jar <strong>MUST</strong> be in the <strong>SAME</strong> directory, do not separate them.</p>
              <h4 id="linux-ubuntu">Linux Ubuntu:</h4>
              <ol>
                <li>Clone this repository anywhere you wish.</li>
                <li>Open a Shell instance.</li>
                <li>Go to the &#39;linux&#39; folder you cloned. (Example: /home/arthur/Java-Project-Creator/linux).</li>
                <li>Type the command below:                
                </li>              
              </ol>
              <blockquote>
                <p>sh setup-jpc.sh</p>
              </blockquote>
              <p><strong>NOTE:</strong> You&#39;ll be asked to enter your sudo password.<br>
              <strong>NOTE:</strong> jpc.sh and jpc.jar <strong>MUST</strong> be in the <strong>SAME</strong> directory, do not separate them.</p>
              <h3 id="required-tools">Required Tools:</h3>
              <ul>
                <li>Visual Studio Code (<a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>)</li>
                <li>Java JDK 1.8.0 or higher (<a href="https://www.java.com/download/ie_manual.jsp">https://www.java.com/download/ie_manual.jsp</a>)</li>
              </ul>
              <h3 id="how-to-use">How to use:</h3>
              <p>Open a terminal anywhere and type:</p>
              <blockquote>
                <p>jpc YourProjectName YourMainClassName</p>
              </blockquote>
              <p>You can also ignore the &quot;YourMainClassName&quot; parameter as shown below:</p>
              <blockquote>
                <p>jpc YourProjectName</p>
              </blockquote>
              <p>By doing that, your main class will be called <strong>&quot;Main&quot;</strong>.</p>
              <h3 id="demonstration">Demonstration:</h3>
              <div id="sc-1" class="spinner-container">
                <img class="spinner" src="../assets/spinner.gif" title="Loading...">
              </div>     
              <a href="https://drive.google.com/uc?export=view&id=1zsAQF-bxamC9EHQWEqjD30A4l9N9G-sk" target="_blank">
                <img id="demo-gif-1" class="loading-image" src="https://drive.google.com/uc?export=view&id=1zsAQF-bxamC9EHQWEqjD30A4l9N9G-sk" title="Click to enlarge gif"/>
              </a>
          </div>
      </div>
    `;
    // Utilities
    loadingImages(1, "jpc-component");
  }

}

customElements.define('jpc-component', JPCComponent);