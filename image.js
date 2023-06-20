document.addEventListener("DOMContentLoaded", function () {
  var image = document.getElementById("myImage");

  image.addEventListener("click", function () {
    // Image click handler
    changeImage();
  });
});
function changeImage() {
  var image = document.getElementById("myImage");

  // Check the current image source and change it accordingly
  if (image.src.endsWith("image1.jpg")) {
    image.src = "cvkep.jpg";
    image.alt = "CV kep ";
  } else {
    image.src = "image1.jpg";
    image.alt = "Image 1";
  }
}
