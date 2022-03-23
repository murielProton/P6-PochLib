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
    let divCardToInsert =  '<div id=card-number-'+cardNumber+' class="card-body" src='+sepcificBookURL+'>'+
        '<button class="btn"><i class="fa-solid fa-bookmark" onclick= "populateMyPochListDiv(\'' + sepcificBookURL + '\')"></i></button>'+
        '<h5 id="title-'+cardNumber+'" class="card-text title">'+wantedBook.title+'</h5>' +
        '<p id="author-'+cardNumber+'"class="card-text author">Author: '+wantedBook.author+'</p>' +
        '<p id="description-'+cardNumber+'"class="card-text description">Description: '+wantedBook.description+'</p>' +
        '<img id="smallImageURL-'+cardNumber+'" class="card-image" type="text" value="" src="'+wantedBook.smallImageURL+'" />' +
        '<i class="fa-solid fa-trash-can-xmark"></i>'+
    '</div>';
    return divCardToInsert;
}
async function listOfBooksDisplayInHTML(listOfBooksToDisplay){
    //first I erase all content fo the div with Id "result-display"
    document.getElementById("result-display").innerHTML = "";
    let listOfDivTagsToDisplay ;
    if (listOfBooksToDisplay){
        //second I insert a div witch Id will be "card-number-"+i
        // the 'for loop' begins at 0, the comparison must be a stric < cause 0 to 20 = 21, but 0 to 19 = 20.
            for(let i=0; i<listOfBooksToDisplay.items.length;i++ ){
                let currentURL = listOfBooksToDisplay.items[i].selfLink;
                // The next line set a variable with an async fuction, Therefor an AWAIT is required.
                let newDivTagToDisplay = await divBookWithGoogleInput(i, currentURL);
                listOfDivTagsToDisplay = listOfDivTagsToDisplay+newDivTagToDisplay;
            }
    }else {
        listOfDivTagsToDisplay ="Aucun livre n’a été trouvé.";
    }
    document.getElementById("result-display").innerHTML = listOfDivTagsToDisplay;
}



