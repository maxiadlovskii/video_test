window.onload = function() {


var video = document.querySelector('video');
var video2 = $('.vjs-tech').get(0);

    


document.body.addEventListener('touchend', function(event){
   
    if(event.target.className == 'vjs-tech' && ($('.vjs-control-bar').css( 'opacity' ) > 0)){
        if(video2.paused){
            video2.play();
        } else if(!video2.paused){
            video2.pause();
        };
    };
    
});


video2.addEventListener('pause', function(){
        if (!video2.seeking){
        $('.vjs-big-play-button').show();
        $('.vjs-big-play-button').animate({opacity:1}, 200);
        }
    
   
    });
 

video2.addEventListener('seeking', function(){
        //$('.vjs-big-play-button').animate({opacity:0}, 200);
       $('.vjs-big-play-button').hide();
        
    }); 
/*
video2.addEventListener('seeked', function(){
        
        if(video.paused){
        $('.vjs-big-play-button').show();
        //$('.vjs-big-play-button').animate({opacity:1}, 200);
        }
     
});
 */
video2.addEventListener('play', function(){
        $('.vjs-big-play-button').animate({opacity:0}, 200);
        setTimeout(function(){$('.vjs-big-play-button').hide()}, 200);
       
        
    });
    
video2.addEventListener('ended', function(){
       $('.vjs-big-play-button').show();
        $('.vjs-big-play-button').animate({opacity:1}, 200);
        
    });


};


