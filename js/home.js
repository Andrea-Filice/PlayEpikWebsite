function OnLoad() {
    document.getElementById("loaderLayer").style.animation = "FadeOut 0.5s linear forwards";
    document.getElementById("mainLayer").style.animation = "FadeIn 0.5s linear forwards";
    setTimeout(() => {
        document.getElementById("loaderLayer").style.display = "none";
        document.getElementById("mainLayer").style.display = "block";
        setTimeout(() => {
            //LOCAL VARIABLES
            const creditsSection = document.getElementById('credits');
            const moreHelpSection = document.getElementById('morehelp');
            const releaseNotesSection = document.getElementById('release');
            const DIsection = document.getElementById('dependenciesInstaller');

            const map = [
                {id: "#credits", obj: creditsSection},
                {id: "#morehelp", obj: moreHelpSection},
                {id: "#releasenotes", obj: releaseNotesSection},
                {id:"#dependenciesInstaller", obj: DIsection}
            ]

            map.forEach(({id, obj}) => {
                if(window.location.hash == id){
                    if(obj)
                        obj.scrollIntoView({ behavior: 'smooth' });
                }
            })
        }, 100)
    }, 500);
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

function BackToTop() {window.scrollTo({ top: 0, behavior: 'smooth' });}
function OpenServerStatus() {window.location.href = "https://serverstatus-playepik.netlify.app/";}
function OpenReleaseNotes(link){window.location.href = link + "#releasenotes";}
function OpenDevsPage(section){window.location.href = "developers#" + section;}

window.onscroll = () => {
    //VARIABLES
    const backToTopBtn = document.getElementById("backToTopBtn");
    const article1 = document.getElementById("article1");
    const article2 = document.getElementById("article2");
    const article3 = document.getElementById("article3");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollTop > 500) {
        backToTopBtn.style.display = "block";
        backToTopBtn.style.animation = "animationIn 0.5s linear forwards";
    } else 
        backToTopBtn.style.animation = "animationOut 0.5s linear forwards";

    if (scrollTop > 400 && article1) 
        article1.style.animation = "scaleIn 0.7s forwards";
    if (scrollTop > 600 && article2) 
        article2.style.animation = "scaleIn 0.7s forwards";
    if (scrollTop > 800 && article3) 
        article3.style.animation = "scaleIn 0.7s forwards";
};

function toggleVideoPlayback(value){
    const video = document.getElementById('mainVideo');
    const playButton = document.getElementById("playBtn")
    const pauseButton = document.getElementById("pauseBtn")

    if(value)
        video.play();
    else
        video.pause();

    playButton.style.display = (value) ? "none" : "block";
    pauseButton.style.display = (value) ? "block" : "none";
}