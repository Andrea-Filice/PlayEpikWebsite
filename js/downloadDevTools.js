let downloadLink;
let version = "1.0.0";

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

    if(OS[osName])
        OS[osName].scrollIntoView({behavior: "smooth"});

    if(extMap[osName])
        downloadLink = `Play-Epik-Inc/Taskify-Business/releases/download/v${version}/Taskify-Business-Setup-${version}.${extMap[osName]}`;
}

function DownloadFile() {window.location.href = `https://github.com/${downloadLink}`;}
function OpenRepository() {window.location.href = "https://github.com/Play-Epik-Inc/Taskify-Business";}
function OpenLicense() {window.location.href = "https://github.com/Play-Epik-Inc/Taskify-Business/blob/main/LICENSE";}
function updateVersion(value){document.getElementById('latest').innerHTML = `Latest version: ${value}`}

function FetchLatestVersion(){
    fetch('https://playepikservercontents.netlify.app/dependecies/dependecies.json')
    .then(response => response.json())
        .then(data => {
            version = data.versionTaskify;
            updateVersion(data.versionTaskify);
        })
}