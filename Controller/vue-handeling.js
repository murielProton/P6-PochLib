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
function diplayInResultDisplay(){
    var idButtonToToggleTrash ="trash";
    var idButtonToToggleBookMark ="bookmark";
    hideElement(idButtonToToggleTrash);
    displayElement(idButtonToToggleBookMark);
}
function hideElement(elementsID){
    document.getElementById(elementsID).style.display = 'none';
}
function displayElement(elementsID){
    document.getElementById(elementsID).style.display = 'none';
}