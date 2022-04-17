
    var bookURL = "https://www.googleapis.com/books/v1/volumes?q=";
    var sepcificBookURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
    let oneSpecifiedBoockOnly;
    let title;
    let author;
    let description;
    let imageURL;
    let smallImageURL;
    /** 
     * this function will find a book by it's specified URL.
     * it returns a JSON object, containing information on this spécific book.
     * The parameter sepcificBookURL is the specific google url that point to one book only.
     */
    async function fetchBookABook(sepcificBookURL) {
        const response = await fetch(sepcificBookURL);
        oneSpecifiedBoockOnly = await response.json();
        return oneSpecifiedBoockOnly;
    }
    /** 
     * this function will find the title of the book in the JSON object.
     * it returns a String, title of the book.
     * The parameter is a JSON object.
     */
    function fetchTitle(oneSpecifiedBoockOnly) {
        title = oneSpecifiedBoockOnly.items[0].volumeInfo.title;
        return title;
    }
    /** 
     * this function will find the author of the book in the JSON object.
     * it returns a String, author of the book.
     * The parameter is a JSON object.
     */
    function fetchAuthor(oneSpecifiedBoockOnly){
        author = oneSpecifiedBoockOnly.items[0].volumeInfo.authors[0];
        return author;
    }
    /** 
     * this function will find the description of the book in the JSON object.
     * it returns a String, description of the book.
     * The parameter is a JSON object.
     */
    function fetchDescription(oneSpecifiedBoockOnly){
        description = oneSpecifiedBoockOnly.items[0].volumeInfo.description;
        return description;
    }
    /** 
     * this function will find the image of the book in the JSON object.
     * it returns a String, the URL of the image of the book.
     * The parameter is a JSON object.
     */
    function fetchImageURL(oneSpecifiedBoockOnly){
        imageURL = oneSpecifiedBoockOnly.items[0].volumeInfo.imageLinks.thumbnail;
        return imageURL;
    }
    /** 
     * this function will find the big image of the book in the JSON object.
     * it returns a String, the URL of the big image of the book.
     * The parameter is a JSON object.
     */
    function fetchSmallImageURL(oneSpecifiedBoockOnly){
        smallImageURL = oneSpecifiedBoockOnly.items[0].volumeInfo.imageLinks.smallThumbnail;
        return smallImageURL;
    }
    /**
     * JQuery function.
     * This function detects the readyness of the page.
     * If the page is not ready init() will not lauch.
     * 
    */
    $(document).ready(function(){
        init();
    })
    /** 
     * this function will find in the HTML document the right tag id name to associate with the right variable.
     * It will display information of the book in the right order in the HTML page.
     */
function diplayAllValuesOfThisBook(){
    document.getElementById("title").innerHTML = title;
    document.getElementById("author").innerHTML = author;
    document.getElementById("description").innerHTML = description;
    document.getElementById('smallImageURL').value,
                src = smallImageURL,
                img = document.createElement('img');
    img.src = src;
    document.body.appendChild(img);
}
    /** 
     * This funciton waits for two things before diplaying all information of a book into the HTML page.
     * First it waits until the specific URL of The book has been set.
     * lastly it waits until all the variables to construct a book localy have been assigned.
     */
function init(){
    //FIRST you fetch the entire book
    const promise1 = new Promise((resolve, reject) => {
        resolve(oneSpecifiedBoockOnly = fetchBookABook(sepcificBookURL));
      });
      //AFTER you have fetched the entire book THEN you fetch the title ...
      const promise2 = promise1.then((oneSpecifiedBoockOnly) => {
        title = fetchTitle(oneSpecifiedBoockOnly);
        author = fetchAuthor(oneSpecifiedBoockOnly);
        description = fetchDescription(oneSpecifiedBoockOnly);
        imageURL = fetchImageURL(oneSpecifiedBoockOnly);
        smallImageURL = fetchSmallImageURL(oneSpecifiedBoockOnly);
      });
      promise2.then((resolve, reject)=>{
        resolve(diplayAllValuesOfThisBook());
      });
    
}
