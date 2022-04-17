let isItInMyPockList;
let loadingCompleet;
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
    loadingCompleet = true;
    displayLoadingSection();
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
    document.getElementById(elementsID).style.display = "none";
}
function displayElement(elementsID){
    document.getElementById(elementsID).style.display = "none";
}
function whichButtonToDisplay(isItInMyPockList, specificBookISBN, cardNumber, sepcificBookURL){
    if(isItInMyPockList == true){
        return '<button id="trash-'+cardNumber+'" class="btn"><i class="fa-solid fa-trash card-component" onclick= "removeABookFromMyPochList(\''+specificBookISBN+'\')"></i></button>';
    }else if(isItInMyPockList==false){
        return '<button id="bookmark-'+cardNumber+'" class="btn bookmark"><i class="fa-solid fa-bookmark card-component" onclick= "populateMyPochListDiv(\''+ specificBookISBN +'\',\''+ sepcificBookURL +'\')"></i></button><br>';
    }
}
function displayLoadingSection(){
    var elementsID ="loading-section";
    if (loadingCompleet == true){
        hideElement(elementsID);
    }else if (loadingCompleet == false){
        displayElement(elementsID);
    }
}