document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (scrollPosition >= 400) {
    document.getElementById("counter").style.animation = "counter 3s forwards";
    document.getElementById("counter2").style.animation = "counter2 3s forwards";
  }
  if(scrollPosition >= 1200){
    document.getElementById("counter3").style.animation = "counter3 3s forwards";
    document.getElementById("counter5").style.animation = "counter5 3s forwards";
  }
  if(scrollPosition >= 2000){
    document.getElementById("counter4").style.animation = "counter4 3s forwards"; 
  }
});