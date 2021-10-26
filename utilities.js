// Class with the name of the components.
class ComponentNames {
  static AUTOZOOM = 'autozoom-component';
  static CASE_CHANGER = 'case-changer-component';
  static CURRICULUM = 'curriculum-component';
  static CUSTOM_BUTTON = 'custom-button-component';
  static HEADER = 'header-component';
  static JPC = 'jpc-component';
  static LATERAL_SECTION = 'lateral-section-component';
  static MAGCOUNTERS = 'magcounters-component';
}

// This function will remove the loading spinners
// once the images have been loaded.
function loadingImages(imagesQuantity, customComponent) {
  for (let i = 1; i <= imagesQuantity; i++) {
    $(`${customComponent} #demo-image-${i}`).on('load', () => {
      const spinner = $(`${customComponent} #sc-${i}`);
      const image = $(`${customComponent} #demo-image-${i}`);
      spinner.remove();
      image.hide();
      image.removeClass('loading-image');
      image.show(500);
    });
  }
}
