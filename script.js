function show_hide1() {
    $('.how').click( function() {
      $(this).find('ul').slideToggle();
    }).children().click( function() {
      return false;
    });
  };


 function show_hide2() {  
    var click = document.getElementById("hello2");  
    if(click.style.display ==="none") {  
       click.style.display ="block";  
    } else {  
       click.style.display ="none";  
    }   
 }  


 function show_hide3() {  
    var click = document.getElementById("hello3");  
    if(click.style.display ==="none") {  
       click.style.display ="block";  
    } else {  
       click.style.display ="none";  
    }   
 }  


 function show_hide4() {  
    var click = document.getElementById("hello4");  
    if(click.style.display ==="none") {  
       click.style.display ="block";  
    } else {  
       click.style.display ="none";  
    }   
 } 
 
 



 $(document).ready(function(){
    $('.both-icons-wrapper, .crossicon').click(function(){
        $('#wrapper').toggleClass('open-menu');
    })
})
$(document).ready(function(){
    $('.search-form .fa-search').click(function(){
        $('#wrapper').toggleClass('open-search');
    })
})




$(document).ready(function () {
    $('.right-menu > li:nth-child(2)').click(function () {
        $('#wrapper').toggleClass('active-drop-ul2');
    })
})
$(document).ready(function () {
    $('.right-menu > li:nth-child(3)').click(function () {
        $('#wrapper').toggleClass('active-drop-ul3');
    })
})
$(document).ready(function () {
    $('.right-menu > li:nth-child(4)').click(function () {
        $('#wrapper').toggleClass('active-drop-ul4');
    })
})
$(document).ready(function () {
    $('.right-menu > li:nth-child(5)').click(function () {
        $('#wrapper').toggleClass('active-drop-ul5');
    })
})




