// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardParent = document.querySelector('.cards-container')

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const artMain = Object.values(response.data.articles);
    console.log(artMain)
    artMain.map(item => {
        item.map(item2 => {
            cardParent.appendChild(createCard(item2))
        });
    });
});

function createCard(articleObject){

    const cardMain = document.createElement('div');
    const mainHeadline = document.createElement('div');
    const mainAuthor = document.createElement('div');
    const imgCont = document.createElement('div');
    const authorImg = document.createElement('img')
    const authorName = document.createElement('span')
    
    cardMain.appendChild(mainHeadline);
    cardMain.appendChild(mainAuthor);
    mainAuthor.appendChild(imgCont);
    imgCont.appendChild(authorImg);
    mainAuthor.appendChild(authorName);
    
    cardMain.classList.add('card');
    mainHeadline.classList.add('headline');
    mainAuthor.classList.add('author');
    imgCont.classList.add('img-container');
    
    mainHeadline.textContent = articleObject.headline
    authorImg.src = articleObject.authorPhoto
    authorName.textContent = articleObject.authorName
    
    return cardMain;
}
