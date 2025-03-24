fetch('dependecies/dependecies.json')
.then(response => response.json())
      .then(data => {
        const version = data.versionUnity;
        document.getElementById('unity').innerText = "Unity Engine v6: (" + version + ")";
      })
      .catch(error => console.error('Network error', error));