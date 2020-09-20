$(document).ready(function(){
	$("#mainSlider").owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		autoplayTimeout: 50000,
		nav: true,
		navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
	});

	$("#theySaySlider").owlCarousel({
		items: 1,
		autoplay: true,
	});

	$("#sponsorsSlider").owlCarousel({
		autoplay: true,
		autoplayTimeout: 2500,
		loop: true,
		responsive: {
			1100: {
				items: 4
			},
			900: {
				items: 3
			},
			600: {
				items: 2
			},
			0: {
				items: 1
			}

		}
	});
	
	//insta
	var feed = new Instafeed({
	    get: 'user',
	    clientId : "2b579f1d1b274c2bbc9016ff49e3a17d", 
	    userId: "4224448746",
	    accessToken: "4224448746.2b579f1.44f4a28122d040889e9c226e3a2bed76",
	    template: '<a href="{{link}}" target="_blank" id="{{id}}" class="instaImgWrap col-md-2 col-xs-4" style="background-image: url({{image}});"><div class="instaData"><span class="instaLikes">{{likes}}</span><span class="instaComments">{{comments}}</span></div></a>',
	    limit: 6,
	    sortBy: 'most-recent',
	    resolution: 'low_resolution'
	});
	feed.run();


// statistics section counting 
	flag2 = 0;
	function countTo(){
		if ($(window).scrollTop() >= $("#statistics").offset().top -($(window).height()*(4/5))&& flag2 === 0) {
	        $('#teamsNum').countTo({
	            from: 1,
	            to: 152,
	            speed: 4000
	        });
	        
	        $('#projectsNum').countTo({
	            from: 1,
	            to: 34,
	            speed: 4000
	        });
	        
	        $('#daysOfWorkNum').countTo({
	            from: 215,
	            to: 637,
	            speed: 4000
	        });
	        
	        $('#StudentsNum').countTo({
	            from: 2400,
	            to: 2500,
	            speed: 4000
	        });
	        flag2 = 1;
	    }
	}

	$(window).on("scroll", countTo);
    
});