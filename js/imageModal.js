let gameName;
let images = []
let currentIndex = 0;
const modal = document.getElementById("modal");
const imgModal = document.getElementById("imgModal");
const openModalBtn = document.getElementById("openModal");
const closeModal = document.getElementsByClassName("close")[0];

function load(game){
    gameName = game;
    images = [
        "img/" + gameName + "Images/Img1.webp",
        "img/" + gameName + "Images/Img2.webp",
        "img/" + gameName + "Images/Img3.webp",
        "img/" + gameName + "Images/Img4.webp"
    ];
}

function showSlide(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    currentIndex = index;
    imgModal.src = images[currentIndex];
    if(gameName == "CodeUnlocker"){
        imgModal.style.width = "330px";
        imgModal.style.height = "565px";
    }
}

function showModal(index) {
    if(window.screen.width > 600){
        modal.style.opacity = "0%";
        modal.style.display = "flex";
        modal.style.animation = "FadeIn 500ms forwards";
    }
    else
        modal.style.display = "none";
    showSlide(index);
};

closeModal.onclick = function() {
    modal.style.animation = "FadeOut 500ms forwards"
    setTimeout(() =>{
        modal.style.display = "none";
    }, 1000);
};

function changeSlide(n) {
    showSlide(currentIndex + n);
}

modal.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}