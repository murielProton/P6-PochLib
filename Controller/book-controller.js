var sepcificBookURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:9782203071186';
async function bookDisplayInHTML(){
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