const loginForm = Login.html.getElementById("login form");
const loginButton = Login.html.getElementById("Login_button");
const loginErrorMsg = Login.html.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "1001" && password === "1002") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
