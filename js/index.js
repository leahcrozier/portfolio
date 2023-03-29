// Get the button:
// const top_button = document.getElementById("topbutton");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//     top_button.style.display = "block";
//   } else {
//     top_button.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// $(document).ready(function(){
// 	$('#hamburger').click(function(){
// 		$(this).toggleClass('open');
//     console.log("I was clicked")
// 	});
// });

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("mainHeader").style.top = "0";
//   } else if (document.getElementById("hamburger") = Element.classList(active)){
//     document.getElementById("mainHeader").style.top = "0";
//   } else {
//     document.getElementById("mainHeader").style.top = "-150px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// $(window).scroll(function() {
//   if ($(this).scrollTop()>150){
//     $('#mainHeader').hide(1000);
//   }else{
//     $('#mainHeader').show(1000);
//   }
// });

$(document).ready(function(){
  $('.burger').click(function(){
    $('.menu-hide').toggleClass('show');
    $('.burger').toggleClass('active');
  });
  $('.mobileMenu a').click(function(){
    $('.menu-hide').removeClass('show');
    $('.burger').removeClass('active');
  });
});






var sliderObjects = [];
createSliderObjects();

function plusDivs(obj, n) {
  var parentDiv = $(obj).parent();
  var matchedDiv;
  $.each(sliderObjects, function(i, item) {
    if ($(parentDiv[0]).attr('id') == $(item).attr('id')) {
      matchedDiv = item;
      return false;
    }
  });
  matchedDiv.slideIndex=matchedDiv.slideIndex + n;
  showDivs(matchedDiv, matchedDiv.slideIndex);
}

function createSliderObjects() {
  var sliderDivs = $('.slider');
  $.each(sliderDivs, function(i, item) {
    var obj = {};
    obj.id = $(item).attr('id');
    obj.divContent = item;
    obj.slideIndex = 1;
    obj.slideContents = $(item).find('.mySlides');
    console.log("balls2");
    showDivs(obj, 1);
    sliderObjects.push(obj);
  });
}

function showDivs(divObject, n) {
  debugger;
  var i;
  if (n > divObject.slideContents.length) {
    divObject.slideIndex = 1
    console.log("balls3");
  }
  if (n < 1) {
    divObject.slideIndex = divObject.slideContents.length
  }
  for (i = 0; i < divObject.slideContents.length; i++) {
    divObject.slideContents[i].style.display = "none";
  }
  divObject.slideContents[divObject.slideIndex - 1].style.display = "block";
  console.log("balls4");
}


