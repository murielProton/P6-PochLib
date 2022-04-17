/** 
 * this function finds out if the book to add in local sessionStorage is already in this local session storage. 
 * If it is already in storage it calls on a fucntion to display an error.
 * If it is not already in storage it calls on an other function to save this book in local sessionStorage.
 * The isbn parameter is a String, a unique universal code attibuted to each printed book.
 * The url parameter is a String, the URL it is stored under in the Google Books API.
 */
function populateMyPochListDiv(isbn, url){
    if(isThisISBNInLocalStorage(isbn)==true){
        var errorMessage ="Vous ne pouvez ajouter deux fois le même livre.";
        displayDivError(errorMessage);
    }else if (isThisISBNInLocalStorage(isbn)==false){
        saveDataInLocalStorage(isbn, url);
        displayLocalStorageInMyPochList();
    }
}
/** 
 * this function waits for the listOfDivTagsToDisplay to be loaded, before it displays this list inside the tag ideed "my-pock-list-display".
 */
async function displayLocalStorageInMyPochList(){
    loadingCompleet = false;
    displayLoadingSection();
    //first I erase all content fo the div with Id "result-display"
    document.getElementById("my-pock-list-display").innerHTML = "";
    let listOfDivTagsToDisplay = await getListOfItemsFromLocalStorage();
    loadingCompleet = true;
    displayLoadingSection();
    document.getElementById("my-pock-list-display").innerHTML = listOfDivTagsToDisplay;
}
/** 
 * this function determins if the isbn variable is valid.
 * It will return true if the variable isbn is not null.
 */
function isThisISBNInLocalStorage(isbn){
    if (localStorage.getItem(isbn) === null){
        return false;
    }  else{
        return true;
    }
}
/** 
 * this function will save the URL of the book into Window's Local Session Storage.
 * The maping key, is the ISBN of the book to ensure no duplicates are saved.
 */
function saveDataInLocalStorage(key, url){
  localStorage.setItem(key, url);
}
/** 
 * this function browse through the object of Window's Local Session Storage.
 * It will convert this object into a JavaScript object listOfDivTagsToDisplay, which is a list of books.
 */
async function getListOfItemsFromLocalStorage(){
    // "" prevent from displaying 'unknown' in the html Template.
    let listOfDivTagsToDisplay="" ;
    for(let i =0; i < localStorage.length ;i++){
        let urlOfBook = localStorage.getItem(localStorage.key(i));
        // The next line set a variable with an async fuction, Therefor an AWAIT is required.
        let newDivTagForMyPochList = await divBookWithGoogleInput(i, urlOfBook, true);
        listOfDivTagsToDisplay = listOfDivTagsToDisplay+newDivTagForMyPochList;
    }
    return listOfDivTagsToDisplay;
}
/** 
 * this function will erase one book from Window's Local Session Storage.
 * The parametter is a String of the ISBN.
 */
function removeABookFromMyPochList(keyIsbn){
    localStorage.removeItem(keyIsbn);
    displayLocalStorageInMyPochList();
}

/** 
 * this function deletes all items in localStorage and reset the number of books in storage to 0.
 * 
 * */
function deleteLocalStorageContent(){
    localStorage.clickcount = 0;
    localStorage.clear();
    displayLocalStorageInMyPochList();
}