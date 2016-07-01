<<<<<<< HEAD

// array //

//Var quotes = ["Quote 1", "Quote 2" , "Quote 3"]

// randomness input //

// var randomGenerator = Math.floor(Math.random() * quotes.length);

//var displayedQuote;
//var currentIdx;

//function randomWholeNum() {
//    var idx = Math.floor(Math.random() * quotes.length)
//    displayedQuote = quotes[idx];

//    currentIdx = idx;
//    $('#flex-item').html(quotes[idx].quote);

//}

// function possibilities //

//$(function(){
//    updateQuote();
//    $('#generator').click(updateQuote);
//})

//function myFunction() {
//    document.getElementById("generator").onclick = function() {makerequest('test.html');};
//}

//(function() {
 //   var httpRequest;
 var button = document.getElementById("generator");
    button.addEventListener("click", makeRequest());
 var display = document.querySelector(".flex-item");

function makeRequest() {
    $.ajax({
        url:"http://api.icndb.com/jokes/random",
        method: "GET",
        data: 'json',
        success : function (data) {
            display.innerHTML = (data.value.joke)
        }

    })

}
//     httpRequest = new XMLHttpRequest();

//     if (!httpRequest) {
//         alert("Death to Chuck Norris");
//         return false;
//     }
//     httpRequest.onreadystatechange = alertContents;
//     httpRequest.open('GET', 'http://api.icndb.com/jokes/random', false);
//     httpRequest.send();
// }

// function alertContents() {
//     if (httpRequest.ready state === XMLHttpRequest.DONE) {
//         if (httpRequest.status === 200) {
//             alert (httpRequest.responseText);
//         } else {
//             alert ('there is a problem with Chuck Norris');
//         }
//     }
//}

//})();
//<button id="generator">quotanator</button>//
// possible button //

// $(".btn").on("click", function()) {
 //   getQuote();
// });


//<button id="generator".onclick>make Request

//<span id="generator" style="cursor: pointer; text-decoration: underline"</span>

//<span id="generator".onclick>Hello World</span>

//<button onclick="generator">Click me</button>
=======
var button = document.getElementById('generator')
var display = document.querySelector('.flex-item')


button.addEventListener('click', function(){
   $.ajax({
     url: "http://api.icndb.com/jokes/random",
     method: 'GET',
     data: 'json',
     success: function (data) {
       display.innerHTML = (data.value.joke)
     }
   })
})
>>>>>>> 29e5edf38de52775e9d1341c26dfbb370e3cbe4d
