window.onload = () => {
    const newEntry = document.getElementById('new-entry');
    const deleteEntry = document.getElementById('delete-entry');
    const moveEntry = document.getElementById('move-entry');
    const newFolder = document.getElementById('new-folder');
    const deleteFolder = document.getElementById('delete-folder');
    const signout = document.getElementById('signout');
    const selectEntry = document.getElementById('select');

    newEntry.onclick = () => {
        window.location.href="updatededitentry.html";
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

    selectEntry.onclick = () => {
        if(deleteEntry.disabled && moveEntry.disabled) {
            deleteEntry.disabled = false;
            moveEntry.disabled = false;
        } else {
            deleteEntry.disabled = true;
            moveEntry.disabled = true;
        }

        deleteEntry.onclick = () => {
            alert('Functionality coming soon!');
        }
    
        moveEntry.onclick = () => {
            alert("Functionality comming soon!");
        }

    }
}