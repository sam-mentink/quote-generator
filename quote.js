
// array //

Var quotes = ["quote 1", "Quote 2" , "Quote 3"]

// randomness input //

// var randomGenerator = Math.floor(Math.random() * quotes.length);

var displayedQuote;
var currentIdx;

function randomWholeNum() {
    var idx = Math.floor(Math.random() * quotes.length)
    displayedQuote = quotes[idx];

    currentIdx = idx;
    $('#flex-item').html(quotes[idx].quote);

}

// function possibilities //

$(function(){
    updateQuote();
    $('#generator').click(updateQuote);
})


// possible button //

// $(".btn").on("click", function()) {
 //   getQuote();
// });


