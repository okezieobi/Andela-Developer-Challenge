window.onload = () => {
let username = document.getElementById('username');
let password = document.getElementById('password');
let email = document.getElementById('password');
let enroll = document.getElementById('enroll');
let cancel = document.getElementById('cancel');

enroll.onclick = () => {
    window.location.href="newuserdashboard.html";
}

cancel.onclick = () => {
    window.location.href="index.html";
}
}