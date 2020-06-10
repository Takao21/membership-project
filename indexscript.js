const login = () => {
  let username = document.getElementById("usernameInput").value;
  let password = document.getElementById("passwordInput").value;
  let usernameRegex = new RegExp("^[a-zA-Z0-9_]*$");
  let passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$");
  if (usernameRegex.test(username) && passwordRegex.test(password)) {
    window.location.href = "member.html";
  }else {
    window.alert("Invalid username or password.")
  }
}
