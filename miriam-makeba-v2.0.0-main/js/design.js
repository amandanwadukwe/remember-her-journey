// const themeController = document.getElementsByClassName("theme-controller");
// console.log(themeController)
// const container1 =document.getElementsByClassName("container1")[0];
// themeController.addEventListener('click', () => {
//     container1.style.background.value = "var(--primary)";
// })


function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}


var redCircle = document.getElementById("red-circle");
var functionalImg = document.getElementById("functional-img");
    
window.addEventListener("scroll", function() {
    const beadSound = document.getElementById("beadSound");
    beadSound.play();
    redCircle.style.transform = "rotate("+(window.pageYOffset /8)+"deg)";
    redCircle.style.transition="transform .5s linear";
    functionalImg.style.transform = "rotate(" +(-window.pageYOffset/4)+ "deg)";
    // redCircle.style.transform = "rotate("+(window.pageYOffset - 10)+"deg)";
});