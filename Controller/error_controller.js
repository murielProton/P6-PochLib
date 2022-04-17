/** 
 * this function will construct a div tag that will be displayed in tag "error-section".
 * The parameter is the message to display int the div tag thus created.
 */
function displayDivError(errorMessage){
    document.getElementById("error-section").innerHTML = "";
    let divCardToInsert =  '<div id=error class= src=>' +
        '<p id="error-message" class=card-text">Une erreur est survenue : '+errorMessage+'</p>' +
    '</div>';
    document.getElementById("error-section").innerHTML = divCardToInsert;
}