function populateMyPochListDiv(isbn, url){
    saveDataInLocalStorage(isbn, url);
    console.log('populateMyPochListDiv ISBN : '+isbn)
    displayLocalStorageInMyPochList();
}
async function displayLocalStorageInMyPochList(){
    //first I erase all content fo the div with Id "result-display"
    document.getElementById("my-pock-list-display").innerHTML = "";
    let listOfDivTagsToDisplay = await getListOfItemsFromLocalStorage();
    document.getElementById("my-pock-list-display").innerHTML = listOfDivTagsToDisplay;
}
function saveDataInLocalStorage(key, url){
    console.log('saveDataInLocalStorage ISBN : '+key)
   localStorage.setItem(key, url);
}
async function getListOfItemsFromLocalStorage(){
    // "" prevent from displaying 'unknown' in the html Template.
    let listOfDivTagsToDisplay="" ;
    for(let i =0; i < localStorage.length ;i++){
        let urlOfBook = localStorage.getItem(localStorage.key(i));
        console.log("local storage  book url - "+ urlOfBook);
        // The next line set a variable with an async fuction, Therefor an AWAIT is required.
        let newDivTagForMyPochList = await divBookWithGoogleInput(i, urlOfBook, true);
        listOfDivTagsToDisplay = listOfDivTagsToDisplay+newDivTagForMyPochList;
        console.log("newDivTagForMyPochList - "+ newDivTagForMyPochList);
    }
    console.log("local storage  list to display - "+ listOfDivTagsToDisplay);
    return listOfDivTagsToDisplay;
}
function removeABookFromMyPochList(keyIsbn){
    localStorage.removeItem(keyIsbn);
    displayLocalStorageInMyPochList();
}

//This methodes deletes all items in localStorage and reset the number of books in storage to 0.
function deleteLocalStorageContent(){
    localStorage.clickcount = 0;
    localStorage.clear();
}