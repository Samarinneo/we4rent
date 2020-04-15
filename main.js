$( document ).ready(function() {
    $('.slider').slick({
    	arrows:false,
    	infinite: true,
    	  autoplay: true,
  autoplaySpeed: 1000,
    fade: true,
  cssEase: 'linear'
    });
});


var nisan = document.getElementById('nisan');
nisan.onclick = function () {
	  var text = document.querySelector('.typed_nisan');
	  text.classList.add( 'block' );
	  	var text = document.querySelector('.typed_ford');
	  text.classList.add(  'none' );
	  var text = document.querySelector('.typing');
	  text.classList.add(  'none' );
 }
