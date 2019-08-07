var likes = 0;
var commentArray = [];
function editSavePost() {
  var title = document.getElementById("blogTitleNew");
  var action = document.getElementById("editSave").innerText;
  var description = document.getElementById("blogBody");
  var saveEditButton = document.getElementById("editSave");

  if (action === "Edit ") {
    title.contentEditable = true;
    description.contentEditable = true;
    title.style.outline = "2px solid pink";
    description.style.border = "2px solid pink";
    description.style.outline = "2px solid lightblue";
    saveEditButton.innerHTML = 'Save <i class="fa fa-save"></i>';
  }

  if (action === "Save ") {
    title.contentEditable = false;
    description.contentEditable = false;
    title.style.outline = "none";
    description.style.border = "none";
    description.style.outline = "none";
    saveEditButton.innerHTML = 'Edit <i class="fa fa-edit"></i>';
  }
}

function postLiked() {
  var likeButton = document.getElementById("likeButton");
  var likeText = document.getElementById("likeText");
  likeButton.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked!';
  likes += 1;
  if (likes === 1) {
    likeText.innerText = likes + " person likes this!";
  }
  if (likes > 1) {
    likeText.innerText = likes + " people have liked this!";
  }
}

function showComments() {
  var comment = document.getElementById("textArea");
  var commentContainer = document.getElementById("commentContainer");
  commentContainer.innerHTML = "";
  commentArray.push(comment.value);
  comment.value = "";
  for (var i = commentArray.length - 1; i >= 0; i--) {
    var doc = document.createElement("p");
    doc.setAttribute("class", "commentClass");
    doc.innerText = commentArray[i];
    document.getElementById("commentContainer").append(doc);
  }
}