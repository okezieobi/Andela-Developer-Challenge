window.onload = () => {
    const cancel = document.getElementById('cancel');
    const signout = document.getElementById('signout');
    const settings = document.getElementById('settings');

    cancel.onclick = () => {
        window.location.href="newuserdashboard.html";
    }

    signout.onclick = () => {
        window.location.href="index.html";
    }

    settings.onclick = () => {
        alert('Functionality coming soon!');
    }
}