try{
  fetch('https://playepikservercontents.netlify.app/dependecies/dependecies.json')
  .then(response => response.json())
        .then(data => {
          const version = data.versionUnity;
          document.getElementById('unity').innerText = "Unity Engine v6.1: (" + version + ")";
        })
}
catch (error) {document.getElementById('unity').innerText = "Unity Engine v6.1: (Error retrieving data)";}