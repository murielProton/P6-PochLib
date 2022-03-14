/*first find the div where to display div id = result-display
* second empty the div
* loop for each where {
    first i insert tockens in HTML
    second i insert the book in HTML
}
*/
//
function insertADivForOneBook(cardNumber){
    let bookCardToInsert = document.getElementById("result-display").innerHTML =
    '<div id=card-number-'+cardNumber+' class="card-body">' +
        '<h5 id="title" onload="document.title"></h5>' +
        '<p id="author"class="card-text">Author: </p>' +
        '<p id="description"class="card-text">Description: </p>' +
        '<p id ="smallImageURL" type="text" value="" src="">  </p>' +
    '</div>';
    document.createElement(bookCardToInsert);
}
async function listOfBooksDisplayInHTML(listOfBooksToDisplay){
    document.getElementById("result-display").innerHTML = "";
    console.log( "nombre length taille de la boucle",listOfBooksToDisplay.items.length );
        for(let i=0; i<listOfBooksToDisplay.items.length;i++ ){
            console.log("iteration -> "+i);
            let currentURL = listOfBooksToDisplay.items[i].selfLink;
            
            insertADivForOneBook(i);
            bookDisplayInHTML(currentURL);
            var valueOfID = "card-number-"+i;
            var newCard =  getElementById(valueOfID);
            var listOfBooksToDisplay = listOfBooksToDisplay +newCard;
        }
    document.getElementById("result-display").innerHTML = listOfBooksToDisplay;
}



