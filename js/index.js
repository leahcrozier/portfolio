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