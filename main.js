// validate that password and confirm password match before submitting

const warnings = document.querySelectorAll('.warning-pwd-nomatch');
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm-password");

function check () {
    if (password.value != confirm_password.value) {
        warnings.forEach(item => item.style.cssText ="display: block;")
    } else {
        warnings.forEach(item => item.style.cssText ="visibility: hidden;")
    }}
// will display even if user has not finished entering a password, which is annoying
// will not show an X when the passwords dont match


password.addEventListener('keyup', check);
confirm_password.addEventListener('keyup', check);
