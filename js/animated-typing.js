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