/** 
 * this function construct an HTML div whit the information passed on by the URL.
 * the parameter cardNumber ensures the HTML id of the tags are unique.
 * The parameter isItInMyPockList defines wich buttons to display : eather the adding to the Poch'liste or the removing from the Poch'list. It is a boolean.
 */
async function divBookWithGoogleInput(cardNumber, ABookURL, isItInMyPockList){
    var sepcificBookURL = ABookURL;
    let wantedBook = await Book(sepcificBookURL);
    var specificBookISBN = wantedBook.isbn ;
    var buttonTrashOrBookmark = whichButtonToDisplay(isItInMyPockList, specificBookISBN, cardNumber, sepcificBookURL);
    let divCardToInsert =  '<div id=card-number-'+cardNumber+' class="card-body" src='+sepcificBookURL+'>' +
        buttonTrashOrBookmark +
        '<div id="div-title-'+cardNumber+'" class="card-title card-component"><h3 id="title-'+cardNumber+'" class="card-text title">'+wantedBook.title+'</h3><br></div>' +
        '<div id="div-author-'+cardNumber+'" class="card-author card-component"><p id="author-'+cardNumber+'"class="card-text author">Author: '+wantedBook.author+'</p></div>' +
        '<div id="div-description-'+cardNumber+'" class="card-description card-component"><p id="description-'+cardNumber+'"class="card-text description">Description: '+wantedBook.description+'</p></div>' +
        '<img id="smallImageURL-'+cardNumber+'" class="card-image card-component" type="text" value="" src="'+wantedBook.smallImageURL+'" /><br>' +
        '<p id="ISBN-'+cardNumber+'" class="card-text ISBN card-component">ISBN: '+specificBookISBN+'</p>' +
    '</div>';
    return divCardToInsert;
}
/** 
 * this function construct a list of books to diplay in tag ideed "result-display".
 * the parameter listOfBooksToDisplay is a list. It's number of items will define how many 'div id=card-number-x' will be displayed in HTML.
 */
async function listOfBooksDisplayInHTML(listOfBooksToDisplay){
    //first I erase all content fo the div with Id "result-display"
    document.getElementById("result-display").innerHTML = "";
    let listOfDivTagsToDisplay = "<h1>Résultats de la recherche</h1>";
    if (listOfBooksToDisplay){
        if (listOfBooksToDisplay.items.length <=1){
            //error handeling
            errorMessage ="Aucun livre n’a été trouvé.";
            displayDivError(errorMessage);
        }
        else if (listOfBooksToDisplay.items.length == 1){
            if(listOfBooksToDisplay.items[1]==undefined){
                errorMessage ="Aucun livre n’a été trouvé.";
                displayDivError(errorMessage);
            }
            let thisURL = listOfBooksToDisplay.items[1].selfLink;
            let listOfDivTagsToDisplay = await divBookWithGoogleInput(1, thisURL,false);
        }else if (listOfBooksToDisplay.items.length>=2){
            //second I insert a div witch Id will be "card-number-"+i
            // the 'for loop' begins at 0, the comparison must be a stric < cause 0 to 20 = 21, but 0 to 19 = 20.
            for(let i=0; i<listOfBooksToDisplay.items.length;i++ ){
                let currentURL = listOfBooksToDisplay.items[i].selfLink;
                // The next line set a variable with an async function, Therefor an AWAIT is required.
                let newDivTagToDisplay = await divBookWithGoogleInput(i, currentURL,false);
                listOfDivTagsToDisplay = listOfDivTagsToDisplay+newDivTagToDisplay;
            }
        }
    }else{
        errorMessage ="Aucun livre n’a été trouvé.";
        displayDivError(errorMessage);
        
    }
    loadingCompleet = true;
    displayLoadingSection();
    document.getElementById("result-display").innerHTML = listOfDivTagsToDisplay;
}



