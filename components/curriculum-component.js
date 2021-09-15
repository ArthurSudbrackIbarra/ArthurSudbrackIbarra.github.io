class CurriculumComponent extends HTMLElement {

  constructor() {
    super();
    // Setup
    this.updateSemester();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="box">
          <div class="content">
            <h1>Curriculum</h1>
            <h3>Formation:</h3>
            <ul>
              <li><i class="fas fa-graduation-cap"></i>Graduated in Highschool in 2019 at Colégio Farroupilha, Brazil, Porto Alegre, RS;</li>
              <li><i class="fas fa-university"></i>Studying Software Engineering at PUCRS (<span id="semester">4</span>th Semester), Brazil, Porto Alegre, RS;</li>
            </ul>
            <h3>Professional Experience</h3>
            <ul>
              <li><i class="fas fa-hand-point-right"></i>Internship at LIS-HP (Software Innovation Laboratory) - PUCRS-HP partnership</li>
            </ul>
            <h3>Technical Abilities:</h3>
            <ul>
              <li><i class="fab fa-windows"></i>Windows Operating System (Intermediate);</li>
              <li><i class="fas fa-file-word"></i>Microsoft Office and similar (Intermediate);</li>
              <li><i class="fab fa-java"></i>Programming in Java (Intermediate);</li>
              <li><i class="fab fa-php"></i>Programming in PHP (Basic);</li>
              <li><i class="fab fa-cuttlefish"></i>Programming in C (Basic);</li>
              <li><i class="fas fa-sitemap"></i>Experience with MVC architecture;</li>
              <li><i class="fab fa-node-js"></i>Creation of web applications with JavaScript, Node.js (Express), HTML, CSS, EJS (Intermediate);</li>
              <li><i class="fab fa-vuejs"></i>Creation of web applications with Vue.js (Basic);</li>
              <li><i class="fab fa-react"></i>Creation of web applications with React.js (Basic);</li>    
              <li><i class="fab fa-git"></i>Management and version control with Git;</li>
              <li><i class="fas fa-database"></i>SQL language and experience with OracleDB and MySQL DBMS (Intermediary);</li>
              <li><i class="fas fa-mobile-alt"></i>Creation of IOS and Android apps with Flutter and Dart (Basic);</li>
              <li><i class="fab fa-python"></i>Python Programming (Basic);</li>                    
            </ul>
            <h3>Languages</h3>
            <ul>
              <li><i class="fas fa-hand-point-right"></i>Advanced english with CAE certificate (C1 Advanced) from University of Cambridge;</li>
              <li><i class="fas fa-hand-point-right"></i>Fluent brazilian portuguese;</li>
              <li><i class="fas fa-hand-point-right"></i>Basic spanish;</li>                 
            </ul>
          </div>
      </div>
    `;
  }

  updateSemester(){
    $(document).ready(() => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      let semester;
      switch (true){
        case month <= 6 && year == 2020:
          semester = 1;
        break;
        case month > 6 && year == 2020:
          semester = 2;
        break;
        case month <= 6 && year == 2021:
          semester = 3;
        break;
        case month > 6 && year == 2021:
          semester = 4;
        break;
        case month <= 6 && year == 2022:
          semester = 5;
          break;
        case month > 6 && year == 2022:
          semester = 6;
        break;
        case month <= 6 && year == 2023:
          semester = 7;
        break;
        case month > 6 && year == 2023:
          semester = 8;
        break;
      }
      $("#semester").text(semester);
    });
  }

}

customElements.define('curriculum-component', CurriculumComponent);