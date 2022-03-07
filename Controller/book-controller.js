async function bookDisplayInHTML(ABookURL){
    var sepcificBookURL = ABookURL;
    console.log("je suis dans bookDisplay "+ sepcificBookURL);
    let wantedBook = await Book(sepcificBookURL);
    document.getElementById("title").innerHTML = wantedBook.title;
    document.getElementById("author").innerHTML = wantedBook.author;
    document.getElementById("description").innerHTML = wantedBook.description;
    document.getElementById('smallImageURL').value,
                src = wantedBook.smallImageURL,
                img = document.createElement('img');
    img.src = src;
    document.body.appendChild(img);
}