
    var bookURL = "https://www.googleapis.com/books/v1/volumes?q=";
    var specificBookCard = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
    let oneSpecifiedBoockOnly = fetchBookABook();
    let title = fetchTitle();
    
    //methode that gets a list of boocks
    /*async function fetchBook() {
        const response = await fetch(specificBookCard);
        console.log(response);
        const listOfBooks = await response.json();
        console.log(listOfBooks);
        return listOfBooks;
    }*/
    async function fetchBookABook() {
        const response = await fetch(specificBookCard);
        console.log(response);
        const listOfBooks = await response.json();
        console.log(listOfBooks);
        fetchTitle(listOfBooks);
    }
    function fetchTitle(book) {
        let title = book.items[0].volumeInfo.title;
        console.log(title);
        return title;
    }

