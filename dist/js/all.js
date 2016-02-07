var animatePath = function() {
    var current_frame = 0;
    var total_frames = 120;
//    var path = $(".animated-triangle");
    var length = path[0].getTotalLength();
    var handle = 0;

    path[0].style.strokeDasharray = length + ' ' + length; 
    path[0].style.strokeDashoffset = length;
    
    path[1].style.strokeDasharray = length + ' ' + length; 
    path[1].style.strokeDashoffset = length;

    var draw = function(path) {
       var progress = current_frame/total_frames;
       if (progress >= 1) {
         window.cancelAnimationFrame(handle);
       } else {
         current_frame++;
         path.style.strokeDashoffset = Math.floor(length * (1 - progress));
         handle = window.requestAnimationFrame(draw);
       }
    };
    
    path.map(draw);
}

var slider = function() {
    var interests = ["data visualization", "rock climbing", "the MEAN stack", "triangles", "cool css", "eclectic music", "geometric design", "Radiolab", "Python", "adventuring", "dancing", "driving at night", "coffee", "meeting new people", "India Pale Ales", "Java", "being barefoot"];
    var curr = 1;
    console.log(interests.length);

    $(".interest").html(interests[0] + ".")

    function cycle() {
        $(".interest").fadeTo(300, 0);
        setTimeout(function() {
            $(".interest").html(interests[curr] + ".");
            $(".interest").fadeTo(300, 1);

            curr = (curr+1)%interests.length;
            setTimeout(cycle, 2500);
        }, 800);
    }
    setTimeout(function() {
        $(".container").fadeTo(1500, 1);
        setTimeout(function() {
            $(".bio").fadeTo(2000, .8);
            setTimeout(cycle, 2800);
        }, 1200);
    }, 300);
}

$(document).ready(function() {
//    animatePath();
    
//    $( ".continue" ).addClass("transitioned");
    
    slider();
});
$( document ).ready(function() {
	window.onload = function () {
		$( ".anchor i" ).addClass('animated fadeInDown').removeClass('invisible');
	};
	
   $(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
						  scrollTop: target.offset().top
						}, 1000);
					return false;
				}
			}
		});
	});
});


// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
