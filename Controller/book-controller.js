async function bookDisplayInHTML(ABookURL, cardNumber){
    var sepcificBookURL = ABookURL;
    console.log("je suis dans bookDisplay "+ sepcificBookURL);
    let wantedBook = await Book(sepcificBookURL);
    var titleTagID ='title-'+cardNumber;
    console.log("je suis titleTagID  "+ titleTagID );
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