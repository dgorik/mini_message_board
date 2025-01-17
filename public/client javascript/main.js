function ShowAndHide(){
    var element = document.getElementById("showorhide")

    if(element.style.display == "none"){
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}