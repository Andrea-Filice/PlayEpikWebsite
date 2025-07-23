let downloadLink;

function Load() {FetchLatestVersion();}

function ShowOS(osName){
    //VARIABLES
    const OS = {
        Windows: document.getElementById("Windows"),
        MacOS: document.getElementById("MacOS"),
        Linux: document.getElementById('Linux')
    }

    const extMap = {
        Windows: "exe",
        MacOS: "dmg",
        Linux: "AppImage"
    }

    Object.entries(OS).forEach(([name, e]) =>{
        e.style.display = (name === osName) ? "block" : "none";
    });

    if(extMap[osName])
        downloadLink = `Play-Epik-Inc/Taskify-Business/releases/download/v${version}/Taskify-Business-Setup-${version}.${extMap[osName]}`;
}

function DownloadFile() {window.location.href = `https://github.com/${downloadLink}`;}
function OpenGitHubLink(link) {window.location.href = `https://github.com/Play-Epik-Inc/${link}`}
function updateVersion(value, id){document.getElementById(id).innerHTML = `Latest version: ${value}`}

function FetchLatestVersion(){
    fetch('https://playepikservercontents.netlify.app/dependecies/dependecies.json')
    .then(response => response.json())
        .then(data => {
            updateVersion(data.versionTaskify, 'latest');
            updateVersion(data.versionDependeciesInstaller, 'versionDI');
        })
}