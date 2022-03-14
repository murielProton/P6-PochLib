/*first find the div where to display div id = result-display
* second empty the div
* loop for each where {
    first i insert tockens in HTML
    second i insert the book in HTML
}
*/
//
function insertADivForOneBook(cardNumber){
    document.getElementById("result-display").innerHTML =
    '<div id=card-number-'+cardNumber+' class="card-body">' +
        '<h5 id="title-'+cardNumber+'" class="card-text title"></h5>' +
        '<p id="author-'+cardNumber+'"class="card-text author">Author: </p>' +
        '<p id="description-'+cardNumber+'"class="card-text description">Description: </p>' +
        '<p id="smallImageURL-'+cardNumber+'" class="card-image" type="text" value="" src="">  </p>' +
    '</div>';
}
async function listOfBooksDisplayInHTML(listOfBooksToDisplay){
    //first I erase all content fo the div with Id "result-display"
    document.getElementById("result-display").innerHTML = "";
    console.log( "nombre length taille de la boucle",listOfBooksToDisplay.items.length );
    //second I insert a div witch Id will be "card-number-"+i
        for(let i=0; i<=listOfBooksToDisplay.items.length;i++ ){
            console.log("iteration -> "+i);
            let currentURL = listOfBooksToDisplay.items[i].selfLink;
            insertADivForOneBook(i);
            bookDisplayInHTML(currentURL, i);  
        }
    
}



