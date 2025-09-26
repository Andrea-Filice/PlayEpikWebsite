try{
  fetch('https://playepikservercontents.netlify.app/dependencies/dependencies.json')
  .then(response => response.json())
        .then(data => {
          document.getElementById('unity').innerText = "Unity Engine v6.1: (" + data.versionUnity + ")";
        })
}
catch (error) {document.getElementById('unity').innerText = "Unity Engine v6.1: (Error retrieving data: " + error + ").";}