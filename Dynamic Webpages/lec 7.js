function register() {
  const username = document.getElementById("usernameInput").value;
  document.getElementById("message").innerHTML =
    username + ", you are signed up!";
}

function addReview() {
  const review = document.getElementById("reviewText").value;
  const addReview = document.getElementById("addedReview");
  addedReview.innerHTML = review;
}
