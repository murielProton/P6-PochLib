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
    diplayInMyPockList();
}
function cancelDisplayOfSearchForm(){
    document.getElementById("search-form").style.display = "none";
    document.getElementById("result-display").innerHTML = "";
}
function diplayInResultDisplay(){
    var idButtonToToggleTrash ="trash";
    var idButtonToToggleBookMark ="bookmark";
    hideElement(idButtonToToggleTrash);
    displayElement(idButtonToToggleBookMark);
}
function diplayInMyPockList(){
    var idButtonToToggleTrash ="trash";
    var idButtonToToggleBookMark ="bookmark";
    hideElement(idButtonToToggleBookMark);
    displayElement(idButtonToToggleTrash);
}
function hideElement(elementsID){
    document.getElementById(elementsID).style.visibility = 'hidden';
}
function displayElement(elementsID){
    document.getElementById(elementsID).style.visibility = 'visible';
}