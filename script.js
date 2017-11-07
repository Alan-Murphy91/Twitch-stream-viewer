$(document).ready(function(){
$(document).ready(function(){
    
//    $.('.slick-next').html('hello');
    
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3 
    });
    
    
    $('.offline').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true
    });
//    var newArr;
//    var controlArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
//    for (var x=0; x<controlArr.length; x++){
//            $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+controlArr[x]+'?callback=?',function(jason){
//        if(!jason.error){
//            console.log(this);
//        }
//    });
//    }
    
    var arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
    for (var i=0; i<arr.length; i++){
        
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+ arr[i] +'?callback=?',function(ddata){
        
        if (ddata.stream !== null){
            $.getJSON('https://wind-bow.gomix.me/twitch-api/users/'+ ddata.stream.channel.display_name +'?callback=?',function(data){
            var logo = data.logo;
            var streamName = data.display_name;
            var game = ddata.stream.game;
            var viewers = ddata.stream.viewers;
            
            var slideToAdd = '<a href="https://www.twitch.tv/'+streamName+'"><div class="iimg"><img src="'+logo+'"><p>'+streamName+' is playing '+game+'</p><p>Viewers: '+viewers+'</p></div></a>';
            
            var online = $('.multiple-items');
            if(online.hasClass('slick-initialized')){
                online.slick('slickAdd',slideToAdd);
            } else {
            online.append(slideToAdd);
            online.slick();	
            }    
            
        });
        }
                      
         if (ddata.stream === null){
             
             var idd = ddata._links.channel;
             idd = idd.slice(38, idd.length);
            $.getJSON('https://wind-bow.gomix.me/twitch-api/users/'+ idd +'?callback=?',function(dataOffline){
                
            console.log(dataOffline);
            var slideToAdd = '<a href="https://www.twitch.tv/'+dataOffline.display_name+'"><div class="iimg"><img src="http://placehold.it/150x150"></div></a>';
            if(dataOffline.logo !== null){
                slideToAdd = '<a href="https://www.twitch.tv/'+dataOffline.display_name+'"><div class="iimg"><img src="' + dataOffline.logo + '"></div></a>';
            }
                
            if(dataOffline.error){
                slideToAdd = '<div class="iimg"><img src="https://lh3.googleusercontent.com/9YABpsXRENxU3LSakF4RUzE9WdXzpwN2RtEogeTcxCYxBxboMgvGPh4f5HuXeH0eB9I=w300"></div>';
            }

            var offline = $('.offline');
            if(offline.hasClass('slick-initialized')){
                offline.slick('slickAdd',slideToAdd);
            } else {
                offline.append(slideToAdd);
                offline.slick();
            }
    
            });
             }         
       
            });
            }
        
    
});	



function genUser(){
    jQuery.getJSON('https://wind-bow.gomix.me/twitch-api/users/'+ jQuery('.iinput').val() +'?callback=?',function(xdata){
    window.open('https://www.twitch.tv/' + xdata.name);    
    });
}    

});

