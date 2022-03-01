
    var bookURL = "https://www.googleapis.com/books/v1/volumes?q=";
    var sepcificBookURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
    let oneSpecifiedBoockOnly;
    let title;
    let author;
    let description;
    let imageURL;
    let smallImageURL;
    
    //methode that gets a list of boocks
    /*async function fetchBook() {
        const response = await fetch(specificBookCard);
        console.log(response);
        const listOfBooks = await response.json();
        console.log(listOfBooks);
        return listOfBooks;
    }*/
    async function fetchBookABook(sepcificBookURL) {
        const response = await fetch(sepcificBookURL);
        console.log('response : ',response);
        const specificBook = await response.json();
        return specificBook;
    }
    function fetchTitle(book) {
        title = book.items[0].volumeInfo.title;
        console.log('title : ',title);
        return title;
    }
    function fetchAuthor(book){
        author = book.items[0].volumeInfo.authors[0];
        console.log('author : ',author);
        return author;
    }
    function fetchDescription(book){
        description = book.items[0].volumeInfo.description;
        console.log('description : ', description);
        return description;
    }
    function fetchImageURL(book){
        imageURL = book.items[0].volumeInfo.imageLinks.thumbnail;
        console.log('image URL : ', imageURL);
        return imageURL;
    }
    function fetchSmallImageURL(book){
        smallImageURL = book.items[0].volumeInfo.imageLinks.smallThumbnail;
        console.log('small image URL : ', smallImageURL);
        return smallImageURL;
    }
    /*----*/
    $(document).ready(function(){
        init();
    })

function init(){
    //FIRST you fetch the entire book
    const promise1 = new Promise((resolve, reject) => {
        resolve(oneSpecifiedBoockOnly = fetchBookABook(sepcificBookURL));
      });
      //AFTER you have fetched the entire book THEN you fetch the title ...
      promise1.then((oneSpecifiedBoockOnly) => {
        title = fetchTitle(oneSpecifiedBoockOnly);
        author = fetchAuthor(oneSpecifiedBoockOnly);
        description = fetchDescription(oneSpecifiedBoockOnly);
        imageURL = fetchImageURL(oneSpecifiedBoockOnly);
        smallImageURL = fetchSmallImageURL(oneSpecifiedBoockOnly);
        console.log('success !');
      });
    
}
