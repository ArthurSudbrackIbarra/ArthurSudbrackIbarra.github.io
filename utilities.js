// This function will remove the loading spinners
// once the images have been loaded.
function loadingImages(gifsQuantity) {
  for(let i = 1; i <= gifsQuantity; i++){
    $(`#demo-gif-${i}`).one("load", function() {
      $(`#sc-${i}`).remove();
      $(this).hide();
      $(this).removeClass("loading-image");
      $(this).show(500);
    }).each(function() {
      if(this.complete) {
        $(this).trigger("load");
      }
    });
  }
}