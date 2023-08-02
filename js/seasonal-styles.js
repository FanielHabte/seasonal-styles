$("document").ready(function(){
    $('.seasons a').click(function(e){
        e.preventDefault();
        
        if ($(this).attr("href") == "Summer"){
            $("header img").attr('src', 'images/summer.gif');
            $('p img').attr('src', 'images/summer-wear.jpg');
            $('html').css("background-color", "#EBA52B");
            $("#slogan").text("Get ready for summer!");
        }
        else if ($(this).attr("href") == "Spring"){
            $("header img").attr('src', 'images/spring.gif');
             $('p img').attr('src', 'images/spring-wear.jpg');
            $('html').css("background-color", "#2B7129");
            $("#slogan").text("Spring into our spring wear!");
        }
        else if ($(this).attr("href") == "Fall"){
            $("header img").attr('src', 'images/fall.gif');
            $('p img').attr('src', 'images/fall-wear.jpg');
            $('html').css("background-color", "#A81124");
            $("#slogan").text("Fall in love with our fall collection!");
        }
        else if ($(this).attr("href") == "Winter"){
            $("header img").attr('src', 'images/winter.gif');
            $("p img").attr('src', 'images/winter-wear.jpg');
            $('html').css("background-color", "#005393");
             $("#slogan").text("Winter is here! Stay warm with our winter wear!");
        }
        else{
           window.location.href = 'index.html';
        }
    });
});

