// This function will remove the loading spinners
// once the images have been loaded.
function loadingImages(gifsQuantity, customComponent) {
  for(let i = 1; i <= gifsQuantity; i++){
    $(`${customComponent} #demo-gif-${i}`).on("load", () => {
      const spinner = $(`${customComponent} #sc-${i}`);
      const gif = $(`${customComponent} #demo-gif-${i}`);
      spinner.remove();
      gif.hide();
      gif.removeClass("loading-image");
      gif.show(500);
    });
  }
}