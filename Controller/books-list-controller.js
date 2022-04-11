/*first find the div where to display div id = result-display
* second empty the div
* loop for each where {
    first i insert tockens in HTML
    second i insert the book in HTML
}
*/
//
async function divBookWithGoogleInput(cardNumber, ABookURL){
    var sepcificBookURL = ABookURL;
    let wantedBook = await Book(sepcificBookURL);
    var specificBookISBN = wantedBook.isbn ;
    let divCardToInsert =  '<div id=card-number-'+cardNumber+' class="card-body" src='+sepcificBookURL+'>' +
        '<button id="bookmark-'+cardNumber+'" class="btn bookmark"><i class="fa-solid fa-bookmark card-component" onclick= "populateMyPochListDiv(\''+ specificBookISBN +'\',\''+ sepcificBookURL +'\')"></i></button><br>' +
        '<div id="div-title-'+cardNumber+'" class="card-title card-component"><h3 id="title-'+cardNumber+'" class="card-text title">'+wantedBook.title+'</h3><br></div>' +
        '<div id="div-author-'+cardNumber+'" class="card-author card-component"><p id="author-'+cardNumber+'"class="card-text author">Author: '+wantedBook.author+'</p></div>' +
        '<div id="div-description-'+cardNumber+'" class="card-description card-component"><p id="description-'+cardNumber+'"class="card-text description">Description: '+wantedBook.description+'</p></div>' +
        '<img id="smallImageURL-'+cardNumber+'" class="card-image card-component" type="text" value="" src="'+wantedBook.smallImageURL+'" /><br>' +
        '<p id="ISBN-'+cardNumber+'" class="card-text ISBN card-component">ISBN: '+specificBookISBN+'</p>' +
        '<button id="trash-'+cardNumber+'" class="btn"><i class="fa-solid fa-trash card-component" onclick= "removeABookFromMyPochList(\''+specificBookISBN+'\')"></i></button>' +
    '</div>';
    return divCardToInsert;
}
async function listOfBooksDisplayInHTML(listOfBooksToDisplay){
    //first I erase all content fo the div with Id "result-display"
    document.getElementById("result-display").innerHTML = "";
    let listOfDivTagsToDisplay = "<h1>Résultats de la recherche</h1>";
    if (listOfBooksToDisplay){
        if (listOfBooksToDisplay.items.length ==0){
            //listOfDivTagsToDisplay ="<p>Aucun livre n’a été trouvé.</p>";
            listOfDivTagsToDisplay ="Aucun livre n’a été trouvé.";
            divErrorNoBooksWereFound(listOfDivTagsToDisplay);
        }
        else if (listOfBooksToDisplay.items.length == 1){
            let thisURL = listOfBooksToDisplay.items[i].selfLink;
            let listOfDivTagsToDisplay = await divBookWithGoogleInput(1, thisURL);
        }else if (listOfBooksToDisplay.items.length>=2){
            //second I insert a div witch Id will be "card-number-"+i
            // the 'for loop' begins at 0, the comparison must be a stric < cause 0 to 20 = 21, but 0 to 19 = 20.
            for(let i=0; i<listOfBooksToDisplay.items.length;i++ ){
                let currentURL = listOfBooksToDisplay.items[i].selfLink;
                // The next line set a variable with an async fuction, Therefor an AWAIT is required.
                let newDivTagToDisplay = await divBookWithGoogleInput(i, currentURL);
                listOfDivTagsToDisplay = listOfDivTagsToDisplay+newDivTagToDisplay;
            }
        }
    }else{
        listOfDivTagsToDisplay ="<p>Aucun livre n’a été trouvé.</p>";
    }
    document.getElementById("result-display").innerHTML = listOfDivTagsToDisplay;
}



