//collection of quotes - includes an image, text and name of author
var quotes = [
    {
        imgSrc: "images/cardone.jpg",
        txt: "If you aren't where you want to be in life, you've got to work every minute and snatch up every opportunity",
        author: "Grant Cardone"
    }, 
    
    {
        imgSrc: "images/covey.png",
        txt: "I am not a product of my circumstances, I am a product of my decisions",
        author: "Stephen Covey"
    }, 
    
    {
        imgSrc: "images/duckworth.png",
        txt: "We have to be willing to fail, to be wrong, to start over again with lessons learned",
        author: "Angela Lee Duckworth"        
    }, 
    
    {
        imgSrc: "images/lincoln.jpg",
        txt: "We can complain because rose bushes have thorns, or rejoice because thorn bushes have roses",
        author: "Abraham Lincoln"
    }, 
    
    {
        imgSrc: "images/newton.jpg",
        txt: "If I have seen further it is by standing on the shoulders of giants",
        author: "Isaac Newton"
    }, 
    
    {
        imgSrc: "images/reka.png",
        txt: "Be the master of your fate, not the slave of your problems",
        author: "Marinela Reka"
    }, 
    
    {
        imgSrc: "images/turing.jpg",
        txt: "A man provided with paper, pencil and rubber, and subject to strict discipline, is in effect a universal machine",
        author: "Alan Turing"
    }
];


var seenQuotes = []; //a list of indexes of quotes which have already been viewed once, to avoid repetition
var quoteIndex = 0; //index of the quote currently in display on the page

//the main function which gets a new quote and sends for it to be displayed.
var newQuote = function() {
    quoteIndex = getQuote();
    showQuote(quoteIndex);
};

//chooses a quote at random, after checking if it has already been seen or not
var getQuote = function() {
    for(i=0; i<7; i++) {
        var index = Math.floor(Math.random() * 7);
        if (seenQuotes.indexOf(index) == -1) {
            seenQuotes.push(index);
            console.log(seenQuotes);
            return index;
        } else {
            if(seenQuotes.length == 7) {
                seenQuotes.length = 0;
                console.log(seenQuotes);
                return getQuote(); //YEAAAH, MOTHERFUCKER! FINALLY! (I spent hours trying to get the function to re-initiate somehow, but didn't think of recursion. Fuck me...)
            };
        };

    };
};

//changes DOM to display the current quote chosen by getQuote method
var showQuote = function(index) {
    document.getElementById("quote-image").src = quotes[index].imgSrc;
    document.getElementById("quote-image-modal").src = quotes[index].imgSrc;
    document.getElementById("quote-text").innerHTML = quotes[index].txt + " - " + "<span style='font-weight: bold'>" + quotes[index].author + "</span>";
};

//tweets out the current quote
var tweetQuote = function() {
    
};