function newBookButtonDisplayForm(){
    var idButtonToToggle = "new-book-button";
    var htmlElementToDisplay = document.getElementById("search-form");
    if (htmlElementToDisplay.style.display === "none") {
        htmlElementToDisplay.style.display = "block";
        hideElement(idButtonToToggle);
    } else {
        htmlElementToDisplay.style.display = "none";
    }
}
function onloadDisplay(){
    displayLocalStorageInMyPochList();
    document.getElementById("search-form").style.display = "none";
}
function cancelDisplayOfSearchForm(){
    document.getElementById("search-form").style.display = "none";
    document.getElementById("result-display").innerHTML = "";
}
function showTrash(){
    document.getElementById("trash").style.display = "block";
}
function hideTrash(){
    document.getElementById("trash").style.display = "none";
}
function showBookmark(){
    document.getElementById("bookmark").style.display = "block";
}
function hideBookmark(){
    document.getElementById("bookmark").style.display = "none";
}
function toggleBookmark(){
    var element = document.getElementById("bookmark");
    element.classList.toggle("block");
}
function hideElement(iDOfButton){
    document.getElementById(iDOfButton).style.visibility = 'hidden';
}