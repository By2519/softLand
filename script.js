// Get the button and dropdown content
var button = document.getElementById("model");
var dropdownContent = document.getElementById("dropdownContent");

// Toggle the dropdown content when the button is clicked
button.addEventListener("click", function() {
  dropdownContent.classList.toggle("show");
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches("#model")) {
    dropdownContent.classList.remove("show");
  }
});

