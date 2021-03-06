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
/** 
 * this function gets the title input from the HTML form in tag ideed "search-form".
 * it returns a string.
 */
function getSearchTermsForTitle(){
    // Selecting the input for the title and get its value 
    searchTermsForTitle = document.getElementById("form-title").value;
    return searchTermsForTitle;
}
/** 
 * this function gets the author input from the HTML form in tag ideed "search-form".
 * it returns a string.
 */
function getSearchTermsForAuthor(){
    // Selecting the input for the author and get its value 
    searchTermsForAuthor = document.getElementById("form-author").value;
    return searchTermsForAuthor;
}
/** 
 * this function waits on the reponse of Google Books API before displaying a list of books or displaying an error.
 * The parameter is the response of Google Books API.
 */
function refreshList(googleResponse){
    var googleObjectContainingListOfBooks;
    const promiseGetListOfBooks = new Promise((resolve, reject) => {
        resolve( googleObjectContainingListOfBooks=googleResponse
        )}
    );
    promiseGetListOfBooks.then((googleObjectContainingListOfBooks) =>{
        // googleObjectContainingListOfBooks is an object composed of totalItems
        // totalItems is the number of books composing this object.
        if (googleObjectContainingListOfBooks.totalItems < 1 || googleObjectContainingListOfBooks.totalItems == null){
            var errorMessage = 'Aucun livre n???a ??t?? trouv??.';
            displayDivError(errorMessage);
        }else{
            
            listOfBooksDisplayInHTML(googleObjectContainingListOfBooks);
        }
    });
}
/**TODO This function executes  searchForAListOfBooks()
 *          if the user is in "search-section"
 *          if the user press the key 'Enter'
 * this functions equals clicking on button "Rechercher" or ideed "book-search-button"
*/

/** 
 * this function will create a JSON object which is a response of the Google Books API.
 * It construct the URL to ask Google Books API for an answer.
 * It URL constructed under 3 conditions : 
 *                                         - the input is an author and a title
 *                                         - the input is only the title
 *                                         - the input is only the author
 */
async function searchForAListOfBooks(){
    displayLoadingSection();
    //do not display the error section
    document.getElementById("error-section").innerHTML = "";
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
    let googleResponse = await response.json();
    refreshList(googleResponse);
}