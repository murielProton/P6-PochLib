
    var bookURL = "https://www.googleapis.com/books/v1/volumes?q=";
    var sepcificBookURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
    let matchingBooksWrapper;
    let title;
    let author;
    let description;
    let imageURL;
    let smallImageURL;
    let searchTerms;
    let searchResults;
    
    //methode that gets a list of boocks
    /*async function fetchBook() {
        const response = await fetch(specificBookCard);
        const listOfBooks = await response.json();
        return listOfBooks;
    }*/
    async function fetchBookABook(sepcificBookURL) {
        const response = await fetch(sepcificBookURL);
        const specificBook = await response.json();
        searchResults = specificBook;
        return specificBook;
    }
    function fetchTitle(book) {
        title = book.items[0].volumeInfo.title;
        return title;
    }
    function fetchAuthor(book){
        author = book.items[0].volumeInfo.authors[0];
        return author;
    }
    function fetchDescription(book){
        description = book.items[0].volumeInfo.description;
        return description;
    }
    function fetchImageURL(book){
        let allThumnails = [];
        for(let i=0; i<book.items.length; i++) {
            let volumeInfo = book.items[i].volumeInfo;
            if(volumeInfo.imageLinks != null) {
                allThumnails.push(volumeInfo.imageLinks.smallThumbnail);
            }   
        }


        
        //imageURL = book.items[0].volumeInfo.imageLinks.thumbnail;
        return imageURL;
    }
    function fetchSmallImageURL(book){
        //smallImageURL = book.items[0].volumeInfo.imageLinks.smallThumbnail;
        return smallImageURL;
    }
    /*----*/
    $(document).ready(function(){
        init();
        setEventListeners();
    });

function makeBookCardDom(data) {
    let oneResult = data.volumeInfo;
    console.log('oneResult : ', oneResult)
    let htmlOutput = '';
    htmlOutput += '<li class="one-book">';
        htmlOutput += '<h3>' + oneResult.title + '</h3>';
        htmlOutput += '<div class="book-description-container">';
        if(!oneResult.description) {
            oneResult.description = 'Pas de description disponible.';
        }
            htmlOutput += '<p>' + oneResult.description + '</p>';
        
        htmlOutput += '</div>';
        htmlOutput += '<div class="book-thumbnail-container">';
            htmlOutput += '<img src="" alt="" />';
        htmlOutput += '</div>';
        htmlOutput += '<a href="' + oneResult.previewLink + '" target="_blank">Dites-m\'en plus !</a>';
    htmlOutput += '</li>';

    return htmlOutput;
}


function init(){
    //FIRST you fetch the entire book
    const promise1 = new Promise((resolve, reject) => {
        resolve(matchingBooksWrapper = fetchBookABook(sepcificBookURL));
      });
      //AFTER you have fetched the entire book THEN you fetch the title ...
      promise1.then((matchingBooksWrapper) => {
        title = fetchTitle(matchingBooksWrapper);
        author = fetchAuthor(matchingBooksWrapper);
        description = fetchDescription(matchingBooksWrapper);
        imageURL = fetchImageURL(matchingBooksWrapper);
        smallImageURL = fetchSmallImageURL(matchingBooksWrapper);
      });
    
}


function setEventListeners() {
    // $('#book-search-input').click(function() { // same thing (almost)
    $('#book-search-button').click(() => {
        searchTerms = $('#book-search-input').val();


        //FIRST you fetch the entire book
        const promise1 = new Promise((resolve, reject) => {
            resolve(matchingBooksWrapper = fetchBookABook(makeSearchURL()));
          });
          promise1.then((matchingBooksWrapper) => {
            let booksResultOutput = '';
            for(let i=0; i<matchingBooksWrapper.items.length; i++) {
                booksResultOutput += makeBookCardDom(matchingBooksWrapper.items[i]);
            }
            $('#search-results-list').html(booksResultOutput);
          });
    });

    $('#book-search-input').keyup((ev) => {
        // ENTER key
        if(ev.keyCode == 13) {
            $('#book-search-button').click();
        }
    })
}

function makeSearchURL() {
    if(searchTerms == null || searchTerms == '') {
        alert('Aucun mot clé saisi. Un petit effort ? : ))');
        return;
    }
    if(searchTerms.length < 3) {
        alert('Allez, encore une ou deux lettres, ça va aller...');
        return;
    }
    return bookURL + searchTerms;
}
