var scrollToReleaseNotes = false;

function OnLoad(){
    document.getElementById("loaderLayer").style.animation = "FadeOut 1s linear";
    document.getElementById("mainLayer").style.animation = "FadeIn 1s linear";
    setTimeout(SetActiveLayer, 1000);
}

function SetActiveLayer(){
    const scrollToReleaseNotes = sessionStorage.getItem("scrollToReleaseNotes") === "true";
    document.getElementById("loaderLayer").style.display = "none";
    document.getElementById("mainLayer").style.display = "block";
    if (scrollToReleaseNotes) {
        document.getElementById("release").scrollIntoView({ behavior: "smooth" });
        sessionStorage.removeItem("scrollToReleaseNotes")
    }
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

//OPEN RELEASE NOTES


function OpenCourseOfDeathRN(){
    sessionStorage.setItem("scrollToReleaseNotes", "true");
    window.location.href = "courseOfDeath.html";
}

function OpenSquareRoyaleRN(){
    sessionStorage.setItem("scrollToReleaseNotes", "true");
    window.location.href = "squareRoyale.html";
}