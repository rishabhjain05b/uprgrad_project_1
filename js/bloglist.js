// Get the modal
var binmodal = document.getElementById("binmodal");

// Get the button that opens the modal
var binbtn = document.getElementById("bin");

// Get the <span> element that closes the modal
var binspan = document.getElementsByClassName("binclose")[0];

// When the user clicks on the button, open the modal 
binbtn.onclick = function() {
  binmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
binspan.onclick = function() {
  binmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == binmodal) {
    binmodal.style.display = "none";
  }
}