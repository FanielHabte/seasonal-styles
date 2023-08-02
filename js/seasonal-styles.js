$("document").ready(function(){
    $('.seasons a').click(function(e){
        e.preventDefault();
        
        if ($(this).attr("href") == "Summer"){
            var season = $('p img').attr('src', 'images/summer-wear.jpg');
            $('html').css("background-color", "#EBA52B");
        }
        else if ($(this).attr("href") == "Spring"){
            var season = $('p img').attr('src', 'images/spring-wear.jpg');
            $('html').css("background-color", "#2B7129");
        }
        else if ($(this).attr("href") == "Fall"){
            var season = $('p img').attr('src', 'images/fall-wear.jpg');
            $('html').css("background-color", "#A81124");
        }
        else if ($(this).attr("href") == "Winter"){
            var season = $("p img").attr('src', 'images/winter-wear.jpg');
            $('html').css("background-color", "#005393");
        }
        else{
           window.location.href = 'index.html';
        }
    });
});

