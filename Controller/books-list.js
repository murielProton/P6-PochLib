/*
q - Search for volumes that contain this text string. There are special keywords you can specify in the search terms to search in particular fields, such as:
intitle: Returns results where the text following this keyword is found in the title.
inauthor: Returns results where the text following this keyword is found in the author.
Here is an example of searching for Daniel Keyes' "Flowers for Algernon": 
https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
*/
const URLforSearch = "https://www.googleapis.com/books/v1/volumes?q=";
var listOfBooks =[];

function getSearchTermsForTitle(){
    // Selecting the input for the title and get its value 
    searchTermsForTitle = document.getElementById("form-title").value;
    return searchTermsForTitle;
}
function getSearchTermsForAuthor(){
    // Selecting the input for the author and get its value 
    searchTermsForAuthor = document.getElementById("form-author").value;
    console.log("form author -> "+searchTermsForAuthor);
    return searchTermsForAuthor;
}
async function searchForBookListByTitle(inputTitle){
    console.log("book List By Title after signature - ");
    let bookListByTitle;
    let urlToSearchByTitle = URLforSearch + "intitle:"+inputTitle;
    const response = await fetch(urlToSearchByTitle);
    console.log('response : ',response);
    bookListByTitle = await response.json();
    console.log("book List By Title - "+bookListByTitle);
    refreshList(bookListByTitle);
}
async function searchForBookListByAuthor(intputAuthor){
    let bookListByAuthor;
    let urlToSearchByAuthor = URLforSearch + "inauthor:"+intputAuthor;
    const response = await fetch(urlToSearchByAuthor);
    console.log('response : ', response);
    bookListByAuthor = await response.json();
    console.log("book List by author - " +bookListByAuthor);
    refreshList(bookListByAuthor);
}

async function searchForBookListByTitleAndAuthor(inputTitle, intputAuthor){
    //TODO easer find URL that will fin a list of books that matches title and author
    // easer find a way to iterate through [promise]
    // cf https://stackoverflow.com/questions/40732541/javascript-promises-iterate-over-all-object-keys-arrays-and-then-resolve 
    
    let bookListByTitle;
    const promiseListOfBookTitle = new Promise((resolve, reject) => {
        resolve( bookListByTitle= searchForBookListByTitle(inputTitle)
        )}
    );
    promiseListOfBookTitle.then((bookListByTitle)=> {
        let bookListByTitleAndAuthor = [];
        for(let i=0; i<bookListByTitle.items.length; i++) {
            let currentBook = bookListByTitle.items[i];
            console.log('je suis dans la boucle for i');
            console.log('book '+i+" "+currentBook.volumeInfo);
            if(currentBook.volumeInfo==null || currentBook.volumeInfo.authors == null){
                continue;
            }
            let currentAuthors = currentBook.volumeInfo.authors;
            console.log('je suis dans la boucle for y => '+currentAuthors);
            for(let y=0; y<currentAuthors.length ; y++){
                let currentAuthor= currentAuthors[y];
                if(currentAuthor==intputAuthor){
                    bookListByTitleAndAuthor.push(currentBook);
                    console.log('je suis dans la boucle for y et dans le IF IFIIFIDIF');
                }
            }
        }

        refreshList(bookListByTitleAndAuthor);
    });
}

function refreshList(newListOfBooks){
    listOfBooks=newListOfBooks;
    console.log('New size of listOfBooks : '+listOfBooks.items.length);
    console.log('New totalItems of listOfBooks : '+listOfBooks.totalItems);
}


async function searchForAListOfBooks(){
    searchTermsForTitle = getSearchTermsForTitle();
    searchTermsForAuthor = getSearchTermsForAuthor();
    let urlToCall = URLforSearch;
    if (searchTermsForTitle && searchTermsForAuthor){
        urlToCall = urlToCall + "intitle:"+searchTermsForTitle
                        +"+"+ "inauthor:"+searchTermsForAuthor
                        +"&startIndex=0&maxResults=40&printType=books";
    } else if (searchTermsForTitle){
        urlToCall = urlToCall + "intitle:"+searchTermsForTitle+"&startIndex=0&maxResults=40&printType=books";
    } else if(searchTermsForAuthor){
        urlToCall = urlToCall + "inauthor:"+searchTermsForAuthor+"&startIndex=0&maxResults=40&printType=books";
    }
    const response = await fetch(urlToCall);
    console.log('response : ', response);
    let list = await response.json();
    console.log("book List by author - " +list);
    refreshList(list);
    /*
    if (searchTermsForTitle && searchTermsForAuthor){
        searchForBookListByTitleAndAuthor(searchTermsForTitle, searchTermsForAuthor);
    } else if (searchTermsForTitle && !searchTermsForAuthor){
        searchForBookListByTitle(searchTermsForTitle);
    } else if(searchTermsForAuthor && !searchTermsForTitle){
        searchForBookListByAuthor(searchTermsForAuthor);
    }else{
        console.log("you have to search for some specific books.");
    }
    */ 
}

