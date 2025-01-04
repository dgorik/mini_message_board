function ShowAndHide(index) {
    var message = document.getElementById(`showorhide-${index}`);
    
    if (message.style.display === "none") {
        message.style.display = 'block'; // Expand the clicked message
    } else {
        message.style.display = 'none'; // Collapse if already expanded
    }
}