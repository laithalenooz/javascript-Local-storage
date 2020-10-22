function registration() {
  var name = document.getElementById("t1").value;

  //email id expression code
  var letters = /^[A-Za-z]+$/;
  if (name == "") {
    alert("Please enter your name");
  } else if (!letters.test(name)) {
    alert("Name field required only alphabet characters");
  } else {
    alert("Redirecting to to the app");
    // Redirecting to other page or webste code.
    window.location.pathname = "../html/todo.html";
  }
}
