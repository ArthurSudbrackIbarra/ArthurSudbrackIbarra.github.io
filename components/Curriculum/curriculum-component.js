class CurriculumComponent extends HTMLElement {
  static COMPONENT_NAME = 'curriculum-component';

  constructor() {
    super();
  }

  connectedCallback() {
    $(this).load('components/Curriculum/curriculum-component.html', () => {
      // Setup
      this.updateSemester();
    });
  }

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

customElements.define(CurriculumComponent.COMPONENT_NAME, CurriculumComponent);
