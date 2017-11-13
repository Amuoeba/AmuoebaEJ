document.getElementById("CS").onclick = function(){scroll("one")};
document.getElementById("BY").onclick = function(){scroll("two")};
document.getElementById("LS").onclick = function(){scroll("three")};
document.getElementById("SS").onclick = function(){scroll("four")};


function scroll(panel){    
    if(window.location.pathname != "/competences"){
        window.location ="/competences";
        window.onload = chooseScrollDistance(panel);
        
    }else{
        chooseScrollDistance(panel);
    }    
}

function chooseScrollDistance(panel){
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    
    switch(panel){
        case "one":
            $('html, body').animate({scrollTop: height*0.0}, 2000);
            break;
        case "two":
            $('html, body').animate({scrollTop: height*0.195}, 2000);
            break;
        case "three":
            $('html, body').animate({scrollTop: height*0.39}, 2000);
            break;
        case "four":
            $('html, body').animate({scrollTop: height*0.575}, 2000);
            break;
    }

}