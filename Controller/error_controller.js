function divErrorNoBooksWereFound(errorMessage){
    let divCardToInsert =  '<div id=error class="card-body" src=>' +
        '<p id="error-message" class=card-text">'+errorMessage+'</p>' +
    '</div>';
    document.getElementById("result-display").innerHTML = divCardToInsert;
}