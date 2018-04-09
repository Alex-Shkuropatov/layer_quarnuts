$(function() {

	// Custom JS
	$('#advantages-slider').slick({
		dots: true,
		autoplay: true,
  	infinite: true,
  	arrows: false,
  	speed: 300,
  	slidesToShow: 1,
  	slidesToScroll: 1
	});

	/*$('#work-process-mob-slider').slick({
  	responsive: [
  	{
      breakpoint: 5000,
      settings: "unslick"
    },
    {
    	breakpoint: 576,
    	settings: {
    		dots: false,
				autoplay: false,
		  	infinite: true,
		  	arrows: true,
		  	speed: 300,
		  	slidesToShow: 1,
		  	slidesToScroll: 1
    	}
    }
  	]
	});*/

  $work_process_slider = $('#work-process-mob-slider');
  workSliderSettings = {
    dots: false,
    autoplay: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  if ($(window).width() <= 576) {
    $work_process_slider.slick(workSliderSettings);
  }
  // reslick only if it's not slick()
  $(window).on('resize', function() {
    if ($(window).width() > 576) {
      if ($work_process_slider.hasClass('slick-initialized')) {
        $work_process_slider.slick('unslick');
      }
      return
    }

    if (!$work_process_slider.hasClass('slick-initialized')) {
      return $work_process_slider.slick(workSliderSettings);
    }
  });


  var waypoints = $( '.sidebar-trigger' ).waypoint({
    handler: function(direction) {
      var color, 
          el = $( this.element );
      if( direction === 'up' ){
        color = $( el.prev() ).data( 'sidebarcolor' );
      }
      else{
        color = $( this.element ).data( 'sidebarcolor' );
      }
      
      var colors = ['white', 'black', 'gray'];
      colors.splice(colors.indexOf(color), 1);
      colors.forEach(function(item){
        $('#main-sidebar').removeClass( item + '-sidebar');
      });
      $('#main-sidebar').addClass( color + '-sidebar');

      //$.notify( 'Change color to ' + color );
    },
    offset: '50%'
  });
  

});
