
    var bookURL = "https://www.googleapis.com/books/v1/volumes?q=";
    var sepcificBookURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
    let oneSpecifiedBoockOnly;
    let title;
    let author;
    let description;
    let imageURL;
    let smallImageURL;
    
    async function fetchBookABook(sepcificBookURL) {
        const response = await fetch(sepcificBookURL);
        console.log('response : ',response);
        oneSpecifiedBoockOnly = await response.json();
        return oneSpecifiedBoockOnly;
    }
    function fetchTitle(oneSpecifiedBoockOnly) {
        title = oneSpecifiedBoockOnly.items[0].volumeInfo.title;
        console.log('title : ',title);
        return title;
    }
    function fetchAuthor(oneSpecifiedBoockOnly){
        author = oneSpecifiedBoockOnly.items[0].volumeInfo.authors[0];
        console.log('author : ',author);
        return author;
    }
    function fetchDescription(oneSpecifiedBoockOnly){
        description = oneSpecifiedBoockOnly.items[0].volumeInfo.description;
        console.log('description : ', description);
        return description;
    }
    function fetchImageURL(oneSpecifiedBoockOnly){
        imageURL = oneSpecifiedBoockOnly.items[0].volumeInfo.imageLinks.thumbnail;
        console.log('image URL : ', imageURL);
        return imageURL;
    }
    function fetchSmallImageURL(oneSpecifiedBoockOnly){
        smallImageURL = oneSpecifiedBoockOnly.items[0].volumeInfo.imageLinks.smallThumbnail;
        console.log('small image URL : ', smallImageURL);
        return smallImageURL;
    }
    /*----*/
    $(document).ready(function(){
        init();
    })
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
        console.log('success !');
      });
      promise2.then((resolve, reject)=>{
        resolve(diplayAllValuesOfThisBook());
      });
    
}
