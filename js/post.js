var edit = document.getElementById("edit");
var save = document.getElementById("save");
var blogBody = document.getElementById("blogBody");
edit.onclick = function(){
  edit.style.display="none";
  save.style.display="block"; // changing the state of the button here
  blogBody.style.boxShadow = "inset 0 0 5px #000";
  blogBody.contentEditable="true";
}

save.onclick = function(){
  edit.style.display="block";
  save.style.display="none";
  blogBody.style.boxShadow = "none";
  blogBody.contentEditable="false";

}


var likebtn = document.getElementById("like");
var count=0;
likebtn.onclick = function(){

     likebtn.innerHTML = "Liked!";
     count++;
     document.getElementById("counter").innerText = count + "  person likes this!";

}


var commentBtn = document.getElementById("commentBtn");
commentBtn.onclick = function(){
  text = commentArea.value;
  var p = document.createElement("p");
   p.style.background="white";
   p.style.margin="10px";
   p.style.padding="10px";
   p.style.wordWrap = "break-word";
  var node = document.createTextNode(text);
  p.prepend(node);
  var element = document.getElementById("commentContainer");
  element.prepend(p);
  var textArea = document.getElementById("commentArea");
  if(!textArea.value || textArea.value!=textArea.defaultValue){
   textArea.value = textArea.defaultValue; // here defaultValue is giving the default values that I set for the commentArea
  }
}