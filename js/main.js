
jQuery(document).ready(function(e) {
	var mySlider = jQuery('#js-main-slider').pogoSlider({
		pauseOnHover: false,
		autoplay: true,
		generateNav: false,
		displayProgess: true,
		autoplayTimeout: 9000,
		targetHeight: 445,
		responsive: true,
	}).data('plugin_pogoSlider');
});




	// services Slider
      $('.services').slick({
		  arrows: true,
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
  		  autoplaySpeed: 5000,

		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        arrows: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        arrows: true,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        arrows: true,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});



      // services Slider
      $('.paymentss').slick({
		  arrows: true,
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  autoplay: true,
  		  autoplaySpeed: 5000,

		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        arrows: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        arrows: true,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        arrows: true,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});




      // services Slider
      $('.Last_views').slick({
		  arrows: true,
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  autoplay: true,
  		  autoplaySpeed: 5000,

		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        arrows: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        arrows: true,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        arrows: true,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});


      












      // Hight
      
var slider = document.getElementById('height_slider');


noUiSlider.create(slider, {
  connect: "lower",
  range: {
    min: 0,
    max: 8*12
  },
  start: 0, 
  step: 1,
  format: {
	  to: function ( value ) {
      var totalInches = Math.round(+value);
      var feet = Math.floor(totalInches / 12);
      var inches = totalInches % 12;
      var feetString = (feet == 0 ? "" : feet + "ft ");
      var inchString = (inches == 0 ? "" : inches + "in " );
      var combinedString =  (feetString + inchString).trim();
			return combinedString;
	  },
	  from: function ( value ) {
			return value.replace(' in', '');
	  }
	},
  tooltips: true,
  pips: {
      mode: 'values',
      values: [0,12,24,36,48,60,72,84,96],
      density: 3,
      stepped: true,
      format: {
          to: function ( value ) {
            var totalInches = Math.round(+value);
            var feet = Math.floor(totalInches / 12);
            var inches = totalInches % 12;
            return feet + " ft";
          }
        }
	}
});











