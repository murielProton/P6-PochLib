let isItInMyPockList;
let loadingCompleet;
/** 
 * this function is a toggle set on the button ideed "new-book-button".
 * the button ideed "new-book-button" displays the form in the HTML page.
 * */
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
/** 
 * When the body is loaded it launches this function.
 * this function calls on two other functions and hides the form.
 * */
function onloadDisplay(){
    loadingCompleet = true;
    displayLoadingSection();
    displayLocalStorageInMyPochList();
    document.getElementById("search-form").style.display = "none";
}
/** 
 * When the the button named "Annuler" is clicked this function applies.
 * this function will hide the form ideed "search-form" and it will erase the search result displayed in tag ideed "result-display".
 * 
 * */
function cancelDisplayOfSearchForm(){
    document.getElementById("search-form").style.display = "none";
    document.getElementById("result-display").innerHTML = "";
}
/** 
 * this function will hide the tag ideed by it's parameter.
 * the parameter is a String framed by "".
 * 
 * */
function hideElement(elementsID){
    document.getElementById(elementsID).style.display = "none";
}
/** 
 * this function will display the tag ideed by it's parameter.
 * the parameter is a String framed by "".
 * 
 * */
function displayElement(elementsID){
    document.getElementById(elementsID).style.display = "none";
}
/** 
 * this function returns a HTML button tag.
 * it according to the boolean parameter isItInMyPockList constructs the button to returns.
 * the parameter specificBookISBN is a String of the ISBN.
 * the parameter cardNumber is a number which enables the id of the tag to be unique.
 * the parameter sepcificBookURL is the URL under wich the book is stored in Google Books API.
 * */
function whichButtonToDisplay(isItInMyPockList, specificBookISBN, cardNumber, sepcificBookURL){
    if(isItInMyPockList == true){
        return '<button id="trash-'+cardNumber+'" class="btn"><i class="fa-solid fa-trash card-component" onclick= "removeABookFromMyPochList(\''+specificBookISBN+'\')"></i></button>';
    }else if(isItInMyPockList==false){
        return '<button id="bookmark-'+cardNumber+'" class="btn bookmark"><i class="fa-solid fa-bookmark card-component" onclick= "populateMyPochListDiv(\''+ specificBookISBN +'\',\''+ sepcificBookURL +'\')"></i></button><br>';
    }
}
/** 
 * This function should display or not the div ideed "loading-section" when the data is loading.
 * WARNING under construction.
 * */
function displayLoadingSection(){
    var elementsID ="loading-section";
    if (loadingCompleet == true){
        hideElement(elementsID);
    }else if (loadingCompleet == false){
        displayElement(elementsID);
    }
}