window.onload = () => {
    const newEntry = document.getElementById('new-entry');
    const deleteEntry = document.getElementById('delete-entry');
    const moveEntry = document.getElementById('move-entry');
    const newFolder = document.getElementById('new-folder');
    const deleteFolder = document.getElementById('delete-folder');
    const signout = document.getElementById('signout');
    const selectEntry = document.getElementById('select');

    newEntry.onclick = () => {
        window.location.href="neweditentry.html";
    }
    newFolder.onclick = () => {
        alert("Functionality comming soon!");
    }

    deleteFolder.onclick = () => {
        alert("Functionality comming soon!");
    }

    signout.onclick = () => {
        window.location.href="index.html";
    }
}