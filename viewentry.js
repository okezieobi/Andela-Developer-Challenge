window.onload = () => {
    const edit  = document.getElementById('edit');
    const delet = document.getElementById('delete');
    const cancel = document.getElementById('cancel');

    edit.onclick = () => {
        window.location.href="neweditentry.html";
    }

    delet.onclick = () => {
        window.location.href="newuserdashboard.html";
    }

    cancel.onclick = () => {
        window.location.href="userdashboard.html";
    }

}