//TODO googleBook must be set before all the other values of this objects are.
async function Book(sepcificBookURL){
    let myBook = new Object();
    myBook.googleBook = await fetchThisBook(sepcificBookURL);
    myBook.title = getThisBookSTitle(googleBook);
    myBook.author = getThisBookSAthor(googleBook);
    myBook.description = getThisBookSDescription(googleBook);
    myBook.imageURL = getThisBookSImage(googleBook);
    myBook.smallImageURL = getThisBookSSmallImage(googleBook);
    return myBook;
}
async function fetchThisBook(sepcificBookURL){
    const response = await fetch(sepcificBookURL);
    console.log('response : ',response);
    googleBook = await response.json();
    return googleBook;
}
function getThisBookSTitle(googleBook){
    title = googleBook.items[0].volumeInfo.title;
    console.log('title : ',title);
    return title;
}
function getThisBookSAthor(googleBook){
    author = googleBook.items[0].volumeInfo.authors[0];
    console.log('author : ',author);
    return author;
}
function getThisBookSDescription(googleBook){
    description = googleBook.items[0].volumeInfo.description;
    console.log('description : ', description);
    return description;
}
function getThisBookSImage(googleBook){
    imageURL = googleBook.items[0].volumeInfo.imageLinks.thumbnail;
    console.log('image URL : ', imageURL);
    return imageURL;
}
function getThisBookSSmallImage(googleBook){
    smallImageURL = googleBook.items[0].volumeInfo.imageLinks.smallThumbnail;
    console.log('small image URL : ', smallImageURL);
    return smallImageURL;
}
