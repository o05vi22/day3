function logout() {
  const confirmed = confirm("Are you sure you want to logout?");
  if (confirmed) {
    alert("You have been logged out.");
    window.location.href = "index.html"; // redirect to login page
  }
}
