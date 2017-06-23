(function($) {

  	$('.navigation-top a').mouseenter(function(){
  	$(this).addClass("animated swing duration6");
  	});
  	$('.navigation-top a').mouseleave(function(){
  	// $(this).delay(6000).removeClass("animated swing duration6");
  	var $animatedItem = $(this);
  	setTimeout(function() {
  	$animatedItem.removeClass("animated swing duration6")
  }, 2700);
  	});

  	var spanSentance = [];
    var description =$('.site-description').text();

  	for (var i = 0; i < description.length; i++) {
  		console.log(i);
  		if (i == 6 || i == 12) {
  		spanSentance.push("<span class='letter-space'></span>");
  	} else if (i % 2 == 0) {
  		spanSentance.push("<span class='letter animated jello delay3 duration10'>" + description[i] + '</span>');
  		} else {
  			spanSentance.push("<span class='letter   animated bounceInDown duration5'>" + description[i] + '</span>');
  		}
  	};

  	$('.site-description').html(spanSentance);


    })( jQuery );
