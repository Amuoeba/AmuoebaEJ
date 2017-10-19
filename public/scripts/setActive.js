
var toActivate = activePage.match("/[a-zA-Z]*")[0];
var active = document.getElementById(toActivate);
console.log(activePage);
if(active){
    if(!active.classList.contains("active")){    
        active.className += " active";
    }
}	