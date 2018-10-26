//define functions here
function getIt(){
  $('p').on('click')
  return alert("Hey!")
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('input').on('keydown', function(key){
    if(key.which == 83){
      alert('s was pressed')
    }
  })
}

function submitIt(){
  $('form').on('submit')
}

$(document).ready(function(){

// call functions here

getIt()
frameIt()
pressIt()
submitIt()



});
