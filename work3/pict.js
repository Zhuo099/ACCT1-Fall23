const btn1 = document.getElementById("btn1");
const Image1 = document.getElementById("Image1");


const btn2 = document.getElementById("btn2");
const Image2 = document.getElementById("Image2")

const btn3 = document.getElementById("btn3");
const Image3 = document.getElementById("Image3")

const btn4 = document.getElementById("btn4");
const Image5 = document.getElementById("Image5")

btn1.addEventListener("click", function(){
    Image1.style.display = "block";
    Image2.style.display = "none";
    Image3.style.display = "none";
    Image5.style.display = "none";
})

btn2.addEventListener("click", function(){
    Image1.style.display = "none";
    Image2.style.display = "block";
    Image3.style.display = "none";
    Image5.style.display = "none";
})

btn3.addEventListener("click", function(){
    Image1.style.display = "none";
    Image2.style.display = "none";
    Image3.style.display = "block";
    Image5.style.display = "none";
})

btn4.addEventListener("click", function(){
    Image1.style.display = "none";
    Image2.style.display = "none";
    Image3.style.display = "none";
    Image5.style.display = "block";
})
