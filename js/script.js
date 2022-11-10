 const mobileMenu = document.getElementById("mobileMenu");
 const navMenuItems = document.getElementById("navItems");
 const navMenuClose = document.getElementById("mobileMenuClose");
 const shopICon = document.querySelector(".mobileNav");
 const shopBagde = document.querySelector(".cartBox")


 if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
        navMenuItems.classList.add("active");
        mobileMenu.style.display = "none";
        shopICon.style.display = "none";
        shopBagde.style.display = "none";
        navMenuClose.style.display = "flex"; 
    })    
 }


 if (navMenuClose) {
  navMenuClose.addEventListener("click", () => {
       navMenuItems.classList.remove("active");
       mobileMenu.style.display = "flex" 
       shopICon.style.display = "flex";      
     })
 }


// Shop Items Js Implementation //
let mainImage = document.getElementById("mainProduct");
let smallerImage = document.getElementsByClassName("typesImg");

smallerImage[0].onclick = function(){
  mainImage.src = smallerImage[0].src;
}
smallerImage[1].onclick = function(){
  mainImage.src = smallerImage[1].src;
}
smallerImage[2].onclick = function(){
  mainImage.src = smallerImage[2].src;
}
smallerImage[3].onclick = function(){
  mainImage.src = smallerImage[3].src;
}















// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}