window.onload = function() {


var video = document.querySelector('video');
var video2 = $('.vjs-tech').get(0);

    


document.body.addEventListener('touchend', function(event){
   
    if(event.target.className == 'vjs-tech'){
        if(video2.paused){
            video2.play();
        } else if(!video2.paused){
            video2.pause();
        };
    };
    
});

video2.addEventListener('pause', function(){
        $('.vjs-big-play-button').show();
    });
    
video2.addEventListener('play', function(){
        $('.vjs-big-play-button').hide();
    });
    
video2.addEventListener('ended', function(){
        $('.vjs-big-play-button').show();
    });

};


