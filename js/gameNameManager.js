const params = new URLSearchParams(window.location.search);
let gameParam = params.get("game");

function SetGameName(gameName){
    sessionStorage.setItem("GameName", gameName);
    window.location.href = "thirdPartySoftwares.html";
}

function GetGameName(){
    if(!sessionStorage.getItem("GameName"))
        GetGameNameFromURL();
    else{
        document.getElementById("mainTitle").innerHTML = sessionStorage.getItem("GameName") + " uses the following third party components which are subject to separate license terms as set out below:"
        sessionStorage.removeItem("GameName");
    }
}

function GetGameNameFromURL(){
    let gameName = "";

    if(gameParam){
        const map = {
            courseofdeath: "Course Of Death",
            squareroyale: "Square Royale"
        }
        gameName = map[gameName] || gameParam.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, l => l.toUpperCase()); 
        switch(gameName){
            case 'Courseofdeath':
                document.getElementById("mainTitle").innerHTML = "Course Of Death uses the following third party components which are subject to separate license terms as set out below:"; break;
            case 'Squareroyale':
                document.getElementById("mainTitle").innerHTML = "Square Royale uses the following third party components which are subject to separate license terms as set out below:"; break;
        }
    }
    else
        document.getElementById("mainTitle").innerHTML = "This game uses the following third party components which are subject to separate license terms as set out below:";
}