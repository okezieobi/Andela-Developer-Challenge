window.onload = () => {
const signup = document.getElementById('signup');
const passwordreset = document.getElementById('resetpassword');
const signin = document.getElementById('signin');

signup.onclick = () => {
    window.location.href="signup.html";
}

passwordreset.onclick = () => {
    window.location.href="passwordreset.html"; 
}

signin.onclick = () => {
    window.location.href="userdashboard.html";
}
}