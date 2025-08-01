function togglePassword() {
  const passwordField = document.getElementById("password");
  const type = passwordField.getAttribute("type");
  passwordField.setAttribute("type", type === "password" ? "text" : "password");
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }

  // Simulate successful login
  alert(`Welcome, ${username}!`);
});
