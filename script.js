document.getElementById("on").addEventListener("click" ,function(){
    let image = document.getElementById("image");
    let background = document.querySelector("body");
    let lightthime = document.getElementById("lightTitle")
    background.style.backgroundImage = "url(images/skyblue.jpg)";
    background.style.backgroundSize = "cover";
    background.style.backgroundRepeat = "no-repeat";
    background.style.backgroundPosition = "center";
    image.src = "images/th.jpg";
    lightthime.innerHTML = "Light On";
    lightthime.style.color = "black";

})
document.getElementById("off").addEventListener("click" ,function(){
    let image = document.getElementById("image");
    let background = document.querySelector("body");
    let lightthime = document.getElementById("lightTitle")
    background.style.backgroundImage = "url(images/skydark.jpg)";
    background.style.backgroundSize = "cover";
    background.style.backgroundRepeat = "no-repeat";
    background.style.backgroundPosition = "center";
    image.src = "images/teh.jpg";
    lightthime.innerHTML = "Light Off";
    lightthime.style.color = "white";
})
