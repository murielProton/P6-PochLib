//googleBook must be set before all the other values of this objects are.
// I've aded an if line 10 to ensure that 
var unavailableInformation ="Information manquante";
var counter;
var fakeISBN;
var unavailableImageURL ="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Salesforce_P1_FR/unavailable.png";
async function Book(sepcificBookURL){
    let myBook = new Object();
    myBook.googleBook = await fetchThisBook(sepcificBookURL);
    //check that all data exists
    let checkedTitle = ifNoDataFound(getThisBookSTitle(googleBook));
    let checkedAuthor = ifNoDataFound(getThisBookSAthor(googleBook));
    let fullDescription = ifNoDataFound(getThisBookSDescription(googleBook));
    let checkedDescription = getTheFirstTwoHundredCharacters(fullDescription);
    //make sure every variable of book has a value
    myBook.title = checkedTitle;
    myBook.author = checkedAuthor;
    myBook.description = checkedDescription;
    
    if(googleBook.volumeInfo.imageLinks){
        myBook.imageURL = getThisBookSImage(googleBook);
        myBook.smallImageURL = getThisBookSSmallImage(googleBook);
    }else{
        myBook.imageURL = unavailableImageURL;
        myBook.smallImageURL = unavailableImageURL;
    }
    //if googleBook.volumeInfo.industryIdentifiers[0].identifier is null please get this book with a fake iSBN
    if(googleBook.volumeInfo.industryIdentifiers){
        let checkedIsbn = ifNoDataFound(getThisBookSIsbn(googleBook));
        myBook.isbn = checkedIsbn;
    }else{
        counter = counter+1;
        myBook.isbn = unavailableInformation + counter;
    }
    return myBook;
}
async function fetchThisBook(sepcificBookURL){
    const response = await fetch(sepcificBookURL);
    googleBook = await response.json();
    return googleBook;
}
function getThisBookSTitle(googleBook){
    if(googleBook.volumeInfo.title){
        return googleBook.volumeInfo.title;
    }else{
        return unavailableInformation;
    }
}
function getThisBookSAthor(googleBook){
    if(googleBook.volumeInfo.authors){
        if(googleBook.volumeInfo.authors[0]){
            return googleBook.volumeInfo.authors[0];
        }
    }else{
        return unavailableInformation;
    }
}
function getThisBookSDescription(googleBook){
    if(googleBook.volumeInfo.description){
        return googleBook.volumeInfo.description;
    }else{
        return unavailableInformation;
    }
}
function getThisBookSIsbn(googleBook){
    if(googleBook.volumeInfo.industryIdentifiers[0].identifier){
        return googleBook.volumeInfo.industryIdentifiers[0].identifier;
    }else{
        return unavailableInformation;
    }
}
function getThisBookSImage(googleBook){
   imageURL = googleBook.volumeInfo.imageLinks.thumbnail;
   return imageURL;
}
function getThisBookSSmallImage(googleBook){
    smallImageURL = googleBook.volumeInfo.imageLinks.smallThumbnail;
    return smallImageURL;
}
function ifNoDataFound(data){
    if(data){
        return data;
    }else{
        let emptyData = unavailableInformation;
        divErrorNoBooksWereFound(emptyData);
    }
}
function getTheFirstTwoHundredCharacters(fullDescription){
    let checkedDescription ;
    if(fullDescription.length > 196){
        checkedDescription = fullDescription.slice(0,195)+' ...';
    } else{
        checkedDescription = fullDescription;
    }
    return checkedDescription;
}

