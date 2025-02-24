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
    window.location.href = "https://serverstatus-playepik.netlify.app/";
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

function OpenX(){
    window.location.href = "https://x.com/play_epikinc";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopBtn.style.display = "block";
        backToTopBtn.style.animation = "animationIn 0.5s linear forwards";
    } else {
        backToTopBtn.style.animation = "animationOut 0.5s linear forwards";
    }
}