function OnLoad(){
    document.getElementById("loaderLayer").style.animation = "FadeOut 1s linear";
    document.getElementById("mainLayer").style.animation = "FadeIn 1s linear";
    setTimeout(SetActiveLayer, 1000);
}

function SetActiveLayer(){
    document.getElementById("loaderLayer").style.display = "none";
    document.getElementById("mainLayer").style.display = "block";
}

function OpenGames(){
    window.location.href = "games.html";
}

function BackToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function OpenServerStatus(){
    window.location.href = "serverStatus.html";
}