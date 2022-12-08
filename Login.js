const employeeNum = document.getElementById("employee_num");
const loginButton = document.getElementById("Login_button");
const loginErrorMsg = document.getElementById("login-error-msg");
const badge_num = document.getElementById("badge_num");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = employeeNum.value;
  const password = badge_num.value;

  if (username === "1001" && password === "1002") {
    alert("You have successfully logged in.");
    loginErrorMsg.style.display = "none";

    location.reload();
  } else {
    loginErrorMsg.style.display = "block";
  }
});
