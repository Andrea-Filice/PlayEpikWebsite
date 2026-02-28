//*INITIALIZE VARIABLES
///In this part of the code, we initialize some variables that we will use later.
const unityElement = document.getElementById('unity');

//*FETCH FROM CDN
///In this section of the code, we fetch the datas from our CDN website.
fetch('https://cdn-playepik.netlify.app/dependencies/dependencies.json')
  .then(response => {
    if (!response.ok)
      throw new Error("HTTP error " + response.status);

    return response.json();
  })
  .then(data => {
    if (unityElement) {
      var version = data.versionUnity || "N/A";
      unityElement.innerText = "Unity Engine v6.3: (" + version + ")";
    }
  })
  .catch(error => {
    if (unityElement) 
      unityElement.innerText = "Unity Engine v6.3: N/A.";
  });
