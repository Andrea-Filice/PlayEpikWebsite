let downloadLink = "";
let version = "1.0.0";

function Load() {FetchLatestVersion();}

function showOS(osName){

    const windows = document.getElementById("Windows");
    const macOS = document.getElementById("MacOS");
    const linux = document.getElementById("Linux");

    switch(osName){
        case 'Windows':
            windows.style.display = "block";
            macOS.style.display = "none";
            linux.style.display = "none";
            windows.scrollIntoView({behavior: "smooth"})
            downloadLink = "Play-Epik-Inc/Taskify-Business/releases/download/v" + version + "/Taskify-Business-Setup-" + version + ".exe";
            break;
        case 'MacOS':
            windows.style.display = "none";
            macOS.style.display = "block";
            linux.style.display = "none";
            macOS.scrollIntoView({behavior: "smooth"})
            downloadLink = "Play-Epik-Inc/Taskify-Business/releases/download/v" + version + "/Taskify-Business-" + version + ".dmg"
            break;
        case 'Linux':
            windows.style.display = "none";
            macOS.style.display = "none";
            linux.style.display = "block";
            linux.scrollIntoView({behavior: "smooth"})
            downloadLink = "Play-Epik-Inc/Taskify-Business/releases/download/v" + version + "/Taskify-Business-" + version + ".AppImage";
            break;
    }
}

function DownloadFile() {window.location.href = "https://github.com/" + downloadLink;}

function OpenRepository() {window.location.href = "https://github.com/Play-Epik-Inc/Taskify-Business";}

function OpenLicense() {window.location.href = "https://github.com/Play-Epik-Inc/Taskify-Business/blob/main/LICENSE";}

function FetchLatestVersion(){
    fetch('https://playepikservercontents.netlify.app/dependecies/dependecies.json')
    .then(response => response.json())
        .then(data => {
            version = data.versionTaskify;
        })
    document.getElementById('latest').innerHTML = `Latest version: ${version}`
}