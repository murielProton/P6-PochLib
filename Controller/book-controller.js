async function bookDisplayInHTML(ABookURL, cardNumber){
    var sepcificBookURL = ABookURL;
    let wantedBook = await Book(sepcificBookURL);
    var titleTagID ='title-'+cardNumber;
    var authorTagID = 'author-'+cardNumber;
    var descriptionTagID = 'description-'+cardNumber;
    var smallImageURLTagID = 'smallImageURL-'+cardNumber;

    document.getElementById(titleTagID).innerHTML = wantedBook.title;
    document.getElementById(authorTagID).innerHTML = wantedBook.author;
    document.getElementById(descriptionTagID).innerHTML = wantedBook.description;
    document.getElementById(smallImageURLTagID).value,
                src = wantedBook.smallImageURL,
                img = document.createElement('img');
    img.src = src;
    document.body.appendChild(img);
}