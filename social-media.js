var postInput = document.getElementById("post-input");
var postButton = document.getElementById("post-button");
var postList = document.getElementById("post-list");

postButton.addEventListener("click", createPost);

function createPost() {
  var postContent = postInput.value;

  if (postContent.trim() !== "") {
    var postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.textContent = postContent;

    postList.appendChild(postElement);

    postInput.value = "";
  }
}
