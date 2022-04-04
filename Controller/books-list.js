/*
q - Search for volumes that contain this text string. There are special keywords you can specify in the search terms to search in particular fields, such as:
intitle: Returns results where the text following this keyword is found in the title.
inauthor: Returns results where the text following this keyword is found in the author.
Here is an example of searching for Daniel Keyes' "Flowers for Algernon": 
https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
    "q="" stands for includes
    "intitle:" for in the title you will find
    "inauthor:" to define the author "+inauthor:" if you want to add it to title
    "&startIndex=" the search result will start at this index
    "&maxResults=" the search result will display up to x books, NB the maximum limit is 40
    "&printType=books" to display only books
*/
const URLforSearch = "https://www.googleapis.com/books/v1/volumes?q=";
const numberOfResults =20;
var listOfBooks =[];

function getSearchTermsForTitle(){
    // Selecting the input for the title and get its value 
    searchTermsForTitle = document.getElementById("form-title").value;
    return searchTermsForTitle;
}
function getSearchTermsForAuthor(){
    // Selecting the input for the author and get its value 
    searchTermsForAuthor = document.getElementById("form-author").value;
    return searchTermsForAuthor;
}

function refreshList(newListOfBooks){
    var listOfBooks;
    const promiseGetListOfBooks = new Promise((resolve, reject) => {
        resolve( listOfBooks=newListOfBooks
        )}
    );
    promiseGetListOfBooks.then((listOfBooks) =>{
        var totalOfItemsInList = listOfBooks.totalItems;
        if (totalOfItemsInList.length < 1 || totalOfItemsInList.length == null){
            var errorMessage = 'Aucun livre n’a été trouvé.';
            divErrorNoBooksWereFound(errorMessage);
        }else{
            listOfBooksDisplayInHTML(listOfBooks);
        }
    });
}
async function searchForAListOfBooks(){
    // google search : isbn: Returns results where the text following this keyword is the ISBN number.
    searchTermsForTitle = getSearchTermsForTitle();
    searchTermsForAuthor = getSearchTermsForAuthor();
    let urlToCall = URLforSearch;
    if (searchTermsForTitle && searchTermsForAuthor){
        urlToCall = urlToCall + "intitle:"+searchTermsForTitle
                        +"+"+ "inauthor:"+searchTermsForAuthor
                        +"&startIndex=0&maxResults="+numberOfResults
                        +"&printType=books";
    } else if (searchTermsForTitle){
        urlToCall = urlToCall + "intitle:"+searchTermsForTitle
                        +"&startIndex=0&maxResults="+numberOfResults
                        +"&printType=books";
    } else if(searchTermsForAuthor){
        urlToCall = urlToCall + "inauthor:"+searchTermsForAuthor
                                            +"&startIndex=0&maxResults="+numberOfResults
                                            +"&printType=books";
    }
    const response = await fetch(urlToCall);
    let list = await response.json();
    //listToDisplay is not defined
    refreshList(list);
   // resetSearchTerms();
}
// TODO mayby reset the search terms to null. 
function resetSearchTerms(){

}

