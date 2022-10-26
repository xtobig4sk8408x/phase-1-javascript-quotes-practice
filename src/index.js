const base_URL = "http://localhost:3000/quotes?_embed=likes";
const numArray = [1, 2, 3, 4];
numArray[2]
console.log(numArray[2]);
const newForm = document.querySelector("#new-quote-form");
const newQuote = document.getElementById("new-quote");
const newQuoteAuthor = document.getElementById("author");
const uL = document.getElementById("quote-list");

newForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newQuote.value;
    newQuoteAuthor.value;
    console.log(newQuote.value, newQuoteAuthor.value);
    const newQuoteCard = document.createElement("li");
    const blockQuote = document.createElement("blockquote");
    const paragraph = document.createElement("p");
    const newAuthor = document.createElement("footer");
    const brrr = document.createElement("br");
    const btn1 = document.createElement("button");
    const span =document.createElement("span");
    const btn2 = document.createElement("button");

    newQuoteCard.className = 'quote-card';
    blockQuote.className = 'blockquote';
    paragraph.innerText = newQuote.value;
    paragraph.className = 'mb-0';
    //console.log(paragraph.innerText);
    newAuthor.innerText = newQuoteAuthor.value;
    newAuthor.className = 'blockquote-footer';
    //console.log(newAuthor.innerText);
    btn1.className = 'btn-success';
    btn1.innerText = "Likes :";
    span.innerText = "0";
    btn2.className = 'btn-danger';
    btn2.innerText = 'Delete';
    
    uL.append(newQuoteCard);
    newQuoteCard.append(blockQuote);
    blockQuote.append(paragraph, newAuthor, brrr, btn1, btn2);
    btn1.append(span);
})

fetch(base_URL)
.then(response => response.json())
.then(quoteData => {
    console.log(quoteData)
    for (let i = 0; i < quoteData.length; i++) {
        console.log(quoteData[i]);
        const quoteCard = document.createElement("li");
        const blockQuote = document.createElement("blockquote");
        const quotes = document.createElement("p");
        const author = document.createElement("footer");
        const brrr = document.createElement("br");
        const btn1 = document.createElement("button");
        const span = document.createElement("span");
        const btn2 = document.createElement("button");

        quoteCard.className = 'quote-card';
        blockQuote.className = 'blockquote';
        quotes.innerText = quoteData[i].quote;
        quotes.className = 'mb-0';
        author.innerText = quoteData[i].author;
        author.className = 'blockquote-footer';
        btn1.className = 'btn-success';
        btn1.innerText = "Likes: ";
        span.innerText = quoteData[i].likes.length;
        console.log(span);
        btn2.className = 'btn-danger';
        btn2.innerText = "Delete";
        uL.append(quoteCard);
        quoteCard.append(blockQuote);
        blockQuote.append(quotes, author, brrr, btn1, btn2);
        btn1.append(span);


        /*quoteCard.innerHTML = quoteData[i].quote;
        console.log(quoteCard);*/
        

    }
})