window.onload = () => {
    const submit = document.getElementById('submit');
    const cancel = document.getElementById('cancel');

    submit.onclick = () => {
        window.location.href="userdashboard.html";
    }

    cancel.onclick = () => {
        window.location.href="newuserdashboard.html";
    }
}