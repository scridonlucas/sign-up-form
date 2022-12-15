let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let match = document.querySelector(".match");
console.log(password.value);

password.addEventListener("keyup", validatePassword);

confirmPassword.addEventListener("keyup", validatePassword);

function validatePassword() {
    if(password.value != confirmPassword.value) {
        match.textContent = "*Passwords don't match";
        confirmPassWord.setCustomValidity("Passwords don't match");  
    }
    else if(password.value == confirmPassword.value) {
        match.textContent = "";
        confirmPassWord.setCustomValidity("");  
    }
}