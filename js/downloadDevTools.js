let versionTaskify, downloadLink;

function Load() {
    FetchLatestVersion();

    //HASH LOCATIONS
    setTimeout(() => {
            const di = document.getElementById('dependenciesInstaller');
            const taskify = document.getElementById('taskify');

            if (window.location.hash === '#taskifyBusiness' && taskify) {
                taskify.scrollIntoView({ behavior: 'smooth' });
            }
            if (window.location.hash === '#dependenciesInstaller' && di) {
                di.scrollIntoView({ behavior: 'smooth' });
            }
    }, 1000)
}

function ShowOS(osName){
    //VARIABLES
    const OS = {
        Windows: document.getElementById("Windows"),
        MacOS: document.getElementById("MacOS"),
        Linux: document.getElementById('Linux')
    }

    Object.entries(OS).forEach(([name, e]) =>{
        e.style.display = (name === osName) ? "block" : "none";
    });

    switch(osName){
        case "Windows":
            downloadLink = `Andrea-Filice/Taskify-Business/releases/download/v${versionTaskify}/TaskifyBusiness-${versionTaskify}-x64.exe`;
            break;
        case "MacOS":
            downloadLink = `Andrea-Filice/Taskify-Business/releases/download/v${versionTaskify}/Taskify-Business-${versionTaskify}.dmg`;
            break;
        case "Linux":
            downloadLink = `Andrea-Filice/Taskify-Business/releases/download/v${versionTaskify}/TaskifyBusiness-${versionTaskify}-amd64.deb`;
            break;
    }
}

function DownloadFile() {window.location.href = `https://github.com/${downloadLink}`;}
function OpenGitHubLink(link) {window.location.href = `https://github.com/Andrea-Filice/${link}`}
function updateVersion(value, id){document.getElementById(id).innerHTML = `Latest version: ${value}`}

function FetchLatestVersion(){
    fetch('https://playepikservercontents.netlify.app/dependencies/dependencies.json')
    .then(response => response.json())
        .then(data => {
            updateVersion(data.versionTaskify, 'latest');
            versionTaskify = data.versionTaskify;
            updateVersion(data.versionDependenciesInstaller, 'versionDI');
        })
}

function FetchMoreDownloads() {window.location.href = `https://github.com/Andrea-Filice/Taskify-Business/releases/tag/v${versionTaskify}`;}