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
