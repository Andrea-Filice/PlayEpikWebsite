fetch('https://playepikservercontents.netlify.app/dependencies/dependencies.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    const unityElement = document.getElementById('unity');
    if (unityElement) {
      const version = data.versionUnity || "N/A";
      unityElement.innerText = "Unity Engine v6.3: (" + version + ")";
    }
  })
  .catch(error => {
    const unityElement = document.getElementById('unity');
    if (unityElement) {
      unityElement.innerText = "Unity Engine v6.3: (Error retrieving data).";
    }
    console.error("Fetch error:", error);
  });