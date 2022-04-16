
function displayDivError(errorMessage){
    document.getElementById("error-section").innerHTML = "";
    let divCardToInsert =  '<div id=error class= src=>' +
        '<p id="error-message" class=card-text">Une erreur est survenue : '+errorMessage+'</p>' +
    '</div>';
    document.getElementById("error-section").innerHTML = divCardToInsert;
}