// Get the modal
var modal3 = document.getElementById("postsmodal");

// Get the button that opens the modal
var btn3 = document.getElementById("createposts");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

var allposts = document.getElementById("allposts");
allposts.onclick = function(){
 window.location = "./html/bloglist.html";
}