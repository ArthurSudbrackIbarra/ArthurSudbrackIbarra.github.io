class CurriculumComponent extends HTMLElement {
  // Constructor.
  constructor() {
    super();
  }

  // This method is called once this custom element has been appended to DOM.
  connectedCallback() {
    $(this).load('Components/Curriculum/curriculum-component.html', () => {
      // Hiding this custom component once it has been loaded.
      $(`${ComponentNames.CURRICULUM}`).children().first().hide();
      // Setup.
      this.updateSemester();
      // Telling the header component that this component has loaded.
      const headerComponent = $('header-component')[0];
      headerComponent.showComponent(ComponentNames.CURRICULUM);
    });
  }

  // This method automatically updates the text in the curriculum section to match
  // my current semester, based on the current month and year.
  updateSemester() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    let verb = 'Studying';
    let semester = '';
    switch (true) {
      case month <= 6 && year == 2020:
        semester = '(1st semester)';
        break;
      case month > 6 && year == 2020:
        semester = '(2nd semester)';
        break;
      case month <= 6 && year == 2021:
        semester = '(3rd semester)';
        break;
      case month > 6 && year == 2021:
        semester = '(4th semester)';
        break;
      case month <= 6 && year == 2022:
        semester = '(5th semester)';
        break;
      case month > 6 && year == 2022:
        semester = '(6th semester)';
        break;
      case month <= 6 && year == 2023:
        semester = '(7th semester)';
        break;
      case month > 6 && year == 2023:
        semester = '(8th semester)';
        break;
      default:
        verb = 'Studied';
    }
    $('#verb').text(verb);
    $('#semester').text(semester);
  }
}

// ComponentNames is defined in 'utilities.js'.
customElements.define(ComponentNames.CURRICULUM, CurriculumComponent);
