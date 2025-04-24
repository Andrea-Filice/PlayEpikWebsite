let scrollToReleaseNotes = false;

function OnLoad() {
    document.getElementById("loaderLayer").style.animation = "FadeOut 1s linear forwards";
    document.getElementById("mainLayer").style.animation = "FadeIn 1s linear forwards";
    setTimeout(() => {
        const scrollToReleaseNotes = sessionStorage.getItem("scrollToReleaseNotes") === "true";
        document.getElementById("loaderLayer").style.display = "none";
        document.getElementById("mainLayer").style.display = "block";
        setTimeout(() => {
            if (window.location.hash === '#credits') {
                const creditsSection = document.getElementById('credits');
                if (creditsSection) {
                  creditsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            if (window.location.hash === '#morehelp') {
                const creditsSection = document.getElementById('morehelp');
                if (creditsSection) {
                  creditsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 100) //WAIT FOR THE PAGE TO LOAD COMPLETELY
        if (scrollToReleaseNotes) {
            document.getElementById("release").scrollIntoView({ behavior: "smooth" });
            sessionStorage.removeItem("scrollToReleaseNotes");
        }
    }, 1000);
    const seeMoreButtons = document.querySelectorAll('.seeMore');
    seeMoreButtons.forEach(button => {
        button.addEventListener('mouseleave', () => {
            button.style.animation = 'AnimationButtonOff 200ms forwards';
        });
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'AnimationButtonOn 500ms forwards';
        });
    });
}

function BackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function OpenServerStatus() {
    window.location.href = "https://serverstatus-playepik.netlify.app/";
}

function OpenReleaseNotes(link){
    sessionStorage.setItem("scrollToReleaseNotes", "true");
    window.location.href = link;
}

window.onscroll = () => {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopBtn.style.display = "block";
        backToTopBtn.style.animation = "animationIn 0.5s linear forwards";
    } else {
        backToTopBtn.style.animation = "animationOut 0.5s linear forwards";
    }
    if(document.body.scrollTo > 400 || document.documentElement.scrollTop > 400 && document.getElementById("article1") != null){
        document.getElementById("article1").style.animation = "scaleIn 0.5s forwards";
    }
    if(document.body.scrollTo > 600 || document.documentElement.scrollTop > 600 && document.getElementById("article2") != null){
        document.getElementById("article2").style.animation = "scaleIn 0.5s forwards";
    }
};