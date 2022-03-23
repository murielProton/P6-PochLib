async function populateMyPochListDiv(url){
    //first I erase all content fo the div with Id "result-display"
    document.getElementById("my-pock-list-display").innerHTML = "";
    let numberOfItemsInLocalStorage = keyGenerator();
    saveDataInLocalStorage(localStorage.clickcount, url);
    let listOfDivTagsToDisplay = await getListOfItemsFromLocalStorage(numberOfItemsInLocalStorage);
    document.getElementById("my-pock-list-display").innerHTML = listOfDivTagsToDisplay;
}
function saveDataInLocalStorage(key, url){
   localStorage.setItem(key, url);
}
function keyGenerator(){
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;

    } else {
        localStorage.clickcount = 0;
    }
    return localStorage.clickcount;
}
async function getListOfItemsFromLocalStorage(numberOfItemsInLocalStorage){
    let listOfDivTagsToDisplay ;
    for(let i =0; i<=numberOfItemsInLocalStorage ;i++){
        let urlOfBook = localStorage.getItem(i);
        console.log("local storage  "+ urlOfBook);
        // The next line set a variable with an async fuction, Therefor an AWAIT is required.
        let newDivTagForMyPochList = await divBookWithGoogleInput(i, urlOfBook);
        listOfDivTagsToDisplay = listOfDivTagsToDisplay+newDivTagForMyPochList;
    }
    return listOfDivTagsToDisplay;
}
function removeBookFromMyPochList(key){
    localStorage.removeItem(key);
}