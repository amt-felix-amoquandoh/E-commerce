 const mobileMenu = document.getElementById("mobileMenu");
 const navMenuItems = document.getElementById("navItems");
 const navMenuClose = document.getElementById("mobileMenuClose");


 if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
        navMenuItems.classList.add("active");
        mobileMenu.style.display = "none"
        navMenuClose.style.display = "flex"
        // navMenuClose.addEventListener("click", () => {
        //     navMenuItems.classList.add("hide");
        //     navMenuClose.style.display = "none"
        //     mobileMenu.style.display = "flex"
        // })
    })    
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