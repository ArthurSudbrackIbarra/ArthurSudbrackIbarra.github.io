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
